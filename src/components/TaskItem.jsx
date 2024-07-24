import React from 'react';
import '../styles/TaskItem.css';

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const { id, title, description, dueDate, priority, status } = task;

    const handleStatusChange = () => {
        const newStatus = status === 'Completed' ? 'Pending' : 'Completed';
        updateTask(id, { ...task, status: newStatus });
    };

    return (
        <div className={`task-item ${status.toLowerCase()}`}>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            {dueDate && <p>Due: {dueDate}</p>}
            <p>Priority: {priority}</p>
            <button onClick={handleStatusChange}>
                {status === 'Completed' ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
            <button onClick={() => deleteTask(id)}>Delete</button>
        </div>
    );
};

export default TaskItem;