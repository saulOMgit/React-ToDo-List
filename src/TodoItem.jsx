import React from 'react';
function TodoItem({ task, deleteTask, toggleCompleted }) {
function handleChange() {
 toggleCompleted(task.id);
 }
 
 return (
 <div className="todo-item animate__animated animate__fadeInUp">
 <input 
 type="checkbox"
 checked={task.completed}
 onChange={handleChange}
 />
<p>{task.text}</p>
<button className='borrar' onClick={() => deleteTask(task.id)}>
 X
 </button>
 </div>
 );
}
export default TodoItem;