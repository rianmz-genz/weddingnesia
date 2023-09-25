import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import BrideProfile from "../brideprofile";
import { InvitationContext } from "@/context/invitation";
import AOS from "aos";
import "aos/dist/aos.css";
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
    bride_instagram,
    groom_instagram,
  } = useContext(InvitationContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="bride" className=" py-16 w-full bg-gray-100">
      <div className="w-11/12 text-center mx-auto">
        <Image
          data-aos-duration="1000"
          data-aos="fade-up"
          src={"/images/flower-2.png"}
          alt="BUnga"
          width={1080}
          height={1080}
          className="w-64 mb-3 mx-auto"
        />
        <Text
          data-aos-duration="1000"
          data-aos="fade-up"
          style={textStyle.smallTitleAllura}
        >
          Kami Yang Berbahagia
        </Text>
        <Text data-aos-duration="1000" data-aos="fade-up" className={"my-3"}>
          {greeting}
        </Text>
        <Text
          data-aos-duration="1000"
          data-aos="fade-up"
          className={"w-6/12 mx-auto"}
        >
          {opening_remarks}
        </Text>
        <div className="flex justify-center md:flex-row flex-col gap-12 w-full mt-12">
          <BrideProfile
            src={groom_avatar}
            nickName={groom_name}
            fullName={groom_fullname}
            instagram={groom_instagram}
            info={groom_info}
          />
          <BrideProfile
            src={bride_avatar}
            nickName={bride_name}
            fullName={bride_fullname}
            info={bride_info}
            instagram={bride_instagram}
          />
        </div>
      </div>
    </div>
  );
}
