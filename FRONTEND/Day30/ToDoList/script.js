const inp = document.querySelector('input')
const add_btn = document.querySelector('#add')
const todoBox = document.querySelector(".todo-list")

let currentTask = null

add_btn.addEventListener('click', () => {
    const value = inp.value.trim()

    if (currentTask) {
        currentTask.textContent = value;
        currentTask = null;
        add_btn.textContent = 'Add';
        inp.value = ''
        return
    } 


    const taskDiv = document.createElement("div")
    taskDiv.classList.add('li')

    const heading  = document.createElement("h3")
    heading.textContent = value

    const btnContainer = document.createElement("div")

    const editBtn = document.createElement("button")
    editBtn.textContent = 'Edit'
    editBtn.classList.add("btn", "edit")
    
    const delBtn = document.createElement("button")
    delBtn.textContent = 'Delete'
    delBtn.classList.add("btn", "del")

    btnContainer.append(editBtn, delBtn)

    taskDiv.append(heading, btnContainer)

    todoBox.append(taskDiv)

//     inp.value = ''
//     // todoBox.innerHTML += `<div class="li">
//     //         <h3>${value}</h3>
//     //         <div>
//     //             <button class="btn edit">Edit</button>
//     //             <button class="btn del">Delete</button>
//     //         </div>
//     //     </div>`

//     // inp.value = ''
})

// // const edit = document.querySelector('.edit')

// // // edit.addEventListener('click', ()=>{
// // //     const value = inp.value
// // //     if(value.trim()==='')return
    

// // //     todoBox.innerHTML += `<div class="li">
// // //             <h3>${value}</h3>
// // //             <div>
// // //                 <button class="btn edit">Edit</button>
// // //                 <button class="btn del">Delete</button>
// // //             </div>
// // //         </div>`

// // //     inp.value = ''
// // // })

todoBox.addEventListener('click', (e) => {

    // Edit button clicked
    if (e.target.classList.contains('edit')) {
        const task = e.target.closest('.li').querySelector('h3');

        inp.value = task.textContent;
        currentTask = task;

        add_btn.textContent = 'Update';
    }

    // Delete button clicked
    if (e.target.classList.contains('del')) {
        e.target.closest('.li').remove();
    }
});

// ----------------------------------------------------------------

// const todoBox = document.querySelector(".todo-list")
// const add_btn = document.querySelector("#add")
// const inp = document.querySelector("input")

// let currentTask = null

// add_btn.addEventListener('click',()=>{

//         if (currentTask) {
//         currentTask.textContent = value;
//         currentTask = null;
//         add_btn.textContent = 'Add';
//         inp.value = ''
//         return
//     } 

//     const value = inp.value.trim()

//     const taskDiv  = document.createElement('div')
//     taskDiv.classList.add('li')

//     const heading = document.createElement('h3')
//     heading.textContent = value

//     const btnContainer = document.createElement('div')

//     const editBtn = document.createElement('button')
//     editBtn.textContent = 'Edit'
//     editBtn.classList.add('btn','edit')

//     const delBtn = document.querySelector('button')
//     delBtn.textContent = 'Delete'
//     delBtn.classList.add('btn','del')

//     btnContainer.append(editBtn,delBtn)

//     taskDiv.append(heading,btnContainer)    

//     todoBox.append(taskDiv)

//     inp.value = ''
// })

// todoBox.addEventListener('click',(e)=>{
//     if(e.target.classList.contains('edit')){

//         const task = e.target.closest('.li').querySelector('h3');

//         inp.value = task.textContent;
//         currentTask = task;

//         add_btn.textContent = 'Update';
//     }
//     if (e.target.classList.contains('del')) {
//         e.target.closest('.li').remove();
//     }
// })