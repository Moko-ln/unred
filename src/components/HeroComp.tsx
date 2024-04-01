import Banner from "@/assets/images/banner-man.webp";
import { montserrat } from "@/fonts/Fonts";
import Image from "next/image";
import { ListComp } from "./ListComp";

export const HeroComp = () => {
  return (
    <article className="min-h-screen pt-40">
      <div className="container-root">
        <div className="wrapper flex flex-col gap-8">
          <div className="flex flex-col gap-10">
            <div className="flex justify-between">
              <h2 className={`${montserrat.className} text-3xl font-extrabold`}>
                Le Style Urbain, <span className="block ml-4">à vos Pieds</span>
              </h2>
              <p className="w-2/5">
                Découvrez une collection de chaussures de luxe pour hommes qui
                fusionne l&lsquo;audace de la rue avec le raffinement de la
                mode, offrant un mélange parfait de confort, de style et
                d&lsquo;individualité à chaque pas.
              </p>
            </div>
            <div className="h-[700px]">
              <figure className="h-[700px] w-full rounded-lg">
                <Image
                  src={Banner}
                  alt={`Image de couverture`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "3px",
                  }}
                />
              </figure>
            </div>
          </div>

          <ListComp />

          <hr />
        </div>
      </div>
    </article>
  );
};
