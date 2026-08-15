import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem  from './components/TodoItem'
import TodoContext from './context/TodoContext'
import TodoContextProvider from './context/TodoContextProvider'
import { useTodo } from './context/TodoContext'

function App() {
 const { todos } = useTodo();
  return (
    
    <div className="min-h-screen bg-black flex justify-center py-10">
      <div className="w-full max-w-3xl px-4 space-y-4">
     <TodoForm/>
     {
      todos.map((todo)=>
      <div key={todo.id}>
        <TodoItem todo={todo}/>
      </div>)
     }
     
     </div>
     </div>
  )
}

export default App
