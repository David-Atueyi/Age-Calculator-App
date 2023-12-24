import React, { MouseEventHandler } from 'react'

interface IButtonProp {
  onClick:MouseEventHandler;
}

export const AgeCalculatorButton = ({onClick}:IButtonProp) => {
  return (
    <div className="relative flex justify-center md:justify-end md:w-[640px]">
      <div className=" w-[100%] h-[2px] bg-[#dbdbdb] absolute top-1/2 -translate-y-1/2  "></div>
      <button
        onClick={onClick}
        className="bg-[#854dff] rounded-full p-5 w-[70px] h-[70px] z-30 focus:bg-[#141414]"
      >
        <img
          src="icon-arrow.svg"
          alt=""
          className="object-scale-down w-[100%] h-[100%] "
        />
      </button>
    </div>
  );
}
