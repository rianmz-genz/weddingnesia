import React from "react";
import TemplateCreate from "./TemplateCreate";
import Text from "../globals/Text";
import { buttonStyle, textStyle } from "@/utils/enum";
import Image from "next/image";
import Button from "../globals/Button";
import CoverButton from "./CoverButton";
import InvitationCard from "./InvitationCard";
import { initialValue } from "@/store";
import Input from "../globals/Input";
import UploadGallery from "./UploadGallery";

export default function ChooseDesign() {
  const { templates } = initialValue.create;
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
      <Text style={textStyle.smalltitle} className={"font-bold mt-6 mb-3"}>
        Pilih Desain
      </Text>
      <ul className="grid grid-cols-3">
        {templates.map(({ name, cover, tier }, i) => (
          <InvitationCard key={i} name={name} cover={cover} tier={tier} />
        ))}
      </ul>
      <div className="flex items-center gap-4 justify-center mt-6">
        <div className="w-6/12">
          <Text style={textStyle.smalltitle} className={"font-bold  mb-3"}>
            Link Background Musik
          </Text>
          <Input placeholder="Link Background Musik" />
        </div>
        <UploadGallery />
      </div>
    </TemplateCreate>
  );
}
