// wait for page to load and then load tasks
document.addEventListener("DOMContentLoaded", loadTasks);

// cache elements
const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDate");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// event handler to add task
addTaskBtn.addEventListener("click", addTask);

// add task function
function addTask() {
    let taskText = taskInput.value.trim();
    let dueDate = dueDateInput.value;

    // validation
    if (taskText === "") {
        alert("You need to enter a task!");
        return;
    }

    if (dueDate === null) {
        alert("You need to enter a date!");
        return;
    }

    // format the task as JS Object
    const task = {
        id: Date.now(),
        text: taskText,
        dueDate: dueDate,
        completed: false 
    };

    // save task
    saveTask(task);

    // render the task to the DOM - as a list item
    renderTask(task);

    // reset input fields
    taskInput.value = "";
    dueDateInput.value = "";

}

// save task to localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// add tasks as list items to DOM/Webpage
function renderTask(task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;

    const taskSpan = document.createElement("span");
    taskSpan.textContent = `${task.text} (Due: ${task.dueDate})`;

    if (task.completed) {
        taskSpan.classList.add("completed");
    }

    // change tasks status to complete/not complete
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    // edit task
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => editTask(task.id));

    // delete task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    // adding elements to todo app
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.append(editBtn);
    li.append(deleteBtn);
    taskList.appendChild(li);
}

// load tasks 
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];  
    tasks.forEach(task => renderTask(task));
}

// toggle task complete
function toggleTask(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });

    // convert tasks back to string and save to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskList.innerHTML = "";
    loadTasks();
}

// edit task
function editTask(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let task = tasks.find(task => task.id === id);

    let newTaskText = prompt("Edit task:", task.text);
    if (newTaskText !== null) {
        task.text = newTaskText;
    }

    let newDueDate = prompt("Edit due date (yyyy-mm-dd):", task.dueDate);
    if (newDueDate !== null) {
        task.dueDate = newDueDate;
    }

    // convert tasks back to string and save to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskList.innerHTML = "";
    loadTasks();
}

// delete task
function deleteTask(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter(task => task.id !== id);

    // convert tasks back to string and save to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskList.innerHTML = "";
    loadTasks();
}