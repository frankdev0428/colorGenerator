const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const taskData = [];
let currentTask = {};

openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});
closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});

// Use const to declare a variable called dataArrIndex and assign it the value of taskData.findIndex(). For the findIndex() method, pass in an arrow function with item as the parameter.

// Within the arrow function, check if the id property of item is strictly equal to the id property of currentTask.

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
})
