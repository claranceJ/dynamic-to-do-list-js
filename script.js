//Set up Event Listener
document.addEventListener("DOMContentLoaded", function() {

    //select the button
    const addButton = document.getElementById("add-task-btn");

    //select task input
    const taskInput = document.getElementById("task-input");

    //select task list
    const taskList = document.getElementById("task-list");
    
     // Function to load tasks from Local Storage
    function loadTasks() {
        // Retrieve tasks from localStorage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Populate the task list
        storedTasks.forEach(function(taskText) {
            addTask(taskText, false); // 'false' indicates not to save again to Local Storage
        });
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        const taskItems = taskList.getElementsByTagName('li');
        for (let item of taskItems) {
            tasks.push(item.firstChild.textContent);
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    //initializig the addTask Function
    function addTask(taskText, save = true){
        //triming the task input field
        if (save) {
            taskText = taskInput.value.trim();

        }
            
    
        //check if taskText is not empty
        if (taskText === "") {
            alert("Please enter task.");
            return; //exit the function if input is empty
        }

        //create a new li
        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        //create new Button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        //define onclick event
        removeButton.onclick = function() {
            taskList.removeChild(newTask);
            saveTasks();// save updated tasks to localstorage
        };

        //Append the remove button to the new task
        newTask.appendChild(removeButton);

        //Append new task to task list
        taskList.appendChild(newTask);

        //clear input field
        taskInput.value = "";

        //Save tasks to Local storage if specified
        if (save) {
            saveTasks();

        }
       
    }
    // Add event listener to the button when clicked
    addButton.addEventListener("click", addTask);

    //Add event listener to input field for the "keypress" event
    taskInput.addEventListener("keypress", function(event){

        //check if the pressed key is Enter
        if (event.key === "Enter") {
            // prevent default action
            event.preventDefault();
            // call addTask function
            addTask();

        }
    });

    //Load tasks when page loads
    loadTasks();

});