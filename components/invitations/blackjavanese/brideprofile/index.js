import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";

export default function BrideProfile({ src, nickName, fullName, info }) {
  return (
    <div className="md:w-6/12 w-full flex flex-col items-center">
      <img
        src={src}
        width={1080}
        height={1080}
        alt={`Foto ${nickName}`}
        className="rounded-full w-64 h-64 object-cover mb-3 ring-yellow-600 ring-2"
      />
      <Text style={textStyle.smallDescriptionAllura}>-{nickName}-</Text>
      <Text style={textStyle.descriptionAllura}>{fullName}</Text>
      <Text className={"mt-1"}>{info}</Text>
    </div>
  );
}
