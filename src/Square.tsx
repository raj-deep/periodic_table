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
      className={`inline-block flex-row text-xs p-1 pb-0 relative rounded ${className} ${
        isPressed ? "blinking" : "square"
      }`}
      // style={{ flex: "1 1 5%" }}
    >
      <div className="absolute top-2 left-2 position-0">{number}</div>
      <div className="text-2xl font-bold m-1" >{symbol}</div>
      <div
        className="flex-wrap break-words pb-1 pr-2"
        style={{ width: "calc(84vw/18)" }}
      >
        {name}
      </div>
    </button>
  );
};

export default Square;
