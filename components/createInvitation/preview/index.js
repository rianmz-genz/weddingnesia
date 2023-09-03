import ContainerWhite from "@/components/globals/ContainerWhite";
import React, { useState } from "react";
import PreviewTemplate from "./PreviewTemplate";
import Text from "@/components/globals/Text";
import Image from "next/image";
import GoogleMapEmbed from "../GoogleMapEmbed";
import TitleBorder from "@/components/globals/TitleBorder";
import Button from "@/components/globals/Button";
import { buttonStyle } from "@/utils/enum";
import BrideAndGroomPreview from "./section/BrideAndGroomPreview";

export default function PreviewPage({
  grooms,
  brides,
  weddings,
  receptions,
  groom_avatar,
  bride_avatar,
  reception_map,
  wedding_map,
  albums,
  slug,
  primary_cover,
  secondary_cover,
  greetings,
  quotess,
  designs,
}) {
  const [selectedDesign, setSelectedDesign] = useState({});
  const handleChooseDesign = (id) => {
    const selected = designs.find((item) => item.id == id);
    setSelectedDesign(selected);
  };
  return (
    <div className="w-full bg-slate-100 min-h-screen py-6">
      <BrideAndGroomPreview
        groom_avatar={groom_avatar}
        bride_avatar={bride_avatar}
        brides={brides}
        grooms={grooms}
      />
      <ContainerWhite className={"my-3 flex gap-3 lg:flex-row flex-col"}>
        <PreviewTemplate title={"Resepsi"} items={receptions}>
          <Text className={"my-3"}>Lokasi</Text>
          <GoogleMapEmbed iframeHtml={reception_map} />
        </PreviewTemplate>
        <PreviewTemplate title={"Akad"} items={weddings}>
          <Text className={"my-3"}>Lokasi</Text>
          <GoogleMapEmbed iframeHtml={wedding_map} />
        </PreviewTemplate>
      </ContainerWhite>
      <ContainerWhite className={"mt-3 flex lg:flex-row flex-col gap-3"}>
        <PreviewTemplate items={greetings} title={"Sambutan"}>
          <div className="flex gap-3 flex-col mt-3">
            <Text>Primary Cover</Text>
            <Image
              loading="lazy"
              src={primary_cover}
              alt="Primary Cover"
              width={1080}
              height={1080}
              className="w-full rounded-lg object-cover ring-2 ring-black"
            />
          </div>
        </PreviewTemplate>
        <PreviewTemplate items={quotess} title={"Quotes"}>
          <div className="flex gap-3 flex-col mt-3">
            <Text>Secondary Cover</Text>
            <Image
              loading="lazy"
              src={secondary_cover}
              alt="Secondary Cover"
              width={1080}
              height={1080}
              className="w-full rounded-lg object-cover ring-2 ring-black"
            />
          </div>
        </PreviewTemplate>
      </ContainerWhite>
      <ContainerWhite className={" my-3"}>
        <TitleBorder>https://weddingnesia.id/invitation?sl={slug}</TitleBorder>
      </ContainerWhite>
      <ContainerWhite>
        <TitleBorder>Album</TitleBorder>
        <ul className="flex flex-wrap mt-6 gap-6 justify-center">
          {albums.map((src, i) => (
            <li key={i} className="w-fit ring-1 ring-black/30">
              <Image
                loading="lazy"
                src={src}
                height={1080}
                width={1080}
                alt="image"
                className="object-cover w-32 h-32"
              />
            </li>
          ))}
        </ul>
      </ContainerWhite>
      <ContainerWhite className={"my-3"}>
        <TitleBorder>Pilih Desain</TitleBorder>
        <ul className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          {designs?.map(({ name, cover, id }) => (
            <li
              onClick={() => handleChooseDesign(id)}
              key={id}
              className={`w-full rounded-lg overflow-hidden ${
                selectedDesign.id == id
                  ? "ring-2 ring-black"
                  : "ring-1 hover:ring-2 hover:ring-black"
              } transition-all duration-300 cursor-pointer`}
            >
              <Image
                src={cover}
                alt={name}
                width={1080}
                height={1080}
                className="w-full object-cover max-h-48"
              />
              <div className="px-4 py-2 bg-white">
                <Text className={"font-bold"}>{name}</Text>
              </div>
            </li>
          ))}
        </ul>
      </ContainerWhite>
      <ContainerWhite>
        <Button style={buttonStyle.blackLarge} className={"w-full"}>
          Buat Undangan
        </Button>
        <Button style={buttonStyle.dangerlarge} className={"w-full mt-3"}>
          Kembali
        </Button>
      </ContainerWhite>
    </div>
  );
}
