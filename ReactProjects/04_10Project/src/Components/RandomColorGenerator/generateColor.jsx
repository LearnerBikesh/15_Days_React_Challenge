import { useState } from "react";
import { useEffect } from "react";

const GenerateColor = () => {
  let [colorCode, setColorCode] = useState("hex");
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    changeColor();
  }, [colorCode]);

  function random(length) {
    return Math.floor(Math.random() * length);
  }

  function getHexCode() {
    let code = "#";
    // prettier-ignore
    const hexArray = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    for (let i = 0; i < 6; i++) {
      code += hexArray[random(16)];
    }
    return code;
  }

  function getRgbCode() {
    const a = random(255);
    const b = random(255);
    const c = random(255);
    return `rgb(${a},${b},${c})`;
  }

  function changeColor() {
    setColor(colorCode == "hex" ? getHexCode() : getRgbCode());
    console.log(color);
    console.log("changed");
  }

  return (
    <div className="w-full h-screen pt-5 " style={{ backgroundColor: color }}>
      <div className="flex gap-4 justify-center">
        <button
          className="p-2 bg-slate-400 border-2 rounded-md border-black"
          onClick={() => {
            setColorCode("hex");
          }}
        >
          Create HEX Color
        </button>
        <button
          className="p-2 bg-slate-400 border-2 rounded-md border-black"
          onClick={() => {
            setColorCode("rgb");
          }}
        >
          Create RGB Color
        </button>
        <button
          className="p-2 bg-slate-400 border-2 rounded-md border-black"
          onClick={changeColor}
        >
          Create Random Color
        </button>
      </div>

      <div className="min-h-screen flex flex-col gap-5 items-center justify-center">
        <h3 className="text-3xl">{colorCode.toUpperCase()} Color</h3>
        <h1 className="text-6xl">{color}</h1>
      </div>
    </div>
  );
};

export default GenerateColor;
