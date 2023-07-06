import { variant } from "@/utils";
import React from "react";

const Text = ({ style, className, ...props }) => {
  const text = variant(`${className}`, {
      style: {
        titleQuestion: 'text-sm font-semibold',
        base: 'text-sm'
    },
  });
  return <p className={text({ style })} {...props} />;
};
Text.defaultProps = {
  style: "base",

};
export default Text;
