import { useState } from "react";
import Todos from "./components/todos";
import TodoModel from "./models/todoModel";
import TodoForm from "./components/todoForm";
function App() {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  function addTodos(text: string) {
    const id = new Date().getMilliseconds();
    setTodos((previousTodos) => previousTodos.concat(new TodoModel(id, text)));
  }
  return (
    <>
    <TodoForm addTodos={addTodos} />
    <Todos todos={todos} />
    </>
  );
}
export default App;