import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'All') return true;
        if (filter === 'Completed') return task.status === 'Completed';
        if (filter === 'Pending') return task.status === 'Pending';
        return false;
    }).filter(task => 
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4 bg-gray-800 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-1/2 p-2 mb-2 md:mb-0 bg-gray-300 placeholder-gray-800 text-black rounded"
                />
                <select
                    onChange={(e) => setFilter(e.target.value)}
                    value={filter}
                    className="w-full md:w-1/3 p-2 bg-gray-300 text-gray-800 rounded"
                >
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
            <div className="space-y-4">
                {filteredTasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
