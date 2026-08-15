import { Calendar, Flag, Plus } from "lucide-react";
import { useTodo } from "../context/TodoContext";
import { useState } from "react";
export default function TodoForm() {
  const [textMsg,setTextMsg]=useState("")
  const {addTodo}=useTodo();
  const addingtodo=(e)=>{
    e.preventDefault();
    if(!textMsg)return;
    addTodo({textMsg,completed:false});
    setTextMsg("")
  }
  return (
    <form onSubmit={addingtodo}
    className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-3 shadow-lg">

      <input
        type="text"
        placeholder="What needs to get done?"
        value={textMsg}
        className="flex-1 bg-transparent text-white placeholder:text-zinc-500 outline-none"
        onChange={(e)=>setTextMsg(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center gap-2
         bg-violet-600 hover:bg-violet-700 
         px-5 py-2 rounded-lg text-white 
         font-medium"
        
      >
        Add Task
        <Plus size={18} />
      </button>
    </form>
  );
}