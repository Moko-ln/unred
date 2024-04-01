"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export const Filter = () => {
  const [sortBy, setSortBy] = useState("Les plus pertinent");
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="text-slate-500 text-sm block">Trier par:</span>
      <button className="text-slate-800 text-lg border border-solid border-slate-200 rounded-lg h-12 px-4 flex items-center justify-center gap-4">
        {sortBy}

        <span className="text-slate-600 text-sm border border-solid border-slate-200 rounded-full h-8 w-8 flex items-center justify-center">
          <FiChevronDown />
        </span>
      </button>
    </div>
  );
};
