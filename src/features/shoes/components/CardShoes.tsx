"use client";

import { ButtonLike } from "@/components/button/ButtonLike";
import { montserrat } from "@/fonts/Fonts";
import { dataCardShoesType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {useMediaQuery} from "react-responsive";

export const CardShoes = ({
  id,
  title,
  price,
  image,
  slug,
}: dataCardShoesType) => {
  let router = useRouter();

  const handleClick = (slug: string) => {
    return router.push(`/sneakers/${slug}`);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="flex flex-col gap-4" >
      <div className="flex items-start justify-between">
        <div>
          <h3 className={`${montserrat.className} text-md font-bold text-left text-xs lg:text-lg`}>{title}
            {title}
          </h3>
          <p className="text-left text-sm"> {price} €</p>
        </div>
        <ButtonLike id={id} />
      </div>

      <div
          className={`lg:max-h-96 order-first mb-4 cursor-pointer`}
          onClick={() => handleClick(slug)}
      >
        <figure className="lg:max-h-96 ">
          <Image
            src={`/uploads/man/current/${image}.png`}
            alt={`Image de couverture`}
            width={400}
            height={400}
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
  );
};
