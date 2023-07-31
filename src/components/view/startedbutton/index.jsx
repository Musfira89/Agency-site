import design13 from "../../../../public/images/shape-16.svg";
import Image from "next/image";
export function StartedNow() {
  return (
    <div
      className="relative w-full bg-[#4e6bff] text-white py-24 px-10 lg:px-0 flex flex-col lg:flex-row 
    items-start lg:items-center  justify-evenly gap-4 "
    >
      <div className="lg:w-2/5 flex flex-col gap-4">
        <h1 className="font-black text-3xl lg:text-4xl">
          Join with 5000+ Startups Growing with Base.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
          nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis
          rhoncus.
        </p>
      </div>
      <div className="lg:w-1/5">
        <button className=" text-gray-700 bg-white px-8 py-4 rounded-full font-medium ">
          Get Started Now
        </button>
      </div>
      <Image src={design13} alt="lines" className="absolute bottom-0" />
    </div>
  );
}
