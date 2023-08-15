import { variant } from "@/utils";
import React from "react";
import { FiSearch } from "react-icons/fi";
import Text from "./Text";
import { textStyle } from "@/utils/enum";
import { VscMention } from "react-icons/vsc";
const Input = ({ style, className, ...props }) => {
  const inputVariant = variant(
    `rounded-md focus:outline-none transition-all duration-300 ${className}`,
    {
      style: {
        base: "w-full px-4 py-2 ring-1 ring-black/10  focus:ring-2 focus:ring-yellow-700",
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

export const InputTitle = ({ label, className, ...props }) => {
  return (
    <div className={`w-full ${className}`}>
      <Text style={textStyle.smalldescription}>{label}</Text>
      <input
        className="px-4 py-2 mt-1 w-full rounded border border-black/40 focus:outline-none focus:ring-1 ring-yellow-800"
        {...props}
      />
    </div>
  );
};

export const InputLeftWithTitle = ({ label, className, left, ...props }) => {
  return (
    <div className={`w-full ${className}`}>
      <Text style={textStyle.smalldescription}>{label}</Text>
      <div className=" flex mt-1 items-center w-full rounded border border-black/40 focus-within:ring-1 ring-yellow-800">
        <div className="bg-slate-200 rounded-l p-2">{left}</div>
        <input
          className="bg-transparent focus:outline-none px-3 w-full"
          {...props}
        />
      </div>
    </div>
  );
};
