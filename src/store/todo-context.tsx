import React from "react";
import TodoModel from "../models/todoModel";

type TodoContextObj = {
  todos: TodoModel[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
});

function TodosContextProvider({ children }: any) {
  const [todos, setTodos] = React.useState<TodoModel[]>([]);

  const contextValue: TodoContextObj = {
    todos: todos,
    addTodo: (text: string) => {
      const id = new Date().getMilliseconds();
      setTodos((prevTodos) => [...prevTodos, new TodoModel(id, text)]);
    },
    removeTodo: (id: number) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;
