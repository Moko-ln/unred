import { Footer } from "@/components/partials/footer/Footer";
import { Header } from "@/components/partials/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UnderLux - Homme",
  description:
    "Consultez les mentions légales de Lemiza traiteur. Nous sommes bien plus qu'une simple entreprise de traiteur. Chez Lemiza, nous nous engageons à fournir des services exceptionnels, une attention méticuleuse aux détails et une discrétion absolue.",
  keywords:
    "mentions légales, politique de confidentialité, CGU, conditions générales d'utilisation",
  robots: "index, follow",
};

export default function layoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header menu wishlist/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
