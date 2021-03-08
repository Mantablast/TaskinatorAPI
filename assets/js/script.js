var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//This adds a new task item to the list in 4 or 5 steps**
var createTaskHandler = function(event) {

  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
  
};
  formEl.addEventListener("submit", createTaskHandler);