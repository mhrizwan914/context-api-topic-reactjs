import React from "react";
import { useTodosContext } from "../state/Todos"

const TodoItem = ({ todo }) => {
    const [todoContent, setTodoContent] = React.useState(todo.todo);
    const [isTodoEditable, setIsTodoEditable] = React.useState(false);
    const { todoDelete, todoUpdate, todoStatus } = useTodosContext();
    const handleTodoUpdate = () => {
        setIsTodoEditable(true);
        todoUpdate(todo.id, { ...todoContent, todo: todoContent })
        setIsTodoEditable(false);
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.status ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.status}
                onChange={() => todoStatus(todo.id)}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.status ? "line-through" : ""}`}
                value={todoContent}
                onChange={(e) => setTodoContent(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.status) return;

                    if (isTodoEditable) {
                        handleTodoUpdate();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.status}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => todoDelete(todo.id)}
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItem