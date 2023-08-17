import React, { useState } from "react";
import TemplateCreate from "./TemplateCreate";
import Image from "next/image";
import { FiFile, FiFolder } from "react-icons/fi";
import { InputLeftWithTitle, InputTitle } from "../globals/Input";
import InputProfile from "../globals/InputProfile";
import ContainerPart from "./ContainerPart";
import Button from "../globals/Button";
import { buttonStyle } from "@/utils/enum";
import { VscMention } from "react-icons/vsc";

export default function BrideAndGroomInformation() {
  const [imgMan, setImgMan] = useState(null);
  const changeImage = (e, setImage) => {};
  const onNext = () => {};
  return (
    <TemplateCreate onNext={onNext}>
      <div className="flex justify-center gap-6 md:flex-row flex-col">
        <ContainerPart>
          <InputProfile isMan img={imgMan} />
          <div className="flex flex-col space-y-3 my-1 md:my-3 py-3 md:py-6 border-b border-black/10">
            <InputTitle
              label="Nama Lengkap Pria*"
              placeholder="Nama Lengkap Pria"
            />
            <InputTitle
              label="Nama Panggilan Pria*"
              placeholder="Nama Panggilan Pria"
            />
          </div>
          <div className="flex flex-col space-y-3 my-1 md:my-3 pb-3 md:pb-6 pt-3 border-b border-black/10">
            <InputTitle label="Nama Ayah Pria*" placeholder="Nama Ayah Pria" />
            <InputTitle label="Nama Ibu Pria*" placeholder="Nama Ibu Pria" />
          </div>

          <div className="md:pb-6 pb-3 mb-3 pt-3 md:mb-6 border-b border-black/10">
            <InputTitle
              label="Urutan Anak Pria*"
              placeholder="Nama Lengkap Pria"
            />
          </div>
          <InputLeftWithTitle
            left={<VscMention className="text-xl" />}
            label={"Instagram Pria*"}
            placeholder="Instagram Pria"
          />
        </ContainerPart>

        <ContainerPart>
          <InputProfile img={imgMan} />
          <div className="flex flex-col space-y-3 my-1 md:my-3 py-3 md:py-6 border-b border-black/10">
            <InputTitle
              label="Nama Lengkap Wanita*"
              placeholder="Nama Lengkap Wanita"
            />
            <InputTitle
              label="Nama Panggilan Wanita*"
              placeholder="Nama Panggilan Wanita"
            />
          </div>
          <div className="flex flex-col space-y-3 my-1 md:my-3 pb-3 md:pb-6 pt-3 border-b border-black/10">
            <InputTitle
              label="Nama Ayah Wanita*"
              placeholder="Nama Ayah Wanita"
            />
            <InputTitle
              label="Nama Ibu Wanita*"
              placeholder="Nama Ibu Wanita"
            />
          </div>

          <div className="md:pb-6 pb-3 mb-3 pt-3 md:mb-6 border-b border-black/10">
            <InputTitle
              label="Urutan Anak Wanita*"
              placeholder="Nama Lengkap Wanita"
            />
          </div>
          <InputLeftWithTitle
            left={<VscMention className="text-xl" />}
            label={"Instagram Wanita*"}
            placeholder="Instagram Wanita"
          />
        </ContainerPart>
      </div>
    </TemplateCreate>
  );
}
