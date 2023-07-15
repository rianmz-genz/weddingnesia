import { variant } from "@/utils";
import React from "react";

const Text = ({ style, className, ...props }) => {
  const text = variant(`${className}`, {
    style: {
        bigtitle: 'lg:text-4xl leading-relaxed text-2xl font-bold',
        title: 'lg:text-2xl',
        description:'lg:text-lg',
        smalldescription:'lg:text-md',
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
