import { Text } from "@/components";
import { InvitationContext } from "@/context/invitation";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React, { useContext } from "react";

export default function GalleryBlackJavanese() {
  const { albums } = useContext(InvitationContext);
  return (
    <div id="gallery" className="py-12 w-full text-center bg-slate-50">
      <Text style={textStyle.smallTitleAllura}>Gallery</Text>
      <ul className="w-11/12 mx-auto justify-center flex gap-6 flex-wrap mt-8">
        {albums != undefined &&
          JSON.parse(albums)?.map((item, i) => (
            <img
              key={i}
              src={item}
              width={1080}
              className="rounded w-48 lg:w-64 h-48 lg:h-64 object-cover"
              height={1080}
              alt={`Gallery ${i}`}
            />
          ))}
      </ul>
    </div>
  );
}
