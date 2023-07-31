import design1 from "../../../../public/images/shape-12.svg";
import design13 from "../../../../public/images/shape-13.svg";
import smallwaves from "../../../../public/images/shape-03.svg";
import halfcircle from "../../../../public/images/shape-06.svg";
import halfcircleblue from "../../../../public/images/shape-07.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import Image from "next/image";

export function Contact() {
  return (
    <div className="relative bg-[#F4F7FA]  dark:bg-gray-500/20 flex flex-col items-center py-20 gap-10">
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
      {/* Contact Form */}
      <Image
        src={smallwaves}
        alt="lines"
        className="absolute right-56 top-52 hidden xl:flex"
      />
      <div className="w-[80%] flex flex-col lg:flex-row gap-4 z-10">
        {/* Left Section */}
        <div
          className="relative w-full lg:w-1/3 bg-white dark:bg-gray-900/30 rounded-lg px-8 py-10 flex flex-col items-start gap-4
        shadow-xl shadow-gray-300 dark:shadow-none"
        >
          <Image
            src={smallwaves}
            alt="lines"
            className="absolute right-0 top-0 w-10 h-10"
          />
          <h1 className="text-xl font-medium pt-3">Email Address</h1>
          <p className="text-md text-gray-500">support@startup.com</p>
          <h1 className="text-xl font-medium pt-3">Office Location</h1>
          <p className="text-md text-gray-500">
            76/A, Green valle, Califonia USA.
          </p>
          <h1 className="text-xl font-medium pt-3">Phone Number</h1>
          <p className="text-md text-gray-500">+009 8754 3433 223</p>
          <h1 className="text-xl font-medium pt-3">Skype Email</h1>
          <p className="text-md text-gray-500">example@yourmail.com</p>
          <span className="w-full h-[1px] bg-slate-300 my-3"></span>
          <h1 className="text-xl font-medium pt-3">Social Media</h1>
          <div className="flex gap-4">
            <FaFacebookF className="w-6 h-6" />
            <FaTwitter className="w-6 h-6" />
            <FaLinkedinIn className="w-6 h-6" />
            <FaBehance className="w-6 h-6" />
          </div>
          <Image
            src={halfcircle}
            alt="lines"
            className="absolute right-0 bottom-0 w-10 h-10 rotate-180"
          />
        </div>
        {/* Right Section */}
        <div
          className="w-full lg:w-2/3 bg-white dark:bg-gray-900/30 rounded-lg p-6 shadow-xl shadow-gray-300 
          dark:shadow-none"
        >
          <form action="#" class="space-y-8 w-full flex flex-col items-start">
            {/* First two inputs */}
            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-3 w-1/2">
                <h3 className="text-gray-500">Full name</h3>
                <input
                  type="input"
                  id="name"
                  placeholder="Devid wonder"
                  className="w-full border-gray-300 border-[1px] rounded-lg p-4 focus:outline-[#7d93ff]
                  dark:bg-gray-900/30 dark:border-gray-600 focus:shadow-2xl focus:shadow-[#e9edff]"
                />
              </div>
              <div className="flex flex-col gap-3 w-1/2">
                <h3 className="text-gray-500">Your Email</h3>
                <input
                  type="email"
                  id="email"
                  placeholder="someone@gmail.com"
                  className="w-full border-gray-300 border-[1px] rounded-lg p-4 focus:outline-[#7d93ff]
                  dark:bg-gray-900/30 dark:border-gray-600 focus:shadow-2xl focus:shadow-[#e9edff]"
                />
              </div>
            </div>
            {/* Second Two inputs */}
            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-3 w-1/2">
                <h3 className="text-gray-500">Phone number</h3>
                <input
                  type="input"
                  id="name"
                  placeholder="+00933423432"
                  className="w-full border-gray-300 border-[1px] rounded-lg p-4 focus:outline-[#7d93ff]
                  dark:bg-gray-900/30 dark:border-gray-600 focus:shadow-2xl focus:shadow-[#e9edff]"
                />
              </div>
              <div className="flex flex-col gap-3 w-1/2">
                <h3 className="text-gray-500">Subject</h3>
                <input
                  type="input"
                  id="name"
                  placeholder="Type your subject"
                  className="w-full border-gray-300 border-[1px] rounded-lg p-4 focus:outline-[#7d93ff]
                  dark:bg-gray-900/30 dark:border-gray-600 focus:shadow-2xl focus:shadow-[#e9edff]"
                />
              </div>
            </div>
            <div class="w-full">
              <h3 className="text-gray-500">Your Message</h3>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm
                 border border-gray-300 dark:bg-gray-900/30 dark:border-gray-600 focus:outline-[#7d93ff]
                 focus:shadow-2xl focus:shadow-[#e9edff]"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-[#4e6bff] rounded-full text-white px-10 py-4 text-md self-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Image
        src={halfcircleblue}
        alt="lines"
        className="absolute right-24 bottom-8 h-24 w-24"
      />
      <Image
        src={design1}
        alt="lines"
        className="absolute left-0 bottom-0 z-0"
      />
      <Image
        src={design13}
        alt="lines"
        className="absolute right-0 top-0 z-0"
      />
    </div>
  );
}
