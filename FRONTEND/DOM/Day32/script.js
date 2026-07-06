const btn = document.querySelector("button")
const main = document.querySelector('main')
const timer = document.querySelector('#timer')
const score = document.querySelector('#score')
const overlay = document.querySelector('#overlay')
const box = document.createElement('div')

box.classList.add('box')

let time = 0

let scoree = 0

let interval

let isClicked = false

const randomColor = ()=>{
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)

    return `rgb(${r},${g},${b})`
}


const randomBox = ()=>{

    box.style.backgroundColor = randomColor()

    let mainH = main.clientHeight - box.offsetHeight
    let mainW = main.clientWidth - box.offsetWidth

    const rx = Math.random()*mainH
    const ry = Math.random()*mainW

    main.append(box)

    box.style.top = `${rx}px`
    box.style.left = `${ry}px`

    isClicked = false
}


btn.addEventListener("click",()=>{

    clearInterval(interval)




    interval = setInterval(() => {
        main.append(box)

        time+=1
        timer.textContent = time

        randomBox()
         
    }, 1000);

    setTimeout(()=>{
        overlay.style.display = 'flex'
        clearInterval(interval)
        setTimeout(()=>{
            overlay.style.display = 'none' 
            timer.textContent = 0
            score.textContent = 0

        },3000)
    },10000)
})

box.addEventListener('click',()=>{

    if(!isClicked){
        scoree+=1
        score.textContent = scoree
        isClicked = true
    }
})