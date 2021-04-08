import React from "react";

// class Stat extends React.Component {
//   constructor(props) {
//     super(props);
//     const { type, name, indicator} = props;
//     this.name = name;
//     this.statClasses = ["stats__item", "stat", "stat--" + type];
//     this.statusBarClasses = ["stats__indicator", "bgc-" + type];

//     this.indicator = indicator;
//   }

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

//   render() {
//     console.log(this.indicator)
//     return (
//       <li className={this.statClasses.join(" ")}>
//         <span className="stats__name">{this.name}</span>
//         <div className="stats__indicator-wrapper">
//           <div
//             className={this.statusBarClasses.join(" ")}
//             style={{ width: this.indicator + '%' }}
//             onHealthChange={this.decreaseHealth}>
//           </div>
//         </div>
//       </li>
//     );
//   }
// }

function Stat (props) {
  const { type, name, indicator } = props;
  let statClasses = ["stats__item", "stat", "stat--" + type];
  let statIndicatorClasses = ["stats__indicator", "bgc-" + type];
  return (
    <li className={statClasses.join(" ")}>
      <span className="stats__name">{name}</span>
      <div className="stats__indicator-wrapper">
        <div
          className={statIndicatorClasses.join(" ")}
          style={{ width: indicator + "%" }}
        ></div>
      </div>
    </li>
  );
}

export default Stat;
