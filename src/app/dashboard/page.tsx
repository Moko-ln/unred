"use client"

import {montserrat} from "@/fonts/Fonts";
import {FiActivity, FiBox} from "react-icons/fi";
import {useState} from "react";
import {ChartComp} from "@/features/auth/components/ChartComp";

export default function Dashboard() {
    return (

        <article className="col-span-4 py-8">
            <div className="container-root">
                <div className="wrapper flex flex-col gap-10">
                    <div>
                        <h2 className={`${montserrat.className} font-semiBold tracking-wide`}>Heureux de vous retrouver !</h2>
                        <p className={`text-slate-500 text-sm`}>Voici les dernières nouvelles de votre magasin pour aujourd&lsquo;hui !</p>
                    </div>

                    {/* List Box */}
                    <div>
                        <ul className={` flex items-center justify-start gap-8`}>
                            {listBox.map((item, i) =>
                                <li key={item.id}
                                    className={`${item.bgColor} h-32 w-1/5 relative rounded-2xl py-4 px-8`}
                                >
                                    <span className={`${montserrat.className} text-4xl font-medium mb-4`}>{item.total}k</span>
                                    <p className={`${montserrat.className} text-xs text-slate-500`}>{item.title}</p>
                                    <span className={`${item.textColor} text-3xl absolute right-10 bottom-4`}><FiActivity /></span>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Graphique */}
                    <div className={`w-[800px]`}>
                        <ChartComp />
                    </div>
                </div>
            </div>
        </article>

    )
}

const listBox = [
    {
        id: 1,
        title: "Clients total",
        total:32,
        bgColor:"bg-indigo-50",
        textColor:"text-indigo-500",
    },
    {
        id: 2,
        title: "Revenue total",
        total:200,
        bgColor:"bg-lime-50",
        textColor:"text-lime-500",
    },
    {
        id: 3,
        title: "Commande total",
        total:12,
        bgColor:"bg-sky-50",
        textColor:"text-sky-500",
    },
]