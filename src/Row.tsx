import React from "react";
import Square from "./Square";

interface RowProps {
  elements: {
    symbol: string;
    name: string;
    number: number;
  }[];
}

const Row: React.FC<RowProps> = ({ elements }) => {
  return (
    <div style={styles.row}>
      {elements.map((element) => (
        <Square
          key={element.number}
          symbol={element.symbol}
          name={element.name}
          className=""
          number={element.number}
        />
      ))}
    </div>
  );
};

const styles = {
  row: {
    display: "flex",
    justifyContent: "center",
  },
};

export default Row;
