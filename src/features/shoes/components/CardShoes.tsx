"use client";

import { ButtonCart } from "@/components/button/ButtonCart";
import { montserrat } from "@/fonts/Fonts";
import { dataCardShoesType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const CardShoes = ({
  id,
  title,
  price,
  image,
  slug,
}: dataCardShoesType) => {
  let router = useRouter();

  const handleClick = (slug: string) => {
    return router.push(`homme/${slug}`);
  };

  return (
    <div
      className="flex flex-col gap-4 cursor-pointer"
      onClick={() => handleClick(slug)}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className={`${montserrat.className} text-md font-bold text-left`}>
            {title}
          </h3>
          <p className="text-left">{price} €</p>
        </div>
        <ButtonCart id={id} sm />
      </div>

      <div className="max-h-[400px] order-first mb-4">
        <figure className="max-h-[400px]">
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
