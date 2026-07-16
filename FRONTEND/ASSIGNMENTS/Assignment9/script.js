
const viewMeta = {
    home: { title: 'Overview', subtitle: "Here's how your day is shaping up" },
    todo: { title: 'Todo List', subtitle: 'Manage your daily tasks' },
    planner: { title: 'Daily Planner', subtitle: 'Plan your day hour by hour' },
    motivation: { title: 'Motivation', subtitle: 'A little inspiration for today' },
    pomodoro: { title: 'Pomodoro Timer', subtitle: 'Stay focused in sessions' },
    goals: { title: 'Daily Goals', subtitle: "Track today's wins" }
}

const pageTitle = document.querySelector('#page-title')
const pageSubtitle = document.querySelector('#page-subtitle')

const switchView = (viewName)=>{
    document.querySelectorAll('.view').forEach((v)=>{ v.classList.remove('active') })
    document.querySelector(`#${viewName}-view`).classList.add('active')

    document.querySelectorAll('.nav-link').forEach((n)=>{ n.classList.remove('active') })
    let navLink = document.querySelector(`.nav-link[data-view="${viewName}"]`)
    if(navLink){
        navLink.classList.add('active')
    }

    pageTitle.textContent = viewMeta[viewName].title
    pageSubtitle.textContent = viewMeta[viewName].subtitle
}

document.querySelectorAll('[data-view]').forEach((el)=>{
    el.addEventListener('click',(e)=>{
        e.preventDefault()
        switchView(el.dataset.view)
    })
})




const todoInput = document.querySelector('#todo-input')
const addTodoBtn = document.querySelector('#add-todo-btn')
const todoList = document.querySelector('#todo-list')
const pendingTodosEl = document.querySelector('#pending-todos')

let todosArr = JSON.parse(localStorage.getItem('todos')) || []

const saveTodos = ()=>{
    localStorage.setItem('todos', JSON.stringify(todosArr))
}

const renderTodos = ()=>{
    if(todosArr.length === 0){
        todoList.innerHTML = `<li class="empty-state">No tasks yet — add one above!</li>`
    }
    else{
        let rowsHtml = ''

        todosArr.forEach((task)=>{
            let classes = (task.completed ? 'completed ' : '') + (task.important ? 'important' : '')

            rowsHtml += `<li class="${classes}">
                <span class="todo-text">${task.text}</span>
                <div class="todo-actions">
                    <button class="important-btn" data-id="${task.id}">⭐</button>
                    <button class="complete-btn" data-id="${task.id}">✔</button>
                    <button class="delete-btn" data-id="${task.id}">🗑</button>
                </div>
            </li>`
        })

        todoList.innerHTML = rowsHtml
    }

    pendingTodosEl.textContent = todosArr.filter((t)=> !t.completed).length
}

const addTodo = ()=>{
    let text = todoInput.value

    if(text.trim() === ''){
        alert('Please enter a task')
        return
    }

    todosArr.push({ id: Date.now(), text, completed: false, important: false })
    saveTodos()
    renderTodos()
    todoInput.value = ''
}

addTodoBtn.addEventListener('click', addTodo)

todoInput.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        addTodo()
    }
})

todoList.addEventListener('click',(e)=>{
    let id = Number(e.target.dataset.id)

    if(!id){
        return
    }

    if(e.target.classList.contains('important-btn')){
        let task = todosArr.find((t)=> t.id === id)
        task.important = !task.important
    }
    else if(e.target.classList.contains('complete-btn')){
        let task = todosArr.find((t)=> t.id === id)
        task.completed = !task.completed
    }
    else if(e.target.classList.contains('delete-btn')){
        todosArr = todosArr.filter((t)=> t.id !== id)
    }
    else{
        return
    }

    saveTodos()
    renderTodos()
})



const goalInput = document.querySelector('#goal-input')
const addGoalBtn = document.querySelector('#add-goal-btn')
const goalList = document.querySelector('#goal-list')
const goalProgress = document.querySelector('#goal-progress')
const goalProgressFill = document.querySelector('#goal-progress-fill')
const goalsDoneEl = document.querySelector('#goals-done')

let goalsArr = JSON.parse(localStorage.getItem('goals')) || []

const saveGoals = ()=>{
    localStorage.setItem('goals', JSON.stringify(goalsArr))
}

