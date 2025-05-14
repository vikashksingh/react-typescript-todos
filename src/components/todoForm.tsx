import { useRef } from "react";

const TodoForm:React.FC<{addTodos : (text: string) => void}> = ({addTodos}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleFormSubmit(event: React.FormEvent){
    event.preventDefault();
    if (inputRef.current?.value) {
      addTodos(inputRef.current.value);
    } else {
      console.error("Input value is undefined");
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" ref={inputRef}/>
      <button>Add Todo</button>
    </form>
  )
}
export default TodoForm