"use client"

import { montserrat } from "@/fonts/Fonts";
import Link from "next/link";
import {useState} from "react";
import { usePathname, useSearchParams } from 'next/navigation';

export const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className="order-first lg:w-2/5 w-full flex justify-start lg:mb-0 mb-2">
            <ul className="flex items-center justify-center gap-4">
                {navList.map(item =>
                    <li key={item.id}>
                        <Link
                            href={`/${item.path}`}
                            className={`${pathname.startsWith(`/${item.path}`) ? "text-slate-800 text-lg font-semibold" :  "text-slate-300 text-md font-medium"} ${montserrat.className}`}
                        >{item.title }</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

const navList = [
    {
        id: 1,
        title: "Sneakers",
        path: "sneakers"
    },
    // {
    //     id: 2,
    //     title: "Accessoires",
    //     path: "accessoires"
    // },
    {
        id: 3,
        title: "Exclusivites",
        path: "exclus"
    }
];
