"use client"

import Banner from "@/assets/images/ban.webp";
import BannerMob from "@/assets/images/banner-mobile.webp";
import { montserrat } from "@/fonts/Fonts";
import Image from "next/image";
import {FiArrowRight} from "react-icons/fi";
import {motion} from "framer-motion";
import {useMediaQuery} from "react-responsive";

export const HeroComp = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 868px)" });

    const handleClickToShop = () => {
        const shopSection = document.getElementById("shop");

        if (shopSection) {
            shopSection.scrollIntoView({ behavior: "smooth" });
        }
    }
  return (
      <article className="min-h-auto bg-red-100 pt-0 flex flex-col gap-0 relative ">
        <div className={`absolute lg:left-64 left-10 flex flex-col gap-2 z-10 ${ isMobile ? "top-96 w-80" : "top-1/4 " }`}>
          <h2 className={`${montserrat.className} lg:text-6xl text-3xl text-white font-extrabold`}>Soyer dans <span
              className="block">le coup!</span></h2>
          <p className="lg:w-3/12 w-full text-slate-200 mb-4 lg:text-md text-sm ">
              Profitez de notre collection de chaussures qui fusionne l&lsquo;audace de la rue avec le raffinement de la mode,
              offrant un mélange parfait de confort, de style et d&lsquo;individualité à chaque pas. Nous vendons des répliques de qualité exceptionnelle.
          </p>

          <motion.button
              className={`${montserrat.className} text-white bg-black h-14 p-4 max-w-36 rounded-sm font-bold flex items-center justify-center gap-2`}
              whileTap={{ scale:.945 }}
              whileHover={{ scale:1.045 }}

              onClick={ handleClickToShop }
          >Découvrir <span><FiArrowRight /></span></motion.button>
        </div>

        <div className="min-h-20 bg-gradient-to-br from-black to-[#272727] p-4 flex items-center justify-center w-full flex-col gap-4">
            <p className={`${montserrat.className} lg:text-xl text-sm text-slate-300 lg:font-extrabold font-medium tracking-wider`}>Commandez maintenant, payez à la livraison</p>
        </div>


        <div className={`h-[700px]`}>
          <figure className={`h-[700px]`}>
            <Image
                src={isMobile ? BannerMob : Banner}
                alt={`Image de couverture`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "3px",
                  filter:"brightness(75%)",
                }}
            />
          </figure>
        </div>

      </article>
  );
};