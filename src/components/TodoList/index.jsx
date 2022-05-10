import React,{useReducer} from 'react'


import { reducer, initialState } from '../../reducer/todos';
import Todo from '../Todo';

function TodoList() {
  const [state, despatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h2>To do</h2>
        <div>
          {
            state.filter(isComplete => !isComplete.isComplete).map((item) =>(
              <Todo title={item.title} id={item.id} isComplete={item.isComplete}/>
              )
            )
          }
        </div>
      </div>
      <div>
        <h2>Complete</h2>
        <div>
          {
            state.filter(isComplete => isComplete.isComplete).map((item) =>(
              <Todo title={item.title} id={item.id} isComplete={item.isComplete}/>
              )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TodoList