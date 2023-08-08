import { initialValue } from "@/store";
import Image from "next/image";
import React from "react";
import { FiFolder } from "react-icons/fi";

export default function InputProfile({ isMan = false, img, onPick }) {
  const { man, woman } = initialValue;
  const src = img != null ? img : isMan ? man : woman;
  return (
    <div className="w-full flex gap-5 items-center">
      <Image
        src={src}
        alt={`Mempelai ${isMan ? "Laki-Laki" : "Perempuan"}`}
        width={1080}
        height={1080}
        className="md:w-24 h-16 md:h-24 w-16 rounded-full object-cover"
      />
      <div>
        <label className="flex gap-1 cursor-pointer text-yellow-600 items-center rounded-md  bg-black px-4 py-2 w-fit">
          <FiFolder />
          <p className="text-sm">Pilih</p>
          <input onChange={onPick} type="file" accept=".png" hidden />
        </label>
        <p className="md:w-8/12 w-full mt-2 text-sm">
          Ekstensi File JPG, PNG, Ukuran Maksimal File 2MB
        </p>
      </div>
    </div>
  );
}
