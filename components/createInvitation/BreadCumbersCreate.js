import React from "react";
import Text from "../globals/Text";
import { textStyle } from "@/utils/enum";

export default function BreadCumbersCreate({
  onClick,
  items,
  current,
  className,
}) {
  const currentIndex = items.findIndex((item) => item.value == current.value);

  return (
    <ul
      className={`w-full flex justify-center flex-wrap space-x-3 md:space-x-6 items-center ${className}`}
    >
      <Text style={textStyle.title}>Buat Undangan</Text>
      <p>|</p>
      {items.map(({ label }, idx) => {
        return (
          <div
            key={idx}
            className={`${
              idx <= currentIndex && "text-yellow-600 font-semibold"
            } flex space-x-3`}
          >
            <li
              onClick={() => onClick(idx)}
              className="cursor-pointer flex gap-1"
            >
              <p
                className={`${
                  idx <= currentIndex ? "border-yellow-600" : "border-black"
                } border rounded-full w-6 flex justify-center items-center h-6`}
              >
                {idx + 1}
              </p>
              <p>{label}</p>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
