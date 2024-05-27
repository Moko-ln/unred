import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Unred - Mentions Légales",
    description:
        "Consultez les mentionslegales légales de Unred. Découvrez les informations légales sur notre entreprise, notre politique de confidentialité, et nos conditions générales d'utilisation.",
    keywords:
        "Unred, mentionslegales légales, informations légales, politique de confidentialité, conditions générales d'utilisation, CGU",
    robots: "index, follow",
};

export default function layoutMain({children}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}
