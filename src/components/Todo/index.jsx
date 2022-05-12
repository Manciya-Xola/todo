import React from 'react'

import styles from './Todo.module.css';
import {ImCheckmark} from 'react-icons/im'
import {GiCrossMark} from 'react-icons/gi'
import {MdDoneAll} from 'react-icons/md'
function Todo({id, title, isComplete, onDeleteTodo, onCompleteTodo,bgColor}) {
  function onDeleteClick(id) {
    onDeleteTodo(id)
  }
  function onCompleteClick(id) {
    onCompleteTodo(id)
  }
  return (
    <main className={styles.container} 
      style={{
        backgroundColor: bgColor ? bgColor:""
      }}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={()=>onCompleteClick(id)}>
            {isComplete ? <MdDoneAll />:<ImCheckmark/>}
          </button>
          <button className={styles.button} onClick={()=>onDeleteClick(id)}>
            <GiCrossMark/>
          </button>
        </div>
      </div>
      
    </main>
  )
}

export default Todo;