import { Circle, CheckCircle, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";
import { set } from "react-hook-form";
export default function TodoItem({ todo }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.textMsg);

  const { completeTodo, updateTodo, deleteTodo } = useTodo();
  const completion = () => {
    completeTodo(todo.id)
  }
  const editing = () => {
    setIsEditing(true);
  }
  const deletion = () => {
    deleteTodo(todo.id)
  }
  const saveEdit = () => {
    updateTodo(todo.id, {
      ...todo,
      textMsg: editText
    });

    setIsEditing(false);
  };
  return (
    <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 hover:bg-zinc-800 transition">

      {/* Left Side */}
      <div className="flex items-center gap-4">
        <button
          onClick={completion}
        >
          {todo.completed ? (
            <CheckCircle size={22} className="text-green-500" />
          ) : (
            <Circle size={22} className="text-zinc-500" />
          )}
        </button>

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="text-lg text-white bg-transparent outline-none border-b border-violet-500"
          />
        ) : (
          <span className="text-lg text-white">
            {todo.textMsg}
          </span>
        )}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button
          className="text-blue-400 hover:text-blue-300"
          onClick={isEditing ? saveEdit : editing}
        >
          {isEditing ? "Save" : <Pencil size={18} />}
        </button>

        <button className="text-red-400 hover:text-red-300"
          onClick={deletion}>
          <Trash2 size={18} />
        </button>
      </div>

    </div>
  );
}