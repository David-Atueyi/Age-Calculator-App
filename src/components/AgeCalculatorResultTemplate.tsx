import React from "react";

interface IResultTemplateProps {
  number: string | number;
  text: string;
}

export const AgeCalculatorResultTemplate = ({
  number,
  text,
}: IResultTemplateProps) => {
  return (
    <p>
      <span className="text-[#854dff]">{number}</span> {text}
    </p>
  );
};