const renderGoals = ()=>{
    if(goalsArr.length === 0){
        goalList.innerHTML = `<li class="empty-state">No goals yet — add one above!</li>`
    }
    else{
        let rowsHtml = ''

        goalsArr.forEach((goal)=>{
            let classes = goal.completed ? 'completed' : ''

            rowsHtml += `<li class="${classes}">
                <span class="todo-text">${goal.text}</span>
                <div class="todo-actions">
                    <button class="complete-btn" data-id="${goal.id}">✔</button>
                    <button class="delete-btn" data-id="${goal.id}">🗑</button>
                </div>
            </li>`
        })

        goalList.innerHTML = rowsHtml
    }

    let completedCount = goalsArr.filter((g)=> g.completed).length
    let total = goalsArr.length
    let percent = total === 0 ? 0 : (completedCount / total) * 100

    goalProgress.textContent = `${completedCount} of ${total} completed`
    goalProgressFill.style.width = `${percent}%`
    goalsDoneEl.textContent = `${completedCount}/${total}`
}

const addGoal = ()=>{
    let text = goalInput.value

    if(text.trim() === ''){
        alert('Please enter a goal')
        return
    }

    goalsArr.push({ id: Date.now(), text, completed: false })
    saveGoals()
    renderGoals()
    goalInput.value = ''
}

addGoalBtn.addEventListener('click', addGoal)

goalInput.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        addGoal()
    }
})

goalList.addEventListener('click',(e)=>{
    let id = Number(e.target.dataset.id)

    if(!id){
        return
    }

    if(e.target.classList.contains('complete-btn')){
        let goal = goalsArr.find((g)=> g.id === id)
        goal.completed = !goal.completed
    }
    else if(e.target.classList.contains('delete-btn')){
        goalsArr = goalsArr.filter((g)=> g.id !== id)
    }
    else{
        return
    }

    saveGoals()
    renderGoals()
})



const plannerSlots = document.querySelector('#planner-slots')

let plannerData = JSON.parse(localStorage.getItem('plannerData')) || {}

const plannerHours = []
for(let h = 6; h <= 22; h++){
    plannerHours.push(h)
}

const formatHourLabel = (h)=>{
    if(h === 12){
        return '12:00 PM'
    }
    if(h > 12){
        return `${h - 12}:00 PM`
    }
    return `${h}:00 AM`
}

const renderPlanner = ()=>{
    let rowsHtml = ''
    let currentHour = new Date().getHours()

    plannerHours.forEach((h)=>{
        let key = `${h}:00`
        let value = plannerData[key] || ''
        let currentClass = h === currentHour ? 'current-slot' : ''

        rowsHtml += `<div class="planner-row ${currentClass}">
            <span class="planner-time">${formatHourLabel(h)}</span>
            <input type="text" class="planner-input" data-key="${key}" value="${value}" placeholder="What's the plan?">
        </div>`
    })

    plannerSlots.innerHTML = rowsHtml
}

plannerSlots.addEventListener('input',(e)=>{
    if(!e.target.classList.contains('planner-input')){
        return
    }

    let key = e.target.dataset.key
    plannerData[key] = e.target.value
    localStorage.setItem('plannerData', JSON.stringify(plannerData))
})


const quoteText = document.querySelector('#quote-text')
const quoteAuthor = document.querySelector('#quote-author')
const newQuoteBtn = document.querySelector('#new-quote-btn')

let quotesArr = []

