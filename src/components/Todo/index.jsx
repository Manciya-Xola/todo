import React from 'react'

import styles from './Todo.module.css';
function Todo({id, title, isComplete, onDeleteTodo, onCompleteTodo}) {
  function onDeleteClick(id) {
    onDeleteTodo(id)
  }
  function onCompleteClick(id) {
    onCompleteTodo(id)
  }
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={()=>onCompleteClick(id)}>{isComplete ? 'C':'O'}</button>
          <button className={styles.button} onClick={()=>onDeleteClick(id)}>X</button>
        </div>
      </div>
      
    </main>
  )
}

export default Todo;