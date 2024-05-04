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
                backgroundImage: `url(./excluss.webp)`,
                backgroundSize:"cover",
                backgroundPosition: "center center",
                backgroundRepeat:"no-repeat"
            }}
        >
            <div className={`absolute lg:right-64 right-10 top-40 flex flex-col gap-2 z-10 w-[450px]`}>
                <h2 className={`${montserrat.className} lg:text-6xl text-3xl text-white font-extrabold`}>Marchez
                    dans <span
                        className="block">l&lsquo;exclusivité!</span></h2>
                <p className="text-slate-200 mb-4 lg:text-md text-sm ">
                    Préparez-vous à découvrir une sélection unique de chaussures qui redéfiniront votre style. Bientôt disponible. <span className="text-violet-500 underline">Restez connecté !</span>
                </p>

                <motion.button
                    className={`${montserrat.className} text-white bg-violet-500 h-14 p-4 max-w-36 rounded-full font-bold flex items-center justify-center gap-2 `}
                    whileTap={{scale: .945}}
                    whileHover={{scale: 1.045}}

                    onClick={handleClickToShop}
                >Sneaker <span><FiArrowRight/></span></motion.button>
            </div>

            <Countdown />
        </motion.article>
    )
}