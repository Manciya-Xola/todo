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
    case "addTodo":
      const newTodos = [...state];
      const newId = Math.floor(Math.random() * 9999999);
      newTodos.push({ id: newId, title: action.payload, isComplete: false });
      return newTodos;
    case "deleteTodo":
      const newTodo = state.filter(todo => todo.id !==action.payload)
      return newTodo;
    case "resetTodo":
      // console.log(action.type)
      return initialState;
    default:
      return state;
  }
}
