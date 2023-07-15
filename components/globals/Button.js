import React from "react";
import { buttonStyle } from "@/utils/enum";
import { variant } from "@/utils";
const Button = ({ style, className, ...props }) => {
  const button = variant(
    `rounded-xl ${className}`,
    {
      style: {
        primarylarge: 'px-8 py-4 bg-yellow-700/80 text-white font-bold hover:bg-yellow-700/90',
        outlineprimarylarge: 'px-6 py-3 border-2 font-bold border-yellow-700/90 text-yellow-700/90 hover:text-white hover:bg-yellow-700/90',
        silverlarge: 'px-8 py-4 bg-slate-50/30 hover:ring-2 font-bold hover:ring-black hover:bg-white text-black'
      },
    }
  );
  return (
    <button
      className={`transition-all duration-300 ${button({ style })}`}
      {...props}
    />
  );
};
Button.defaultProps = {
  style: buttonStyle.primarylarge
};
export default Button;
