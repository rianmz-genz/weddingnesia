// CoverSilver.js
import NewAudioPlayer from "@/components/globals/AudioPlayer/new";
import Text from "@/components/globals/Text";
import { InvitationContext } from "@/context/invitation";
import { formatDate } from "@/utils";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";

export default function CoverSilver() {
  const { primary_cover, bride_name, groom_name, wedding_date, audio, to } =
    useContext(InvitationContext);
  const audioRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const onPlay = () => {
    audioRef.current.play();
    setIsOpen(true);
  };

  return (
    <div
      className={`transition-all duration-700 w-full min-h-screen bg-slate-200/20 backdrop-blur-md fixed z-50 top-0 ${
        !isOpen ? "left-0" : "-left-full"
      }`}
    >
      <NewAudioPlayer audioUrl={audio} audioRef={audioRef} isOpen={isOpen} />
      <div className="w-full min-h-screen bg-gray-900/70 flex justify-center items-center">
        <div className="flex flex-col items-center gap-1 text-white w-11/12 text-center">
          <Image
            src={"/images/flower.png"}
            alt="Decorative Flower"
            width={1080}
            height={1080}
            className="w-24 mb-3"
          />
          <Text style={textStyle.description}>
            Welcome <strong>{to}</strong> to Our Wedding Celebration
          </Text>

          <Text style={textStyle.heroTitleAllura}>
            {groom_name} & {bride_name}
          </Text>
          <Text style={textStyle.description}>
            {wedding_date && formatDate(wedding_date)}
          </Text>

          <button
            onClick={onPlay}
            className="mt-6 py-2 px-4 bg-gray-200 text-gray-900 rounded-lg text-lg"
          >
            Open Invitation
          </button>
        </div>
      </div>
    </div>
  );
}
