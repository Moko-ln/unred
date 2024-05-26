"use client"

import { HeroComp } from "@/components/HeroComp";
import { ShopSection } from "@/features/shop/components/ShopSection";
import {motion} from "framer-motion";

export default function Sneakers() {
  return (
    <motion.section
        initial={{ opacity: 0, translateY: -20 }}
        exit={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "spring", duration: 0.6, ease: "easeIn" }}
    >
      <HeroComp />
      <ShopSection />
    </motion.section>
  );
}
