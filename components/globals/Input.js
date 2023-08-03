import { variant } from "@/utils";
import React from "react";
import { FiSearch } from "react-icons/fi";
import Text from "./Text";

const Input = ({ style, className, ...props }) => {
  const inputVariant = variant(
    `rounded-md focus:outline-none transition-all duration-300 ${className}`,
    {
      style: {
        base: "w-full px-4 py-2 border border-black/10 ring-0 focus:border focus:border-yellow-700",
      },
    }
  );
  return <input className={inputVariant({ style })} {...props} />;
};
Input.defaultProps = {
  style: "base",
};
export default Input;

export const InputSearch = ({ className, ...props }) => {
  return (
    <div
      className={`flex items-center justify-center space-x-2 shadow shadow-black/5 bg-white px-4 py-2 rounded-full ${className}`}
    >
      <FiSearch className="text-black" />
      <input
        {...props}
        placeholder="Cari Undangan"
        className="text-sm focus:outline-none bg-transparent"
        type="search"
      />
    </div>
  );
};

export const InputTitle = ({ label, ...props }) => {
  return (
    <div className="w-full">
      <Text>{label}</Text>
      <input className="px-4 py-2 rounded border border-black/40" {...props} />
    </div>
  );
};
