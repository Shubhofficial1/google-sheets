import { useState } from "react";
import Input from "./components/Input";

const App = () => {
  const [sheets, setSheets] = useState([
    [
      { name: "00", value: "00" },
      { name: "01", value: "01" },
      { name: "02", value: "02" },
      { name: "03", value: "03" },
    ],
    [
      { name: "10", value: "10" },
      { name: "11", value: "11" },
      { name: "12", value: "12" },
      { name: "13", value: "13" },
    ],
    [
      { name: "20", value: "20" },
      { name: "21", value: "21" },
      { name: "22", value: "22" },
      { name: "23", value: "23" },
    ],
    [
      { name: "30", value: "30" },
      { name: "31", value: "31" },
      { name: "32", value: "32" },
      { name: "33", value: "33" },
    ],
  ]);

  const [colors] = useState([
    { color: "bg-white" },
    { color: "bg-indigo-400" },
    { color: "bg-blue-400" },
    { color: "bg-green-400" },
    { color: "bg-yellow-400" },
    { color: "bg-red-400" },
    { color: "bg-pink-400" },
    { color: "bg-purple-400" },
    { color: "bg-gray-400" },
    { color: "bg-orange-400" },
    { color: "bg-teal-400" },
  ]);

  const [chosenColor, setChosenColor] = useState("bg-white");

  return (
    <>
      <h1 className="font-semibold text-[32px] leading-6 tracking-wider text-center my-10">
        Google Sheets
      </h1>
      <div className="flex justify-center gap-4 my-5">
        {colors.map((color) => (
          <div
            key={color.color}
            className={`w-8 h-8 ${
              color.color
            }  shadow-lg rounded-sm cursor-pointer ${
              chosenColor === color.color ? "outline-dashed" : ""
            }`}
            onClick={() => setChosenColor(color.color)}
          ></div>
        ))}
      </div>

      <div className="mt-10">
        {sheets.map((sheet, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-4 ">
            {sheet.map((sheetData, colIndex) => (
              <Input
                key={sheetData.name}
                sheets={sheets}
                sheetData={sheetData}
                setSheets={setSheets}
                rowIndex={rowIndex}
                colIndex={colIndex}
                chosenColor={chosenColor}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
