import React from 'react'

import styles from './Todo.module.css';
function Todo({id, title, isComplete}) {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.buttons}>
          <button className={styles.button}>O</button>
          <button className={styles.button}>X</button>
        </div>
      </div>
      
    </main>
  )
}

export default Todo