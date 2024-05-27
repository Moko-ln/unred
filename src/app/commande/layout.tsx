import { Footer } from "@/components/partials/footer/Footer";
import { Header } from "@/components/partials/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Unred - Commande",
    description:
        "Passez votre commande sur Unred. Profitez d'un processus d'achat simple et sécurisé pour obtenir vos chaussures préférées. Suivez vos commandes et bénéficiez de nos offres exclusives.",
    keywords:
        "Unred, commande, achat en ligne, chaussures, suivi de commande, offres exclusives, achat sécurisé",
    robots: "index, follow",
};

export default function layoutMain({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
