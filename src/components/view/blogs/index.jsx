import { blogs } from "@/components/data/blog";
import Image from "next/image";
import calender from "../../../../public/images/icon-calender.svg";
import man from "../../../../public/images/icon-man.svg";

export function Blog() {
  return (
    <div className="flex flex-col items-center gap-8 py-24">
      <h1
        className="text-3xl font-bold dark:text-white lg:text-[45px]
         leading-[3rem]  font-Outfit w-[300px] lg:w-[700px] text-center"
      >
        Latest Blogs & News
      </h1>
      <p className="text-gray-500 dark:text-gray-400 w-[300px] lg:w-[700px] text-center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using.
      </p>
      <div className="flex flex-wrap w-full justify-center gap-10">
        {blogs.map((blog) => (
          <div class="px-4 lg:px-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500/20 dark:border-gray-700">
            {/* Main Image */}
            <div className="relative">
              <Image
                class="rounded-t-lg"
                src={blog.img}
                alt="blog image"
                className="w-full z-0"
              />
              <div
                className="w-full h-1/2 opacity-0 hover:opacity-100 hover:h-full  hover:bg-white/20 
              hover:backdrop-blur-md  z-10 absolute bottom-0 transition-all duration-300 delay-100  ease-linear
              flex justify-center items-center"
              >
                <button
                  type="submit"
                  class="bg-[#4e6bff] z-20   rounded-full text-white px-10 py-4 text-md self-center"
                >
                  Read More
                </button>
              </div>
            </div>

            <div class="p-5">
              <div className="flex gap-2 py-4">
                {/* Icon svg */}
                <Image
                  class="rounded-t-lg"
                  src={man}
                  alt="blog image"
                  className="w-6 h-6"
                />
                {blog.name}
                <Image
                  class="rounded-t-lg"
                  src={calender}
                  alt="blog image"
                  className="w-6 h-6 ml-8"
                />
                {blog.date}
              </div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog.description}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
