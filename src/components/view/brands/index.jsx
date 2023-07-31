import brand_light1 from "../../../../public/images/brand-light-01.svg";
import brand_light2 from "../../../../public/images/brand-light-02.svg";
import brand_light3 from "../../../../public/images/brand-light-03.svg";
import brand_light4 from "../../../../public/images/brand-light-04.svg";
import brand_light5 from "../../../../public/images/brand-light-05.svg";
import brand_light6 from "../../../../public/images/brand-light-06.svg";
import Image from "next/image";

export function Brands() {
  return (
    <div className="flex flex-col items-center w-full pt-32 pb-10 gap-10 dark:bg-none">
      <h1
        className="text-3xl font-bold dark:text-white lg:text-[45px]
         leading-[3rem]  font-Outfit w-[300px] lg:w-[700px] text-center"
      >
        Trusted by Global Brands
      </h1>
      <p className="text-gray-500 dark:text-gray-400  w-[300px] lg:w-[700px] text-center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using.
      </p>
      <div className="flex justify-evenly gap-14 flex-wrap my-4">
        <Image src={brand_light1} alt="logo" width={100} height={50} />
        <Image src={brand_light2} alt="logo" width={100} height={50} />
        <Image src={brand_light3} alt="logo" width={100} height={50} />
        <Image src={brand_light4} alt="logo" width={100} height={50} />
        <Image src={brand_light5} alt="logo" width={100} height={50} />
        <Image src={brand_light6} alt="logo" width={100} height={50} />
      </div>
      <span className="w-full h-[1px] bg-gray-300 dark:bg-gray-600"></span>
    </div>
  );
}
