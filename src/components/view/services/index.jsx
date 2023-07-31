import { services } from "@/components/data/services";
import Image from "next/image";

const Services = () => {
  return (
    <div className="mt-10 flex flex-col items-center gap-6">
      <h1
        className="text-3xl font-bold dark:text-white lg:text-[45px]
         leading-[3rem]  font-Outfit w-[300px] lg:w-[700px] text-center"
      >
        We Offer The Best Quality Service for You
      </h1>
      <p className="text-gray-700 dark:text-gray-400 w-[300px] lg:w-[700px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
        tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
        maximus.
      </p>
      <div className="px-10 flex flex-wrap justify-center  w-full pt-14 font-Outfit ">
        {services.map((service) => (
          <div
            key={services.title}
            className="w-[370px] hover:shadow-xl hover:shadow-gray-100 bg-white py-8
             md:p-16 rounded-xl mb-6  flex flex-col gap-4 dark:shadow-none dark:bg-transparent dark:hover:bg-gray-500/20"
          >
            <Image src={service.icon} alt="service" width={50} height={50} />
            <h1 className="font-bold text-md lg:text-xl ">{service.title}</h1>
            <p className="text-gray-500 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
