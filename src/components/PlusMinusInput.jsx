import React from "react";
import StatsCompiler from "../classes/StatsCompiler";

const PlusMinusInput = (props) => {

  const add_plus_minus = (num) => {
    console.log("да");
    const new_stats = new StatsCompiler();
    Object.assign(new_stats, props.stats);
    new_stats[props.stat_param] += num;
    props.setStats(new_stats);
    console.log(props.stats);
    }

  ;
  return (
    <div className="flex flex-col">
      <h2>{props.name}</h2>
      <div className="flex justify-around items-center w-full">
        <div>
          <button
            onClick={() => {
              add_plus_minus(-1);
            }}
          >
            -
          </button>
        </div>
        <div>
            
          <button
            onClick={() => {
              add_plus_minus(1);
            }}
          >
            +
          </button>
        </div>
        
      </div>
        <h3 className="text-center py-2">{props.stats[props.stat_param]}</h3>
    </div>
  );
};

export default PlusMinusInput;
