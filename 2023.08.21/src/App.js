import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("Tekstas");
  return (
    <div>
      <form>
        <input type="text" onChange={(e) => setText(e.target.value)}></input>
      </form>
      <div>{text}</div>
    </div>
  );
}

export default App;
