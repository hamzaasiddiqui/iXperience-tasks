import React, { useState } from 'react';

import { Task } from '../models/task';

export default function TaskInput(props) {

  const [taskName, setTaskName] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();

    const task = new Task(
      (new Date()).getTime(),
      taskName,
      false,
    );

    props.onTaskCreated(task);

    setTaskName('');
  }

  return (
    <div className='mt-4'>
      <form onSubmit={onFormSubmit}>

        <div className="input-group mb-3">
          <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Task name" />
          <button
            className="btn btn-outline-secondary"
            type="submit">
            +
          </button>
        </div>

      </form>
    </div>
  )
}
