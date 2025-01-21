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
            <span>${task}</span>
            <span>
                <i class="fa-solid fa-pen" id="edit-btn-${i}"></i>
                <i class="fa-solid fa-trash" id="delete-btn-${i}"></i>
            </span>
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

        if (event.target.id.includes('edit-btn')) {
            let newTask = prompt('Enter Your to edit your Task!')
            if (!newTask == "") {
                if (!todoArr.includes(newTask)) {
                    todoArr[btnIdIndex] = newTask
                    renderTodo()
                } else {
                    // console.log('this value is already in the task');
                    modal("this value is already in the task")

                }
            } else {
                // console.log('please add task!');
                modal("please add task!")

            }
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
