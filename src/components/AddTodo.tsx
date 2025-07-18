import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  console.log(todo);
  const handleFormSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {todo}
    </div>
  );
};

export default AddTodo;
