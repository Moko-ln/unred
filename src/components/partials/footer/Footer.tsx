import { Social } from "@/components/Social";
import Link from "next/link";

export const Footer = () => {
  return (
    <article className="h-20 bg-transparent">
      <div className="container-root">
        <div className="wrapper flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p>© 2024 UnderLux</p>
            <Social />
          </div>

          <div>
            <ul className="flex items-center gap-4">
              {linkFooter.map((item) => (
                <li key={item.id}>
                  <Link href={`/${item.link}`} title={item.title}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
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
