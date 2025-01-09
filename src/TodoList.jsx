import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

export const TodoList = () => {
    // Recuperar tareas del localStorage al cargar el componente
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [
            { id: 1, text: 'Doctor Appointment', completed: true },
            { id: 2, text: 'Meeting at School', completed: false },
        ];
    });

    const [text, setText] = useState('');

    // Guardar tareas en localStorage cada vez que cambian
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}
            <input
                className='textotarea'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button 
                className='botonAdd'
                onClick={() => addTask(text)}
            >Add</button>
        </div>
    );
};

export default TodoList;
