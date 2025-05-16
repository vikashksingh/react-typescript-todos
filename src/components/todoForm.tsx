import { useContext, useRef } from "react";
import { TodosContext } from "../store/todo-context";
import classes from "./todoForm.module.css";
const TodoForm: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);
  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (inputRef.current?.value) {
      todosCtx.addTodo(inputRef.current.value);
    } else {
      console.error("Input value is undefined");
    }
  }
  return (
    <form onSubmit={handleFormSubmit} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default TodoForm;
