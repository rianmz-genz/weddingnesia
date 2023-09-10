import ContainerWhite from "@/components/globals/ContainerWhite";
import React, { useState } from "react";
import PreviewTemplate from "./PreviewTemplate";
import Text from "@/components/globals/Text";
import GoogleMapEmbed from "../GoogleMapEmbed";
import TitleBorder from "@/components/globals/TitleBorder";
import Button from "@/components/globals/Button";
import { buttonStyle } from "@/utils/enum";
import BrideAndGroomPreview from "./section/BrideAndGroomPreview";
import Link from "next/link";
import Skeleton from "@/components/globals/Skeleton";
import AudioPlayer from "@/components/globals/AudioPlayer";

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
  isLoading,
  onOpenModal,
  audio,
}) {
  // const [selectedDesign, setSelectedDesign] = useState({});
  // const handleChooseDesign = (id) => {
  //   const selected = designs.find((item) => item.id == id);
  //   setSelectedDesign(selected);
  // };
  return (
    <div className="w-full bg-slate-100 min-h-screen py-6 overflow-hidden">
      {isLoading ? (
        <ContainerWhite>
          <Skeleton className="bg-slate-200 w-full h-14" />
          <Skeleton className="bg-slate-200 w-1/2 h-14 my-3" />
          <Skeleton className="bg-slate-200 w-full h-36" />
          <Skeleton className="bg-slate-200 w-1/2 h-14 my-3" />
          <Skeleton className="bg-slate-200 w-full h-14" />
        </ContainerWhite>
      ) : (
        <>
          <BrideAndGroomPreview
            groom_avatar={groom_avatar}
            bride_avatar={bride_avatar}
            brides={brides}
            grooms={grooms}
          />
          <ContainerWhite className={"my-3 flex gap-3 lg:flex-row flex-col"}>
            <PreviewTemplate title={"Resepsi"} items={receptions}>
              <Text className={"my-3"}>Lokasi</Text>
              <GoogleMapEmbed src={reception_map} />
            </PreviewTemplate>
            <PreviewTemplate title={"Akad"} items={weddings}>
              <Text className={"my-3"}>Lokasi</Text>
              <GoogleMapEmbed src={wedding_map} />
            </PreviewTemplate>
          </ContainerWhite>
          <ContainerWhite className={"mt-3 flex lg:flex-row flex-col gap-3"}>
            <PreviewTemplate items={greetings} title={"Sambutan"}>
              <div className="flex gap-3 flex-col mt-3">
                <Text>Primary Cover</Text>
                <img
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
                <img
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
            <TitleBorder>{slug}</TitleBorder>
          </ContainerWhite>
          <ContainerWhite className={"mb-3"}>
            <TitleBorder>Album</TitleBorder>
            <ul className="flex flex-wrap mt-6 gap-6 justify-center">
              {albums.map((src, i) => (
                <li key={i} className="w-fit ring-1 ring-black/30">
                  <img
                    loading="lazy"
                    src={src}
                    height={1080}
                    width={1080}
                    alt="img"
                    className="object-cover w-32 h-32"
                  />
                </li>
              ))}
            </ul>
          </ContainerWhite>
          {/* <ContainerWhite className={"my-3"}>
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
              <img
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
      </ContainerWhite> */}
          <ContainerWhite>
            <Button
              style={buttonStyle.blackLarge}
              onClick={() => onOpenModal()}
              className={"w-full"}
            >
              Buat Undangan
            </Button>
            <Link href={"/create"}>
              <Button style={buttonStyle.dangerlarge} className={"w-full mt-3"}>
                Kembali
              </Button>
            </Link>
          </ContainerWhite>
          <AudioPlayer audioSrc={audio} />
        </>
      )}
    </div>
  );
}
