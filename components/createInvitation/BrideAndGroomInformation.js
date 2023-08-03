import React from "react";
import TemplateCreate from "./TemplateCreate";
import Image from "next/image";
import { FiFile, FiFolder } from "react-icons/fi";
import { InputTitle } from "../globals/Input";

export default function BrideAndGroomInformation() {
  return (
    <TemplateCreate>
      <div className="flex justify-center gap-3">
        <div className=" w-6/12">
          <div className="w-full flex gap-5 items-center">
            <Image
              src={"/images/lanang.svg"}
              alt="Image Boy"
              width={1080}
              height={1080}
              className="w-24"
            />
            <div>
              <label className="flex gap-1 cursor-pointer text-yellow-600 items-center rounded-md  bg-black px-4 py-2 w-fit">
                <FiFolder />
                <p className="text-sm">Pilih</p>
                <input type="file" accept=".png" hidden />
              </label>
              <p className="w-8/12 mt-2 text-sm">
                Ekstensi File JPG, PNG, Ukuran Maksimal File 2MB
              </p>
            </div>
          </div>
          <InputTitle label="Nama Pria" />
        </div>

        <div className="flex items-center w-6/12">
          <Image
            src={"/images/wadon.svg"}
            alt="Image Boy"
            width={1080}
            height={1080}
            className="w-24"
          />
        </div>
      </div>
    </TemplateCreate>
  );
}
