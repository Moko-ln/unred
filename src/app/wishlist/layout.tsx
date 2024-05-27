import { Footer } from "@/components/partials/footer/Footer";
import { Header } from "@/components/partials/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Unred - Wishlist",
    description: "Découvrez et gérez vos chaussures préférées sur la wishlist Unred. Gardez une trace de vos coups de cœur et soyez le premier informé des nouvelles collections et offres spéciales.",
    keywords: "Unred, wishlist, chaussures, liste de souhaits, mode, chaussures de sport, chaussures élégantes, nouvelles collections, offres spéciales",
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
