import React, { useEffect, useState } from "react";

const Conclusion = (props) => {
  useEffect(() => {
    if (stats) {
      const lowestSelfVal = getLowestDiceRolles(stats.dices_rolled);
      const highestSelfVal = getHighestDiceRolles(stats.dices_rolled);
      const lowestAlliesVal = getLowestDiceRolles(stats.dices_given_to_allies);
      const highestAlliesVal = getHighestDiceRolles(
        stats.dices_given_to_allies
      );

      setLowestSelf(lowestSelfVal);
      setHighestSelf(highestSelfVal);
      setLowestAllies(lowestAlliesVal);
      setHighestAllies(highestAlliesVal);

      const highestSum = highestAlliesVal + highestSelfVal + stats.pluses_added;
      const lowestSum = lowestAlliesVal + lowestSelfVal + stats.pluses_added;

      setHighestSummedValue(highestSum);
      setLowestSummedValue(lowestSum);
    }
  }, [props.stats]);
  let stats = props.stats;

  const [lowestSelf, setLowestSelf] = useState(0);
  const [highestSelf, setHighestSelf] = useState(0);
  const [lowestAllies, setLowestAllies] = useState(0);
  const [highestAllies, setHighestAllies] = useState(0);
  const [highestSummedValue, setHighestSummedValue] = useState(0);
  const [lowestSummedValue, setLowestSummedValue] = useState(0);

  const getLowestDiceRolles = (dice_set) => {
    if (!dice_set) return 0
        
        const d4 = dice_set.d_four || 0
        const d6 = dice_set.d_six || 0
        const d8 = dice_set.d_eight || 0
        const d10 = dice_set.d_ten || 0
        const d12 = dice_set.d_twelve || 0
        const d20 = dice_set.d_twenty || 0

        let val = 0
        val += d4 * 1  
        val += d6 * 1  
        val += d8 * 1  
        val += d10 * 1 
        val += d12 * 1 
        val += d20 * 1 
        
        return val

  };

  const calculateHighestSummedValue = () => {
    setHighestSummedValue(highestAllies + highestSelf + stats.pluses_added);
  };
  const calculateLowestSummedValue = () => {
    setLowestSummedValue(lowestAllies + lowestSelf + stats.pluses_added);
  };

  const getHighestDiceRolles = (dice_set) => {
    const d4 = dice_set.d_four || 0;
    const d6 = dice_set.d_six || 0;
    const d8 = dice_set.d_eight || 0;
    const d10 = dice_set.d_ten || 0;
    const d12 = dice_set.d_twelve || 0;
    const d20 = dice_set.d_twenty || 0;

    let val = 0
        val += d4 * 4  
        val += d6 * 6   
        val += d8 * 8   
        val += d10 * 10 
        val += d12 * 12 
        val += d20 * 20 
        
        return val
  };

  return (
    <div className="py-3 px-8 text-justify">
      <p>Я - полезный персонаж! </p>
      <p>
        Я исследовал <span>{stats.times_explored}</span> раз.
      </p>
      <p>
        Я дал <span>{stats.pluses_added}</span> плюсов.
      </p>
      <p>
        В этой игре я бросил <span>{stats.dices_rolled.d_four}</span> d4,{" "}
        <span>{stats.dices_rolled.d_six}</span> d6,{" "}
        <span>{stats.dices_rolled.d_eight}</span> d8,{" "}
        <span>{stats.dices_rolled.d_ten}</span> d10,{" "}
        <span>{stats.dices_rolled.d_twelve}</span> d12,{" "}
        <span>{stats.dices_rolled.d_twenty}</span> d20,
      </p>
      <p>
        В этой игре я дал <span>{stats.dices_given_to_allies.d_four}</span> d4,{" "}
        <span>{stats.dices_given_to_allies.d_six}</span> d6,{" "}
        <span>{stats.dices_given_to_allies.d_eight}</span> d8,{" "}
        <span>{stats.dices_given_to_allies.d_ten}</span> d10,{" "}
        <span>{stats.dices_given_to_allies.d_twelve}</span> d12,{" "}
        <span>{stats.dices_given_to_allies.d_twenty}</span> d20,
      </p>
      <p>
        Выходит, что моя помощь кубанами дала союзникам от{" "}
        <span>{lowestAllies}</span> до <span>{highestAllies}</span> к проверке!
      </p>
      <p>
        Но и я сам хорош! Сам я бросил от <span>{lowestSelf}</span> до{" "}
        <span>{highestSelf}</span>, проходя свои проверки.
      </p>
      <p>
        Итого, моя общекубанно-плюсовая ценность в этой игре равна от{" "}
        <span>{lowestSummedValue}</span> до <span>{highestSummedValue}</span>
      </p>
    </div>
  );
};

export default Conclusion;
