"use client"

import {useRouter} from "next/navigation";
import {montserrat} from "@/fonts/Fonts";
import {useDispatch} from "react-redux";
import {setItemId} from "@/redux/CommandeSlice";
import {motion} from "framer-motion";
import {toast} from "react-hot-toast";

interface CheckoutPropsType {
    id:number;
    slug:string;
    color:number ;
    size:number | null;
    variation:number;
}

export const ButtonCheckout = ({id, slug, color, size, variation}: CheckoutPropsType) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClick = () => {

        if (!size) return handlerToast();

        dispatch(setItemId(id));

        const myDataSelect: object = { color:color, selectedSize: size, variation: variation };
        localStorage.setItem("data", JSON.stringify(myDataSelect));

        return router.push(`/commande/${slug}`);
    }


    const handlerToast = () => {
        toast('Merci de selectionner une taille', {
            style: {
                border: '1px solid #ddd',
                padding: '16px',
            },
            icon:'👟',
        })
    }
    return(
        <motion.button
            className={`h-14 p-4 w-full bg-black rounded-full flex items-center justify-center text-white font-bold ${montserrat.className}`}
            onClick={ handleClick }

            whileHover={{scale:1.045}}
            whileTap={{scale:.945 }}
        >
            Commander
        </motion.button>
    )
}