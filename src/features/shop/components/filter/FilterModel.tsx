"use client";

import { useEffect, useState } from "react";

export const FilterModel = () => {
  const [model, setModel] = useState("Tout");

  useEffect(() => {
    handleClick;
  }, [model]);
  const handleClick = (value: string) => {
    setModel(value);
  };
  return (
    <ul className="flex items-center justify-center gap-10">
      {dataModel.map((item, index) => (
        <li key={index + 1}>
          <button
            className={`${
              item === model ? "bg-blue-500 text-white" : ""
            } border border-solid borer-slate-200 rounded-full h-10 px-4`}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

const dataModel: string[] = [
  "Tout",
  "Nike",
  "Addidas",
  "Jordan Brand",
  "Under Armour",
  "Reebok",
  "Puma",
];
