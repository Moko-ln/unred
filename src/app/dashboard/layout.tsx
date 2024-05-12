import { Metadata } from "next";
import {Sidebar} from "@/features/auth/components/Sidebar";
import {SideOrder} from "@/features/auth/components/SideOrder";

export const metadata: Metadata = {
    title: "Unred - Dashboard",
    description:
        "Consultez les mentions légales de Lemiza traiteur. Nous sommes bien plus qu'une simple entreprise de traiteur. Chez Lemiza, nous nous engageons à fournir des services exceptionnels, une attention méticuleuse aux détails et une discrétion absolue.",
    keywords:
        "mentions légales, politique de confidentialité, CGU, conditions générales d'utilisation",
    robots: "index, follow",
};

export default function layoutMain({children,}: {children: React.ReactNode;}) {

    return (
        <main className="grid grid-cols-7 min-h-screen">
            <Sidebar />
            { children }
            <SideOrder />
        </main>
    );
}
