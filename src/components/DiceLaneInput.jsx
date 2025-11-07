import React from "react";
import StatsCompiler from "../classes/StatsCompiler";
import DiceBtn from "../elements/DiceBtn";
import nuli_audio from "../audio/nuli_1.mp3";

const DiceLaneInput = (props) => {
  const CHANCE_TO_NULI = 5;

  const randomDemandsNuli = () => {
    console.log('рандом')
    const random = Math.floor(Math.random() * 100) + 1;
    console.log(random, "рандом");
    return random <= CHANCE_TO_NULI;
  };

  const play_nuliiiii = () => {
    if (randomDemandsNuli()) {
      const randomNum = Math.floor(Math.random() * 5) + 1;
      console.log("НУЛИИИИИ", randomNum);
      try {
        const sound = require(`../audio/nuli_${randomNum}.mp3`);
        const audio = new Audio(sound.default || sound);
        audio.play().catch((err) => {
          console.error("Audio play failed:", err);
        });
      } catch (err) {
        console.error("Sound loading error:", err);
      }
    }
  };

  const add_dice = (dice) => {
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
        play_nuliiiii();
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
    console.log("да");
    console.log(dice_name);
    const new_stats = new StatsCompiler();
    Object.assign(new_stats, props.stats);
    props.dice_stat[dice_name] += 1;
    props.setStats(new_stats);
    console.log(props.stats);
  };

  return (
    <div>
      <h2 className="text-center">{props.name}</h2>
      <div className="btn-row">
        <DiceBtn stats={props.dice_stat} add_dice={add_dice} dice={4} />
        <DiceBtn stats={props.dice_stat} add_dice={add_dice} dice={6} />
        <DiceBtn stats={props.dice_stat} add_dice={add_dice} dice={8} />
        <DiceBtn stats={props.dice_stat} add_dice={add_dice} dice={10} />
        <DiceBtn stats={props.dice_stat} add_dice={add_dice} dice={12} />
        <DiceBtn stats={props.dice_stat} add_dice={add_dice} dice={20} />
      </div>
    </div>
  );
};

export default DiceLaneInput;
