import { variant } from "@/utils";
import React from "react";

const Text = ({ style, className, ...props }) => {
  const text = variant(`${className}`, {
    style: {
      bigtitle: "lg:text-4xl leading-relaxed text-2xl font-bold",
      mdtitle: "lg:text-3xl leading-relaxed text-2xl font-bold",
      title: "lg:text-2xl text-xl",
      smalltitle: "lg:text-xl text-lg",
      description: "lg:text-lg text-md",
      smalldescription: "lg:text-md text-base",
      titleQuestion: "text-sm font-semibold",
      base: "",
      heroTitleAllura: "font-allura md:text-[5rem] text-5xl",
      smallTitleAllura: "font-allura text-3xl",
      descriptionAllura: "font-allura text-3xl",
      smallDescriptionAllura: "font-allura text-2xl",
    },
  });
  return <p className={text({ style })} {...props} />;
};
Text.defaultProps = {
  style: "base",
};
export default Text;
