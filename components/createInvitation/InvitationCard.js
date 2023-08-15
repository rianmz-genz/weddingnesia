import Image from "next/image";
import React from "react";
import Text from "../globals/Text";
import { textStyle } from "@/utils/enum";

export default function InvitationCard({ cover, name, tier }) {
  return (
    <li className="w-full rounded-md ring-black hover:ring-2 shadow hover:ring-black transition-all duration-300">
      <Image
        className="w-full rounded-t-md"
        width={1920}
        height={1080}
        src={cover}
        alt={name}
        loading="lazy"
      />
      <div className="px-4 py-2 flex justify-between">
        <Text style={textStyle.description}>{name}</Text>
        <div className="px-2 py-1 text-sm rounded bg-black/90 text-yellow-600">
          {tier}
        </div>
      </div>
    </li>
  );
}
