import { auth } from "@/data/FirebaseConfig";
import { signOut } from "@firebase/auth";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiPower } from "react-icons/fi";

export const Logout = () => {
  const router = useRouter();

  const onLogout = async () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    await signOut(auth);
    router.push("/auth/signin");
  };

  return (
    <motion.button
      className="text-slate-500 text-sm cursor-pointer flex items-center gap-2"
      onClick={onLogout}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.925 }}
      transition={{ type: "spring", duration: 0.2, ease: "ease-in" }}
    >
      <span>
        <FiPower />
      </span>
      Log Out
    </motion.button>
  );
};
