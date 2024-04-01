"use client";

import { montserrat } from "@/fonts/Fonts";
import Image from "next/image";

import Femme from "@/assets/images/femme.webp";
import Homme from "@/assets/images/homme.webp";
import Promo from "@/assets/images/promo.webp";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();

  const handleClickPath = (path: string) => {
    return router.push(`/${path}`);
  };

  return (
    <article className="min-h-screen bg-white pt-40">
      <div className="container-root">
        <div className="wrapper">
          <div className="absolute bg-transparent w-full left-0 top-0 h-20 flex items-center justify-center">
            <h1
              className={`${montserrat.className} text-5xl font-extrabold text-center`}
            >
              UnderLux
            </h1>
          </div>

          <div>
            <ul className="flex items-center justify-center gap-10">
              {data.map((item) => (
                <li
                  key={item.id}
                  className="h-[500px] w-2/5 overflow-hidden relative cursor-pointer"
                  onClick={() => handleClickPath(item.path)}
                >
                  <div className="absolute w-full flex flex-col justify-center bottom-10 z-10">
                    <h2
                      className={`${montserrat.className} text-xl font-bold text-center text-slate-100`}
                    >
                      {item.title}
                    </h2>
                    <p className="text-center text-slate-200">{item.text}</p>
                  </div>
                  <motion.figure
                    className="h-[500px] w-full rounded-lg"
                    whileHover={{ scale: 1.055 }}
                    whileTap={{ scale: 0.945 }}
                    transition={{
                      type: "spring",
                      duration: 0.8,
                      ease: "linear",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`Image de couverture de chaussure pour ${item.title}`}
                      width={500}
                      height={500}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "3px",
                      }}
                    />
                  </motion.figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

const data = [
  {
    id: 1,
    title: "Homme",
    text: "Soyez dans le Coup",
    image: Homme,
    path: "homme",
  },
  {
    id: 2,
    title: "Femme",
    text: "Soyez dans le Coup",
    image: Femme,
    path: "femme",
  },
  {
    id: 3,
    title: "Promo",
    text: "Soyez dans le Coup",
    image: Promo,
    path: "promo",
  },
];
