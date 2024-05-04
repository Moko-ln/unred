import { Social } from "@/components/Social";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="min-h-20 bg-transparent">
      <div className="container-root">
        <div className="wrapper flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-sm">© 2024 UnderLux</p>
            <Social />
          </div>

          <div>
            <ul className="flex flex-wrap lg:items-center gap-4 py-4">
              {linkFooter.map((item) => (
                <li key={item.id} className="text-slate-600 text-sm">
                  <Link href={`/${item.link}`} title={item.title}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const linkFooter = [
  {
    id: 1,
    title: "Conditions générales d'achat ",
    link: "conditionachat",
  },
  {
    id: 2,
    title: "Politique de confidentialité",
    link: "politiquedeconfidentialite",
  },
  {
    id: 3,
    title: "Mentions legales",
    link: "mentionslegales",
  },
];
