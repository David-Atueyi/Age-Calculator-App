import React, { ChangeEvent, useState } from "react";
import { AgeCalculatorInput } from "./AgeCalculatorInput";

export let dayValue: number | undefined;
export let monthValue: number | undefined;
export let yearValue: number | undefined;
const dayRegexPattern: RegExp = /^(0?[1-9]|[12]\d|3[01])$/;
const monthRegexPattern: RegExp = /^(0?[1-9]|1[0-2])$/;

export const AgeCalculatorAppInputsContainer = () => {
  const [dayInputErrorMsg, setDayInputErrorMsg] = useState("");
  const [monthInputErrorMsg, setMonthInputErrorMsg] = useState("");
  const [yearInputErrorMsg, setYearInputErrorMsg] = useState("");
  //
  const getUserDayInput = (e: ChangeEvent) => {
    const userDayInput = e.target as HTMLInputElement;
    const userDayInputValue = userDayInput.value;
    if (!dayRegexPattern.test(userDayInputValue)) {
      setDayInputErrorMsg("Invalid Day (1 - 31)");
      dayValue = undefined;
    } else {
      setDayInputErrorMsg("");
      dayValue = Number(userDayInputValue);
    }
  };
  //
  const getUserMonthInput = (e: ChangeEvent) => {
    const userMonthInput = e.target as HTMLInputElement;
    const userMonthInputValue = userMonthInput.value;
    if (!monthRegexPattern.test(userMonthInputValue)) {
      setMonthInputErrorMsg("Invalid Month (1 - 12)");
      monthValue = undefined;
    } else {
      setMonthInputErrorMsg("");
      monthValue = Number(userMonthInputValue);
    }
  };
  //
  const getUserYearInput = (e: ChangeEvent) => {
    const userYearInput = e.target as HTMLInputElement;
    const userYearInputValue = Number(userYearInput.value);
    if (
      userYearInputValue < 1800 ||
      userYearInputValue > new Date().getFullYear()
    ) {
      setYearInputErrorMsg("Invalid Year (From 1800 - Current Year)");
      yearValue = undefined;
    } else {
      setYearInputErrorMsg("");
      yearValue = userYearInputValue;
    }
  };


  // //
  return (
    <div className="flex gap-x-8">
      <AgeCalculatorInput
        onChange={getUserDayInput}
        htmlFor="day"
        title="day"
        type="number"
        name="day"
        id="day"
        placeholder="dd"
        errorMsg={dayInputErrorMsg}
      />
      <AgeCalculatorInput
        onChange={getUserMonthInput}
        htmlFor="month"
        title="month"
        type="number"
        name="month"
        id="month"
        placeholder="mm"
        errorMsg={monthInputErrorMsg}
      />
      <AgeCalculatorInput
        onChange={getUserYearInput}
        htmlFor="year"
        title="year"
        type="number"
        name="year"
        id="year"
        placeholder="yyyy"
        errorMsg={yearInputErrorMsg}
      />
    </div>
  );
};
