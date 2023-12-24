import React, { ChangeEventHandler } from "react";

interface IInputProps {
  onChange: ChangeEventHandler;
  htmlFor: string;
  title: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  errorMsg: string;
}

export const AgeCalculatorInput = ({
  onChange,
  htmlFor,
  title,
  type,
  name,
  id,
  placeholder,
  errorMsg,
}: IInputProps) => {
  return (
    <div>
      <div className="flex flex-col capitalize w-[100%] sm:w-36 ">
        <label htmlFor={htmlFor} className="text-lg font-medium">
          {title}
        </label>
        <input
          onChange={onChange}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="rounded outline outline-1 outline-[#dbdbdb] hover:outline-[#854dff] focus:outline-[#854dff] w-[100%] h-14 self-end pl-2 caret-[#dbdbdb] uppercase text-2xl font-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
      <p className="text-[10px] italic mt-2 xxs:text-sm text-[#ff5757]">
        {errorMsg}
      </p>
    </div>
  );
};
