import { createContext,useContext } from "react"
const TodoContext=createContext({
  todos:[{
    id:1,
    textMsg:"javascript",
    completed:true
  }],
  addTodo:(todo)=>{},
  deleteTodo:(id)=>{},
  updateTodo:(id,textMsg)=>{},
  completeTodo:(id)=>{},
})
export const useTodo=()=>{
  return useContext()
}
export default TodoContext;