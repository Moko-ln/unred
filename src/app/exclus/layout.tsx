import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unred - Exclus",
  description:
      "Découvrez les collections exclusives Unred. Accédez à des chaussures uniques et limitées, disponibles uniquement sur notre site. Profitez des designs exclusifs et des éditions limitées pour un style inégalé.",
  keywords:
      "Unred, collections exclusives, chaussures, éditions limitées, mode, chaussures uniques, offres exclusives",
  robots: "index, follow",
};

export default function layoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
