const input = document.getElementById('task__input');
const add = document.getElementById('tasks__add');
const tasks = document.getElementById('tasks');
const remove = document.querySelector('task__remove');

const addTask = function() {
    tasks.insertAdjacentHTML('beforeEnd',
    `<div class="task">
        <div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);
    input.value = null;
}

add.addEventListener('click', (event) => {
  event.preventDefault();
  addTask();
});

input.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        event.preventDefault();
        addTask();
    }
});

onclick = (event) => {
    if (event.target.classList.contains('task__remove')) {
        event.target.parentElement.remove();
    }
}