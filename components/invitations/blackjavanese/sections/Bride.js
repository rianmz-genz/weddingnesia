import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";
import BrideProfile from "../brideprofile";

export default function BrideBlackJavanese() {
  return (
    <div id="bride" className="w-11/12 mx-auto py-12 text-center">
      <Text style={textStyle.smallTitleAllura}>Kami Yang Berbahagia</Text>
      <Text className={"my-3 font-bold"}>
        Assalamualaikum warahmatullahi wabarakatuh
      </Text>
      <Text>
        Dengan ini kami Adrian dan Vinka memantapkan diri kami untuk melanjutkan
        hubungan kami ke jenjang pernikahan untuk menjalankan ibadah yang
        berlangsung seumur hidup, semoga kami dapat menjadi keluarga yang
        sakinah mawadah dan warohmah.
      </Text>
      <div className="flex justify-center md:flex-row flex-col gap-6 w-full mt-12">
        <BrideProfile
          src={"/images/laki-laki.svg"}
          nickName={"Adrian"}
          fullName="Adrian Aji Septa"
          father={"Sudjaman"}
          mother={"Sri Mulyani"}
        />
        <BrideProfile
          src={"/images/perempuan.svg"}
          nickName={"Vinka"}
          fullName="Vinka Afiyata"
          father={"Sutiman"}
          mother={"Sudjanti"}
        />
      </div>
    </div>
  );
}
