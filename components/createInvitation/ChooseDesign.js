import React from "react";
import TemplateCreate from "./TemplateCreate";
import Text from "../globals/Text";
import { buttonStyle, textStyle } from "@/utils/enum";
import Image from "next/image";
import Button from "../globals/Button";
import CoverButton from "./CoverButton";
import InvitationCard from "./InvitationCard";
import { initialValue } from "@/store";
import Input, { InputTitle, TextareaTitle } from "../globals/Input";
import UploadGallery from "./UploadGallery";
import DropDown from "../globals/Dropdown";

export default function ChooseDesign() {
  const { templates } = initialValue.create;
  return (
    <TemplateCreate>
      <Text
        style={textStyle.smalltitle}
        className={"font-bold mb-3 py-3 border-y"}
      >
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
      <Text
        style={textStyle.smalltitle}
        className={"font-bold mt-8 py-3 border-y"}
      >
        Data Undangan
      </Text>
      <div className="flex items-center gap-4 justify-center mt-3">
        <InputTitle
          label={"Link Background Music"}
          placeholder="Link Background Music"
        />
        <InputTitle
          label={"Judul Pada Cover"}
          placeholder="We Are Getting Married"
        />
      </div>
      <DropDown className={"w-full mt-3"} />
      <div className="flex items-center gap-4 justify-center my-3">
        <InputTitle label={"Salam Pembuka"} placeholder="Salam Pembuka" />
        <DropDown className={"w-6/12"} />
      </div>
      <TextareaTitle label={"Ucapan Pembuka"} placeholder="Ucapan Pembuka" />
    </TemplateCreate>
  );
}
