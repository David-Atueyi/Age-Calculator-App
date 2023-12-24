import React, { useState } from "react";
import {
  AgeCalculatorAppInputsContainer,
  dayValue,
  monthValue,
  yearValue,
} from "./AgeCalculatorAppInputsContainer";
import { AgeCalculatorButton } from "./AgeCalculatorButton";
import { AgeCalculatorResult } from "./AgeCalculatorResult";

export const AgeCalculatorAppContainer = () => {
  const [years, setYear] = useState<string | number>("- -");
  const [months, setMonth] = useState<string | number>("- -");
  const [day, setDay] = useState<string | number>("- -");

  const calculateAgeDifference = () => {
    if (dayValue && monthValue && yearValue) {
      // 
      const enteredDate = new Date(`${yearValue}-${monthValue}-${dayValue}`);
      const currentDate = new Date();

      // Calculate the difference in milliseconds
      const differenceInMilliseconds =
        currentDate.getTime() - enteredDate.getTime();

      // Convert milliseconds to seconds, minutes, hours, and days
      const seconds = Math.floor(differenceInMilliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      // Calculate years, months, and remaining days
      const remainingYears = Math.floor(days / 365);
      const remainingMonths = Math.floor((days % 365) / 30);
      const remainingDays = days % 30;

      //
      setYear(remainingYears);
      setMonth(remainingMonths);
      setDay(remainingDays);
      // 
    } else {
      setYear("- -");
      setMonth("- -");
      setDay("- -");
    }
  };

  //
  return (
    <div className="bg-[#ffffff] font-Poppins w-auto h-auto p-11 rounded-3xl rounded-br-[130px] sm:rounded-br-[200px] grid gap-5">
      <AgeCalculatorAppInputsContainer />
      <AgeCalculatorButton onClick={calculateAgeDifference} />
      <AgeCalculatorResult year={years} month={months} day={day} />
    </div>
  );
};
