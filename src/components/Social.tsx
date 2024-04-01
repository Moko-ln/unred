"use client";

import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

export const Social = () => {
  return (
    <ul className="flex items-center gap-4">
      {social.map((item) => (
        <li key={item.id} title={item.title}>
          <motion.button
            className="p-2 border border-solid border-slate-500 rounded-full text-slate-500"
            whileHover={{ scale: 1.055 }}
            whileTap={{ scale: 0.945 }}
            transition={{ type: "spring", duration: 0.6, ease: "linear" }}
          >
            {item.icon}
          </motion.button>
        </li>
      ))}
    </ul>
  );
};

const social = [
  {
    id: 1,
    title: "Twitter",
    icon: <FaXTwitter />,
    link: "https://twitter.fr",
  },
  {
    id: 2,
    title: "Instagram",
    icon: <FiInstagram />,
    link: "https://instagram.fr",
  },
];
