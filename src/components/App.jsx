import React, { useState } from "react";
import Game from "./Game";

function App() {
  const [stats, setStats] = useState([
    { id: 1, type: "health", name: "Здоровье", indicator: 50 },
    { id: 2, type: "thirst", name: "Жажда", indicator: 50 },
    { id: 3, type: "hungry", name: "Голод", indicator: 50 },
    { id: 4, type: "fatigue", name: "Усталость", indicator: 50 },
  ]);

  const buttons = [
    { id: 1, type: "eat", color: "health", name: "Есть" },
    { id: 2, type: "drink", color: "thirst", name: "Пить" },
    { id: 3, type: "relax", color: "hungry", name: "Отдохнуть" },
    { id: 4, type: "work", color: "fatigue", name: "Работать" },
  ];

  function changeStats() {
    setStats(
      stats.map((item) => {
        item.indicator += 10;
        return item;
      })
    );
  }

  function handleClick(typeBtn) {
    console.log(typeBtn);
    switch (typeBtn) {
      case "eat":
        changeStats();
        break;
      case "drink":
        return typeBtn;
        break;
      case "relax":
        return typeBtn;
        break;
      case "work":
        return typeBtn;
        break;
    }
  }

  return (
    <div className="app">
      <h1 className="title">MiniGame</h1>
      <Game stats={stats} buttons={buttons} handleClick={handleClick} />
    </div>
  );
}

export default App;
