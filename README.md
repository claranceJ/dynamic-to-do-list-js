# 📝 To-Do List Application

This repository contains a simple and modern To-Do List Application. The app allows users to add and remove tasks, with tasks being saved in Local Storage to persist across browser sessions.

## 📑 Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## 🌐 Live Demo

Check out the live demo of the To-Do List Application [here](#).

## 🌟 Features

- **Add Tasks:** Easily add new tasks using the input field and "Add Task" button or by pressing the Enter key.
- **Remove Tasks:** Remove tasks individually with the "Remove" button.
- **Persistent Storage:** Tasks are saved in Local Storage, ensuring they remain available even after closing or refreshing the browser.

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- A modern web browser (Chrome, Firefox, Edge, etc.)
- Code editor (VSCode, Sublime Text, etc.)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-list-app.git

    Navigate to the project directory:

    bash

    cd todo-list-app

    Open index.html in your preferred web browser.

📄 Usage

    Add a Task: Enter your task in the input field and click "Add Task" or press Enter.
    Remove a Task: Click the "Remove" button next to the task you want to delete.

📂 Project Structure

plaintext

.
├── index.html
├── styles.css
└── script.js

    index.html: The main HTML file containing the structure of the app.
    styles.css: The CSS file for styling the app.
    script.js: The JavaScript file for adding functionality to the app.

🔍 Detailed Explanation
Initialize and Load Tasks

    Loading Tasks from Local Storage:
        On page load, the script checks Local Storage for an existing list of tasks and populates the task list if found.

Update Task Addition Functionality

    Adding Tasks to Local Storage:
        Whenever a new task is added, it is also saved to Local Storage.

Implement Task Removal with Local Storage Update

    Removing Tasks from Local Storage:
        When a task is removed, it is also removed from Local Storage.

JavaScript Functions

    addTask Function:
        Handles adding tasks to the DOM and Local Storage.
        Validates task input and ensures it is not empty.

    removeTask Function:
        Handles removing tasks from the DOM and updates Local Storage accordingly.

    loadTasks Function:
        Loads tasks from Local Storage when the page loads and displays them in the task list.

🤝 Contributing

Contributions are welcome! If you have any ideas or suggestions, feel free to open an issue or submit a pull request.
📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

Crafted with 💻 and ☕ by Jacktone Clarance