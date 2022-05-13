export const initialState:Todo[] =[
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
type Todo={
  id:number;
  title:String;
  isComplete:Boolean;
  color?:String
}
export const reducer = (state:[], action:any) => {
  switch (action.type) {
    case "addTodo":
      const newTodos:Todo[] = [...state];
      const newId = Math.floor(Math.random() * 9999999);
      const todo:Todo = { id: newId, title: action.payload.title, isComplete: false, color:action.payload.color };
      newTodos.push(todo);
      return newTodos;
    case "deleteTodo":
      const newTodo = state.filter((todo:Todo) => todo.id !==action.payload)
      return newTodo;
    case "resetTodo":
      return initialState;
    case "toggleTask":
      return state.map((todo:Todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
        );
    default:
      return state;
  }
}
