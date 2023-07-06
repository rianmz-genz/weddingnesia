import React from "react";
import { buttonStyle } from "@/utils/enum";
import { variant } from "@/utils";
const Button = ({ style,className, ...props }) => {
  const button = variant(
    `rounded-full ${className}`,
    {
      style: {
        primary: 'w-full py-2 bg-yellow-700/80 text-white hover:bg-yellow-700/90'
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
  style: buttonStyle.primary
};
export default Button;
