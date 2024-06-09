import { Social } from "@/components/Social";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="min-h-20 flex items-center">
      <div className="container-root">
        <div className="wrapper flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-sm">© 2024 Unred</p>
            <Link href={`/mentionslegales`} title={"Les mentions légales"} className="text-slate-600 text-sm">
              Mentions legales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const linkFooter = [
  {
    id: 3,
    title: "Mentions legales",
    link: "mentionslegales",
  },
];
