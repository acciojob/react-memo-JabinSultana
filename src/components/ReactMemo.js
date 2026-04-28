import React, { useState } from "react";

const ChildComponent = React.memo(({ count }) => {

  console.log("Child Rendered");

  return (
    <div>
      <h3>React.memo Example</h3>
      <p>Count Value: {count}</p>
    </div>
  );

});

const ReactMemo = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment Counter
      </button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      <ChildComponent count={count} />

    </div>
  );
};

export default ReactMemo;
