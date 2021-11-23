let addTask = document.querySelector('.addTask')

// -------- Create Task -------- 
addTask.addEventListener('click', () => {
    let input = document.querySelector('.input')
    input = input.value

    let li = document.createElement('li')
    let tasks = document.querySelector('.tasks')
    tasks.appendChild(li)

    let newTask = document.createElement('p')
    li.appendChild(newTask)

    newTask.textContent = input

    // -------- Delete Button --------
    let deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteButton')
    deleteButton.textContent = 'Deletar'
    li.appendChild(deleteButton)

    // -------- Delete Task -------- 
    deleteButton.addEventListener('click', () => {
        newTask.remove()
        editButton.remove()
        deleteButton.remove()
        li.remove()
    })

    // -------- Edit Button --------
    let editButton = document.createElement('button')
    editButton.classList.add('editButton')
    editButton.textContent = 'Editar'
    li.appendChild(editButton)

    // -------- Edit Task --------
    editButton.addEventListener('click', () => {
        newTask.contentEditable = true

        if (contentEditable = true) {
            editButton.textContent = 'Done'
        }
    })

})