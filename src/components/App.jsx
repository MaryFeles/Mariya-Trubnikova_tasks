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

  // function increase(stat, value) {
  // }

  // function decrease(stat, value) {
  // }

  function changeStats(action) {
    setStats(
      stats.map((item) => {
        switch (action) {
          case "eat":
            if (item.type === 'health') item.indicator -= 2;
            if (item.type === 'hungry') item.indicator -= 10;
            break;
          case "drink":
            if (item.type === 'health') item.indicator += 1;
            if (item.type === 'thirst') item.indicator -= 10;
            break;
          case "relax":
            if (item.type === 'health') item.indicator += 6;
            if (item.type === 'thirst') item.indicator += 1;
            if (item.type === 'hungry') item.indicator += 1;
            if (item.type === 'fatigue') item.indicator -= 25;
            break;
          case "work":
            if (item.type === 'health') item.indicator -= 5;
            if (item.type === 'hungry') item.indicator += 10;
            if (item.type === 'thirst') item.indicator += 30;
            if (item.type === 'fatigue') item.indicator += 25;
            break;
        }

        return item;
      })
    );
  }

  return (
    <div className="app">
      <h1 className="title">MiniGame</h1>
      <Game stats={stats} buttons={buttons} handleClick={changeStats} />
    </div>
  );
}

export default App;
