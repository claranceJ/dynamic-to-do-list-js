//Set up Event Listener
document.addEventListener("DOMContentLoaded", function() {

    //select the button
    const addButton = document.getElementById("add-task-btn");

    //select task input
    const taskInput = document.getElementById("task-input");

    //select task list
    const taskList = document.getElementById("task-list");
    
    //initializig the addTask Function
    function addTask(){
        //triming the task input field
        const taskText = taskInput.value.trim();
    
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
        removeButton.className = "remove-btn";

        //defining onclick event
        removeButton.onclick = function() {
            taskList.removeChild(newTask);
        };

        //Append the remove button to the new task
        newTask.appendChild(removeButton);

        //Append new task to task list
        taskList.appendChild(newTask);

        //clear input field
        taskInput.value = "";
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

});