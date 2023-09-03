import ContainerWhite from "@/components/globals/ContainerWhite";
import React from "react";
import PreviewTemplate from "../PreviewTemplate";
import Text from "@/components/globals/Text";
import Image from "next/image";

export default function BrideAndGroomPreview({
  grooms,
  groom_avatar,
  bride_avatar,
  brides,
}) {
  return (
    <ContainerWhite className={"flex gap-6 lg:flex-row flex-col"}>
      <PreviewTemplate title={"Mempelai Pria"} items={grooms}>
        <div className="flex gap-3 flex-col mt-3">
          <Text>Profile</Text>
          <Image
            loading="lazy"
            src={groom_avatar}
            alt="Mempelai Pria"
            width={1080}
            height={1080}
            className="w-24 h-24 rounded-full ring-2 ring-black"
          />
        </div>
      </PreviewTemplate>
      <PreviewTemplate title={"Mempelai Wanita"} items={brides}>
        <div className="flex gap-3 flex-col mt-3">
          <Text>Profile</Text>
          <Image
            loading="lazy"
            src={bride_avatar}
            alt="Mempelai Wanita"
            width={1080}
            height={1080}
            className="w-24 h-24 rounded-full ring-2 ring-black"
          />
        </div>
      </PreviewTemplate>
    </ContainerWhite>
  );
}
