import React,{useReducer, useState, useEffect} from 'react'


import { reducer, initialState } from '../../reducer/todos';
import NewTodoForm from '../NewTodoForm';
import Todo from '../Todo';
import styles from "./TodoList.module.css";

function TodoList() {

  const [isFormVisible, setIsFormVisible] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const [color, setColor] = useState('#C4C4C4');

  function onDeleteTodo(id) {
    // console.log(id);
    dispatch({type: "deleteTodo", payload: id});
  }
  function onResetButtonClicked() {
    dispatch({type: "resetTodo"});
  }
  function onAddTodoClick() {
    setIsFormVisible(true)
  }
  function onAddNewTodo(title, color='') {
    // console.log(title);
    setColor(color)
    dispatch({type:"addTodo", payload: {title:title, color: color}});
    setIsFormVisible(false)
  }
  function onCompleteTodo(title) {
    dispatch({type:"toggleTask", payload: title});
  }
  return (
    <div className={styles.container}>
      <div className={styles.incomplete}>
        <div className={styles.buttons}>
          <button onClick={onResetButtonClicked} className={styles.button}>Reset</button>
          <button onClick={onAddTodoClick} className={styles.button}>Add Todo</button>
        </div>
        <h2>To do</h2>
        <div>
          {
            state
              .filter(isComplete => !isComplete.isComplete)
              .map((item) =>(
                <Todo 
                  title={item.title} 
                  id={item.id} 
                  isComplete={item.isComplete} 
                  onDeleteTodo={onDeleteTodo} 
                  onCompleteTodo={onCompleteTodo}
                  bgColor={item?.color || '' }
                  key={item.id}/>
              )
            )
          }
        </div>
      </div>
      <div className={styles.complete}>
        <h2>Complete</h2>
        <div>
          {
            state
              .filter(isComplete => isComplete.isComplete)
              .map((item) =>(
                <Todo 
                  title={item.title} 
                  id={item.id} 
                  isComplete={item.isComplete} 
                  onDeleteTodo={onDeleteTodo} 
                  onCompleteTodo={onCompleteTodo}
                  bgColor={item?.color || '' }
                  key={item.id}/>
              )
            )
          }
        </div>
      </div>
      {isFormVisible ? <NewTodoForm onAddNewTodo={onAddNewTodo} /> : null} 
    </div>
  )
}

export default TodoList