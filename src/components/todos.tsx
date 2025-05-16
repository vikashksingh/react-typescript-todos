import Todo from "./todo";
import { useContext } from "react";
import { TodosContext } from "../store/todo-context";
import classes from "./todos.module.css";
const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.todos.map((todo) => (
        <Todo
          todo={todo.text}
          key={todo.id}
          removeTodo={() => todoCtx.removeTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
