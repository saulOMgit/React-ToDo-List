import React from 'react';
import './App.css';
import TodoList from './TodoList';
import { Footer } from './Footer';

function App() {

  return (
    <>
      <div className="App animate__animated animate__fadeInUp ">
        <h1>Lista de Tareas</h1>
        <TodoList />
        <Footer/>
      </div>
    </>
  )
}

export default App
