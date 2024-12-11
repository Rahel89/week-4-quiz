const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const resetListButton = document.getElementById('resetListButton');
const taskList = document.getElementById('taskList');
const counterDisplay = document.getElementById('counter');

let completedTasks = 0;

// Function to add a task
addTaskButton.addEventListener('click', function() {
    const taskValue = taskInput.value;

    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

 // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

 // Event listener for marking the task as completed
    listItem.addEventListener('click', function() {
        if (!listItem.classList.contains('completed')) {
            listItem.classList.add('completed');
            completedTasks++;
            updateCounter();
        }
    });

    // Append new task to the list
    taskList.appendChild(listItem);
    taskInput.value = ''; 
});

// Function to update the completed tasks counter
function updateCounter() {
    counterDisplay.textContent = `Tasks Completed: ${completedTasks}`;
}

// Event listener for reset list button
resetListButton.addEventListener('click', function() {
    taskList.innerHTML = ''; 
    completedTasks = 0; 
    updateCounter(); 
});
