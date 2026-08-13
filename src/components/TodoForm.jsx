import { Calendar, Flag, Plus } from "lucide-react";
import { useTodo } from "../context/TodoContext";
export default function TodoForm() {
  const {addTodo}=useTodo();
  
  return (
    <form className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-3 shadow-lg">

      <input
        type="text"
        placeholder="What needs to get done?"
        className="flex-1 bg-transparent text-white placeholder:text-zinc-500 outline-none"
      />
      <button
        type="submit"
        className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-lg text-white font-medium"
      >
        Add Task
        <Plus size={18} />
      </button>
    </form>
  );
}