import React,{useReducer} from 'react'


import { reducer, initialState } from '../../reducer/todos';
import Todo from '../Todo';

function TodoList() {

  const [state, dispatch] = useReducer(reducer, initialState);

  function onDeleteTodo(id) {
    // console.log(id);
    dispatch({type: "deleteTodo", payload: id});
  }
  
  
  return (
    <div>
      <div>
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
      <div>
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