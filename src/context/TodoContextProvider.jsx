import React from 'react'
import { useState ,useEffect} from 'react'
import TodoContext from './TodoContext'
const TodoContextProvider=({children})=> {
   const [todos, settodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  //addTodo
  const addTodo=(todo)=>{
    //we need to have the previous state of 
    settodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  //deleteTodo
  const deleteTodo=(id)=>{
    settodos((prev)=>prev.filter(todo=>id!=todo.id))
  }
  //updatetodo
  const updateTodo=(id,todo)=>{
   settodos((prev)=>prev.map(prevtodo=>id==prevtodo.id?todo:prevtodo))
  }
  //completeTodo
  const completeTodo=(id)=>{
    settodos((prev)=>prev.map(prevtodo=>id==prevtodo.id?{...prevtodo,completed:!prevtodo.completed}:prevtodo))
  }
  return (
    <TodoContext.Provider value={{todos,addTodo,
    deleteTodo,updateTodo,completeTodo}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
