"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { CardShoes } from "@/features/shoes/components/CardShoes";
import {useFetchShoes} from "@/hook/useFetchShoes";
import {dataCardShoesType} from "@/types";
import {useMediaQuery} from "react-responsive";

export const MySwipper = () => {
  const { shoesData, isLoading, error } = useFetchShoes();

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
    <Swiper
      slidesPerView={ isMobile ? 1 : 3 }
      spaceBetween={30}
      pagination={{
        clickable: false,
      }}
      className="mySwiper"
    >
      { shoesData && shoesData.map(( shoes:  dataCardShoesType) => (
        <SwiperSlide key={shoes.id}>
          <CardShoes
            id={shoes.id}
            title={shoes.title}
            price={shoes.price}
            model={shoes.model}
            description={shoes.description}
            image={shoes.image}
            slug={shoes.slug}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
