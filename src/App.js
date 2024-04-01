import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(2);
  const addValue = () => {
    setCount(count + 1);
  };
  const removeValue = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="App">
        <h1>Welcome to our Counter app!</h1>
        <h1>Counter Value : {count}</h1>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
