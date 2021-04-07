import React from "react";

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     const { type, name, color, handleClick } = props;
//     this.buttonClasses = ["btns__item", "btn", "btn--" + color, "bgc-" + color];
//     this.name = name;
//     this.type = type;
//     // this.handleClick = this.handleClick.bind(this);
//     this.handleClick = handleClick;
//   }

//   // handleClick(type) {
//   //   switch (type) {
//   //     case "eat": console.log(type);
//   //       break;
//   //     case "drink": console.log(type);
//   //       break;
//   //     case "relax": console.log(type);
//   //       break;
//   //     case "work": console.log(type);
//   //       break;
//   //   }

//   // }

//   render() {
//     return (
//       <button className={this.buttonClasses.join(" ")} onClick={() => this.handleClick('type')}>
//         {this.name}
//       </button>
//     );
//   }
// }

function Button(props) {
  const { type, name, color, onClick } = props;
  let buttonClasses = ["btns__item", "btn", "btn--" + color, "bgc-" + color];
  return (
    <button className={buttonClasses.join(" ")} onClick={() => onClick(type)}>
      {name}
    </button>
  );
}

export default Button;
