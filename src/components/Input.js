import { useState } from "react";

const Input = ({
  sheets,
  sheetData,
  setSheets,
  rowIndex,
  colIndex,
  chosenColor,
}) => {
  const [bgColor, setBgColor] = useState(chosenColor);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    const updatedSheets = [...sheets];
    updatedSheets[rowIndex][colIndex].value = newValue;
    setSheets(updatedSheets);
  };

  const handleDoubleClick = () => {
    if (bgColor === "bg-white") {
      setBgColor(chosenColor);
    } else {
      setBgColor("bg-white");
    }
  };

  return (
    <>
      <input
        key={sheetData.name}
        value={sheetData.value}
        onChange={handleInputChange}
        className={`text-sm font-medium outline-none  border-[1px] border-solid border-slate-300 p-4 ${bgColor}  `}
        onDoubleClick={handleDoubleClick}
      />
    </>
  );
};

export default Input;
