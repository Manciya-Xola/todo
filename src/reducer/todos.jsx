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
  // let newState;
  switch (action.type) {
    case "AddTodo":
      console.log('complete')
      return state;
    case "deleteTodo":
      console.log('complete')
      return state;
    case "resetTodo":
      console.log('complete')
      return state;
    default:
      return state;
  }
}
