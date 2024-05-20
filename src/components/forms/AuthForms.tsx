"use client";

import { auth } from "@/data/FirebaseConfig";
import { montserrat } from "@/fonts/Fonts";
import { setCookie } from "@/utils/cookieDoc";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUser } from "react-icons/fi";
import { toast } from "sonner";

type Inputs = {
  email: string;
  password: string;
};

interface AuthFormsType {
  isSignIn?: boolean;
}
export const AuthForms = ({ isSignIn }: AuthFormsType) => {
  const [userData, setUserData] = useState<any>([]);
  const [error, setError] = useState<any>(null);

  const router = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    const email = data.email;
    const password = data.password;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          if (!user) return toast.error("User already exists!");
          router.push(`/auth/signin`);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: any) => {
          // Signed in
          const user = userCredential.user;
          if (!user) return toast.error("User not exist");

          setCookie("token", user.accessToken, 1);
          router.push(`/dashboard`);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  return (
    <div className={`max-w-96 m-auto p-4 min-h-82`}>
      <p
        className={`${montserrat.className} text-xl font-bold tracking-wide mb-10 flex items-center gap-2 flex-col`}
      >
        {isSignIn ? "Se connecter" : "S'inscrire"}

        <span className="order-first text-xl text-slate-500 border border-slate-500 rounded-full w-10 h-10 flex items-center justify-center">
          <FiUser />
        </span>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4"
      >
        <input
          className="w-full border-2 border-slate-300 pl-4 h-14 rounded-sm"
          type="email"
          placeholder="Email*"
          {...register("email", { required: true })}
        />
        <input
          className="w-full border-2 border-slate-300 pl-4 h-14 rounded-sm"
          type="password"
          placeholder="Mot de passe*"
          {...register("password", { required: true })}
        />
        <motion.button
          className="w-full text-slate-50 bg-black h-14 rounded-sm cursor-pointer"
          type="submit"
          whileHover={{ scale: 1.005 }}
          whileTap={{ scale: 0.925 }}
          transition={{ type: "spring", duration: 0.2, ease: "ease-in" }}
        >
          {isSignIn ? "Se connecter" : "S'inscrire"}
        </motion.button>
      </form>
    </div>
  );
};
