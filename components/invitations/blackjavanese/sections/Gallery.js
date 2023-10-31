import { Text } from "@/components";
import { InvitationContext } from "@/context/invitation";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React, { useContext } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function GalleryBlackJavanese() {
  const { albums } = useContext(InvitationContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="gallery" className="py-12 w-full text-center bg-gray-100">
      <Text
        data-aos="fade-up"
        data-aos-duration="1000"
        style={textStyle.smallTitleAllura}
      >
        Gallery
      </Text>
      <ul className="lg:w-1/2 mx-auto justify-center flex gap-2 flex-wrap mt-8">
        {albums != undefined &&
          JSON.parse(albums)?.map((item, i) => (
            <img
              key={i}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${i * 150}`}
              src={item}
              width={1080}
              className="w-32 lg:w-64 h-32 lg:h-64 object-cover"
              height={1080}
              alt={`Gallery ${i}`}
            />
          ))}
      </ul>
    </div>
  );
}
