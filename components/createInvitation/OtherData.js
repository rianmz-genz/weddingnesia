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
import TitleBorder from "../globals/TitleBorder";
const covers = [
  "/images/cover1.jpg",
  "/images/cover2.jpg",
  "/images/cover3.jpg",
  "/images/cover4.jpg",
  "/images/cover5.jpg",
  "/images/cover6.jpg",
];
export default function OtherData({
  primary_cover,
  secondary_cover,
  title,
  is_groom_first,
  greeting,
  opening_remarks,
  quotes,
  source_quotes,
  audio,
  setValue,
  onNext,
}) {
  const { templates } = initialValue.create;
  const queueOptions = ["Pria - Wanita", "Wanita - Pria"];
  const openingOptions = ["Muslim", "General"];
  const [queueSelected, setQueueSelected] = useState("Pilih salah satu");
  const [openingSelected, setOpeningSelected] = useState("Pilih salah satu");

  return (
    <TemplateCreate onNext={onNext}>
      <TitleBorder>Pilih Cover</TitleBorder>
      <ul className="grid grid-cols-2 gap-3">
        {covers.map((item, i) => (
          <Image
            alt={"Gambar" + item}
            key={i}
            src={item}
            width={1080}
            height={1080}
            loading="lazy"
            className="w-full rounded-lg"
          />
        ))}
      </ul>
      <Text className={"text-center my-3"}>Atau Upload</Text>
      <CoverButton
        primary_cover={primary_cover}
        setValue={setValue}
        title={"Primary Cover"}
        isPrimary={true}
        description={"Digunakan untuk bacgkround cover undangan bagian atas."}
      />
      <CoverButton
        className={"mt-6"}
        title={"Secondary Cover"}
        isPrimary={false}
        secondary_cover={secondary_cover}
        setValue={setValue}
        description={"Digunakan untuk bacgkround cover undangan bagian bawah"}
      />
      <TitleBorder className={"mt-6"}>Data Undangan</TitleBorder>
      <div className="flex items-center gap-4 justify-center mt-3 md:flex-row flex-col">
        <InputTitle
          required
          label={"Link Background Music"}
          placeholder="Link Background Music"
          value={audio}
          onChange={(e) => setValue({ audio: e.target.value })}
        />
        <InputTitle
          required
          label={"Judul Pada Cover"}
          placeholder="We Are Getting Married"
          value={title}
          onChange={(e) => setValue({ title: e.target.value })}
        />
      </div>
      <DropDown
        title={"Urutan Mempelai"}
        options={queueOptions}
        className={"w-full mt-3"}
        is_groom_first={is_groom_first}
        setValue={setValue}
      />
      <InputTitle
        required
        className={"my-3"}
        label={"Salam Pembuka"}
        placeholder="Salam Pembuka"
        value={greeting}
        onChange={(e) => setValue({ greeting: e.target.value })}
      />
      <TextareaTitle
        label={"Ucapan Pembuka"}
        placeholder="Ucapan Pembuka"
        value={opening_remarks}
        onChange={(e) => setValue({ opening_remarks: e.target.value })}
      />
      <TextareaTitle
        label={"Quotes"}
        placeholder="Mengarungi Ombak Bersama"
        value={quotes}
        onChange={(e) => setValue({ quotes: e.target.value })}
      />
      <InputTitle
        required
        label={"Sumber Quotes"}
        placeholder="Sutan Syahrir"
        value={source_quotes}
        onChange={(e) => setValue({ source_quotes: e.target.value })}
      />
    </TemplateCreate>
  );
}
