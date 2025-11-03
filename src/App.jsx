import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import StatsCompiler from "./classes/StatsCompiler";

function App() {
  const [nums, setNums] = useState([]);

  const [stats, setStats] = useState(new StatsCompiler());

  function nnn(value) {
    setNums(value);
    console.log(nums);
  }
  useEffect(() => {}, [stats]);

  const add_dice_given = (dice) => {
    let dice_name;
    switch (dice) {
      case 4:
        dice_name = "d_four";
        break;
      case 6:
        dice_name = "d_six";
        break;
      case 8:
        dice_name = "d_eight";
        break;
      case 10:
        dice_name = "d_ten";
        break;
      case 12:
        dice_name = "d_twelve";
        break;
      case 20:
        dice_name = "d_twenty";
        break;
      default:
        console.log("invalid dice");
        return;
    }
    console.log("да");
    console.log(dice_name);
    const new_stats = new StatsCompiler();
    Object.assign(new_stats, stats);
    new_stats.dices_given_to_allies[dice_name] += 1;
    setStats(new_stats);
    console.log(stats);
  };

    const add_dice_rolled = (dice) => {
    let dice_name;
    switch (dice) {
      case 4:
        dice_name = "d_four";
        break;
      case 6:
        dice_name = "d_six";
        break;
      case 8:
        dice_name = "d_eight";
        break;
      case 10:
        dice_name = "d_ten";
        break;
      case 12:
        dice_name = "d_twelve";
        break;
      case 20:
        dice_name = "d_twenty";
        break;
      default:
        console.log("invalid dice");
        return;
    }
    console.log("да");
    console.log(dice_name);
    const new_stats = new StatsCompiler();
    Object.assign(new_stats, stats);
    new_stats.dices_rolled[dice_name] += 1;
    setStats(new_stats);
    console.log(stats);
  };

  const add_location_explored = (num) => {
    
    console.log("да");
    const new_stats = new StatsCompiler();
    Object.assign(new_stats, stats);
    new_stats.times_explored += num;
    setStats(new_stats);
    console.log(stats);
  };

  return (
    <div>
      <h1>Pathfinder Stats</h1>
      <h2>Дал союзнику</h2>
      <button
        onClick={() => {
          add_dice_given(4);
        }}
      >
        д4
      </button>
      <button
        onClick={() => {
          add_dice_given(6);
        }}
      >
        д6
      </button>
      <button
        onClick={() => {
          add_dice_given(8);
        }}
      >
        д8
      </button>
      <button
        onClick={() => {
          add_dice_given(10);
        }}
      >
        д10
      </button>
      <button
        onClick={() => {
          add_dice_given(12);
        }}
      >
        д12
      </button>
      <button
        onClick={() => {
          add_dice_given(20);
        }}
      >
        д20
      </button>

      <h2>Сам бросил</h2>
      <button
        onClick={() => {
          add_dice_rolled(4);
        }}
      >
        д4
      </button>
      <button
        onClick={() => {
          add_dice_rolled(6);
        }}
      >
        д6
      </button>
      <button
        onClick={() => {
          add_dice_rolled(8);
        }}
      >
        д8
      </button>
      <button
        onClick={() => {
          add_dice_rolled(10);
        }}
      >
        д10
      </button>
      <button
        onClick={() => {
          add_dice_rolled(12);
        }}
      >
        д12
      </button>
      <button
        onClick={() => {
          add_dice_rolled(20);
        }}
      >
        д20
      </button>
        <h2>Исследований сделано</h2>
         <button
        onClick={() => {
          add_location_explored(1);
        }}
      >+</button>
         <button
        onClick={() => {
          add_location_explored(-1);
        }}
      >-</button>
      <p>
        Я - полезный персонаж! Я исследовал <span>{stats.times_explored}</span> раз. В этой игре я бросил
        <span>{stats.dices_rolled.d_six}</span> d6,{" "}
        <span>{stats.dices_rolled.d_four}</span> d4,{" "}
        <span>{stats.dices_rolled.d_eight}</span> d8,{" "}
        <span>{stats.dices_rolled.d_ten}</span> d10,{" "}
        <span>{stats.dices_rolled.d_twelve}</span> d12,{" "}
        <span>{stats.dices_rolled.d_twenty}</span> d20,
      </p>
    </div>
  );
}

export default App;
