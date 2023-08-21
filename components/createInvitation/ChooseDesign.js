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
import { useState } from "react";

export default function ChooseDesign() {
  const { templates } = initialValue.create;
  const queueOptions = ["Pria - Wanita", "Wanita - Pria"];
  const openingOptions = ["Muslim", "General"];
  const [queueSelected, setQueueSelected] = useState("Pilih salah satu");
  const [openingSelected, setOpeningSelected] = useState("Pilih salah satu");

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
      <div className="flex items-center gap-4 justify-center mt-3 md:flex-row flex-col">
        <InputTitle
          label={"Link Background Music"}
          placeholder="Link Background Music"
        />
        <InputTitle
          label={"Judul Pada Cover"}
          placeholder="We Are Getting Married"
        />
      </div>
      <DropDown
        title={"Urutan Mempelai"}
        options={queueOptions}
        onSelect={(e) => setQueueSelected(e)}
        className={"w-full mt-3"}
        selectedOption={queueSelected}
      />
      <div className="flex md:items-center gap-4 justify-center my-3 md:flex-row flex-col-reverse">
        <InputTitle label={"Salam Pembuka"} placeholder="Salam Pembuka" />
        <DropDown
          title={"Template Pembukaan"}
          options={openingOptions}
          selectedOption={openingSelected}
          onSelect={(e) => setOpeningSelected(e)}
          className={"md:w-6/12"}
        />
      </div>
      <TextareaTitle label={"Ucapan Pembuka"} placeholder="Ucapan Pembuka" />
      <TextareaTitle label={"Quotes"} placeholder="Mengarungi Ombak Bersama" />
      <InputTitle label={"Sumber Quotes"} placeholder="Sutan Syahrir" />
    </TemplateCreate>
  );
}
