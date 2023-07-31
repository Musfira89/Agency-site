import design15 from "../../../../public/images/shape-15.svg";
import yellowcircle from "../../../../public/images/shape-14.svg";
import bluecircle from "../../../../public/images/shape-07.svg";
import Image from "next/image";

const Achivements = () => {
  return (
    <div
      className="relative bg-[#ECF0F5] dark:bg-gray-500/20 w-full flex flex-wrap justify-evenly
     gap-4 py-24 z-10"
    >
      <Image
        src={yellowcircle}
        alt="lines"
        className="absolute top-5 left-80"
      />
      <Image
        src={bluecircle}
        alt="lines"
        className="absolute h-20 w-20 rotate-90 right-14 top-20 z-0 hidden xl:flex"
      />
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-black text-2xl lg:text-5xl">785</h1>
        <p className="text-gray-500 font-medium text-md lg:text-xl">
          Global Brands
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-black text-2xl lg:text-5xl">533</h1>
        <p className="text-gray-500 font-medium text-md lg:text-xl">
          Happy Clients
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-black text-2xl lg:text-5xl">865</h1>
        <p className="text-gray-500 font-medium text-md lg:text-xl">
          Winning Award
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-black text-2xl lg:text-5xl">346</h1>
        <p className="text-gray-500 font-medium text-md lg:text-xl">
          Happy Clients
        </p>
      </div>
      <Image src={design15} alt="lines" className="absolute bottom-0" />
    </div>
  );
};

export default Achivements;
