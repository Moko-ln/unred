import { lato } from "@/fonts/Fonts";
import StoreProvider from "@/redux/StoreProvider";
import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "../assets/scss/index.scss";

export const metadata: Metadata = {
  title: "Unred | Soyez dans le coup!",
  description:
    "Découvrez l'élégance abordable avec Unred. Trouvez votre style parfait parmi notre collection de chaussures de luxe à prix accessibles. Élevez votre look dès aujourd'hui !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
        <html lang="fr" className={lato.className}>
          <head>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_ID_GOOGLE}`}></Script>
            <Script id="google-analytics">
              {
                `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date ());
                `
              }
            </Script>
          </head>
          <body>
            {children}
            <Toaster />
          </body>
        </html>
    </StoreProvider>
  );
}
