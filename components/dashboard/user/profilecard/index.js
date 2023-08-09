import Text from "@/components/globals/Text";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";
import { AiFillSetting } from "react-icons/ai";

const ProfileCard = () => {
  return (
    <div className="w-11/12 mx-auto px-8 py-4 shadow-sm bg-white rounded-full flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image
          src={"/images/kuncungboy.png"}
          alt="kuncung boy"
          width={1080}
          height={1080}
          className="w-16"
        />
        <div>
          <Text className={"font-bold"} style={textStyle.description}>
            Ucup
          </Text>
          <Text>ucup@gmail.com</Text>
        </div>
      </div>
      <AiFillSetting className="text-2xl text-slate-800" />
    </div>
  );
};

export default ProfileCard;
