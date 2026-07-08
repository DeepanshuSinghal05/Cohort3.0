const loginPage = document.querySelector('#login-page')
const registerPage = document.querySelector('#register-page')
const dashboardPage = document.querySelector('#dashboard-page')

const loginForm = document.querySelector('#login-form')
const registerForm = document.querySelector('#register-form')
const showRegisterLink = document.querySelector('#show-register')
const showLoginLink = document.querySelector('#show-login')

const dashboardSection = document.querySelector('#dashboard-section')
const settingsSection = document.querySelector('#settings-section')
const navDashboard = document.querySelector('#nav-dashboard')
const navSettings = document.querySelector('#nav-settings')
const logoutBtn = document.querySelector('#logout-btn')
const topbarUsername = document.querySelector('#topbar-username')

const addBtn = document.querySelector('#add-transaction-btn')
const modal = document.querySelector('#transaction-modal')
const closeModalBtn = document.querySelector('#close-modal')
const form = document.querySelector('#transaction-form')
const modalTitle = document.querySelector('#modal-title')

const searchInput = document.querySelector('#search-input')
const filterType = document.querySelector('#filter-type')
const tbody = document.querySelector('#transactions-body')

const darkModeToggle = document.querySelector('#dark-mode-toggle')
const resetBtn = document.querySelector('#reset-data-btn')

const settingsNameInput = document.querySelector('#settings-name')
const settingsCurrencyInput = document.querySelector('#settings-currency')
const saveSettingsBtn = document.querySelector('#save-settings-btn')

let updateIndex = null
let transactionsArr = []
let settings = {}
let chart = null

// FORM Handling 

showRegisterLink.addEventListener('click',(e)=>{
    e.preventDefault()
    loginPage.style.display = 'none'
    registerPage.style.display = 'flex'
})

showLoginLink.addEventListener('click',(e)=>{
    e.preventDefault()
    registerPage.style.display = 'none'
    loginPage.style.display = 'flex'
})

registerForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    let username = document.querySelector('#new-username').value
    let password = document.querySelector('#new-password').value

    if(username.trim() === '' || password.trim() === ''){
        alert('Please fill all the fields')
        return
    }

    let users = JSON.parse(localStorage.getItem('users')) || []

    let alreadyExists = users.find((u)=> u.username === username)

    if(alreadyExists){
        alert('Username already taken')
        return
    }

    users.push({username,password})
    localStorage.setItem('users', JSON.stringify(users))

    alert('Account created! Please login')
    registerForm.reset()
    registerPage.style.display = 'none'
    loginPage.style.display = 'flex'
})

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value

    if(username.trim() === '' || password.trim() === ''){
        alert('Please fill all the fields')
        return
    }

    let users = JSON.parse(localStorage.getItem('users')) || []
    let user = users.find((u)=> u.username === username && u.password === password)

    if(!user){
        alert('Invalid username or password')
        return
    }

    localStorage.setItem('loggedInUser', username)
    loginForm.reset()
    goToDashboard()
})

logoutBtn.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUser')
    dashboardPage.style.display = 'none'
    loginPage.style.display = 'flex'
})

const goToDashboard = ()=>{
    let loggedInUser = localStorage.getItem('loggedInUser')

    loginPage.style.display = 'none'
    registerPage.style.display = 'none'
    dashboardPage.style.display = 'block'

    transactionsArr = JSON.parse(localStorage.getItem(`transactions_${loggedInUser}`)) || []
    settings = JSON.parse(localStorage.getItem(`settings_${loggedInUser}`)) || { name: loggedInUser, currency: '$' }

    topbarUsername.textContent = settings.name
    settingsNameInput.value = settings.name
    settingsCurrencyInput.value = settings.currency

    let darkMode = localStorage.getItem('darkMode') === 'true'
    darkModeToggle.checked = darkMode
    document.body.classList.toggle('dark', darkMode)

    renderAll()
}

// Dashboard Nav 

navDashboard.addEventListener('click',(e)=>{
    e.preventDefault()
    dashboardSection.style.display = 'block'
    settingsSection.style.display = 'none'
    navDashboard.classList.add('active')
    navSettings.classList.remove('active')
})

navSettings.addEventListener('click',(e)=>{
    e.preventDefault()
    settingsSection.style.display = 'block'
    dashboardSection.style.display = 'none'
    navSettings.classList.add('active')
    navDashboard.classList.remove('active')
})

// Transactions 

const saveTransactions = ()=>{
    let loggedInUser = localStorage.getItem('loggedInUser')
    localStorage.setItem(`transactions_${loggedInUser}`, JSON.stringify(transactionsArr))
}

