import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const { id, title, description, dueDate, priority, status } = task;

    const handleStatusChange = () => {
        const newStatus = status === 'Completed' ? 'Pending' : 'Completed';
        updateTask(id, { ...task, status: newStatus });
    };

    return (
        <div className={`p-4 mb-4 bg-gray-900 text-white rounded shadow-md ${status === 'Completed' ? 'line-through bg-gray-700' : ''}`}>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            {description && (
                <div className="mb-2">
                    <h3 className="text-lg font-semibold">Task Description:</h3>
                    <p>{description}</p>
                </div>
            )}
            {dueDate && <p className="text-gray-400 mb-2">Due: {dueDate}</p>}
            <p className="text-gray-400 mb-4">Priority: {priority}</p>
            <div className="flex space-x-2">
                <button
                    onClick={handleStatusChange}
                    className={`px-4 py-2 rounded ${status === 'Completed' ? 'bg-blue-700' : 'bg-blue-900'} text-white hover:bg-opacity-80 transition`}
                >
                    {status === 'Completed' ? 'Mark as Pending' : 'Mark as Completed'}
                </button>
                <button
                    onClick={() => deleteTask(id)}
                    className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-500 transition"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
