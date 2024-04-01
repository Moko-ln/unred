"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { CardShoes } from "@/features/shoes/components/CardShoes";

export const MySwipper = ({ mydata }: { mydata: string[] }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {mydata.map((shoes) => (
        <SwiperSlide key={shoes.id}>
          <CardShoes
            id={shoes.id}
            title={shoes.title}
            price={shoes.price}
            model={shoes.model}
            description={shoes.description}
            color={shoes.color}
            image={shoes.image}
            slug={shoes.slug}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
