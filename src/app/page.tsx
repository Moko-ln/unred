import { Hero } from "@/components/home/Hero";
import { Footer } from "@/components/partials/footer/Footer";
import {Toaster} from "sonner";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
