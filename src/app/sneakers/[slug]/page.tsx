"use client";

import { CurrentSection } from "@/components/CurrentSection";
import { ButtonLike } from "@/components/button/ButtonLike";

import { montserrat } from "@/fonts/Fonts";
import Image from "next/image";
import {notFound, useParams} from "next/navigation";
import {useState} from "react";
import {variationType} from "@/types";
import {ButtonCheckout} from "@/components/button/ButtonCheckout";
import {useFetchBySlug} from "@/hook/useFetchBySlug";
import {motion} from "framer-motion";
import {sizeShoes} from "@/data/sizeShoes";

export default function ManShoesBySlug() {

  const [color, setColor] = useState(1);
  const [variation, setVariation] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number |null>(null);

  const { slug } = useParams();

  const { oneShoes, error } = useFetchBySlug(slug)

  const handleClickChangeVariation = (variation: number) => {
    setVariation(variation);
  };

  const handleClickChangeColor = (colorValue: number) => {
    setColor(colorValue);
  };

  const handleClickChangeSize = (size: number) => {
    setSelectedSize(size);
  }

  // Get good variation shoes
  const vars = Array.isArray(oneShoes?.variation)
      ? oneShoes.variation.find((item: variationType) => item.id === color) // Si oui, appelez find sur le tableau
      : undefined;

  if (error) return notFound()

  return (
    <motion.section
        className="flex flex-col lg:gap-32 gap-24"

        initial={{ opacity: 0, translateY: -20 }}
        exit={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "spring", duration: 0.6, ease: "easeIn" }}
    >
      { oneShoes &&
          <article className="min-h-[800px] py-10">
            <div className="container-root">
              <div className="wrapper flex lg:flex-row flex-col gap-8">
                {/* Left */}
                <div className="lg:w-2/5 w-full lg:px-10 flex flex-col gap-10">
                  <div className="flex flex-col">
                    <h2
                        className={`${montserrat.className} text-2xl font-bold text-left mb-2`}
                    >
                      {oneShoes.title}
                    </h2>
                    <p className="text-left text-blue-500 order-first font-bold mb-2">
                      Livraision gratuit en Ile de france!
                    </p>
                    <p className="text-left text-lg text-slate-500 font-bold">
                      {oneShoes.price} €
                    </p>
                  </div>

                  {/* Selected the shoes color */}
                  <ul className="flex items-center gap-4">
                    {Array.isArray(oneShoes.variation) &&
                        oneShoes.variation.map((item: variationType) => (
                            <li key={item.id}>
                              <button
                                  className={`cursor-pointer block rounded-full ${color === item.id ? "h-10 w-10" : "h-6 w-6" } transition ${
                                      color === item.id ? "border-3 border-solid border-blue-500" : ""
                                  } ${item.classColor && item.classColor}`}
                                  onClick={() => handleClickChangeColor(item.id)}
                                  style={{backgroundColor: item.classColor}}
                              ></button>
                            </li>
                        ))}
                  </ul>

                  <div>
                    <p className={`${montserrat.className} text-xl font-medium text-left mb-4`}>
                      Selectionner la taille
                    </p>

                    <ul className="grid grid-cols-3 gap-2">
                      {sizeShoes?.map((item: any) => (
                          <li key={item.id}>
                            <button
                                className={`cursor-pointer w-full border border-solid rounded-md p-2 ${selectedSize === item.id ? "border-blue-500 text-blue-500" : "text-slate-500 border-slate-200"} transition`}
                                onClick={() => handleClickChangeSize(item.id)}
                            >
                              EU {item.size && item.size}
                            </button>
                          </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button submit */}
                  <ul className="flex irems-center justify-between gap-10">
                    <li className="w-1/12 grow">
                      <ButtonCheckout id={oneShoes.id} slug={oneShoes.slug} color={color} size={selectedSize} variation={variation}/>
                    </li>
                    <li className="w-1/12 flex items-center">
                      <ButtonLike id={oneShoes.id}/>
                    </li>
                  </ul>

                  {/* Product description */}
                  <div className="p-4 border border-solid border-slate rounded-2xl">
                    <p className="text-lg text-slate-500">
                      {oneShoes.description}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="lg:w-2/5 w-full order-first grow flex lg:flex-row flex-col gap-2">
                  <div className="flex flex-col gap-2 lg:w-2/12 w-full">
                    <ul className="flex lg:flex-col flex-row gap-4">
                      {oneShoes.variation &&
                          vars?.images?.map((item: string, index: number) => (
                              <li
                                  key={index + 1}
                                  className="lg:h-[100px] h-24 w-24 lg:w-2/5 cursor-pointer"
                                  onClick={() => handleClickChangeVariation(index)}
                              >
                                <figure className="lg:h-[100px] h-24 w-24">
                                  <Image
                                      src={`/uploads/${item}.webp`}
                                      alt={`Image de couverture`}
                                      width={100}
                                      height={100}
                                      className="w-full h-full object-contain"
                                  />
                                </figure>
                              </li>
                          ))}
                    </ul>
                  </div>

                  {/* FIRST Image */}
                  {oneShoes?.variation && (
                      <div className="lg:h-[650px] h-96 lg:w-2/5 w-full grow order-first lg:order-last">
                        <figure className="lg:h-[650px] h-96">
                          <Image
                              src={`/uploads/${
                                  vars?.images[variation]
                              }.webp`}
                              alt={`Image de couverture`}
                              width={400}
                              height={400}
                              className="w-full h-full object-contain"
                          />
                        </figure>
                      </div>
                  )}
                </div>
              </div>
            </div>
          </article>
      }

      <hr/>

      <CurrentSection title="Nous pensons que cela vous plaira" />
    </motion.section>
  );
}
