import React, { useState } from 'react'

import styles from "./NewTodoForm.module.css";

function NewTodoForm({ onAddNewTodo }) {
  const [title, setTitle] = useState("");

  function onTitleChange(event) {
    setTitle(event.currentTarget.value);
  }
  function onFormSubmit(event) {
    event.preventDefault();
    onAddNewTodo(title);
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Add Todo</h1>
        <form className={styles.form} onSubmit={onFormSubmit}>
          <label htmlFor="" className={styles.label}>Title</label>
          <input type="text" value={title} onChange={onTitleChange} className={styles.input}></input>
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default NewTodoForm