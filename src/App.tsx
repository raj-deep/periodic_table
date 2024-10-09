import React, { useState } from "react";
import Row from "./Row";
import Square from "./Square";
import { periodicTableData } from "./periodicTable";
import "./App.css";

const App: React.FC = () => {
  const [lightOn, setLightOn] = useState(false);
  // Example data for rows
  // const periodicTableData = [
  //   [
  //     { symbol: "H", name: "Hydrogen", number: 1 },
  //     { symbol: "He", name: "Helium", number: 2 },
  //   ],
  //   [
  //     { symbol: "Li", name: "Lithium", number: 3 },
  //     { symbol: "Be", name: "Beryllium", number: 4 },
  //     { symbol: "B", name: "Boron", number: 5 },
  //     { symbol: "C", name: "Carbon", number: 6 },
  //   ],
  //   // More rows...
  // ];

  const handleClick = () => {
    setLightOn(!lightOn);
  };

  return (
    <>
      <nav className="h-20 border-red-400 border-2 border-solid flex flex-col justify-center items-center">
        <button
          className="lightOn text-white border border-red-400 border-solid absolute top-50 left-0 hover:pointer"
          onClick={handleClick}
        >
          Press me
        </button>
        <div className="text-white">Periodic Table</div>
        <div className="text-white">Move your mouse and find the elements</div>
      </nav>
      <div className="container mx-auto">
        <div id="row1" className="flex justify-between">
          <Square
            className="nonMetals"
            symbol="H"
            number={1}
            name="Hydrogen"
            isPressed={lightOn}
          />
          <Square
            className="absolute right-0 nobleGases"
            symbol="He"
            number={2}
            name="Helium"
            isPressed={lightOn}
          />
        </div>
        <div id="row2" className="flex justify-between">
          <div className="component1 flex space-x-1 mt-1">
            <Square
              className="AlMetals"
              symbol="Li"
              number={3}
              name="Lithium"
              isPressed={lightOn}
            />
            <Square
              className="AlEarthMetals"
              symbol="Be"
              number={4}
              name="Beryllium"
              isPressed={lightOn}
            />
          </div>
          <div className="component2 flex space-x-1 mt-1">
            <Square
              className="metalloid"
              symbol="B"
              number={5}
              name="Boron"
              isPressed={lightOn}
            />
            <Square
              className="nonMetal"
              symbol="C"
              number={6}
              name="Carbon"
              isPressed={lightOn}
            />
            <Square
              className="nonMetal"
              symbol="N"
              number={7}
              name="Nitrogen"
              isPressed={lightOn}
            />
            <Square
              className="nonMetal"
              symbol="O"
              number={8}
              name="Oxygen"
              isPressed={lightOn}
            />
            <Square
              className="nonMetal"
              symbol="F"
              number={9}
              name="Fluorine"
              isPressed={lightOn}
            />
            <Square
              className="nobleGases"
              symbol="Ne"
              number={10}
              name="Neon"
              isPressed={lightOn}
            />
          </div>
        </div>

        <div id="row3" className="flex justify-between">
          <div className="component1 flex space-x-1 mt-1">
            <Square
              className="AlMetals"
              symbol="Na"
              number={11}
              name="Sodium"
              isPressed={lightOn}
            />
            <Square
              className="AlEarthMetals"
              symbol="Mg"
              number={12}
              name="Magnesium"
              isPressed={lightOn}
            />
          </div>
          <div className="component2 flex space-x-1 mt-1">
            <Square
              className="metalloid"
              symbol="Al"
              number={13}
              name="Aluminum"
              isPressed={lightOn}
            />
            <Square
              className="nonMetal"
              symbol="Si"
              number={14}
              name="Silicon"
              isPressed={lightOn}
            />
            <Square
              className="nonMetal"
              symbol="P"
              number={15}
              name="Phosphorus"
              isPressed={lightOn}
            />
            <Square
              className="nonMetal"
              symbol="S"
              number={16}
              name="Sulfur"
              isPressed={lightOn}
            />
            <Square
              className="halogen"
              symbol="Cl"
              number={17}
              name="Chlorine"
              isPressed={lightOn}
            />
            <Square
              className="nobleGases"
              symbol="Ar"
              number={18}
              name="Argon"
              isPressed={lightOn}
            />
          </div>
        </div>
        <div className="periodic-table">
          {periodicTableData.map((row, index) => (
            <Row key={index} elements={row} isPressed={lightOn} />
          ))}
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
