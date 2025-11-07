import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import StatsInput from "./components/StatsInput";
import StatsCompiler from "./classes/StatsCompiler";
import { useEffect, useState } from "react";
import ToolsPanel from "./components/ToolsPanel";
import Conclusion from "./components/Conclusion";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    document.title = 'Pathfinder Stats'
  }, [])
 
  const [stats, setStats] = useState(() => {
    try {
      const savedStats = localStorage.getItem('stats');
      return savedStats ? Object.assign(new StatsCompiler(), JSON.parse(savedStats)) : new StatsCompiler();
    } catch (error) {
      console.error('Error loading stats from localStorage:', error);
      return new StatsCompiler();
    }
  });
  const [stats_changes_history, setStatsChangesHistory] = useState(() => {
    try {
      const savedHistory = localStorage.getItem('history');
      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch (error) {
      console.error('Error loading history from localStorage:', error);
      return [];
    }
  })


  const setStatsComplete = (value) => {
    const currentStatsCopy = JSON.parse(JSON.stringify(stats));

    const newHistory = [...stats_changes_history];
    newHistory.push({ value_copy: currentStatsCopy });
    
    if (newHistory.length > 25) {
      let removed = newHistory.shift()
    }

    console.log(newHistory, 'длина')
    setStats(value);
    setStatsChangesHistory(newHistory);


    localStorage.setItem('stats', JSON.stringify(stats))
    localStorage.setItem('history', JSON.stringify(stats_changes_history))
  }


  return (
    <div>
      <Navbar />
      <ToolsPanel stats={stats} setStatsComplete={setStatsComplete} history={stats_changes_history} setStatsChangesHistory={setStatsChangesHistory}/>
      <StatsInput stats={stats} setStatsComplete={setStatsComplete} />
      <Conclusion stats={stats} />
      <Footer />
    </div>
    
  );
}

export default App;
