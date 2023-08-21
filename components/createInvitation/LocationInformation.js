import React, { useState } from "react";
import TemplateCreate from "./TemplateCreate";
import TitleLocation from "./TitleLocation";
import { InputTitle } from "../globals/Input";
import GoogleMapEmbed from "./GoogleMapEmbed";

export default function LocationInformation() {
  const [gmaps, setGmaps] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);

  const handleInputMapsChange = (e) => {
    const inputValue = e.target.value;

    // Lakukan validasi di sini, cek apakah input mengandung <iframe
    if (inputValue.includes("<iframe")) {
      setGmaps(inputValue);
      setIsValidInput(true);
    } else {
      setGmaps("");
      setIsValidInput(false);
    }
  };

  return (
    <TemplateCreate>
      <TitleLocation isImportant>Akad</TitleLocation>
      <InputTitle
        className={"my-3"}
        label={"Embed Google Maps*"}
        onChange={handleInputMapsChange}
        placeholder="Embed google maps"
      />
      <InputTitle
        className={"my-3"}
        label={"Nama Lokasi*"}
        placeholder="Rumah/Gedung.."
      />
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle type="date" label={"Tanggal Acara*"} />
        <InputTitle placeholder="WIB" label={"Tampilan Zona Waktu*"} />
      </div>
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle type="time" label={"Jam Mulai Acara*"} />
        <div className="w-full">
          <InputTitle type="time" label={"Jam Selesai Acara*"} />
          <label
            htmlFor="isUntilFinish"
            className="flex items-center gap-1 text-sm mt-1"
          >
            <input type="checkbox" id="isUntilFinish" />
            <p>Sampai dengan selesai</p>
          </label>
        </div>
      </div>

      <hr className=" my-6" />
      <TitleLocation>Resepsi</TitleLocation>
      <InputTitle
        className={"my-3"}
        label={"Embed Google Maps*"}
        onChange={handleInputMapsChange}
        placeholder="Embed google maps"
      />
      <InputTitle
        className={"my-3"}
        label={"Nama Lokasi*"}
        placeholder="Rumah/Gedung.."
      />
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle type="date" label={"Tanggal Acara*"} />
        <InputTitle placeholder="WIB" label={"Tampilan Zona Waktu*"} />
      </div>
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle type="time" label={"Jam Mulai Acara*"} />
        <div className="w-full">
          <InputTitle type="time" label={"Jam Selesai Acara*"} />
          <label
            htmlFor="isUntilFinish"
            className="flex items-center gap-1 text-sm mt-1"
          >
            <input type="checkbox" id="isUntilFinish" />
            <p>Sampai dengan selesai</p>
          </label>
        </div>
      </div>
    </TemplateCreate>
  );
}
