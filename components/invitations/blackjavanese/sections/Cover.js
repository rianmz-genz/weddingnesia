import AudioPlayer from "@/components/globals/AudioPlayer";
import NewAudioPlayer from "@/components/globals/AudioPlayer/new";
import Button from "@/components/globals/Button";
import Text from "@/components/globals/Text";
import { InvitationContext } from "@/context/invitation";
import { formatDate } from "@/utils";
import { buttonStyle, textStyle } from "@/utils/enum";
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";

export default function CoverBlackJavanese() {
  const {
    title,
    primary_cover,
    bride_name,
    groom_name,
    wedding_date,
    audio,
    to,
  } = useContext(InvitationContext);
  const audioRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const onPlay = () => {
    audioRef.current.play();
    setIsOpen(true);
  };
  return (
    <div
      className={`transition-all duration-700 w-full min-h-screen bg-cover bg-center fixed z-50 top-0 ${
        !isOpen ? "left-0" : "-left-full"
      }`}
      style={{ backgroundImage: `url(${primary_cover})` }}
    >
      <NewAudioPlayer audioUrl={audio} audioRef={audioRef} isOpen={isOpen} />
      <div className="w-full min-h-screen bg-black/60 flex justify-center items-center">
        <div className="flex flex-col items-center gap-1 text-white w-11/12">
          <Image
            src={"/images/flower.png"}
            alt="Kembang"
            width={1080}
            height={1080}
            className="w-24 mb-3"
          />
          <Text style={textStyle.description}>
            Welcome <strong>{to}</strong> to Our Wedding!
          </Text>

          <Text style={textStyle.heroTitleAllura}>
            {groom_name} & {bride_name}
          </Text>
          <Text style={textStyle.description}>
            {wedding_date && formatDate(wedding_date)}
          </Text>

          <Button
            onClick={() => onPlay()}
            style={buttonStyle.whitelarge}
            className={"mt-6"}
          >
            Buka Undangan
          </Button>
        </div>
      </div>
    </div>
  );
}
