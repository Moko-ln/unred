"use client";

import {useEffect, useState} from "react";
import {modelDataTYpe} from "@/types";
import {motion} from "framer-motion";

// @ts-ignore
export const FilterModel = ({ setFilter }) => {
  const [model, setModel] = useState<number>(1);

  const handleClick = (nb: number) => {
    setModel(nb);
  };

  useEffect(() => {
      const filterActive = dataModel.find( item => item.id === model)
      setFilter(filterActive)

      localStorage.setItem("filter", JSON.stringify(filterActive));
  }, [model, setFilter]);

  return (
      <ul className="flex items-center justify-start lg:gap-10 gap-4 overflow-x-auto flex-no-wrap py-8">
        {dataModel.map((item) => (
            <li key={item.id} className="">
              <motion.button
                  className={`${
                      item.id === model ? "bg-black text-slate-100" : ""
                  } border border-solid border-slate-200 rounded-sm h-10 px-4 text-sm lg:text-lg`}
                  onClick={() => handleClick(item.id)}

                  whileHover={{scale: 1.045}}
                  whileTap={{ scale: .945 }}
              >
                {item.title}
              </motion.button>
            </li>
        ))}
      </ul>

  );
};

const dataModel: modelDataTYpe[] = [
  {
    id: 1,
    title: "Tout"
  },
  {
    id: 2,
    title: "Nike"
  },
  {
    id: 3,
    title: "Addidas"
  },
  {
    id: 4,
    title: "Puma"
  },
  {
    id: 5,
    title: "Reebook"
  },
  // {
  //   id: 6,
  //   title: "Puma"
  // }
];
