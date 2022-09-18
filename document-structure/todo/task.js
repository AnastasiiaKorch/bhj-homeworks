let taskAdd = document.getElementById("tasks__add");
let taskInput = document.getElementById("task__input");
let taskList = document.getElementById("tasks__list");


taskAdd.onclick = () => {
    if (taskInput.value && taskInput.value.trim().length > 0) {
        let task = document.createElement("div");
        task.classList.add("task");
        taskList.appendChild(task);
        let title = document.createElement("div");
        title.classList.add("task__title");
        title.textContent = taskInput.value;
        task.appendChild(title);
        taskInput.value = "";
        let text = document.createElement("text");
        task.appendChild(text);
        text.classList.add("task__remove");
        text.textContent = "x";
        text.onclick = () => {
        taskList.removeChild(task);
        }
    }
    return false;
}