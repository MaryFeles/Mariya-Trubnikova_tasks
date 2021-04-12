import React, { useState } from "react";
import Game from "./Game";

function App() {
  const [stats, setStats] = useState([
    { id: 1, type: "health", name: "Здоровье", indicator: 50 },
    { id: 2, type: "thirst", name: "Жажда", indicator: 50 },
    { id: 3, type: "hungry", name: "Голод", indicator: 50 },
    { id: 4, type: "fatigue", name: "Усталость", indicator: 50 },
  ]);

  const controls = [
    {
      id: 1,
      type: "eat",
      color: "health",
      value: "Есть",
      actionList: [
        { id: 1, value: "яблоко", stats: { health: +5, hungry: -3 } },
        { id: 2, value: "салат", stats: { health: +10, hungry: -5 } },
        { id: 3, value: "пюрешка с котлеткой", stats: { health: +5, hungry: -10, thirst: +2 } },
        { id: 4, value: "гамбургер", stats: { health: -1, hungry: -10, thirst: +4 } },
      ],
    },
    {
      id: 2,
      type: "drink",
      color: "thirst",
      value: "Пить",
      actionList: [
        { id: 1, value: "вода", stats: { health: +5, thirst: -10 } },
        { id: 2, value: "кофе", stats: { health: -3, thirst: -3, fatigue: -10 } },
        { id: 3, value: "газировка", stats: { health: -5, thirst: -5 } },
      ],
    },
    {
      id: 3,
      type: "relax",
      color: "hungry",
      value: "Отдохнуть",
      actionList: [
        { id: 1, value: "поспать", stats: { health: +30, hungry: +15, thirst: +5, fatigue: -20 } },
        { id: 2, value: "заняться спортом", stats: { health: +20, hungry: +20, thirst: +25, fatigue: +30 } },
        { id: 3, value: "погулять", stats: { health: +15, hungry: +10, thirst: +10, fatigue: +5 } },
      ],
    },
    {
      id: 4,
      type: "work",
      color: "fatigue",
      value: "Работать",
      actionList: [
        { id: 1, value: "усердно", stats: { health: -25, hungry: +20, thirst: +20, fatigue: +30 } },
        { id: 2, value: "не напрягаясь", stats: { health: -5, hungry: +5, thirst: +5, fatigue: +10 } },
      ],
    },
  ];

  function changeStats(actionStats) {
    for (let statType in actionStats) {
      setStats(
        stats.map((stat) => {
          if (stat.type === statType) {
            if ((stat.indicator <= 100) && (stat.indicator >= 0)){
              stat.indicator += actionStats[statType];
            } 
            if (stat.indicator > 100) {
              stat.indicator = 100;
            } 
            if (stat.indicator < 0) {
              stat.indicator = 0;
            }
          }
          return stat;
        })
      );
    }
  }

  return (
    <div className="app">
      <h1 className="title">MiniGame</h1>
      <Game stats={stats} controls={controls} changeStats={changeStats} />
    </div>
  );
}

export default App;
