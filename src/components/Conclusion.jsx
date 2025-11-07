import React, { useEffect, useState } from 'react'

const Conclusion = (props) => {
    
    useEffect(() => {
getLowestDiceRolles(stats.dices_given_to_allies)
getHighestDiceRolles(stats.dices_given_to_allies)
getLowestDiceRolles(stats.dices_rolled)
getHighestDiceRolles(stats.dices_rolled)
calculateHighestSummedValue()
calculateLowestSummedValue()
    }, [props.stats])
    let stats = props.stats

    const [lowestSelf, setLowestSelf] = useState(0)
    const [highestSelf, setHighestSelf] = useState(0)
    const [lowestAllies, setLowestAllies] = useState(0)
    const [highestAllies, setHighestAllies] = useState(0)
    const [highestSummedValue, setHighestSummedValue] = useState(0)
    const [lowestSummedValue, setLowestSummedValue] = useState(0)

const getLowestDiceRolles = (dice_set) => {
    let val = 0
    for (const key in dice_set) {
        val += dice_set[key]
    }

    switch (dice_set) {
        case stats.dices_given_to_allies:
            setLowestAllies(val)
            break;
        case stats.dices_rolled:
            setLowestSelf(val)

    }
    return val
}

const calculateHighestSummedValue = () => {
    setHighestSummedValue(highestAllies + highestSelf + stats.pluses_added) 
}
const calculateLowestSummedValue = () => {
    setLowestSummedValue(lowestAllies + lowestSelf + stats.pluses_added) 
}

const getHighestDiceRolles = (dice_set) => {

     const d4 = dice_set.d_four || 0;
    const d6 = dice_set.d_six || 0;
    const d8 = dice_set.d_eight || 0;
    const d10 = dice_set.d_ten || 0;
    const d12 = dice_set.d_twelve || 0;
    const d20 = dice_set.d_twenty || 0;

    let val = 0;
    val += d4 * 4 + d6 * 6 + d8 * 8 + d10 * 10 + d12 * 12 + d20 * 20;
    switch (dice_set) {
        case stats.dices_given_to_allies:
            setHighestAllies(val)
            break;
        case stats.dices_rolled:
            setHighestSelf(val)

    }
    console.log(val);
    return val;
}

  return (
    <div className='py-3 px-8 text-justify'>
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
        Выходит, что моя помощь кубанами дала союзникам от <span>{lowestAllies}</span> до <span>{highestAllies}</span> к проверке!
      </p>
      <p>Но и я сам хорош! Сам я бросил от <span>{lowestSelf}</span> до <span>{highestSelf}</span>, проходя свои проверки.</p>
      <p>Итого, моя общекубанно-плюсовая ценность в этой игре равна от <span>{lowestSummedValue}</span> до <span>{highestSummedValue}</span></p>
    </div>
  )
}

export default Conclusion
