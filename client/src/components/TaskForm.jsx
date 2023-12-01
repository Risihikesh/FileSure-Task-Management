// TaskForm.js
import React, { useState } from 'react';
import './css/TaskForm.css';

const TaskForm = ({ addTask }) => {
  // State variables to store form input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Perform form validation here (ensure title is not empty)
    if (title.trim() === '') {
      // Handle validation error
      alert('Task title cannot be empty!');
      return;
    }

    // Create a new task object
    const newTask = {
      title,
      description,
      status,
    };

    // Call the addTask function passed as a prop to add the task
    addTask(newTask);

    // Clear the form fields
    setTitle('');
    setDescription('');
    setStatus('To Do');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
