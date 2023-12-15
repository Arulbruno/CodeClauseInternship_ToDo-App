import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskCreator.css'; // Import the CSS file

export const TaskCreator = ({ createTask }) => {
  const [newTaskName, setNewTaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName);
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className='task-creator my-2 row'>
      <div className='col-9'>
        <input
          type="text"
          value={newTaskName}
          placeholder="Capture a new idea in your task list"
          onChange={(e) => setNewTaskName(e.target.value)}
          className='form-control px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300'
        />
      </div>
      <button className='btn btn-primary btn-sm col-3 ml-2 task-creator-btn'>
        <FontAwesomeIcon icon={faPlus} /> Add task
      </button>
    </form>
  );
};
