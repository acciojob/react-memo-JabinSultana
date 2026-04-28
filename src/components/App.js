import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {

  const [todos, setTodos] = useState(["Todo 1"]);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  return (
    <div>

      <h2>Todo List</h2>

      <button onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <hr />

      <UseMemo />

      <hr />

      <ReactMemo />

    </div>
  );
};

export default App;
