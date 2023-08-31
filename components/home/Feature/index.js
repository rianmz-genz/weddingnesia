import Container from "@/components/globals/Container";
import SectionParagraph from "@/components/globals/SectionParagraph";
import Text from "@/components/globals/Text";
import { initialValue } from "@/store";
import { textStyle } from "@/utils/enum";
import React from "react";

const FeatureSection = () => {
  const { feature } = initialValue.home;
  return (
    <section
      id="feature"
      className="w-full py-32 h-fit bg-gradient-to-t from-yellow-600/80 via-yellow-600/20 to-transparent"
    >
      <SectionParagraph
        className={"lg:w-8/12 lg:px-0 px-7 text-center mx-auto"}
        title={feature.title}
        description={feature.description}
      />
      <ul className="grid grid-cols-1 lg:grid-cols-3 sm:max-w-lg lg:max-w-5xl 2xl:max-w-7xl mx-auto gap-4 mt-8 px-7">
        {feature.items.map((item, idx) => (
          <li
            key={idx}
            className="rounded-lg p-6 bg-white hover:shadow-2xl transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-center items-start"
          >
            <div className="bg-yellow-600/10 text-yellow-600 rounded-full p-3 text-xl">
              {item.icon}
            </div>
            <Text style={textStyle.description} className={"font-bold"}>
              {item.title}{" "}
            </Text>
            <Text style={textStyle.description} className={"text-black/70"}>
              {" "}
              {item.description}
            </Text>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeatureSection;
