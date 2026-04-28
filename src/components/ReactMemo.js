import React, { useState } from "react";

const Child = React.memo(({ count }) => {

  return (
    <div>
      <h3>React.memo Section</h3>
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
        placeholder="Type here"
      />

      <Child count={count} />

    </div>
  );
};

export default ReactMemo;
