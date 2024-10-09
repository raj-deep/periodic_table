import React from "react";
import "./Square.css";

interface SquareProps {
  symbol: string;
  name: string;
  number: number;
  className: string;
  isPressed: boolean;
}

const Square: React.FC<SquareProps> = ({
  symbol,
  name,
  number,
  className,
  isPressed,
}) => {
  return (
    <button
      className={`inline-block w-20 flex-row text-xs p-2 relative ${className} ${
        isPressed ? "blinking" : "square"
      }`}
      // style={{ flex: "1 1 5%" }}
    >
      <div className="absolute top-2 left-2 text-xs position-0">{number}</div>
      <div className="font-bold text-xl">{symbol}</div>
      <div className="text-xs">{name}</div>
    </button>
  );
};

export default Square;
