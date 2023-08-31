import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";

export default function GalleryBlackJavanese() {
  return (
    <div className="py-12 w-full text-center bg-slate-50">
      <Text style={textStyle.smallTitleAllura}>Gallery</Text>
      <ul className="grid w-11/12 mx-auto md:grid-cols-3 grid-cols-1 gap-3 lg:grid-cols-4 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
          <Image
            key={i}
            src="/images/gallery.svg"
            width={1080}
            className="rounded w-full"
            height={1080}
            alt="Gallery"
          />
        ))}
      </ul>
    </div>
  );
}
