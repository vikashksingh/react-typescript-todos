import Todos from "./components/todos";
import TodoForm from "./components/todoForm";
import TodosContextProvider from "./store/todo-context";
function App() {
  return (
    <TodosContextProvider>
      <TodoForm />
      <Todos />
    </TodosContextProvider>
  );
}
export default App;
