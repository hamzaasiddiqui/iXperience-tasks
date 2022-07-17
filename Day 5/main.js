class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
}

class UserInterface {
    constructor () {
        this.taskInput = document.getElementById('task-input');
        this.form = document.getElementById('form');
        this.tableBody = document.getElementById('table-body');

        this.tasks = [];
    }

    //function to add event listener to form
    bindEventListener() {
        this.form.addEventListener('submit', (e) => this.onFromSubmit(e));
    }

    onFromSubmit(event) {
        event.preventDefault();

        let task = new Task(
            this.taskInput.value,
        );

        this.tasks.push(task);
        this.populateTasksTable();

        this.taskInput.value = '';
    }

    populateTasksTable() {
        this.tableBody.innerHTML = '';

        for (const task of this.tasks) {
            //creating elements for table
            const row = document.createElement('tr');

            const taskCell = document.createElement('td');
            const completedCell = document.createElement('td');
            const actionsCell = document.createElement('td');

            const removeButton = document.createElement('button');
            const completedButton = document.createElement('button');

            //adding innerHTML to elements
            taskCell.innerHTML = task.description;
            //to add button to complete a task
            if (task.completed == false) {
                completedCell.innerHTML = 'No';
                completedButton.innerHTML = '✓';

                completedButton.classList.add('btn');
                completedButton.classList.add('btn-outline-success');
                completedButton.classList.add('me-3');
            }
            //to add a button to undo completed status of task
            else {
                completedCell.innerHTML = 'Yes';
                completedButton.innerHTML = '⟲';

                completedButton.classList.add('btn');
                completedButton.classList.add('btn-outline-primary');
                completedButton.classList.add('me-3');
            }
            removeButton.innerHTML = 'X';

            removeButton.classList.add('btn');
            removeButton.classList.add('btn-outline-danger');

            //adding event listener to completed button
            if (task.completed == false) {
                completedButton.addEventListener('click', (e) => this.onCompletedButtonClick(task));
            }
            //adding event listener to undo button
            else {
                completedButton.addEventListener('click', (e) => this.onUndoCompletedButtonClick(task));
            }
            
            removeButton.addEventListener('click', (e) => this.onRemoveButtonClick(task));

            actionsCell.append(completedButton);
            actionsCell.append(removeButton);

            row.append(taskCell);
            row.append(completedCell);
            row.append(actionsCell);
            this.tableBody.append(row);
        }
    }

    onCompletedButtonClick(completeTask) {
        //updating completed status of task
        let completedTask = new Task(completeTask.description);
        completedTask.completed = true;

        //filtering out the task with outdated completed status
        this.tasks = this.tasks.filter((task) => {
            return task.description != completeTask.description;
        });

        //pushing task with updated status to tasks array
        this.tasks.push(completedTask);
        
        //calling function to populate table again
        this.populateTasksTable();
    }

    onUndoCompletedButtonClick(completedTask) {
        //updating completed status of task
        let undoTask = new Task(completedTask.description);
        undoTask.completed = false;

        //filtering out the task with outdated completed status
        this.tasks = this.tasks.filter((task) => {
            return task.description != completedTask.description;
        });
        
        //pushing task with updated status to tasks array
        this.tasks.push(undoTask);

        //calling function to populate table again
        this.populateTasksTable();
    }

    //add id to task
    onRemoveButtonClick(taskToRemove) {
        this.tasks = this.tasks.filter((task) => {
            return task.description != taskToRemove.description;
        });

        this.populateTasksTable();
    }
}

const ui = new UserInterface;
ui.bindEventListener();