import { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const addNewTodoRef=useRef();
  const [todos, setTodos]=useState([]);
  const LOCAL_STORAGE_KEY='todosList';

  useEffect(()=>{
    let newtodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(newtodos && newtodos.length) setTodos(newtodos);
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  },[todos])

  const handleAddTodo=()=>{
    let todo=addNewTodoRef.current.value;
    addNewTodoRef.current.value=''
    setTodos(prevTodos=>{
     return [ ...prevTodos, {id: uuidv4(), value:todo, completed:false}]
    });
  }

  const handleClearTodos=()=>{
    let newTodos=todos.filter(todo=>todo.completed===false)
    setTodos(newTodos)
  }

  const handleClicked=(id)=>{
    let newTodos=[...todos]
    let myTodo=newTodos.find(todo=>todo.id === id);
    myTodo.completed=true;
    setTodos(newTodos);
  }

  return (
    <>
    <TodoList todos={todos} handleClicked={handleClicked}/>
    <input type="text" ref={addNewTodoRef} />
    <button onClick={handleAddTodo} >Add Todo</button>
    <button onClick={handleClearTodos} >Clear Completed Todo</button>
   </>
  );
}

export default App;
