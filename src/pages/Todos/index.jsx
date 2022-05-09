import React from 'react'


import Todo from '../../components/Todo';
import styles from "./Todo.module.css";
function Todos(props) {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Todos</h1>
      <Todo title={props.title}/>
    </main>
    
  )
}

export default Todos;