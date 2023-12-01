
import React from 'react';
import './css/Filter.css';

const Filter = ({ filterTasks }) => {
  const handleFilterChange = (e) => {
    const selectedStatus = e.target.value;
    filterTasks(selectedStatus);
  };

  return (
    <label>
      Filter by Status:
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </label>
  );
};

export default Filter;
