import { Text } from "@/components";
import { HealthyInformation } from "@/store/demo";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";

export default function HealthyInformationSilver() {
  return (
    <div className=" py-12 w-11/12 mx-auto">
      <Text style={textStyle.smallTitleAllura} className={"text-center"}>
        Informasi Protokol Kesehatan
      </Text>
      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-1 mt-8 w-full">
        {HealthyInformation.map(({ src, text, w }, i) => (
          <div
            key={i}
            className="w-full flex flex-col gap-1 justify-start items-center"
          >
            <Image
              src={src}
              className={w}
              alt={text}
              width={1080}
              height={1080}
            />
            <Text className={"text-center"}>{text}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}
