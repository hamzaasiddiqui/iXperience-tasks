import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';


export default function App() {
  const [tasks, setTasks] = useState([]);

  function onTaskCreated(task) {
    setTasks([...tasks, task]);
  }

  function onTaskUpdated(task) {
    const newTasks = tasks.map((t) => {
      return t.id === task.id ? task : t;
    });
    setTasks(newTasks);
  }

  function onTaskRemove(task) {
    const newTasks = tasks.filter((t) => {
      return t.id !== task.id;
    });
    setTasks(newTasks);
  }

  return (
    <div className='container m-5 text-center'>
        <h1>Task List</h1>
        
        <hr></hr>
        
        <h2>Our simple task list</h2>

        <TaskInput onTaskCreated={onTaskCreated} />

        <TaskTable tasks={tasks} onTaskUpdated={onTaskUpdated} onTaskRemove={onTaskRemove}/>
      </div>
  )
}
