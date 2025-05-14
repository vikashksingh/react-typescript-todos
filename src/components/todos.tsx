import Todo from "./todo";
import TodoModel from "../models/todoModel";
const Todos:React.FC<{todos: TodoModel[]}> = (props) => {
  return(
    <div>
      <h1>Todos</h1>
      {props.todos.map((todo) => (
        <Todo todo={todo.text} key={todo.id}/>
      ))}
    </div>
  )
}

export default Todos;