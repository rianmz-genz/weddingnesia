import AudioPlayer from "@/components/globals/AudioPlayer";
import Text from "@/components/globals/Text";
import { InvitationContext } from "@/context/invitation";
import { formatDate } from "@/utils";
import { textStyle } from "@/utils/enum";
import React, { useContext } from "react";

export default function HeroBlackJavanese() {
  const { title, primary_cover, bride_name, groom_name, wedding_date, audio } =
    useContext(InvitationContext);
  return (
    <div
      className={`w-full min-h-screen bg-cover bg-center mb-12`}
      style={{ backgroundImage: `url(${primary_cover})` }}
    >
      <AudioPlayer
        audioLink={
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/269943960&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        }
      />
      <div className="w-full min-h-screen bg-black/60 flex justify-center items-center">
        <div className="flex flex-col items-center gap-2 text-white w-11/12">
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
