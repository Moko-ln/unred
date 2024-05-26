"use client"

import {montserrat} from "@/fonts/Fonts";
import Image from "next/image";
import {useEffect, useState} from "react";
import {FiArrowLeft, FiShoppingBag} from "react-icons/fi";
import {ListComp} from "@/components/ListComp";
import {CurrentSection} from "@/components/CurrentSection";
import {ButtonLike} from "@/components/button/ButtonLike";
import {detailType, sizeShoesType, variationType} from "@/types";
import {ButtonRemoveCommande} from "@/components/button/ButtonRemoveCommande";
import {Forms} from "@/components/forms/Forms";
import Link from "next/link";
import {useMediaQuery} from "react-responsive";
import {motion} from "framer-motion";
import {useParams} from "next/navigation";
import {useFetchBySlug} from "@/hook/useFetchBySlug";
import {sizeShoes} from "@/data/sizeShoes";

export default function Commande () {
    const { slug } = useParams();

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const [myDetail, setMyDetail] = useState<any>( null);
    const [myColor, setMyColor] = useState<any>(null);
    const [mySize, setMySize] = useState<any>(null);

    const [isFree, setIsFree] = useState<any>(true);

    const { oneShoes } = useFetchBySlug(slug);

    // const [quantity, setQuantity] = useState(1);

    useEffect(() => {

        // Get Size and color in the localStorage
        let detailShoes: any

        if (typeof Window !== "undefined") {
            detailShoes = localStorage.getItem("data");
        }

        if (detailShoes) {
            setMyDetail(JSON.parse(detailShoes));
        }

        let variation: any = oneShoes?.variation?.find( (item: variationType) => item.id === parseInt(myDetail?.color));
        let detailSize: any = sizeShoes?.find( (item: any) => item.id === parseInt(myDetail?.selectedSize));

        setMyColor(variation);
        setMySize(detailSize);

    }, [myColor, myDetail?.color, myDetail?.selectedSize, mySize, oneShoes?.variation]);

    return (
        <motion.section
            className="panier-page"

            initial={{ opacity: 0, translateY: -20 }}
            exit={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", duration: 0.6, ease: "easeIn" }}
        >
            { oneShoes &&

                <article className="min-h-[700px] flex justify-center py-10">
                    <div className="container-root">
                        <div className="wrapper flex flex-col gap-20">
                            <div className="flex lg:flex-nowrap flex-wrap gap-10">
                                <div className="lg:w-4/12 w-full flex flex-col gap-4 grow">
                                    <h2 className={`${montserrat.className} text-xl font-bold`}>Ma commande</h2>
                                    <Link href={slug ? `/sneakers/${oneShoes.slug}` : `./sneakers`}
                                          className="text-slate-500 text-sm order-first flex items-center gap-2 hover:text-blue-500 transition"><span><FiArrowLeft/></span> {slug ? oneShoes?.title : "Sneakers"}
                                    </Link>
                                    <div
                                        className="border border-solid border-slate-200 rounded-sm lg:h-32 flex items-start p-10 flex-col justify-center gap-2 mb-2 order-first">
                                        <p className={`text-xl font-bold text-blue-500 ${montserrat.className}`}>
                                            Profitez de la livraison gratuite en Île-de-France!</p>
                                        <p className="text-slate-500 font-light">
                                            Veuillez noter que des frais de livraison s&lsquo;appliquent pour les expéditions en dehors de cette région.
                                            <span className="block">Nous nous engageons à vous offrir un service rapide et fiable, peu importe où vous vous trouvez.</span>
                                        </p>
                                    </div>

                                    {/* Product selected */}
                                    <div
                                        className={`lg:min-h-80 flex flex-col gap-4 ${!slug ? "h-64 items-center justify-center " : "items-start justify-start h-auto"}`}>
                                        {!slug ?
                                            <p className="text-slate-500 flex flex-col items-center justify-center gap-4">Votre
                                                panier est vide
                                                <span
                                                    className="order-first text-blue-300 text-xl rounded-full p-4 border border-solid border-blue-100"><FiShoppingBag/></span>
                                            </p>
                                            :
                                            <div className="flex flex-col gap-4">
                                                <div
                                                    className="flex gap-4"
                                                >
                                                    <div className="relative h-40">
                                                        <h3 className={`${montserrat.className} text-lg font-medium`}>{oneShoes.title}</h3>
                                                        <p className="text-slate-500 lg:text-lg text-sm">Couleur
                                                            : {myColor?.color} </p>

                                                        <div className="flex items-center lg:justify-center gap-8">
                                                            <p className="text-slate-500 lg:text-lg text-sm"> {isMobile ? "Taille" : "Taille / Pointure"} {mySize?.size}</p>

                                                            <button
                                                                className="text-slate-500 flex items-center justify-center gap-2 lg:text-lg text-sm">Quantité <span>1</span>
                                                            </button>
                                                        </div>

                                                        <div className="absolute bottom-5 flex gap-4">
                                                            <ButtonLike id={oneShoes.id}/>
                                                            <ButtonRemoveCommande id={oneShoes.id}/>
                                                        </div>
                                                    </div>

                                                    <div className="order-first h-40 w-40">
                                                        <figure className="h-40 w-40">
                                                            <Image
                                                                src={`/uploads/${myColor?.images[0]
                                                                }.webp`}
                                                                alt={oneShoes.title}
                                                                width={500}
                                                                height={500}
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {/* Forms to send */}
                                        {slug &&
                                            !isMobile &&
                                            <Forms
                                                title={oneShoes?.title}
                                                price={oneShoes?.price}
                                                size={mySize?.size}
                                                setIsFree={setIsFree}
                                                isFree={isFree}
                                                color={myColor?.color}
                                                quantity={1}
                                            />
                                        }
                                    </div>
                                    <hr/>
                                </div>


                                <div className="lg:w-4/12 w-full flex flex-col gap-4">
                                    <p className={`${montserrat.className} text-xl font-medium`}>Récapitulatif</p>

                                    <div className="grid grid-cols-2 gap-4 w-full">

                                        <div
                                            className="relative col-span-2 flex items-center justify-between">
                                            <p className={`${montserrat.className} text-md font-medium text-slate-700`}>Sous
                                                Total : </p>
                                            <span className="block">{slug ? `${oneShoes.price} €` : "_"}</span>
                                        </div>

                                        <div
                                            className="relative col-span-2 flex items-center justify-between">
                                            <p className={`${montserrat.className} text-md font-medium text-slate-700`}>Frais
                                                estimés de prise <span
                                                    className="block">en charge et d&apos;expédition</span></p>
                                            <span className="block">{ isFree ? "Gratuit" : `${7.99} €` }</span>
                                        </div>
                                        <div
                                            className="relative border rounded-lg border-solid border-slate-200 col-span-2 flex items-center justify-between h-14 p-4">
                                            <p className={`${montserrat.className} text-md font-medium text-slate-700`}>Total</p>
                                            <span
                                                className="block font-bold">{slug ? `${isFree ? oneShoes.price : oneShoes.price + 7 } €` : "_"}</span>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {isMobile &&
                                <Forms
                                    title={oneShoes?.title}
                                    price={oneShoes?.price} size={mySize?.size}
                                    setIsFree={setIsFree}
                                    isFree={isFree}
                                    color={myColor?.color}
                                    quantity={1}
                                />
                            }

                            <ListComp/>
                        </div>
                    </div>
                </article>

            }

            <CurrentSection title="Ces articles devraient te plaire"/>
        </motion.section>

    )
}