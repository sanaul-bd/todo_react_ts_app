import { useState, type FormEvent } from "react";

const AddTodo = () => {
    const [todo, setTodo] = useState("");
    console.log(todo);

    // func
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const handleAddTodo(todo);
        setTodo("")
    };
    return (
        <form onSubmit={(e) => handleFormSubmit}>
            <input
                type="text"
                name=""
                id=""
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
        // {todo}
    );
};

export default AddTodo;
