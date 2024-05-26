import { useForm, SubmitHandler } from "react-hook-form";
import {useEffect, useState} from "react";
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
    region:string;
}

interface FormPropsType {
    title:string;
    price:number;
    size:number;
    color:string;
    quantity:number;
    setIsFree: any;
    isFree: any;
}

export const Forms = ( { title, price, size, color, quantity, setIsFree, isFree }: FormPropsType ) => {

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

    useEffect(() => {
        setValue("title", title);
        setValue("price", price);
        setValue("size", size);
        setValue("color", color);
        setValue("quantity", quantity);
    }, [title, price, size, color, quantity, setValue]);

    useEffect(() => {
        if (String(watch("region")) === "" || String(watch("region")) === "ile-de-france") {
            setIsFree(true)
        } else {
            setIsFree(false)
        }
    }, [watch("region")])

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        let totalPrice;

        if (isFree) {
            totalPrice = data.price + 7
        } else {
            totalPrice = data.price
        }

        try {
            const res = await fetch("/api", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: data.title,
                    price: totalPrice,
                    size: data.size,
                    color: data.color,
                    quantity: data.quantity,

                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    email: data.email,

                    address: data.address,
                    city: data.city,
                    code: data.code,
                    livraison: !isFree ? 7.99 : "gratuite",
                    region: data.region,
                }),
            })

            if (res.ok) {
                // setEmailSend("success")
                window.alert("Votre commande a bien été envoyée. Nous vous recontacterons dans les plus brefs délais !")
                router.push(`/sneakers`);
            } else {
                // setEmailSend("error")

                console.log(res)
                window.alert("Une erreur s\'est produite lors de l\'envoi de l\'e-mail.")
                console.error('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
            }

            // localStorage.setItem("emailStatus", emailSend);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'envoi de l\'e-mail :', error);
        }

    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full">
            {/* register your input into the hook by invoking the "register" function */}
            <div className="flex lg:flex-nowrap flex-wrap items-center gap-4">
                <div className={`grow`}>
                    <input
                        placeholder="Nom*"
                        {...register("firstName", {required: "Renseignez votre nom"})}
                        className="w-full border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                    {errors.firstName && <span className="block text-red-500 text-xs italic mt-2">{errors.firstName.message}</span>}
                </div>

                <div className={`grow`}>
                    <input placeholder="Prenom*"  {...register("lastName", {required: "Renseignez votre prenom"})}
                           className="w-full border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                    {errors.lastName && <span className="block text-red-500 text-xs italic mt-2">{errors.lastName.message}</span>}
                </div>


            </div>

            <div>
                <label htmlFor="region" className="block text-gray-700 text-sm font-bold mb-2">Sélectionnez une région *
                    :</label>
                <select
                    id="region"
                    {...register("region", {required: "Ce champ est requis"})}
                    className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 h-14 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                    <option value="">Sélectionner une région</option>
                    <option value="ile-de-france">Île-de-France</option>
                    <option value="autre">Autre</option>
                </select>
                {errors.region && <span className="text-red-500 text-xs italic mt-2">{errors.region.message}</span>}
            </div>

            { watch("region") !== "" &&
                <>
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Adresse de livraison" {...register("address", {required: "Renseignez votre adresse"})}
                            className="w-full grow border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                        {errors.address && <span className="text-red-500 text-xs italic mt-2">{errors.address.message}</span>}
                    </div>
                    <div className="flex lg:flex-nowrap flex-wrap items-center gap-4">
                        <div className={`grow`}>
                            <input
                                placeholder="Code postal*"
                                {...register("code", {required: "Renseignez votre code postal"})}
                                className="w-full border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            />
                            {errors.code && <span className="text-red-500 text-xs italic mt-2">{errors.code.message}</span>}
                        </div>

                        <div className={`grow`}>
                            <input
                                placeholder="Ville*"
                                {...register("city", {required: "Renseignez votre ville"})}
                                className="w-full border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            />
                            {errors.city && <span className="text-red-500 text-xs italic mt-2">{errors.city.message}</span>}
                        </div>

                    </div>
                </>
            }

            <div className="flex lg:flex-nowrap flex-wrap items-center gap-4">
                <div className={`grow`}>
                    <input placeholder="E-mail*"
                           {...register("email", {required: "Renseignez votre email"})}
                           className="w-full border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                    {errors.email && <span className="text-red-500 text-xs italic mt-2">{errors.email.message}</span>}
                </div>
                <div className={`grow`}>
                    <input placeholder="Numero de téléphone*"
                           {...register("phone", {required: "Renseignez votre numero de télephone"})}
                           className="w-full border border-solid border-slate-200 h-14 p-4 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                    {errors.phone && <span className="text-red-500 text-xs italic mt-2">{errors.phone.message}</span>}
                </div>

            </div>

            {/*Element invisible*/}
            <input type="hidden" {...register("title")} aria-hidden="true"/>
            <input type="hidden" {...register("price")} aria-hidden="true"/>
            <input type="hidden" {...register("size")} aria-hidden="true"/>
            <input type="hidden" {...register("color")} aria-hidden="true"/>
            <input type="hidden" {...register("quantity")} aria-hidden="true"/>


            <input
                type="submit"
                value="Commander"
                className="bg-black text-slate-50 p-2 rounded-full font-medium h-12 cursor-pointer lg:w-1/5 w-full"
            />
        </form>

    )
}