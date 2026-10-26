// TaskFlow - Team Task Management System
// Starter code for the Chaos Exercise

// Sample task data to show the structure
let tasks = [
    {
        id: 1,
        title: "Sample Task",
        description: "This is what a task looks like",
        dueDate: "2026-11-15",
        assignedTo: "Teammember #1",
        completed: false
    },
    {
        id: 1,
        title: "Sample Task",
        description: "This is what a task looks like",
        dueDate: "2026-12-15",
        assignedTo: "Teammember #2",
        completed: false
    }, 
    {
        id: 3,
        title: "Sample Task",
        description: "This is what a task looks like",
        dueDate: "2026-01-15",
        assignedTo: "Teammember #3",
        completed: false
    },
    {
        id: 4,
        title: "Sample Task",
        description: "This is what a task looks like",
        dueDate: "2026-10-15",
        assignedTo: "Teammember #4",
        completed: false
    },
    {
        id: 5,
        title: "Sample Task",
        description: "This is what a task looks like",
        dueDate: "2027-10-15",
        assignedTo: "Teammember #5",
        completed: true
    }
];


function daysLeft(dueDate){
    // When I hover over Date.now it says that it returns the number of miliseconds 
    // So I have to trasnform those miliseconds in days
    const diffMiliseconds =  new Date(dueDate) - Date.now()
    const diffDays = diffMiliseconds/(60000 * 60 * 24) 
    return Math.round(diffDays);
};

// Function to render all tasks to the page
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'card task-item';
        let statusText;
        if(task.completed) {
            statusText = "Completed";
        } else {
            statusText = "Incompleted"
        }
        let overdue;
        if(daysLeft(task.dueDate) < 0) {
            overdue = "overdue"
        } else {
            overdue = daysLeft(task.dueDate) + " daysleft"
        }
        
        taskItem.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="task-content">
                        <div class="task-title">${task.title}</div>
                        <div class="task-description">${task.description}</div>
                        <div class="task-date">Due: ${task.dueDate}</div>
                        ${task.assignedTo ? `<div class="task-date">Assigned to: ${task.assignedTo}</div>` : ''}
                    </div>
                    <div class="task-actions">
                        <div class="task-status-incomplete">
                         ${statusText}
                        </div>
                        <div class="daysLeft">
                        ${overdue}
                        </div>
                        <button class="edit-status">
                        Mark as Complete
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        taskList.appendChild(taskItem);
    });
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderTasks();
    
    // TODO
});