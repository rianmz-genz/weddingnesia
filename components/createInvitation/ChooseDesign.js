import React from "react";
import TemplateCreate from "./TemplateCreate";
import Text from "../globals/Text";
import { buttonStyle, textStyle } from "@/utils/enum";
import Image from "next/image";
import Button from "../globals/Button";
import CoverButton from "./CoverButton";

export default function ChooseDesign() {
  return (
    <TemplateCreate>
      <Text style={textStyle.smalltitle} className={"font-bold mb-3"}>
        Pilih Cover
      </Text>
      <CoverButton
        title={"Primary Cover"}
        description={"Digunakan untuk bacgkround cover undangan bagian atas."}
      />
      <CoverButton
        className={"mt-3"}
        title={"Secondary Cover"}
        description={"Digunakan untuk bacgkround cover undangan bagian bawah"}
      />
    </TemplateCreate>
  );
}
