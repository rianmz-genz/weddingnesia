import { variant } from "@/utils";
import React from "react";

const Input = ({ style, className, ...props }) => {
  const inputVariant = variant(`rounded-md focus:outline-none transition-all duration-300 ${className}`, {
      style: {
        base: 'w-full px-4 py-2 border border-black/10 ring-0 focus:border focus:border-yellow-700'
    },
  });
  return <input className={inputVariant({ style })} {...props} />;
};
Input.defaultProps = {
  style: "base",
};
export default Input;
