const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    const task = input.value.trim();
    if(task !== "")
    {
        addTask(task);
        input.value="";
    }
});

const addTask = (taskText) => {
    const li = document.createElement('li');
    li.textContent = taskText;
    console.log(li);

    const removeBtn = document.createElement('button');
    removeBtn.textContent="Remove";
    removeBtn.style.marginLeft = "10px";

    removeBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    li.appendChild(removeBtn);
    todoList.appendChild(li);

}