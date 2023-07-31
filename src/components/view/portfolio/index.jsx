"use client";
import { useState, useEffect } from "react";
import { work, buttons } from "@/components/data/portfolio";
import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";

export function Portfolio() {
  const [portfolio, setPortfolio] = useState(work);
  const [buttonSelect, setbutton] = useState("All");
  useEffect(() => {
    // setPortfolio(option);
  }, []);

  useEffect(() => {
    const newPortfolio = work.filter((p) => p.type.includes(buttonSelect));
    console.log(newPortfolio);
    setPortfolio(newPortfolio);
  }, [buttonSelect]);

  return (
    <div className="relative flex flex-col py-20 items-center gap-10 ">
      <h1
        className="text-3xl font-bold dark:text-white lg:text-[45px]
         leading-[3rem]  font-Outfit w-[300px] lg:w-[700px] text-center"
      >
        We Offer Great Affordable Premium Prices.
      </h1>
      <p className="text-gray-700 dark:text-gray-400 w-[300px] lg:w-[700px] text-center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using.
      </p>

      {/* Portfolio */}
      <div className="w-full flex flex-col items-center gap-10 px-16">
        {/* Buttons section */}
        <div
          className="flex flex-wrap gap-4 md:gap-10 px-4 rounded-xl md:py-4 md:px-14 md:rounded-full bg-white  shadow-2xl
         shadow-gray-200 dark:shadow-none dark:bg-gray-900/30"
        >
          {buttons.map((name) => (
            <button
              onClick={() => setbutton(name)}
              className={`${
                buttonSelect == name
                  ? "bg-[#4E6BFF] text-white  rounded-full transition-all duration-100 delay-150 ease-in-out"
                  : null
              } px-4 py-1`}
            >
              {name}
            </button>
          ))}
        </div>
        {/* Portfolio Section */}
        <div className="relative flex  flex-wrap w-full justify-start gap-6 ">
          {portfolio.map((p) => (
            <div className="relative h-fit">
              <Image src={p.img} alt="portfolio image" className="z-0" />
              <div
                className="w-full h-1/2 opacity-0 hover:opacity-100 hover:h-full  hover:bg-white/20 
              hover:backdrop-blur-md  z-10 absolute bottom-0 transition-all duration-300 delay-100  ease-linear
              flex flex-col justify-center items-center gap-4"
              >
                <h1 className="text-xl font-semibold">{p.title}</h1>
                <p className="text-gray-700">{p.description}</p>
                <button
                  type="submit"
                  class="bg-[#4e6bff] z-20  rounded-full text-white p-4 text-md self-center"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
