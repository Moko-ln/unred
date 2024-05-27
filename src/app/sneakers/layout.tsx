import { Footer } from "@/components/partials/footer/Footer";
import { Header } from "@/components/partials/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unred - boutique",
    description:
        "Découvrez la boutique en ligne Unred. Explorez notre vaste collection de chaussures élégantes et de sport pour toutes les occasions. Profitez des dernières tendances et des offres exclusives.",
    keywords:
        "Unred, boutique en ligne, chaussures, mode, chaussures de sport, chaussures élégantes, tendances, offres exclusives",
  robots: "index, follow",
};

export default function layoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header menu wishlist />
      <main>{children}</main>
      <Footer />
    </>
  );
}
