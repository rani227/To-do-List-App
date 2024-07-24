import React, { useState } from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

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
        <div className="task-list">
            <div className="task-filter">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
            {filteredTasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;