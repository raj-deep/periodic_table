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
      className={`inline-block flex-row text-xs p-1 pb-0 relative rounded !min-h-[10vh] ${className} ${
        isPressed ? "blinking" : "square"
      }`}
      // style={{ flex: "1 1 5%" }}
    >
      <div className="absolute top-2 left-1" style={{ fontSize: "1.7vh" }}>
        {number}
      </div>
      <div className="font-bold m-1 pt-[1vh]" style={{ fontSize: "3vh" }}>
        {symbol}
      </div>
      <div
        className="flex-wrap break-words pb-[1vh] pt-[0.7vh] pr-[2vh]"
        style={{ width: "calc(84vw/18)", fontSize: "1.5vh" }}
      >
        {name}
      </div>
    </button>
  );
};

export default Square;
