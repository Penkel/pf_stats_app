import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
const [nums, setNums] = useState([])

function nnn(value) {
setNums(value)
console.log(nums)
}

return (
    <div>
      <h1>Pathfinder Stats</h1>
      <button onClick={() => {nums.push(1); console.log(nums)}}>Нажать</button>
    </div>
  );
}

export default App;
