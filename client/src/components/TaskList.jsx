// TaskList.js
import React, { useState } from 'react';
import './css/TaskList.css';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleUpdateClick = (taskId) => {
    setSelectedTask(taskId);
  };

  const handleCancelClick = () => {
    setSelectedTask(null);
  };

  const handleStatusChange = (newStatus) => {
    // Call the updateTask function with the selected task ID and the new status
    updateTask(selectedTask, { status: newStatus });
    // Reset selectedTask to null to hide the update UI
    setSelectedTask(null);
  };
  

  return (
    <div className="task-list-container">
      <p className="total-tasks">Total Tasks: {tasks.length}</p>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            <strong className="task-title">{task.title}</strong>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            {selectedTask === task._id ? (
              <div className="task-buttons">
                <label>
                  Update Status:
                  <select onChange={(e) => handleStatusChange(e.target.value)}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </label>
                <button className="button" onClick={handleCancelClick}>Cancel</button>
              </div>
            ) : (
              <div className="task-buttons">
                <button className="button update-button" onClick={() => handleUpdateClick(task._id)}>Update Status</button>
                <button className="button delete-button" onClick={() => deleteTask(task._id)}>Delete Task</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
