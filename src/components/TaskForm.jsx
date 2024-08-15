import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            addTask({ title, description, dueDate, priority, status: 'Pending' });
            setTitle('');
            setDescription('');
            setDueDate('');
            setPriority('Medium');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="pt-10 pb-5 px-10 bg-gray-800 text-white">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full p-2 mb-2 bg-gray-300 placeholder-gray-800 text-gray-600 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <textarea
                    placeholder="Task Description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 bg-gray-300 placeholder-gray-800 text-gray-600 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>
            <div className="mb-4">
                <input
                    type="date"
                    value={dueDate}
                    required
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full p-2 bg-gray-300 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full p-2 bg-gray-300 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="Priority" disabled>Select Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full py-2 font-semibold bg-blue-700 text-white rounded hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
