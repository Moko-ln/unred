'use client'

import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/data/FirebaseConfig";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {toast} from "sonner";
import {setCookie} from "@/utils/cookieDoc";
import {motion} from "framer-motion";

type Inputs = {
    email: string;
    password: string;
}

interface AuthFormsType {
    isSignIn?: boolean;
}
export const AuthForms = ({ isSignIn }:AuthFormsType) => {
    const [userData, setUserData] = useState<any>([]);
    const [error, setError] = useState<any>(null);

    const router = useRouter()
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()

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
                .then((userCredential:any) => {
                    // Signed in
                    const user = userCredential.user;
                    if (!user) return toast.error("User not exist");

                    setCookie("token", user.accessToken, 1);
                    router.push(`/dashboard`);
                })
                .catch((error) => {
                    setError(error.message)
                });
        }


    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`max-w-96 flex flex-col items-center gap-4 m-auto`}
        >
            <input className="w-full border-2 border-slate-300 pl-4 h-14 rounded-sm" type="email" placeholder="firstName" {...register("email", {required: true})} />
            <input className="w-full border-2 border-slate-300 pl-4 h-14 rounded-sm" type="password" placeholder="firstName" {...register("password", {required: true})} />
            <motion.button
                className="w-full text-slate-50 bg-black h-14 rounded-sm cursor-pointer" type="submit"

                whileHover={{ scale: 1.005 }}
                whileTap={{ scale:.925 }}
                transition={{ type: "spring", duration: 0.2, ease: "ease-in" }}
            >
                { isSignIn ? 'Se connecter':'S\'inscrire' }
            </motion.button>
        </form>
    )
}