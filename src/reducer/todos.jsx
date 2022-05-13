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
      newTodos.push({ id: newId, title: action.payload.title, isComplete: false, color:action.payload.color });
      return newTodos;
    case "deleteTodo":
      const newTodo = state.filter(todo => todo.id !==action.payload)
      return newTodo;
    case "resetTodo":
      return initialState;
    case "toggleTask":
      
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
        );
    default:
      return state;
  }
}
