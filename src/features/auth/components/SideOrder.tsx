"use client"

import {
    FiBox,
    FiCheckSquare,
    FiCommand,
    FiLoader,
    FiTruck
} from "react-icons/fi";
import {useState} from "react";


export const SideOrder = (commande: any) => {
    const [activeId, setActiveId] = useState<number | null>(1);
    commande = false
    return (
        <div className="col-span-2 bg-white shadow-md relative">
            { !commande ?
                <p className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-slate-500`}>
                    <span className="text-slate-500 text-3xl"><FiCommand/></span>
                    Aucune commande passer!
                </p>
                :
                "List de produits"
            }

            <ul className={`absolute right-0 w-16 flex flex-col divide-y divide-slate-100 h-full bg-slate-50`}>
                {navListProducts.map((item: any) =>
                    <li key={item.id} className={`${item.id === activeId ? "text-blue-500 bg-blue-100" : "text-slate-500"} text-sm flex items-center justify-center h-16`}>
                        <button className={`border-slate-200 flex items-center w-full h-full justify-center p-4 text-lg`}>{item.icon}</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

const navListProducts: any = [
    {
        id: 1,
        title: "Products",
        icon:<FiBox />,
    },
    {
        id: 2,
        title: "En preparation",
        icon:<FiLoader />,
    },
    {
        id: 3,
        title: "En cours de livraison",
        icon:<FiTruck />,
    },
    {
        id: 4,
        title: "Livrer",
        icon:<FiCheckSquare />,
    }
]