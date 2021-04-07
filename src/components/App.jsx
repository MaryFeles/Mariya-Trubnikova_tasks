import React from "react";
import Game from "./Game";

function App() {
  let stats = [
    { id: 1, type: "health", name: "Здоровье", indicator: 50 },
    { id: 2, type: "thirst", name: "Жажда", indicator: 50 },
    { id: 3, type: "hungry", name: "Голод", indicator: 50 },
    { id: 4, type: "fatigue", name: "Усталость", indicator: 50 },
  ];

  let buttons = [
    { id: 1, type: "eat", color: "health", name: "Есть" },
    { id: 2, type: "drink", color: "thirst", name: "Пить" },
    { id: 3, type: "relax", color: "hungry", name: "Отдохнуть" },
    { id: 4, type: "work", color: "fatigue", name: "Работать" },
  ];

  

  return (
    <div className="app">
      <h1 className="title">MiniGame</h1>
      <Game stats={stats} buttons={buttons} />
    </div>
  );
}

export default App;
