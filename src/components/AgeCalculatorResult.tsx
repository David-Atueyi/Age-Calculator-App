import React from 'react'
import { AgeCalculatorResultTemplate } from './AgeCalculatorResultTemplate';

interface IAgeResult {
  year: string | number;
  month: string | number;
  day: string | number;
}

export const AgeCalculatorResult = ({year,month,day}:IAgeResult) => {
  return (
    <div className="font-extrabold text-4xl xxs:text-6xl xs:text-7xl md:text-8xl">
      <AgeCalculatorResultTemplate number={year} text='years'/>
      <AgeCalculatorResultTemplate number={month} text='months'/>
      <AgeCalculatorResultTemplate number={day} text='days'/>
    </div>
  );
}
