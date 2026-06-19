const createBtn = document.querySelector('#create-product')
const formDiv = document.querySelector('.form')
const closeBtn = document.querySelector('#close')
const form = document.querySelector('form')
const productDiv  =document.querySelector('.products')

let updateIndex = null
const productsArr = []

let createProduct = ()=>{
    productDiv.innerHTML = ''
    productsArr.forEach((elem,index)=>{
        productDiv.innerHTML += `        <div class="product-card">
        <div class="img">
            <img src="${elem.productURL}" alt="image not found">
        </div>
        <div class="text">
            <h3>${elem.productName}</h3>
            <p>${elem.productPrice}</p>
            <p>${elem.productDescription}</p>
        </div>
        <div class="buttons">
            <button onclick = updateProduct('${elem.productName}') id="update">Update</button>
            <button onclick = deleteProduct('${index}') id="delete">Delete</button>
        </div>
    </div>`
    })
}


createBtn.addEventListener('click',()=>{
    formDiv.style.display = 'flex'
})

closeBtn.addEventListener('click',()=>{
    formDiv.style.display = 'none'
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let productName = e.target[0].value
    let productDescription = e.target[1].value
    let productPrice = e.target[2].value
    let productURL = e.target[3].value

    if(productName.trim() === '' || productDescription.trim() === ''|| productPrice.trim() === ''|| productURL.trim() === ''){
        alert('Please fill all the fields')
        return
    }

    let obj = {
        productName,
        productDescription,
        productPrice,
        productURL
    }

    if(updateIndex !== null){
        productsArr[updateIndex] = obj
        updateIndex = null
    }
    else{
        productsArr.push(obj)
    }

    createProduct()

    form.reset()

    formDiv.style.display = 'none'
})

const updateProduct = (name)=>{
    formDiv.style.display = 'flex'
    let product = productsArr.find((elem)=>elem.productName === name)
    updateIndex = productsArr.findIndex((elem)=>elem.productName === name)

    form[0].value = product.productName
    form[1].value = product.productDescription
    form[2].value = product.productPrice
    form[3].value = product.productURL
}

const deleteProduct = (index)=>{
    productsArr.splice(index,1)
    createProduct()
}