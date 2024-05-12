import { Metadata } from "next";
import {Header} from "@/components/partials/header/Header";
import {Footer} from "@/components/partials/footer/Footer";

export const metadata: Metadata = {
    title: "Unred - Exclus",
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
            <Header/>
            <main>
                <article className="min-h-[700px] flex items-center justify-center">
                    <div className="container-root">
                        <div className="wrapper">
                            {children}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>

    );
}
