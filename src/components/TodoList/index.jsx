import React,{useState} from 'react'


import Todo from '../Todo';

const initialTodos = [
  {
    id: 0,
    title: 'Clean dishes',
    isComplete: false,
  },
  {
    id: 1,
    title: 'Take out trash',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Feed pets',
    isComplete: true,
  },
];

function TodoList() {
  const [todos, setTodos] = useState(() => initialTodos);
  return (
    <div>
      <div>
        <h2>To do</h2>
        <div>
          {
            todos.filter(isComplete => !isComplete.isComplete).map((item) =>(
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
            todos.filter(isComplete => isComplete.isComplete).map((item) =>(
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