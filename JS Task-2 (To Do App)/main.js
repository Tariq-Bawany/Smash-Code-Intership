const todoDisplay = document.getElementById("todo-display")
const addTaskBtn = document.getElementById("add-task")
const deleteTaskBtn = document.getElementById("delete-task")
const todoList = document.querySelector("#todo ul")
const todoAltText = document.getElementById("todo-alternative-text")
const modalText = document.getElementById("modal-text")
let todoArr = []

// todoList.innerHTML = `<li>Hello</li>`
function addTask() {
    if (todoDisplay.value.length > 0) {
        if (!todoArr.includes(todoDisplay.value)) {
            todoArr.push(todoDisplay.value)
            renderTodo(todoDisplay.value,)
            todoDisplay.value = ""
            todoAltText.style.display = 'none'
        } else {
            // console.log('this value is alreadey been added');
            modal("this value is alreadey been added")

        }
    } else {
        // alert("No task to add ,Please add task!")
        modal("No task to add ,Please add task!")
    }
}

// render To do Lists
function renderTodo() {
    todoList.innerHTML = ''
    todoArr.forEach((task, i) => {
        todoList.innerHTML += `
        <li>
            <div class="edit-display" id="edit-display-${i}">
                <input type="text" placeholder="Enter New task to edit |">
                    <span>
                        <i class="fa-solid fa-check" id="confirm-btn-${i}"></i>
                        <i class="fa-solid fa-close" id="close-btn-${i}"></i>
                    </span>
            </div>
            <div class="task-display" id="task-display-${i}">
                <span>${task}</span>
                <span>
                    <i class="fa-solid fa-pen" id="edit-btn-${i}"></i>
                    <i class="fa-solid fa-trash" id="delete-btn-${i}"></i>
                </span>
            </div>
        </li>`

    })
}
function deleteAll() {
    let confirmDelete = confirm("do you want to delete all the task")
    if (confirmDelete) {
        todoArr = []
        renderTodo()
        todoAltText.style.display = 'initial'
        modal("All Data is Deleted")
    }else{
    modal("No Deletion")

    }

}
const editTextDisplay = document.getElementById("edit-text-display")
const cancelEditBtn = document.getElementById("cancel-edit-btn")
const confirmEditBtn = document.getElementById("confirm-edit-btn")

function editDeleteEventDelegation(event) {
    if (event.target.tagName == "I") {
        let btnId = event.target.id
        let btnIdCount = btnId.lastIndexOf('-')
        let btnIdIndex = btnId.slice(btnIdCount + 1)

        // confirm edit task btn
        let confirmBtn = document.getElementById(`confirm-btn-${btnIdIndex}`)
        // confirm edit task btn
        let closeBtn = document.getElementById(`close-btn-${btnIdIndex}`)

        // editDisplay = the element of the selected task
        let editDisplay =document.getElementById(`edit-display-${btnIdIndex}`)

        // taskDisplay = the element of the selected task
        let taskDisplay =document.getElementById(`task-display-${btnIdIndex}`)

        if (event.target.id.includes('edit-btn')) {
            
            
            taskDisplay.style.display = "none"
            editDisplay.style.display = "flex"

            // input inside the edit display
            let editInput = document.querySelector(`#edit-display-${btnIdIndex} input` )
            confirmBtn.addEventListener("click", ()=>{
                let newTask = editInput.value
                if (!newTask == "") {
                    if (!todoArr.includes(newTask)) {
                        todoArr[btnIdIndex] = newTask
                        renderTodo()
                        editDisplay.style.display = "none"
                        taskDisplay.style.display = "flex"
                    } else {
                        // console.log('this value is already in the task');
                        modal("this value is already in the task")
    
                    }
                } else {
                    // console.log('please add task!');
                    modal("please add task!")
    
                }
            })
            closeBtn.addEventListener("click",()=>{
                taskDisplay.style.display = "flex"
            editDisplay.style.display = "none"
            })
            // let newTask = "hellow"
        } else if (event.target.id.includes('delete-btn')) {
            let confirmDelete = confirm("Do you want to delete this task")
            if (confirmDelete) {
                todoArr.splice(btnIdIndex, 1)
                renderTodo()
            }
        }

    }

}
function modal(modaltext) {
    modalText.textContent = modaltext
        modalText.style.display = 'inline'
        setTimeout(() => {
            modalText.style.display = 'none'
        }, 2000);
}
addTaskBtn.addEventListener('click', addTask)
deleteTaskBtn.addEventListener('click', deleteAll)