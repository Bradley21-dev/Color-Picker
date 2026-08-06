import { useState } from "react";

function Color() {
  const [color, setColor] = useState("#ffffff");
  function changeColor(e) {
    setColor(e.target.value);
  }
  return (
    <>
      <div className="p-20 bg-gray-900 w-200 mx-auto mt-20 rounded-3xl">
        <h1 className="text-4xl font-bold text-white text-center">
          Color-Picker-Program
        </h1>

        <div
          className="items-center  w-60 h-60 mt-10 mx-auto rounded-4xl"
          style={{ backgroundColor: color }}
        ></div>

        <h3 className="text-center text-white text-2xl mt-10">
          Selected Color: {color}
        </h3>

        <div className="flex justify-center mt-10 text-white text-2xl items-center">
          <label>Change Color Here:</label>
          <input
            value={color}
            type="color"
            className="w-20 h-20 ml-8 rounded-2xl border-none"
            onChange={changeColor}
          />
        </div>
      </div>
    </>
  );
}

export default Color;
