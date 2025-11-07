import React from "react";

const DiceBtn = (props) => {
  const set_name = (dice) => {
    let dice_name;
    switch (dice) {
      case 4:
        dice_name = "d_four";
        break;
      case 6:
        dice_name = "d_six";
        break;
      case 8:
        dice_name = "d_eight";
        break;
      case 10:
        dice_name = "d_ten";
        break;
      case 12:
        dice_name = "d_twelve";
        break;
      case 20:
        dice_name = "d_twenty";
        break;
      default:
        console.log("invalid dice");
        return;
    }
    return dice_name;
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          props.add_dice(props.dice);
        }}
      >
        d{props.dice}
      </button>
      <h3 className="text-center">{props.stats[set_name(props.dice)]}</h3>
    </div>
  );
};

export default DiceBtn;
