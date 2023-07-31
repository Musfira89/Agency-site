import Image from "next/image";
import React from "react";

const Chooseus = () => {
  return (
    <div className="w-full flex items-center py-14 px-10">
      {/* Left Section */}
      <div className="hidden lg:flex basis-1/2 justify-center space-x-4">
        <div>
          <Image
            src={"/images/about-01.png"}
            alt="pic1"
            width={300}
            height={390}
          />
          <Image
            src={"/images/about-02.png"}
            alt="pic2"
            width={300}
            height={390}
          />
        </div>
        <div className="flex flex-col gap-3">
          <svg
            fill="none"
            height="86"
            viewBox="0 0 43 86"
            width="43"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m0 86c5.64684 0 11.2384-1.1122 16.4554-3.2732 5.217-2.1609 9.9573-5.3283 13.9502-9.3212s7.1603-8.7332 9.3212-13.9502c2.161-5.217 3.2732-10.8086 3.2732-16.4554s-1.1122-11.2384-3.2732-16.4554c-2.1609-5.217-5.3283-9.9573-9.3212-13.9502-3.9929-3.99291-8.7332-7.16027-13.9502-9.32122s-10.80856-3.27318025-16.4554-3.27318z"
              fill="#ffdd0f"
            />
          </svg>
          <Image
            src={"/images/about-03.png"}
            alt="pic3"
            width={300}
            height={450}
          />
          <svg
            fill="none"
            height="99"
            viewBox="0 0 198 99"
            width="198"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m198 98.9998c0-13.0009-2.561-25.8745-7.536-37.8857s-12.267-22.9249-21.46-32.1179-20.107-16.4853-32.118-21.46052c-12.012-4.97521-24.885-7.53592471-37.886-7.53592414-13.0009.00000057-25.8744 2.56071414-37.8857 7.53592414-12.0112 4.97522-22.9249 12.26752-32.1179 21.46052s-16.4853 20.1067-21.46048 32.1179c-4.97521 12.0112-7.53592114 24.8848-7.53592 37.8857z"
              fill="#4e6bff"
            />
          </svg>
        </div>
      </div>
      {/* Right Section */}
      <div className="basis-full flex flex-col gap-6 lg:basis-1/2 lg:px-20">
        <h1 className="text-[#4e6bff] font-[600] tracking-wide text-lg font-Outfit">
          Why Choose Us
        </h1>
        <h1 className="text-3xl font-bold dark:text-white lg:text-[45px] leading-[3rem]  font-Outfit">
          We Make Our customers happy by giving Best services.
        </h1>
        <p className="text-gray-700 dark:text-gray-400">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.
        </p>
        <div className="flex items-center gap-4">
          <button className="relative">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-12 h-12 text-[#4e6bff] animate-ping "
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z" />
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-12 h-12  text-[#4e6bff] absolute top-0"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z" />
            </svg>
          </button>
          <p>SEE HOW WE WORK</p>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
