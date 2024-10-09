import React from "react";
import Row from "./Row";
import Square from "./Square";

const App: React.FC = () => {
  // Example data for rows
  const periodicTableData = [
    [
      { symbol: "H", name: "Hydrogen", number: 1 },
      { symbol: "He", name: "Helium", number: 2 },
    ],
    [
      { symbol: "Li", name: "Lithium", number: 3 },
      { symbol: "Be", name: "Beryllium", number: 4 },
      { symbol: "B", name: "Boron", number: 5 },
      { symbol: "C", name: "Carbon", number: 6 },
    ],
    // More rows...
  ];

  return (
    <>
      <div>
        <div id="row1" className="relative">
          <Square className="nonMetals" symbol="H" number={1} name="Hydrogen" />
          <Square
            className="absolute right-0 nobleGases"
            symbol="He"
            number={2}
            name="Helium"
          />
        </div>
        <div id="row2" className="flex justify-between">
          <div className="component1 flex space-x-1">
            <Square
              className="AlMetals"
              symbol="Li"
              number={3}
              name="Lithium"
            />
            <Square
              className="AlEarthMetals"
              symbol="Be"
              number={4}
              name="Beryllium"
            />
          </div>
          <div className="component2 flex space-x-1">
            <Square className="metalloid" symbol="B" number={5} name="Boron" />
            <Square className="nonMetal" symbol="C" number={6} name="Carbon" />
            <Square
              className="nonMetal"
              symbol="N"
              number={7}
              name="Nitrogen"
            />
            <Square className="nonMetal" symbol="O" number={8} name="Oxygen" />
            <Square
              className="nonMetal"
              symbol="F"
              number={9}
              name="Fluorine"
            />
            <Square
              className="nobleGases"
              symbol="Ne"
              number={10}
              name="Neon"
            />
          </div>
        </div>

        <div id="row3" className="flex justify-between">
          <div className="component1 flex space-x-1">
            <Square
              className="AlMetals"
              symbol="Na"
              number={11}
              name="Sodium"
            />
            <Square
              className="AlEarthMetals"
              symbol="Mg"
              number={12}
              name="Magnesium"
            />
          </div>
          <div className="component2 flex space-x-1">
            <Square
              className="metalloid"
              symbol="Al"
              number={13}
              name="Aluminum"
            />
            <Square
              className="nonMetal"
              symbol="Si"
              number={14}
              name="Silicon"
            />
            <Square
              className="nonMetal"
              symbol="P"
              number={15}
              name="Phosphorus"
            />
            <Square className="nonMetal" symbol="S" number={16} name="Sulfur" />
            <Square
              className="halogen"
              symbol="Cl"
              number={17}
              name="Chlorine"
            />
            <Square
              className="nobleGases"
              symbol="Ar"
              number={18}
              name="Argon"
            />
          </div>
        </div>
      </div>
    </>
    // <div style={styles.container}>
    //   {periodicTableData.map((row, index) => (
    //     <Row key={index} elements={row} />
    //   ))}
    // </div>
  );
};

export default App;
