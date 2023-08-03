import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FiX } from "react-icons/fi";

export default function ToggleButton({ isOpened, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-2xl p-1 top-4 right-4 md:hidden transition-all duration-300 backdrop-blur-sm rounded-md z-40 fixed ${
        isOpened ? "bg-red-500/10 text-red-500" : "bg-blue-500/10 text-blue-500"
      }`}
    >
      {isOpened ? <FiX /> : <BiMenuAltRight />}
    </button>
  );
}
