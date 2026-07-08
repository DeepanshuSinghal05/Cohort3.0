// Question 1 — Change Heading Text

const h1 = document.querySelector('#title');

h1.textContent = 'Welcome to JavaScript DOM'

// Question 2 — Change Background Color

const button1 = document.querySelector('#btn');

button1.style.backgroundColor = 'blue';

// Question 3 — Display Input Value

const btn2 = document.querySelector('#btn2');
const inp = document.querySelector('#username')
const op  = document.querySelector('#output')

btn2.addEventListener('click', () => {
    op.textContent = inp.value;
})

// Question 4 — Hide and Show Text

const btn3 = document.querySelector('#btn3');
const mess = document.querySelector('#message');

btn3.addEventListener('click', () => {
    mess.style.display = 'none'
})

// Question 5 — Add New List Item

const inp2 = document.querySelector('#fruit-inp')
const fruit_list = document.querySelector('#list')
const btn4 = document.querySelector('#fruit-btn')

btn4.addEventListener('click', () => {
    const new_fruit = document.createElement('li')
    new_fruit.textContent = inp2.value
    fruit_list.append(new_fruit)
})

// Question 6 — Remove a Card

const card = document.querySelector('.card')
const delbtn = document.querySelector('#del')

delbtn.addEventListener('click', () => {
    card.remove()
})

// Question 7 — Counter App

const count = document.querySelector('span')
const addCount = document.querySelector('#add-c')
const subCount = document.querySelector('#sub-c')

addCount.addEventListener('click', () => {
    count.textContent = parseInt(count.textContent) + 1
})

subCount.addEventListener('click', () => {
    count.textContent = parseInt(count.textContent) - 1
})

// Question 8 — Live Character Counter

const cId = document.querySelector('#cId')
const cCount = document.querySelector('#cCount')

cId.addEventListener('input', () => {
    cCount.textContent = cId.value.length
})