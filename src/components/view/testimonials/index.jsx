"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/components/data/testimonial";
import quoteImage from "../../../../public/images/icon-quote.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

export function Testimonials() {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <h1
        className="text-3xl font-bold dark:text-white lg:text-[45px]
         leading-[3rem]  font-Outfit w-[300px] lg:w-[700px] text-center"
      >
        Client’s Testimonials
      </h1>
      <p className="text-gray-500 dark:text-gray-400 w-[300px] lg:w-[700px] text-center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using.
      </p>
      {/* Testimonials - Section */}
      <div className=" w-[80%]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="w-full"
        >
          {testimonials.map((t) => (
            <SwiperSlide>
              <div className="flex flex-col items-center xl:flex-row xl:items-stretch p-16 dark:bg-gray-500/20">
                <Image
                  src={t.img}
                  width={400}
                  height={300}
                  alt="testimonial image"
                  className="py-8"
                />

                <div className="flex flex-col  w-full items-center p-10 gap-2 ">
                  <Image
                    src={quoteImage}
                    alt="quote"
                    width={50}
                    height={50}
                    className="self-start object-cover"
                  />
                  <p className="w-full text-sm  md:text-2xl text-gray-500 font-medium dark:text-gray-300 italic">
                    {t.description}
                  </p>
                  <h1 className="font-semibold self-start mt-6">{t.name}</h1>
                  <p className="text-gray-700 self-start dark:text-white">
                    {t.email}
                  </p>
                </div>
                <div className="items-end">
                  <div className="bg-[#4e6bff] w-2 h-1/2"></div>
                  <div className="bg-[#f36a8d] w-2 h-1/2"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
