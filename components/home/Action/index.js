import Button from "@/components/globals/Button";
import Text from "@/components/globals/Text";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";

export default function ActionSection() {
  return (
    <section className="px-7 text-center mx-auto sm:max-w-lg lg:max-w-5xl 2xl:max-w-7xl py-28">
      <Text style={textStyle.description} className={"text-yellow-600"}>
        Buat Undangan Online Sekarang
      </Text>
      {/* <Image
        src={"/images/logo.png"}
        alt="Logo"
        width={1080}
        height={1080}
        className="w-5/12 mx-auto"
      ></Image> */}
      <Text style={textStyle.bigtitle} className={" my-3"}>
        Dipercaya 1.119 Customer
      </Text>
      <Text style={textStyle.description}>
        Kami ingin menjadi bagian kebahagian momen spesial Anda, mari
        bergabunglah bersama kami yang telah dipercaya lebih dari ribuan orang.
      </Text>
      <Button className="mt-4">Buat Undangan Gratis</Button>
    </section>
  );
}
