import Image from "next/image";
import React from "react";
import Text from "../globals/Text";
import Button from "../globals/Button";
import { buttonStyle, textStyle } from "@/utils/enum";

export default function CoverButton({ title, description, className }) {
  return (
    <div className={`flex gap-6 w-full ${className}`}>
      <Image
        className="w-6/12 object-cover rounded-md h-36"
        src="/images/wayang.svg"
        width={1080}
        height={1080}
        alt="Wayang"
      />
      <div className="w-6/12">
        <Text style={textStyle.description} className={"font-bold"}>
          {title}
        </Text>
        <Text className={"w-8/12"} style={textStyle.smalldescription}>
          {description}
        </Text>
        <Button className={"mt-2"} style={buttonStyle.blackMedium}>
          Pilih File
        </Button>
      </div>
    </div>
  );
}
