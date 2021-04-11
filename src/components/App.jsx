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

  function changeStat(statType, operation, value) {
    setStats(
      stats.map((item) => {
        if (operation === "plus") {
          if (item.indicator < 100) {
            item.type === statType && (item.indicator += value);
          } else item.indicator = 100;
        } else if (operation === "minus") {
          if (item.indicator > 0) {
            item.type === statType && (item.indicator -= value);
          } else item.indicator = 0;
        }

        return item;
      })
    );
  }

  function handleClick(action) {
    switch (action) {
      case "eat":
        changeStat("health", "minus", 2);
        changeStat("hungry", "minus", 10);
        break;
      case "drink":
        changeStat("health", "plus", 1);
        changeStat("thirst", "minus", 10);
        break;
      case "relax":
        changeStat("health", "plus", 4);
        changeStat("thirst", "plus", 5);
        changeStat("hungry", "plus", 5);
        changeStat("fatigue", "minus", 25);
        break;
      case "work":
        changeStat("health", "minus", 5);
        changeStat("hungry", "plus", 10);
        changeStat("thirst", "plus", 30);
        changeStat("fatigue", "plus", 25);
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
