import SectionParagraph from "@/components/globals/SectionParagraph";
import Text from "@/components/globals/Text";
import { initialValue } from "@/store";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";

const TutrialSection = () => {
  const { tutorial } = initialValue.home;
  return (
    <section className="w-full flex items-center justify-start h-fit py-28">
      <div className="lg:w-8/12 w-11/12">
        <SectionParagraph
          title={tutorial.title}
          description={tutorial.description}
        />
        <ol className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          {tutorial.items.map((item, idx) => (
            <li key={idx} className="relative">
              <div className="px-6 py-8 rounded-lg h-full ring-yellow-600 before:-z-10 before:absolute div-to-match-height before:bg-yellow-600 before:-bottom-1 before:left-1 before:w-full before:h-full before:rounded-lg ring-1 bg-white">
                <div className="flex items-center space-x-2 mb-2 ">
                  <Text style={textStyle.title} className={"text-yellow-600"}>
                    {item.icon}
                  </Text>
                  <Text className={"font-bold"} style={textStyle.description}>
                    {idx + 1}. {item.title}
                  </Text>
                </div>
                <Text
                  className={"text-black/70"}
                  style={textStyle.smalldescription}
                >
                  {item.description}
                </Text>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="lg:w-4/12 hidden lg:block relative">
        <Image
          src={initialValue.home.tutorial.img}
          className="w-full scale-[200%] top-0 left-1/2 absolute"
          alt="laptop mockup"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};

export default TutrialSection;
