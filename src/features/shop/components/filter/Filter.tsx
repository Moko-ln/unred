"use client";

import {useState} from "react";
import { FiChevronDown } from "react-icons/fi";
import {sortByType} from "@/types";

export const Filter = () => {
    const [sortBy, setSortBy] = useState<number>(1);
    const [hiddenSort, setHiddenSort] = useState<Boolean>(true);

    const handleClickSortBy = (idSort: number) => {
        setSortBy(idSort)
        setHiddenSort(true);
    }

    const sortSelect = dataSortBy.find( item => item.id ===  sortBy );


    const handleClickHiddenSort = () => {
        setHiddenSort(!hiddenSort);
    }


  return (
    <div className="flex items-center justify-center gap-4 relative">
      <span className="text-slate-500 text-sm block">Trier par:</span>
      <button
          className="text-slate-600 text-sm border border-solid border-slate-200 rounded-lg h-12 px-4 flex items-center justify-center gap-4"
          onClick={ handleClickHiddenSort }
      >
          { sortSelect?.title }
        <span className="text-slate-600 text-sm border border-solid border-slate-200 rounded-full h-8 w-8 flex items-center justify-center">
          <FiChevronDown />
        </span>
      </button>
        {!hiddenSort &&
            <ul className="border border-solid border-slate-200 rounded-2xl grid grid-cols-1 divide-y  absolute -bottom-40 shadow-lg shadow-slate-200 right-0 z-10 bg-white">
                {dataSortBy.map(item =>
                    <li
                        key={item.id}
                        className="text-sm text-slate-500 cursor-pointer py-2 p-4"
                        onClick={() => handleClickSortBy( item.id )}
                    >
                        { item.title }
                    </li>
                )}
            </ul>
        }

    </div>
  );
};


const dataSortBy: sortByType[] = [
    {
        id: 1,
        title: "Les plus pertinents"
    },
    {
        id: 2,
        title: "Les plus récents"
    },
    {
        id: 3,
        title: "Prix (Du moin cher au plus cher)"
    },
    {
        id: 4,
        title: "Prix (Du plus cher au moin cher)"
    }
]
