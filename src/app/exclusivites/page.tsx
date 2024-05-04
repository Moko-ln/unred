"use client"

import {Countdown} from "@/components/CountDown";
import {motion} from "framer-motion";
import {montserrat} from "@/fonts/Fonts";
import {FiArrowRight} from "react-icons/fi";
import {useMediaQuery} from "react-responsive";
import {useRouter} from "next/navigation";

export default function Exclusivites () {
    const isMobile = useMediaQuery({ query: "(max-width: 868px)" });
    const router = useRouter();

    const handleClickToShop = () => {
        router.push("/sneakers");
    }
    return (
        <motion.article
            className="min-h-screen w-full"
            style={{
                backgroundImage: `url(./${!isMobile ? 'excluss.webp':'exclus-mobile.webp'})`,
                backgroundSize:"cover",
                backgroundPosition: "center center",
                backgroundRepeat:"no-repeat"
            }}
        >
            <div className={isMobile ? 'wrapper': ''}>
                <div
                    className={`lg:absolute lg:right-64 right-10 top-40 pt-20 lg:pt-0 flex flex-col gap-2 z-10 lg:w-[450px] lg:mb-0 mb-20`}>
                    <h2 className={`${montserrat.className} lg:text-6xl text-3xl text-white font-extrabold`}>Marchez
                        dans <span
                            className="block">l&lsquo;exclusivité!</span></h2>
                    <p className="text-slate-200 mb-4 lg:text-md ">
                        Préparez-vous à découvrir une sélection unique de chaussures qui redéfiniront votre style.
                        Bientôt disponible. <span className="text-violet-500 underline">Restez connecté !</span>
                    </p>

                    <motion.button
                        className={`${montserrat.className} text-white bg-violet-500 h-14 p-4 max-w-36 rounded-full font-bold flex items-center justify-center gap-2 `}
                        whileTap={{scale: .945}}
                        whileHover={{scale: 1.045}}

                        onClick={handleClickToShop}
                    >Sneaker <span><FiArrowRight/></span></motion.button>
                </div>

                <Countdown/>
            </div>

        </motion.article>
    )
}