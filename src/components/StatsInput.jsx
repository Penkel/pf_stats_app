import React from 'react'
import { useEffect, useState } from "react";
import StatsCompiler from "../classes/StatsCompiler";
import DiceLaneInput from './DiceLaneInput';
import PlusMinusInput from './PlusMinusInput';

const StatsImput = (props) => {

  let stats = props.stats
  let setStatsComplete = props.setStatsComplete
  return (
    <div className="flex flex-col items-center p-6">
      <DiceLaneInput name ='Сам кинул' dice_stat={stats.dices_rolled} stats={stats} setStats={setStatsComplete}/>
      <DiceLaneInput name ="Дал союзнику" dice_stat={stats.dices_given_to_allies} stats={stats} setStats={setStatsComplete}/>
      <PlusMinusInput name='Сделал исследование' stats={stats} setStats={setStatsComplete} stat_param={'times_explored'} />
      <PlusMinusInput name='Дал плюс к проверке' stats={stats} setStats={setStatsComplete} stat_param={'pluses_added'} />
      
    </div>
  )
}

export default StatsImput
