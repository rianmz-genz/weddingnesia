import Button from "@/components/globals/Button";
import Text from "@/components/globals/Text";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ActionSection() {
  return (
    <section className="px-7 text-center mx-auto sm:max-w-lg lg:max-w-5xl 2xl:max-w-7xl py-28">
      <Text style={textStyle.description} className={"text-yellow-600"}>
        Buat Undangan Online Sekarang
      </Text>
      <Text style={textStyle.bigtitle} className={" my-3"}>
        Dipercaya 1.119 Customer
      </Text>
      <Text style={textStyle.description}>
        Kami ingin menjadi bagian kebahagian momen spesial Anda, mari
        bergabunglah bersama kami yang telah dipercaya lebih dari ribuan orang.
      </Text>
      <Link href={"/auth/signin"}>
        <Button className="mt-4">Buat Undangan Gratis</Button>
      </Link>
    </section>
  );
}
