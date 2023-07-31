"use client";
import React, { useEffect, useState } from "react";
import { anuualprices, monthlyprices } from "@/components/data/prices";
import smallwaves from "../../../../public/images/shape-03.svg";
import Image from "next/image";

const Prices = () => {
  const [toggle, settoggle] = useState(true);
  const [prices, setprices] = useState(monthlyprices);

  useEffect(() => {
    console.log(toggle);
    if (toggle == true) {
      setprices(monthlyprices);
    } else if (toggle == false) {
      setprices(anuualprices);
    }
  }, [toggle]);

  return (
    <div className="bg-[#F4F7FA] relative dark:bg-slate-800 py-20 flex flex-col items-center space-y-14">
      <h1
        className="text-3xl font-bold dark:text-white lg:text-[45px]
         leading-[3rem]  font-Outfit w-[300px] lg:w-[700px] text-center z-10"
      >
        We Offer Great Affordable Premium Prices.
      </h1>
      <p className="text-gray-700 dark:text-gray-400 w-[300px] lg:w-[700px] text-center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using.
      </p>
      <Image
        src={smallwaves}
        alt="lines"
        className="absolute top-50 right-32 w-24 h-24 z-0"
      />
      <div className="flex items-center gap-2 font-semibold">
        Bill Monthly
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            onClick={() => {
              console.log("in function ", toggle);
              settoggle(!toggle);
            }}
          />
          <div class="w-11 h-6 bg-gray-200   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        Bill Annually
      </div>
      {/* Prices Cards */}
      <div className="flex flex-wrap w-full justify-center gap-8 rounded-lg ">
        {prices &&
          prices.map((price) => (
            <div className="bg-white dark:bg-gray-900/30 dark:text-white dark:shadow-none py-14 px-10 md:px-20 flex flex-col items-center gap-4 shadow-2xl shadow-gray-300">
              <h2 className="font-medium text-lg mb-4">{price.title}</h2>
              <p className="flex items-center gap-2">
                <h1 className="font-bold text-3xl">{price.price}</h1>/per month
              </p>
              <p className="text-gray-600 dark:text-white">
                No credit card required
              </p>
              <button
                className={`${price.color} ${price.hovercolor} px-6 py-2 w-56 rounded-full text-white`}
              >
                Try for free
              </button>
              <p className="text-gray-600 dark:text-white">400 GB Storaget</p>
              <p className="text-gray-600 dark:text-white">
                Unlimited Photos & Videos
              </p>
              <p className="text-gray-600 dark:text-white">Exclusive Support</p>
              <p className="text-gray-800 font-medium mt-8 dark:text-white">
                7-day free trial
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Prices;
