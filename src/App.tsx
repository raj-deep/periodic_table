import React, { useState } from "react";
import Row from "./Row";
import Square from "./Square";
import { periodicTableData } from "./periodicTable";
import "./App.css";

const App: React.FC = () => {
  const [lightOn, setLightOn] = useState(false);

  const handleClick = () => {
    setLightOn(!lightOn);
  };

  return (
    <>
      <div>
        <div className="background-layer"></div>
        <nav className="h-[9vh] mt-2 flex flex-col justify-center items-center">
          <div className="absolute left-5">
            <label className="switch">
              <input type="checkbox" onChange={handleClick} />
              <span className="slider"></span>
            </label>
          </div>

          <div className="text-white text-4xl">THE PERIODIC TABLE</div>
          <div className="text-white">Move your mouse to find the elements</div>
        </nav>
        <div className="container mt-5 ml-5">
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
            <div className="component1 flex space-x mt-1">
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
            <div className="component2 flex space-x mt-1">
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
            <div className="component1 flex space-x mt-1">
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
            <div className="component2 flex space-x mt-1">
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
      </div>
    </>
  );
};

export default App;
