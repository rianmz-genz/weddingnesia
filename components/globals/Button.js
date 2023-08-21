import React from "react";
import { buttonStyle } from "@/utils/enum";
import { variant } from "@/utils";
const Button = ({ style, className, ...props }) => {
  const large = "px-8 py-4 font-bold";
  const md = "px-4 py-2 font-bold";
  const button = variant(`rounded-xl ${className}`, {
    style: {
      primarylarge: `${large} bg-yellow-700/80 text-white hover:bg-yellow-700/90`,
      outlineprimarylarge:
        "px-6 py-3 border-2 font-bold border-yellow-700/90 text-yellow-700/90 hover:text-white hover:bg-yellow-700/90",
      silverlarge: `${large} bg-slate-50/30 hover:ring-2 hover:ring-black hover:bg-white text-black`,
      blackLarge: `${large} bg-black/95 text-yellow-600 hover:bg-black`,
      blackMedium: `${md} bg-black/90 text-sm text-yellow-600 hover:bg-black`,
      silverMedium: `${md} bg-slate-50/30 text-sm`,
    },
  });
  return (
    <button
      className={`transition-all duration-300 ${button({ style })}`}
      {...props}
    />
  );
};
Button.defaultProps = {
  style: buttonStyle.primarylarge,
};
export default Button;
