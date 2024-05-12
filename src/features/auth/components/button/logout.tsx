import { signOut } from "@firebase/auth";
import { auth } from "@/data/FirebaseConfig";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";

export const Logout = () => {

    const router = useRouter();

    const onLogout = async () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        await signOut(auth)
        router.push("/auth/signin")
    }

    return (
        <motion.button
            className="bg-black text-slate-50 rounded-full w-24 h-12 cursor-pointer"
            onClick={ onLogout }

            whileHover={{ scale: 1.025 }}
            whileTap={{ scale:.925 }}
            transition={{ type: "spring", duration: 0.2, ease: "ease-in" }}
        >
            Log Out
        </motion.button>
    )
}