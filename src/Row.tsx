import React from "react";
import Square from "./Square";

interface Element {
  symbol: string;
  name: string;
  number: number;
  className: string;
}

interface RowProps {
  elements: Element[]; // Array of elements
  isPressed: boolean; // Single boolean
}

const Row: React.FC<RowProps> = ({ elements, isPressed }) => {
  return (
    <div className="flex flex-wrap justify-between w-full mt-1">
      {elements.map((element) => (
        <Square
          key={element.number}
          symbol={element.symbol}
          name={element.name}
          className={element.className}
          number={element.number}
          isPressed={isPressed} // Pass the isPressed prop directly
        />
      ))}
    </div>
  );
};

export default Row;
