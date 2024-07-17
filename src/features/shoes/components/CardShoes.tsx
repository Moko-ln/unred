"use client";

import { ButtonLike } from "@/components/button/ButtonLike";
import { montserrat } from "@/fonts/Fonts";
import {dataCardShoesType, variationType} from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {useMediaQuery} from "react-responsive";
import {truncateTextByCharacters} from "@/utils/truncateTextByCharacters";
import {useState} from "react";
import {motion} from "framer-motion";

export const CardShoes = ({
  id,
  title,
  price,
  image,
  slug,
  variation
}: dataCardShoesType) => {
  let router = useRouter();

  const [isVisibleColor, setIsVisibleColor] = useState(false);

  const handleClick = (slug: string) => {
    return router.push(`/sneakers/${slug}`);
  };

  const HandleMouseTrue = () => {
      setIsVisibleColor(true);
  }
    const HandleMouseFalse = () => {
        setIsVisibleColor(false);
    }
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5
        }
    }
  }

  return (
    <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
                <h3 className={`${montserrat.className} text-md font-bold text-left text-xs lg:text-lg`}>
                    {isMobile ? truncateTextByCharacters(title, 12) : title}
                </h3>
                <p className="text-left text-sm mb-4"> {price} €</p>

                { isMobile ?
                    <span className="text-slate-500 text-sm">{Array.isArray(variation) &&  variation.length} Couleurs</span>
                    :
                    <div className="h-4">
                        {isVisibleColor &&
                            <motion.ul
                                className="flex items-center gap-4 order-last"
                                variants={container}
                                initial="hidden"
                                animate="show"

                                transition={{ type: "spring", damping:50, stiffness:100 }}
                            >
                                {Array.isArray(variation) &&
                                    variation.map((item: variationType) => (
                                        <li key={item.id}>
                                            <button
                                                className={`cursor-default block rounded-full h-4 w-4 transition ${item.classColor && item.classColor}`}
                                                style={{backgroundColor: item.classColor}}
                                            ></button>
                                        </li>
                                    ))
                                }
                            </motion.ul>
                        }
                    </div>
                }

            </div>
            <ButtonLike id={id}/>
        </div>
        <div
            className={`lg:h-72 h-32 order-first mb-0 cursor-pointer border border-slate-200 rounded-2xl overflow-hidden`}
            onClick={() => handleClick(slug)}
        >
            <motion.figure

                className="lg:h-72 h-32"
                whileHover={{ scale: 1.045 }}
            >
                <Image
                    src={`/uploads/${image}.webp`}
                    alt={`Image de couverture`}
                    width={400}
                    height={400}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "3px",
                    }}

                    onMouseEnter={ HandleMouseTrue }
                    onMouseLeave={ HandleMouseFalse }
                />
            </motion.figure>
        </div>
    </div>
  );
};
