import React from "react";
import { TodosContextProvider } from "./state/Todos";
import TodosForm from "./components/TodosForm";
import TodoItem from "./components/TodoItem";

const ContextAPI03 = () => {
    const [todos, setTodos] = React.useState([]);

    const todoAdd = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    }

    const todoUpdate = (id, todo) => {
        setTodos((prev) => prev.map((e) => e.id === id ? todo : e))
    }

    const todoDelete = (id) => {
        setTodos((prev) => prev.filter((e) => e.id !== id))
    }

    const todoStatus = (id) => {
        setTodos((prev) => prev.map((e) => e.id === id ? { ...e, status: !e.status } : e))
    }

    React.useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));

        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    }, [])

    React.useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <TodosContextProvider value={{ todos, todoAdd, todoUpdate, todoDelete, todoStatus }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodosForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                            todos && todos.map((e, i) => (
                                <div key={i} className="w-full">
                                    <TodoItem todo={e} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </TodosContextProvider>
    )
}

export default ContextAPI03;