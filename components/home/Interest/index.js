import Text from "@/components/globals/Text";
import { initialValue } from "@/store";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";

const InterestSection = () => {
  return (
    <div className="w-full h-fit my-28 space-x-3 lg:flex-row flex-col flex justify-center items-center">
      <div className="lg:w-6/12 w-11/12">
        <Text style={textStyle.bigtitle}>
          {initialValue.home.interest.title}
        </Text>
        <Text
          style={textStyle.description}
          className={"w-11/12 mt-2 text-black/70"}
        >
          {initialValue.home.interest.description}{" "}
          <span className="font-bold">{initialValue.home.interest.bold}</span>
        </Text>
        <ul className="mt-8 flex flex-col space-y-5">
          {initialValue.home.interest.items.map((item, idx) => (
            <li key={idx} className="flex justify-center items-start space-x-4">
              <div className="bg-yellow-600 text-white rounded-full text-xl p-3">
                {item.logo}
              </div>
              <div>
                <Text style={textStyle.description} className={"font-bold"}>
                  {item.title}
                </Text>
                <Text
                  style={textStyle.smalldescription}
                  className={"text-black/70"}
                >
                  {item.description}
                </Text>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={initialValue.home.interest.img}
        alt="Image WeddingNesia"
        width={1080}
        height={1080}
        className="lg:w-6/12 w-11/12 lg:mt-0 mt-12"
      />
    </div>
  );
};

export default InterestSection;
