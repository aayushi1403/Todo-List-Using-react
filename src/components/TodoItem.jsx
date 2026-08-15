import { Circle, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";
export default function TodoItem({todo}) {


  const {completeTodo,updateTodo,deleteTodo}=useTodo();

  return (
    <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 hover:bg-zinc-800 transition">

      {/* Left Side */}
      <div className="flex items-center gap-4">
        <button>
          <Circle size={22} className="text-zinc-500" />
        </button>

        <span className="text-lg text-white">
          {todo.textMsg}
        </span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="text-blue-400 hover:text-blue-300">
          <Pencil size={18} />
        </button>

        <button className="text-red-400 hover:text-red-300">
          <Trash2 size={18} />
        </button>
      </div>

    </div>
  );
}