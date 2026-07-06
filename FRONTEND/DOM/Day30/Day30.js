// const h1 = document.querySelector('h1')

// // setAttribute
// h1.setAttribute("Class",'heading')
// h1.setAttribute("id",'heading')

// // getAttribute
// console.log(h1.getAttribute("class"))

// // remove attribute
// h1.removeAttribute("id")

// // hasAttribute

// console.log(h1.hasAttribute('class'))
// console.log(h1.hasAttribute('id'))

const main = document.querySelector('main')

const box1 = document.createElement('box1')
const box2 = document.createElement('box3')
const box3 = document.createElement('box3')
const box4 = document.createElement('box4')


box1.classList.add("box")
box2.classList.add("box")
box3.classList.add("box")
box4.classList.add("box")

box1.style.backgroundColor = 'yellow'
box2.style.backgroundColor = 'red'
box3.style.backgroundColor = 'blue'
box4.style.backgroundColor = 'crimson'

main.append(box1,box2,box3)

main.prepend(box4)

// main.replaceWith(box3,box4,box1,box2)