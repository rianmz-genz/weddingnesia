import React, { useState } from "react";
import Text from "../globals/Text";
import { buttonStyle, textStyle } from "@/utils/enum";
import Button from "../globals/Button";
import { FiX } from "react-icons/fi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

export default function BreadCumbersCreate({
  onClick,
  items,
  current,
  className,
}) {
  const currentIndex = items.findIndex((item) => item.value == current.value);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl bg-slate-100 p-2 z-40 fixed top-6 right-7 rounded lg:hidden "
      >
        {isOpen ? <FiX /> : <HiOutlineBars3BottomRight />}
      </button>
      <ul
        className={`${
          isOpen ? "top-0 " : "-top-full"
        } lg:w-4/12 w-full fixed h-screen z-30 max-lg:mx-auto max-lg:bg-white  lg:sticky transition-all duration-500 left-0 ${className}`}
      >
        <div className="w-full mx-auto sm:max-w-lg flex flex-col gap-6 mt-12 px-7">
          <Text style={textStyle.smalltitle}>Buat Undangan</Text>
          {items.map(({ label }, idx) => {
            return (
              <div
                key={idx}
                className={`${
                  idx <= currentIndex && "text-yellow-600 font-semibold"
                } flex `}
              >
                <li
                  onClick={() => {
                    setIsOpen(false);
                    onClick(idx);
                  }}
                  className="cursor-pointer flex gap-2"
                >
                  <p
                    className={`${
                      idx <= currentIndex ? "border-yellow-600" : "border-black"
                    } border rounded-md w-6 flex justify-center items-center h-6`}
                  >
                    {idx + 1}
                  </p>
                  <p>{label}</p>
                </li>
              </div>
            );
          })}
        </div>
      </ul>
    </>
  );
}
