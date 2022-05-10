export const initialState = [
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
export const reducer = (state, action) => {
  switch (action.type) {
    case "AddTodo":
      console.log(action.type)
      return state;
    case "deleteTodo":
      const newTodos = state.filter(todo => todo.id !==action.payload)
      console.log(action.type)
      return newTodos;
    case "resetTodo":
      console.log(action.type)
      return state;
    default:
      return state;
  }
}
