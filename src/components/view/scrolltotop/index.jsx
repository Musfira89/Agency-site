"use client";
import { FaArrowUp } from "react-icons/fa";

export function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      className=" bg-[#4e6bff] fixed text-white rounded-xl p-4 right-6 bottom-6"
    >
      <FaArrowUp />
    </button>
  );
}
