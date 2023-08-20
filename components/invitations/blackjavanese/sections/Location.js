import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";

export default function LocationBlackJavanese() {
  return (
    <div id="location" className="py-12 w-11/12 mx-auto">
      <Text style={textStyle.smallTitleAllura} className={"text-center"}>
        Lokasi
      </Text>
      <div className="w-full shadow-xl border mt-6 rounded-md p-6 flex flex-col items-center">
        <Text style={textStyle.descriptionAllura}>Resepsi</Text>
        <ImageText2
          title={"Jumat, 1 September 2023"}
          src={"/images/date.svg"}
          description={"18:00 - 21:00 WIB"}
        />
        <ImageText2
          title={"Hotel Aston Imperium Purwokerto"}
          src={"/images/location.svg"}
          description={
            "Jl. Overste Isdiman No.33, Glempang, Bancarkembar, Kec. Purwokerto Utara, Kabupaten Banyumas, Jawa Tengah 53114"
          }
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4325756822072!2d109.24039888885498!3d-7.417283999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e8d2f347f67%3A0xea62bc175447bf91!2sAston%20Imperium%20Purwokerto!5e0!3m2!1sid!2sid!4v1692539649994!5m2!1sid!2sid"
          width="600"
          height="450"
          className="w-full mt-8"
        ></iframe>
      </div>
    </div>
  );
}

function ImageText2({ src, title, description }) {
  return (
    <>
      <Image
        src={src}
        alt="tanggal"
        className="w-12 mt-5"
        width={1080}
        height={1080}
      />
      <Text style={textStyle.description} className={"font-bold my-2"}>
        {title}
      </Text>
      <Text style={textStyle.smalldescription} className={"text-center"}>
        {description}
      </Text>
    </>
  );
}
