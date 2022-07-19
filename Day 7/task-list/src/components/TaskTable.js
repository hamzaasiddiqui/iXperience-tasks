import React from 'react'

export default function TaskTable(props) {

  function onToggleTaskClicked(task) {
    task.complete = !task.complete;
    props.onTaskUpdated(task);
  }

  function onTaskRemove(task) {
    props.onTaskRemove(task);
  }

  return (
    <div className='mt-3'>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            props.tasks.map((task) =>
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>
                  {task.complete ? "Yes" : "No"}
                </td>
                <td>
                  <button
                    onClick={(e) => onToggleTaskClicked(task)}
                    className='btn btn-outline-primary btn-sm me-3'>
                    <i className={
                    task.complete ? "bi bi-arrow-counterclockwise" : "bi bi-check"
                    }></i>
                  </button>

                  <button
                    onClick={(e) => onTaskRemove(task)}
                    className='btn btn-outline-success btn-sm'>
                    X
                  </button>
                </td>
              </tr>
            )
          }

        </tbody>
      </table>

    </div>
  )
}