const renderStats = ()=>{
    let income = 0
    let expense = 0

    transactionsArr.forEach((t)=>{
        if(t.type === 'income'){
            income += Number(t.amount)
        }
        else{
            expense += Number(t.amount)
        }
    })

    let balance = income - expense
    let c = settings.currency

    document.querySelector('#stat-balance').textContent = `${c}${balance.toFixed(2)}`
    document.querySelector('#stat-income').textContent = `${c}${income.toFixed(2)}`
    document.querySelector('#stat-expense').textContent = `${c}${expense.toFixed(2)}`
    document.querySelector('#stat-count').textContent = transactionsArr.length
}

const renderTable = ()=>{
    tbody.innerHTML = ''

    let search = searchInput.value.toLowerCase()
    let type = filterType.value

    transactionsArr.forEach((t,index)=>{

        if(type !== 'all' && t.type !== type){
            return
        }

        if(search !== '' && !t.description.toLowerCase().includes(search) && !t.category.toLowerCase().includes(search)){
            return
        }

        let amountClass = t.type === 'income' ? 'green-text' : 'red-text'
        let sign = t.type === 'income' ? '+' : '-'

        tbody.innerHTML += `<tr>
            <td>${t.date}</td>
            <td>${t.description}</td>
            <td>${t.category}</td>
            <td class="${amountClass}">${sign}${settings.currency}${Number(t.amount).toFixed(2)}</td>
            <td>
                <span onclick="editTransaction(${index})" class="action-icon">✎</span>
                <span onclick="deleteTransaction(${index})" class="action-icon">🗑</span>
            </td>
        </tr>`
    })
}

const renderChart = ()=>{
    let ctx = document.querySelector('#cashflow-chart')

    let income = transactionsArr.filter((t)=> t.type === 'income').reduce((sum,t)=> sum + Number(t.amount), 0)
    let expense = transactionsArr.filter((t)=> t.type === 'expense').reduce((sum,t)=> sum + Number(t.amount), 0)

    if(chart){
        chart.destroy()
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Income vs Expenses'],
            datasets: [
                {
                    label: 'Income',
                    data: [income],
                    backgroundColor: '#16a34a'
                },
                {
                    label: 'Expenses',
                    data: [expense],
                    backgroundColor: '#dc2626'
                }
            ]
        },
        options: {
            responsive: true
        }
    })
}

const renderAll = ()=>{
    renderStats()
    renderTable()
    renderChart()
}

addBtn.addEventListener('click',()=>{
    updateIndex = null
    modalTitle.textContent = 'Add Transaction'
    form.reset()
    document.querySelector('#date-input').value = new Date().toISOString().split('T')[0]
    modal.style.display = 'flex'
})

closeModalBtn.addEventListener('click',()=>{
    modal.style.display = 'none'
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let type = document.querySelector('#type-input').value
    let description = document.querySelector('#desc-input').value
    let amount = document.querySelector('#amount-input').value
    let date = document.querySelector('#date-input').value
    let category = document.querySelector('#category-input').value

    if(description.trim() === '' || amount.trim() === '' || date.trim() === '' || category.trim() === ''){
        alert('Please fill all the fields')
        return
    }

    let obj = { type, description, amount, date, category }

    if(updateIndex !== null){
        transactionsArr[updateIndex] = obj
        updateIndex = null
    }
    else{
        transactionsArr.push(obj)
    }

    saveTransactions()
    renderAll()

    form.reset()
    modal.style.display = 'none'
})

const editTransaction = (index)=>{
    let t = transactionsArr[index]
    updateIndex = index

    modalTitle.textContent = 'Edit Transaction'
    document.querySelector('#type-input').value = t.type
    document.querySelector('#desc-input').value = t.description
    document.querySelector('#amount-input').value = t.amount
    document.querySelector('#date-input').value = t.date
    document.querySelector('#category-input').value = t.category

    modal.style.display = 'flex'
}

const deleteTransaction = (index)=>{
    transactionsArr.splice(index,1)
    saveTransactions()
    renderAll()
}

searchInput.addEventListener('input', renderTable)
filterType.addEventListener('change', renderTable)

darkModeToggle.addEventListener('change',()=>{
    document.body.classList.toggle('dark')
    localStorage.setItem('darkMode', darkModeToggle.checked)
})

resetBtn.addEventListener('click',()=>{
    let sure = confirm('Are you sure you want to delete all data?')

    if(sure){
        transactionsArr = []
        saveTransactions()
        renderAll()
    }
})

saveSettingsBtn.addEventListener('click',()=>{
    let loggedInUser = localStorage.getItem('loggedInUser')

    settings.name = settingsNameInput.value
    settings.currency = settingsCurrencyInput.value
    localStorage.setItem(`settings_${loggedInUser}`, JSON.stringify(settings))
    topbarUsername.textContent = settings.name
    renderAll()
    alert('Settings saved')
})



if(localStorage.getItem('loggedInUser')){
    goToDashboard()
}
