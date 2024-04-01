import { CurrentSection } from "@/components/CurrentSection";
import { HeroComp } from "@/components/HeroComp";
import data from "@/data/shoesMan.json";
import { ShopSection } from "@/features/shop/components/ShopSection";

export default function Homme() {
  return (
    <>
      <HeroComp />
      <CurrentSection title="En ce momment" data={data.shoes} footerText />
      <ShopSection />
    </>
  );
}
