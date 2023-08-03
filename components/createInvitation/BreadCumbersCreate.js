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
      className={`w-full flex justify-center space-x-3 items-center ${className}`}
    >
      <Text style={textStyle.title}>{current.label}</Text>
      <p>|</p>
      {items.map(({ value }, idx) => {
        return (
          <div
            key={idx}
            className={`${
              idx <= currentIndex && "text-yellow-600 font-semibold"
            } flex space-x-3`}
          >
            <li onClick={() => onClick(idx)} className="cursor-pointer">
              {value}
            </li>
            {idx != items.length - 1 && <li>&gt;</li>}
          </div>
        );
      })}
    </ul>
  );
}
