import React,{useReducer, useState, Reducer } from 'react'


import { reducer, initialState } from '../../reducer/todos';
import NewTodoForm from '../NewTodoForm';
import Todo from '../Todo/index';
import styles from "./TodoList.module.css";

function TodoList() {

  const [isFormVisible, setIsFormVisible] = useState(false);

  const [state, dispatch] = useReducer<Reducer<any, any>>(reducer, initialState);

  const [color, setColor] = useState('#C4C4C4');

  function onDeleteTodo(id:number) {
    // console.log(id);
    dispatch({type: "deleteTodo", payload: id});
  }
  function onResetButtonClicked() {
    dispatch({type: "resetTodo"});
  }
  function onAddTodoClick() {
    setIsFormVisible(true)
  }
  function onAddNewTodo(title:String, color: string = ''){
    // console.log(title);
    setColor(color)
    dispatch({type:"addTodo", payload: {title:title, color: color}});
    setIsFormVisible(false)
  }
  function onCompleteTodo(id:number) {
    dispatch({type:"toggleTask", payload: id});
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
              .filter((isComplete:any) => !isComplete.isComplete)
              .map((item:any) =>(
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
              .filter((isComplete:any) => isComplete.isComplete)
              .map((item:any) =>(
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