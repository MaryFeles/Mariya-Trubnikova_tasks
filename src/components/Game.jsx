import React from "react";
import StatList from "./StatList";
import ButtonList from "./ButtonList";

class Game extends React.Component {
  constructor(props) {
    super(props);
    const { stats, buttons } = props;
    this.stats = stats;
    this.buttons = buttons;
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    switch (type) {
      case "eat": console.log(type);
        break;
      case "drink": console.log(type);
        break;
      case "relax": console.log(type);
        break;
      case "work": console.log(type);
        break;
    }
  }

  // decreaseHealth() {
  //   this.setState({ indicator: this.state.indicator - 2 })
  // }

  // decreaseThirst() {
  //   this.setState({ indicator: this.state.indicator + 1 })
  // }

  // decreaseHungry() {
  //   this.setState({ indicator: this.state.indicator - 10 })
  // }

  // decreaseFatigue() {
  //   this.setState({ indicator: this.state.indicator - 10 })
  // }

  // increaseThirst() {
  //   this.setState({ indicator: this.state.indicator + 30 })
  // }

  // increaseHungry() {
  //   this.setState({ indicator: this.state.indicator + 20 })
  // }

  render() {
    return (
      <div className="gameWrapper">
        <div className="col stats">
          <StatList stats={this.stats} clickedBtn={this.clickedBtn} />
        </div>
        <div className="col btns">
          <ButtonList buttons={this.buttons} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

// function Game(props) {
//   const { stats, buttons } = props;

//   function handleClick(type) {
//     switch (type) {
//       case "eat": console.log(type);
//         break;
//       case "drink": console.log(type);
//         break;
//       case "relax": console.log(type);
//         break;
//       case "work": console.log(type);
//         break;
//     }
//   }
//     return (
//       <div className="gameWrapper">
//         <div className="col stats">
//           <StatList stats={stats} />
//         </div>
//         <div className="col btns">
//           <ButtonList buttons={buttons} handleClick={handleClick} />
//         </div>
//       </div>
//     );
//   }

export default Game;
