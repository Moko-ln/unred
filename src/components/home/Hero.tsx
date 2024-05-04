"use client";

import { montserrat } from "@/fonts/Fonts";
import Image from "next/image";

import Sneaker from "@/assets/images/homme.webp";
import Exclus from "@/assets/images/promo.webp";
import {motion, Variants} from "framer-motion";
import { useRouter } from "next/navigation";
import {dataHeroType} from "@/types";
import {Brand} from "@/components/partials/header/Brand";

export const Hero = () => {
  const router = useRouter();

  const handleClickPath = (path: string) => {
    return router.push(`/${path}`);
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.9,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }


  const itemList: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 // Ajout du délai de 0.3s
      }
    }
  };

  return (
    <motion.article
        className="min-h-screen bg-white lg:pt-40 py-28"

        initial={{ opacity: 0, translateY: -20 }}
        exit={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "spring", duration: 0.6, ease: "easeIn" }}
    >
      <div className="container-root">
        <div className="wrapper">
          <div className="absolute bg-transparent w-full left-0 top-0 h-20 flex items-center justify-center">
            <Brand />
          </div>

          <div>
            <motion.ul
                className="flex flew-wrap lg:flex-row flex-col items-center justify-center gap-10"

                initial="hidden"
                animate="visible"
                variants={list}
            >
              { data.map((item) => (
                <motion.li
                  key={item.id}
                  className={`${item.id === 1 ? "h-[550px] grow shadow-2xl shadow-slate-50" : "lg:h-[500px] h-80"} lg:w-2/6 w-full overflow-hidden relative cursor-pointer`}
                  onClick={() => handleClickPath(item.path)}
                  variants={itemList}
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
                    className={` ${item.id === 1 ? "h-[550px]" :" lg:h-[500px] h-80" } w-full rounded-lg`}
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
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const data = [
  // {
  //   id: 1,
  //   title: "Accessoires",
  //   text: "Soyez dans le Coup",
  //   image: Femme,
  //   path: "accessoires",
  // },
  {
    id: 2,
    title: "Sneakers",
    text: "Soyez dans le Coup",
    image: Sneaker,
    path: "sneakers",
  },
  {
    id: 3,
    title: "Exclusivités",
    text: "Soyez dans le Coup",
    image: Exclus,
    path: "exclusivites",
  },
];
