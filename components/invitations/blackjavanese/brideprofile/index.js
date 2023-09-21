import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";

export default function BrideProfile({
  src,
  nickName,
  fullName,
  info,
  instagram,
}) {
  return (
    <div className="md:w-fit w-full flex flex-col items-center">
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
      {instagram != "" && (
        <div className="w-full justify-center mx-auto flex items-center mt-1">
          <RiInstagramLine className="text-red-500" />
          <Text>@{instagram}</Text>
        </div>
      )}
    </div>
  );
}
