import Todo from "./Todo"


export default function TodoList({todos, handleClicked}) {
  return (
    todos.map((todo)=>{
            return <Todo key={todo.id} id={todo.id} value={todo.value} checked={todo.completed} handleClicked={handleClicked}/>
    })
  )
}
