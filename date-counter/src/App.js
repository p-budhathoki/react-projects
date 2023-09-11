import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      {/* <p>Infinity and Beyond...</p> */}
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button> */}
        <span>Step : {step}</span>
        {/* <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* <span>Count : {count}</span> */}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}
