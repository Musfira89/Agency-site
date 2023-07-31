import Shape from "../../../../public/images/shape-08.svg";
import ShapeCircle from "../../../../public/images/shape-10.svg";
import Shapetriangle from "../../../../public/images/shape-11.svg";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <div className="w-full  mb-20  h-fit">
      <div className="w-full  bg-[#f1f3f5] dark:bg-gray-500/10 h-[80vh] z-0">
        <Image
          src={Shape}
          width={1400}
          height={200}
          alt="lines"
          className="absolute"
        />
        <div className=" hidden xl:flex">
          <Image
            src={ShapeCircle}
            alt="Rotated image"
            width={50}
            height={50}
            className="absolute translate-x-60 translate-y-20"
          />
          <Image
            src={Shapetriangle}
            alt="Rotated image"
            width={50}
            height={50}
            className=" absolute ml-[1200px] mt-[200px] "
          />
        </div>
      </div>
      {/* Second Section */}
      <div className=" flex flex-col items-center gap-8 -mt-[400px] z-10">
        <h1
          className="text-3xl font-bold dark:text-white lg:text-[45px]
         leading-[3rem]  font-Outfit w-[300px] lg:w-[700px] text-center"
        >
          Meet With Our Creative Dedicated Team
        </h1>
        <p className="text-gray-700 dark:text-gray-400 w-[300px] lg:w-[700px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </p>
        <div className="flex flex-wrap justify-center gap-10 ">
          {/* Member 1 */}
          <div className="flex flex-col items-center ">
            <div className="relative truncate">
              <Image
                src={"/images/team-01.png"}
                alt="team"
                width={350}
                height={450}
              />
              <div
                className="w-full absolute bg-clip-content  bg-[#4e6bff] h-24 -bottom-10 
                hover:-bottom-5 opacity-0 hover:opacity-100 text-white flex justify-center items-center 
                gap-2 transition-all duration-300 delay-100 ease-linear skew-y-6 cursor-pointer"
              >
                <FaFacebookF className="w-5 h-5 skew-y-0" />
                <FaTwitter className="w-5 h-5 skew-y-0" />
                <FaLinkedinIn className="w-5 h-5 skew-y-0" />
              </div>
            </div>
            <h1 className="font-bold text-lg pt-4">Olivia Andrium</h1>
            <p className="text-gray-500">Product Manager</p>
          </div>
          {/* Member 2 */}
          <div className="flex flex-col items-center ">
            <div className="relative truncate">
              <Image
                src={"/images/team-02.png"}
                alt="team"
                width={350}
                height={450}
              />
              <div
                className="w-full absolute bg-clip-content  bg-[#4e6bff] h-24 -bottom-10 
                hover:-bottom-5 opacity-0 hover:opacity-100 text-white flex justify-center items-center 
                gap-2 transition-all duration-300 delay-100 ease-linear skew-y-6 cursor-pointer"
              >
                <FaFacebookF className="w-5 h-5 skew-y-0" />
                <FaTwitter className="w-5 h-5 skew-y-0" />
                <FaLinkedinIn className="w-5 h-5 skew-y-0" />
              </div>
            </div>
            <h1 className="font-bold text-lg pt-4">Jemse Kemorun</h1>
            <p className="text-gray-500">Product Manager</p>
          </div>
          {/* Member 3 */}
          <div className="flex flex-col items-center ">
            <div className="relative truncate">
              <Image
                src={"/images/team-03.png"}
                alt="team"
                width={350}
                height={450}
              />
              <div
                className="w-full absolute bg-clip-content  bg-[#4e6bff] h-24 -bottom-10 
                hover:-bottom-5 opacity-0 hover:opacity-100 text-white flex justify-center items-center 
                gap-2 transition-all duration-300 delay-100 ease-linear skew-y-6 cursor-pointer"
              >
                <FaFacebookF className="w-5 h-5 skew-y-0" />
                <FaTwitter className="w-5 h-5 skew-y-0" />
                <FaLinkedinIn className="w-5 h-5 skew-y-0" />
              </div>
            </div>
            <h1 className="font-bold text-lg pt-4">Avi Pestarica</h1>
            <p className="text-gray-500">Web Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
