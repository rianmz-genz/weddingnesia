// HeroSilver.js
import NewAudioPlayer from "@/components/globals/AudioPlayer/new";
import Text from "@/components/globals/Text";
import { InvitationContext } from "@/context/invitation";
import { formatDate } from "@/utils";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React, { useContext } from "react";

export default function HeroSilver() {
  const { title, primary_cover, bride_name, groom_name, wedding_date, audio } =
    useContext(InvitationContext);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${primary_cover})` }}
    >
      <NewAudioPlayer audioUrl={audio} />
      <div className="w-full min-h-screen bg-gray-900/60 flex justify-center items-center">
        <div className="flex flex-col items-center gap-1 text-white w-11/12 text-center">
          <Image
            src={"/images/flower.png"}
            alt="Decorative Flower"
            width={1080}
            height={1080}
            className="w-24 mb-3"
          />
          <Text style={textStyle.description}>Welcome to Our Wedding</Text>
          <Text style={textStyle.heroTitleAllura}>
            {groom_name} & {bride_name}
          </Text>
          <Text style={textStyle.description}>
            {wedding_date && formatDate(wedding_date)}
          </Text>
        </div>
      </div>
    </div>
  );
}
