import Text from "@/components/globals/Text";
import { textStyle } from "@/utils/enum";
import React from "react";

export default function HeroBlackJavanese() {
  const src = "/images/coverblackjavanese.svg";
  return (
    <div
      className={`w-full min-h-screen bg-cover bg-center mb-12`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="w-full min-h-screen bg-black/60 flex justify-center items-center">
        <div className="flex flex-col items-center gap-2 text-white w-11/12">
          <Text style={textStyle.description}>Undangan Pernikahan</Text>
          <Text style={textStyle.heroTitleAllura}>Adrian & Vinka</Text>
          <Text style={textStyle.description}>Jumat, 1 September 2023</Text>
        </div>
      </div>
    </div>
  );
}
