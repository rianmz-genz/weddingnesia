import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React, { useContext } from "react";
import BrideProfile from "../brideprofile";
import { InvitationContext } from "@/context/invitation";

export default function BrideBlackJavanese() {
  const {
    opening_remarks,
    greeting,
    groom_avatar,
    bride_avatar,
    groom_name,
    bride_name,
    groom_fullname,
    groom_info,
    bride_fullname,
    bride_info,
  } = useContext(InvitationContext);

  return (
    <div id="bride" className=" py-12 w-full bg-slate-50">
      <div className="w-11/12 text-center mx-auto">
        <Text style={textStyle.smallTitleAllura}>Kami Yang Berbahagia</Text>
        <Text className={"my-3 font-bold"}>{opening_remarks}</Text>
        <Text>{greeting}</Text>
        <div className="flex justify-center md:flex-row flex-col gap-6 w-full mt-12">
          <BrideProfile
            src={groom_avatar}
            nickName={groom_name}
            fullName={groom_fullname}
            info={groom_info}
          />
          <BrideProfile
            src={bride_avatar}
            nickName={bride_name}
            fullName={bride_fullname}
            info={bride_info}
          />
        </div>
      </div>
    </div>
  );
}
