import React from 'react'


import TodoList from '../../components/TodoList';
import styles from "./Todo.module.css";
function Todos(props) {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Todos</h1>
      <TodoList/>
    </main>
    
  )
}

export default Todos;