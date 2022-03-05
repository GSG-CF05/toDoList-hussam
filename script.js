const toDoInput =document.querySelector('.todoinput')
const toDoButton =document.querySelector('.todobutton')
const toDoList =document.querySelector('.todolist')
let todosA =[]
toDoButton.addEventListener('click',addTodo)
document.addEventListener('DOMContentLoaded',getToDoOnLoad)

function addTodo(e){
e.preventDefault()
    let todoDiv=document.createElement('div')
    toDoList.appendChild(todoDiv)
    let newToDo=document.createElement('li')
    newToDo.innerText=toDoInput.value
    todoDiv.appendChild(newToDo)
    saveToLocalStorage(toDoInput.value)
    toDoInput.value=""
}

function saveToLocalStorage(todo)
{
    
    todosA.push(todo)
    localStorage.setItem('todosA',JSON.stringify(todosA))
}
function getToDoOnLoad(){
if(localStorage.getItem(todosA) !=""){
    todosA=JSON.parse(localStorage.getItem('todosA'))
}
todosA.forEach((todo)=>{
    let todoDiv=document.createElement('div')
    toDoList.appendChild(todoDiv)
    let newToDo=document.createElement('li')
    newToDo.innerText=todo
    todoDiv.appendChild(newToDo)
})
}