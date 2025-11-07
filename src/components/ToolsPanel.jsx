import React from "react";
import { GrReturn } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import StatsCompiler from "../classes/StatsCompiler";
import { useEffect } from "react";

const ToolsPanel = (props) => {
  let stats = props.stats;
  let setStats = props.setStatsComplete;
  let history = props.history;
  let setHistory = props.setStatsChangesHistory;

  const backToPrevStat = () => {
    const new_history = [...history];
    new_history.pop();
    const previousStat = new_history[new_history.length - 1] 
    const statToRestore = Object.assign(new StatsCompiler(), previousStat.value_copy);
    console.log("возврат", previousStat);
    setStats(statToRestore);
    setHistory(new_history);
  };

const isBackBtnDisabled = () => {
    console.log(history.length <= 1, 'мда')
     return history.length <= 1
}

  const reset = () => {
    if (window.confirm('Точно удалить?')) {
        
        setStats(new StatsCompiler)
    }
  };


  return (
    <div>
      <button
        className="btn-tools"
          disabled={isBackBtnDisabled()}

        onClick={backToPrevStat}
      >
        <GrReturn />
      </button>
      <button className="btn-tools" onClick={reset}>
        <MdDelete />
      </button>
    </div>
  );
};

export default ToolsPanel;
