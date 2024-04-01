"use client";

import { CurrentSection } from "@/components/CurrentSection";
import { ButtonCart } from "@/components/button/ButtonCart";
import data from "@/data/shoesMan.json";
import { montserrat } from "@/fonts/Fonts";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ManShoesBySlug() {
  const [oneShoes, setOneShoes] = useState<string[]>([]);
  const [color, setColor] = useState(1);
  const [variation, setVariation] = useState(0);
  const [selectedSize, setSelectedSize] = useState();

  const { slug } = useParams();

  useEffect(() => {
    const one = data.shoes?.find((item) => item.slug === slug);
    setOneShoes(one);
  }, [variation, color]);

  const handleClickChangeVariation = (variation: number) => {
    setVariation(variation);
  };

  const handleClickChangeColor = (color: string) => {
    setColor(color);
  };

  return (
    <>
      <article className="min-h-[800px] pt-20">
        <div className="container-root">
          <div className="wrapper flex gap-8">
            {/* Left */}
            <div className="w-2/5 px-10 flex flex-col gap-10">
              <div className="flex flex-col">
                <h2
                  className={`${montserrat.className} text-2xl font-bold text-left mb-2`}
                >
                  {oneShoes.title}
                </h2>
                <p className="text-left text-blue-500 order-first">
                  Livraision gratuit!
                </p>
                <p className="text-left text-lg text-slate-500 font-bold">
                  {oneShoes.price} €
                </p>
              </div>

              <ul className="flex items-center gap-4">
                {oneShoes.variation &&
                  oneShoes.variation?.map((item) => (
                    <li key={item.id}>
                      <button
                        className={`cursor-pointer block rounded-full h-10 w-10 ${item.classColor}`}
                        onClick={() => handleClickChangeColor(item.id)}
                      ></button>
                    </li>
                  ))}
              </ul>

              <div>
                <p
                  className={`${montserrat.className} text-xl font-medium text-left mb-4`}
                >
                  Selectionner la taille
                </p>

                <ul className="grid grid-cols-3 gap-2">
                  {oneShoes.size?.map((item, index) => (
                    <li key={index + 1}>
                      <button className="cursor-pointer w-full border border-solid border-slate-200 rounded-md p-2 text-slate-500 ">
                        EU {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button submit */}
              <ul className="flex irems-center justify-between gap-10">
                <li className="w-1/12 grow">
                  <button
                    className={`h-14 p-4 w-full bg-black rounded-full flex items-center justify-center text-white font-bold ${montserrat.className}`}
                  >
                    Commander
                  </button>
                </li>
                <li className="w-1/12">
                  <ButtonCart id={oneShoes.id} lg />
                </li>
              </ul>

              {/* Product description */}
              <div className="p-4 border border-solid border-slate rounded-2xl">
                <p className="text-lg font-medium">
                  La Nike Dunk Low est une chaussure parfaite pour compléter sa
                  collection. Cette icône du basket du milieu des années 80
                  revient en force avec une conception ultra-résistante et les
                  couleurs du modèle d&lsquo;origine. Avec un rembourrage aux
                  chevilles et une excellente adhérence en caoutchouc, elle
                  révèle le dunker qui sommeille en chacun de nous.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="w-2/5 order-first grow flex gap-2">
              <div className="flex flex-col gap-2 w-2/1">
                <ul className="flex flex-col gap-4">
                  {oneShoes.variation &&
                    oneShoes.variation
                      ?.find((item) => item.id === color)
                      .varia.map((item, index) => (
                        <li
                          key={index + 1}
                          className="h-[100px] cursor-pointer"
                          onClick={() => handleClickChangeVariation(index)}
                        >
                          <figure className="h-[100px]">
                            <Image
                              src={`/uploads/man/${item}.jpg`}
                              alt={`Image de couverture`}
                              width={100}
                              height={100}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "3px",
                              }}
                            />
                          </figure>
                        </li>
                      ))}
                </ul>
              </div>

              {oneShoes?.variation && (
                <div className="h-[650px] w-2/5 grow">
                  <figure className="h-[650px]">
                    <Image
                      src={`/uploads/man/${
                        oneShoes.variation.find((item) => item.id === color)
                          ?.varia[variation]
                      }.jpg`}
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
              )}
            </div>
          </div>
        </div>
      </article>

      <CurrentSection
        title="Nous pensons que cela vous plaira"
        data={data.shoes}
      />
    </>
  );
}
