"use client"

import { MdOutlineClose } from 'react-icons/md';
import { motion } from "framer-motion";
import {useRouter} from "next/navigation";
interface backType {
    color: string;
    backcolor: string;
    path: string;
}
export const BackButton = ({ color, backcolor, path }:backType) => {
    const router = useRouter();

    const onLink = () => {
        return router.push(`/${path}`)
    }

    return (
        <motion.button
            className="backbutton border border-slate-200 rounded-full p-2 mb-10"
            style={{ background: backcolor ? backcolor : "#FA4E37" }}
            onClick={onLink}
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.8,
            }}
        >
            <span style={{color: color,}}
            ><MdOutlineClose /></span>
        </motion.button>
    )
}