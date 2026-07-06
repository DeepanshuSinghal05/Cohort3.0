// const head = document.querySelector('h2')

// // Dynamically adding the class to the h2 element
// head.classList.add("Heading")

// // checking if the element contains that class or not
// console.log(head.classList.contains("Heading"))

// // to toggle the class, means if class is there then it will remove it otherwise adds the class
// head.classList.toggle("Toggles")

// // to replace the name of the class
// head.classList.replace("Heading, ReplacedClass")

const bulb = document.querySelector('.bulb')
const btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    if(bulb.classList.toggle("lightup")){
        btn.textContent = 'Off'
    }
    else{
        btn.textContent = 'On'
    }
})