"use client"

import {FiBarChart2, FiBox, FiGrid, FiShoppingBag} from "react-icons/fi";
import {useEffect, useState} from "react";
import {Brand} from "@/components/partials/header/Brand";
import {Logout} from "@/features/auth/components/button/logout";
import {Profil} from "@/features/auth/components/Profil";
import { usePathname } from 'next/navigation'
import Link from "next/link";

interface ItemListType {
    id:number;
    title: string;
    path: string;
    pathUrl: string;
    icon:any;
}
export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <header className="col-span-1 bg-slate-100 relative pt-10">
            <div className="flex items-center justify-center">
                <Brand />
            </div>

            <nav className={`mt-20 overflow-hidden`}>
                <ul className={`flex flex-col gap-4 items-center`}>
                    {navList.map((item: ItemListType | any) =>
                        <li key={item.id} className={`w-40`}>
                            <Link
                                href={`/dashboard/${item.path}`}
                                className={`${`${item.pathUrl}` == pathname ? "bg-white text-slate-500" : "text-slate-700"} w-72 text-left p-4 rounded-full flex gap-2 items-center transition`}
                            >
                                <span className={`${`${item.pathUrl}` == pathname ? "text-blue-500" : "text-slate-500"} transition`}>{item.icon}</span>
                                {item.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>

            <div className="absolute bottom-20 flex gap-4 flex-col items-center justify-center w-full">
                <Profil />
                <Logout />
            </div>

        </header>
    )
}

const navList: ItemListType[] = [
    {
        id: 1,
        title: "Dashboard",
        path:"/",
        pathUrl: "/dashboard",
        icon:<FiGrid />,
    },
    {
        id: 2,
        title: "Stats",
        path:"stats",
        pathUrl:"/dashboard/stats",
        icon:<FiBarChart2 />,
    },
    {
        id: 3,
        title: "Products",
        path:"produits",
        pathUrl:"/dashboard/produits",
        icon:<FiShoppingBag />,
    }
]