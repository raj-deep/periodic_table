import React from "react";
import "./Square.css"

interface SquareProps {
  symbol: string;
  name: string;
  number: number;
  className: string;
}

const Square: React.FC<SquareProps> = ({ symbol, name, number, className }) => {
  return (
    <button className={`square border-2 border-solid border-red-400 inline-block w-24 ${className}`}>
      <div>{number}</div>
      <div>{symbol}</div>
      <div>{name}</div>
    </button>
  );
};


export default Square;
