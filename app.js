function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        li.onclick = function () {
            li.classList.toggle('completed');
        };

        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Por favor, introduce una tarea.');
    }
}