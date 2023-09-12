import Text from "@/components/globals/Text";
import { InvitationContext } from "@/context/invitation";
import { formatDate } from "@/utils";
import { textStyle } from "@/utils/enum";
import React, { useContext } from "react";

export default function HeroBlackJavanese() {
  const { title, primary_cover, bride_name, groom_name, wedding_date } =
    useContext(InvitationContext);
  return (
    <div
      className={`w-full min-h-screen bg-cover bg-center mb-12`}
      style={{ backgroundImage: `url(${primary_cover})` }}
    >
      <div className="w-full min-h-screen bg-black/60 flex justify-center items-center">
        <div className="flex flex-col items-center gap-2 text-white w-11/12">
          <Text style={textStyle.description}>{title}</Text>
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
