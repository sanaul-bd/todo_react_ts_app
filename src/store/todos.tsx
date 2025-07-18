import { createContext, type ReactNode } from "react";

export type TodosProviderProps = {
    children: ReactNode
}

export type Todo = {
    id: string;
    task: string;
    complete: boolean;
    createdAt: Date;
};

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void
}

export const todosContext = createContext<TodosContext | null>(null);
export const TodosProvider = ({ children }: TodosProviderProps) => {
    return <todosContext.Provider value={{}}>
        {children}
    </todosContext.Provider>
}