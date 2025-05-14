const Todo:React.FC<{todo: string}> = (props) => {
  return(
    <p>{props.todo}</p>  
  )
}
export default Todo;