const fallbackQuotes = [
    { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
    { text: 'Well done is better than well said.', author: 'Benjamin Franklin' },
    { text: 'Small steps every day add up to big results.', author: 'Unknown' }
]

const showRandomQuote = ()=>{
    let list = quotesArr.length > 0 ? quotesArr : fallbackQuotes
    let random = list[Math.floor(Math.random() * list.length)]

    quoteText.textContent = random.text
    quoteAuthor.textContent = random.author ? `— ${random.author}` : '— Unknown'
}

const loadQuotes = ()=>{
    quoteText.textContent = 'Loading a quote for you...'
    quoteAuthor.textContent = ''

    fetch('https://type.fit/api/quotes')
        .then((res)=> res.json())
        .then((data)=>{
            quotesArr = data
            showRandomQuote()
        })
        .catch((err)=>{
            quotesArr = fallbackQuotes
            showRandomQuote()
        })
}

newQuoteBtn.addEventListener('click', showRandomQuote)


const sessionLabel = document.querySelector('#session-label')
const timerDisplay = document.querySelector('#timer-display')
const timerRing = document.querySelector('#timer-ring')
const startBtn = document.querySelector('#start-btn')
const pauseBtn = document.querySelector('#pause-btn')
const resetBtn = document.querySelector('#reset-btn')

const workDuration = 25 * 60
const breakDuration = 5 * 60

let timeLeft = workDuration
let isWorkSession = true
let timerInterval = null

const updateTimerDisplay = ()=>{
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60

    let minutesText = minutes < 10 ? `0${minutes}` : minutes
    let secondsText = seconds < 10 ? `0${seconds}` : seconds

    timerDisplay.textContent = `${minutesText}:${secondsText}`
    sessionLabel.textContent = isWorkSession ? 'Work Session' : 'Break Session'

    let total = isWorkSession ? workDuration : breakDuration
    let elapsed = total - timeLeft
    let percent = (elapsed / total) * 100

    timerRing.style.setProperty('--progress', percent)
}

const tickTimer = ()=>{
    timeLeft--

    if(timeLeft < 0){
        clearInterval(timerInterval)
        timerInterval = null

        isWorkSession = !isWorkSession
        timeLeft = isWorkSession ? workDuration : breakDuration

        alert(isWorkSession ? 'Break is over! Back to work.' : 'Work session done! Take a break.')
    }

    updateTimerDisplay()
}

startBtn.addEventListener('click',()=>{
    if(timerInterval){
        return
    }

    timerInterval = setInterval(tickTimer, 1000)
})

pauseBtn.addEventListener('click',()=>{
    clearInterval(timerInterval)
    timerInterval = null
})

resetBtn.addEventListener('click',()=>{
    clearInterval(timerInterval)
    timerInterval = null
    isWorkSession = true
    timeLeft = workDuration
    updateTimerDisplay()
})

const weatherIcon = document.querySelector('#weather-icon')
const weatherTemp = document.querySelector('#weather-temp')
const weatherDesc = document.querySelector('#weather-desc')

const getWeatherInfo = (code)=>{
    if(code === 0){
        return { icon: '☀️', text: 'Clear Sky' }
    }
    if(code === 1 || code === 2){
        return { icon: '🌤️', text: 'Partly Cloudy' }
    }
    if(code === 3){
        return { icon: '☁️', text: 'Cloudy' }
    }
    if(code === 45 || code === 48){
        return { icon: '🌫️', text: 'Foggy' }
    }
    if(code >= 51 && code <= 67){
        return { icon: '🌦️', text: 'Rainy' }
    }
    if(code >= 71 && code <= 77){
        return { icon: '❄️', text: 'Snowy' }
    }
    if(code >= 80 && code <= 82){
        return { icon: '🌧️', text: 'Showers' }
    }
    if(code >= 95){
        return { icon: '⛈️', text: 'Thunderstorm' }
    }
    return { icon: '⛅', text: 'Unknown' }
}

const fetchWeather = (lat, lon)=>{
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`

    fetch(url)
        .then((res)=> res.json())
        .then((data)=>{
            let info = getWeatherInfo(data.current_weather.weathercode)
            weatherIcon.textContent = info.icon
            weatherTemp.textContent = `${Math.round(data.current_weather.temperature)}°C`
            weatherDesc.textContent = info.text
        })
        .catch((err)=>{
            weatherDesc.textContent = 'Weather unavailable'
        })
}

const loadWeather = ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                fetchWeather(position.coords.latitude, position.coords.longitude)
            },
            ()=>{
                fetchWeather(28.6692, 77.4538)
            }
        )
    }
    else{
        fetchWeather(28.6692, 77.4538)
    }
}

const timeNowEl = document.querySelector('#time-now')
const dateNowEl = document.querySelector('#date-now')

const updateDateTime = ()=>{
    let now = new Date()

    let dateText = now.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    let timeText = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' })

    dateNowEl.textContent = dateText
    timeNowEl.textContent = timeText
}


const themeToggle = document.querySelector('#theme-toggle')

let isDarkMode = localStorage.getItem('theme') === 'true'
themeToggle.checked = isDarkMode
document.body.classList.toggle('dark', isDarkMode)

themeToggle.addEventListener('change',()=>{
    document.body.classList.toggle('dark')
    localStorage.setItem('theme', themeToggle.checked)
})


renderTodos()
renderGoals()
renderPlanner()
loadQuotes()
loadWeather()

updateTimerDisplay()

updateDateTime()
setInterval(updateDateTime, 1000)
