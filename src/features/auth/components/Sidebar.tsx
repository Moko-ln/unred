"use client";

import { Brand } from "@/components/partials/header/Brand";
import { Profil } from "@/features/auth/components/Profil";
import { Logout } from "@/features/auth/components/button/logout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBarChart2,
  FiGrid,
  FiSettings,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

interface ItemListType {
  id: number;
  title: string;
  path: string;
  pathUrl: string;
  icon: any;
}
export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-2/12 relative">
      <header className=" bg-slate-100 pt-10 fixed left-0 top-0 h-full w-2/12 ">
        <div className="flex items-center justify-center">
          <Brand />
        </div>

        <nav className={`mt-20 overflow-hidden`}>
          <ul className={`flex flex-col gap-4 items-center`}>
            {navList.map((item: ItemListType | any) => (
              <li key={item.id} className={`w-40`}>
                <Link
                  href={`/dashboard/${item.path}`}
                  className={`${`${item.pathUrl}` == pathname ? "bg-white text-slate-500" : "text-slate-700"} w-72 text-left p-4 rounded-full flex gap-2 items-center transition`}
                >
                  <span
                    className={`${`${item.pathUrl}` == pathname ? "text-blue-500" : "text-slate-500"} transition`}
                  >
                    {item.icon}
                  </span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 border-t border-slate-300 py-8 flex gap-2 flex-col items-center justify-center w-full">
          <div className="border border-blue-400 bg-blue-500 rounded-full h-12 w-12 flex items-center justify-center">
            <span className="text-slate-50 text-lg">
              <FiUser />
            </span>
          </div>
          <Profil />
          <Logout />
        </div>
      </header>
    </div>
  );
};

const navList: ItemListType[] = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    pathUrl: "/dashboard",
    icon: <FiGrid />,
  },
  {
    id: 2,
    title: "Stats",
    path: "stats",
    pathUrl: "/dashboard/stats",
    icon: <FiBarChart2 />,
  },
  {
    id: 3,
    title: "Products",
    path: "produits",
    pathUrl: "/dashboard/produits",
    icon: <FiShoppingBag />,
  },
  {
    id: 4,
    title: "Settings",
    path: "settings",
    pathUrl: "/dashboard/settings",
    icon: <FiSettings />,
  },
];
