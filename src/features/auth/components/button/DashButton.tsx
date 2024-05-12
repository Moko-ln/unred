import {useRouter} from "next/navigation";
import {FiGrid} from "react-icons/fi";
import {motion} from "framer-motion";

export const DashButton = () => {

    const router = useRouter();

    const handleClick = async () => {
        router.push("/dashboard")
    }

    return (
        <motion.button
            className="bg-blue-500 fixed right-14 z-30 text-slate-50 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
            onClick={ handleClick }

            whileHover={{ scale: 1.025 }}
            whileTap={{ scale:.925 }}
            transition={{ type: "spring", duration: 0.2, ease: "ease-in" }}
        >
            <FiGrid />
        </motion.button>
    )
}