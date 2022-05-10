import React,{useReducer} from 'react'


import { reducer, initialState } from '../../reducer/todos';
import Todo from '../Todo';
import styles from "./TodoList.module.css";

function TodoList() {

  const [state, dispatch] = useReducer(reducer, initialState);

  function onDeleteTodo(id) {
    // console.log(id);
    dispatch({type: "deleteTodo", payload: id});
  }
  function onResetButtonClicked() {
    dispatch({type: "resetTodo"});
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.incomplete}>
        <div className={styles.buttons}>
          <button onClick={onResetButtonClicked} className={styles.button}>Reset</button>
          <button className={styles.button}>Add Todo</button>
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
                  key={item.id}/>
              )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TodoList