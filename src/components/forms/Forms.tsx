import { useForm, SubmitHandler } from "react-hook-form";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/data/FirebaseConfig";

type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
    phone: number | null;
    address: string;
    city: string;
    code: number | null;
    title:string;
    price:number;
    size:number;
    color:string;
    quantity:number;
}

interface FormPropsType {
    title:string;
    price:number;
    size:number;
    color:string;
    quantity:number;
}

export const Forms = ( { title, price, size, color, quantity }: FormPropsType ) => {

    const router = useRouter();

    const [emailSend, setEmailSend] = useState<any>(null);
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setValue,
        formState: { errors },

    } = useForm<Inputs>()

    // useEffect(() => {
    //     setValue("title", title);
    //     setValue("price", price);
    //     setValue("size", size);
    //     setValue("color", color);
    //     setValue("quantity", quantity);
    // }, [title, price, size, color, quantity, setValue]);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        // try {
        //     const res = await fetch("/api", {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             title: data.title,
        //             price: data.price,
        //             size: data.size,
        //             color: data.color,
        //             quantity: data.quantity,
        //
        //             firstName: data.firstName,
        //             lastName: data.lastName,
        //             phone: data.phone,
        //             email: data.email,
        //
        //             address: data.address,
        //             city: data.city,
        //             code: data.code,
        //
        //         }),
        //     })
        //
        //     if (res.ok) {
        //         setEmailSend("success")
        //         router.push(`/sneakers`);
        //     } else {
        //         setEmailSend("error")
        //         console.error('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
        //     }
        //
        //     localStorage.setItem("emailStatus", emailSend);
        // } catch (error) {
        //     console.error('Une erreur s\'est produite lors de l\'envoi de l\'e-mail :', error);
        // }
        console.log(data)
        try {
            console.log("je suis ici")
            const docRef = await addDoc(collection(db, "users"), {
                first: data.firstName,
                last: data.lastName,
                phone: data.phone
            });

            console.log(docRef)
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.log("je suis dedans")
            console.error("Error adding document: ", e);
        }
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        // <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full">
        //     {/* register your input into the hook by invoking the "register" function */}
        //     <div className="flex lg:flex-nowrap flex-wrap items-center gap-4">
        //         <input placeholder="Nom*"  {...register("firstName", {required: true}) }
        //                className="grow border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
        //
        //         { errors.firstName && <span>Veuiller entrer un nom</span> }
        //         <input placeholder="Prenom*"  {...register("lastName") } required
        //                className="grow border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
        //     </div>
        //     <div className="w-full">
        //         <input type="text" placeholder="Adresse de livraison" {...register("address") } required
        //                className="w-full grow border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
        //     </div>
        //     <div className="flex lg:flex-nowrap flex-wrap items-center gap-4">
        //         <input placeholder="Code postal*"  {...register("code") } required
        //                className="grow border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
        //         <input placeholder="Ville*"  {...register("city") } required
        //                className="grow border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
        //     </div>
        //     <div className="flex lg:flex-nowrap flex-wrap items-center gap-4">
        //         <input placeholder="E-mail*"  {...register("email") } required
        //                className="grow border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
        //         <input placeholder="Numero de téléphone*"  {...register("phone") } required
        //                className="grow border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
        //     </div>
        //
        //     {/*Element invisible*/}
        //     <input type="hidden" {...register("title") }  aria-hidden="true"/>
        //     <input type="hidden" {...register("price") } aria-hidden="true"/>
        //     <input type="hidden" {...register("size") } aria-hidden="true"/>
        //     <input type="hidden" {...register("color") } aria-hidden="true"/>
        //     <input type="hidden" {...register("quantity") } aria-hidden="true"/>
        //
        //
        //     <input type="submit" value="Commander"
        //            className="bg-black text-slate-50 p-2 rounded-full font-medium h-12 cursor-pointer lg:w-1/5 w-full" />
        // </form>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="firstName" {...register("firstName", {required: true})} />
            <input type="text" placeholder="lastName" {...register("lastName", {required: true})} />
            <input type="text" placeholder="phone" {...register("phone", {required: true})} />
            <input type="submit" value="Commander"/>

        </form>
    )
}