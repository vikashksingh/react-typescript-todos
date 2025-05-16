import classes from "./todo.module.css";
const Todo: React.FC<{
  todo: string;
  removeTodo: (event: React.MouseEvent) => void;
}> = ({ todo, removeTodo }) => {
  return (
    <li className={classes.todo} onClick={removeTodo}>
      {todo}
    </li>
  );
};
export default Todo;
