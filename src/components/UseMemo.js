import React, { useState, useMemo } from "react";

const UseMemo = () => {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTask = () => {

    if (input.length > 5) {
      setTasks([...tasks, input]);
      setInput("");
    }

  };

  // Expensive calculation
  const calculation = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>

      <h3>useMemo Section</h3>

      <p>Count: {count}</p>

      <button onClick={increment}>
        Increment
      </button>

      <p>Calculation: {calculation}</p>

      <hr />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>
        Submit
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

    </div>
  );
};

export default UseMemo;
