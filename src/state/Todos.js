import React from "react";

export const TodosContext = React.createContext({
    todos: {
        id: 1,
        todo: "I have to go Market",
        status: false
    },
    todoAdd: (todo) => { },
    todoUpdate: (id, todo) => { },
    todoDelete: (id) => { },
    todoStatus: (id) => { },
});

export const TodosContextProvider = TodosContext.Provider;

export const useTodosContext = () => {
    return React.useContext(TodosContext)
}