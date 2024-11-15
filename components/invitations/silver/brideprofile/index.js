import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React, { useEffect } from "react";
import { RiInstagramLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BrideProfile({
  src,
  nickName,
  fullName,
  info,
  instagram,
  isRight = false,
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`flex flex-col md:flex-row items-center w-full md:w-10/12 mx-auto gap-6 p-6 ${
        isRight ? "md:flex-row-reverse md:text-right" : "md:text-left"
      }`}
    >
      {/* Avatar/Profile Picture */}
      <img
        src={src}
        width={1080}
        height={1080}
        alt={`Foto ${nickName}`}
        className="rounded-full w-32 h-32 object-cover ring-slate-600 ring-2 mb-4 md:mb-0"
      />

      {/* Profile Information */}
      <div className={`flex flex-col text-center ${isRight ? "md:text-right" : "md:text-left"}`}>
        <Text
          style={textStyle.smallDescriptionAllura}
          className="text-xl"
        >
          {nickName}
        </Text>
        <Text
          style={textStyle.descriptionAllura}
          className="text-5xl"
        >
          {fullName}
        </Text>
        <Text className="mt-2 text-gray-600">{info}</Text>
        
        {/* Instagram Link */}
        {instagram && (
          <div
            className={`flex items-center mt-3 text-red-500 ${
              isRight ? "justify-center md:justify-end" : "justify-center "
            }`}
          >
            <RiInstagramLine className="mr-2" />
            <Text>@{instagram}</Text>
          </div>
        )}
      </div>
    </div>
  );
}
