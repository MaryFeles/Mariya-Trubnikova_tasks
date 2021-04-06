import React from "react";
import Game from "./Game";

function App() {
  let stats = [
    { id: 1, type: "health", name: "Здоровье" },
    { id: 2, type: "thirst", name: "Жажда" },
    { id: 3, type: "hungry", name: "Голод" },
    { id: 4, type: "fatigue", name: "Усталость" },
  ];

  let buttons = [
    { id: 1, type: "health", name: "Есть" },
    { id: 2, type: "thirst", name: "Пить" },
    { id: 3, type: "hungry", name: "Отдохнуть" },
    { id: 4, type: "fatigue", name: "Работать" },
  ];

  return (
    <div className="app">
      <h1 className="title">MiniGame</h1>
      <Game stats={stats} buttons={buttons} />
    </div>
  );
}

export default App;
