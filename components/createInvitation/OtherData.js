import React, { useEffect, useState } from "react";
import TemplateCreate from "./TemplateCreate";
import Text from "../globals/Text";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import CoverButton from "./CoverButton";
import { InputTitle, TextareaTitle } from "../globals/Input";
import DropDown from "../globals/Dropdown";
import TitleBorder from "../globals/TitleBorder";
import { FaQuestionCircle } from "react-icons/fa";
import Modals from "../globals/Modals";
import Cookies from "js-cookie";
import axios from "axios";
import tempService from "@/api/integrations/temp";
import UploadAudio from "./UploadAudio";
import Alert from "../globals/Alert";
const covers = [
  "/images/cover1.jpg",
  "/images/cover2.jpg",
  "/images/cover3.jpg",
  "/images/cover4.jpg",
  "/images/cover5.jpg",
  "/images/cover6.jpg",
];
export default function OtherData({ setIsLoading, onNext }) {
  const tempId = Cookies.get("tempId");
  const [hasLoaded, setHasLoaded] = useState(false);
  const [message, setMessage] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [formData, setFormData] = useState({
    primary_cover: "",
    secondary_cover: "",
    audio: "",
    greeting: "",
    opening_remarks: "",
    quotes: "",
    source_quotes: "",
    is_groom_first: false,
  });
  const getDesignData = async () => {
    try {
      setMessage("");
      const res = await tempService.getDesign(tempId);
      if (res.status) {
        setFormData(res.data.design);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status !== 404) {
          setMessage(error?.response?.data?.message);
        }
      }
    } finally {
      setIsLoading(false);
      setHasLoaded(true);
    }
  };
  useEffect(() => {
    if (!hasLoaded) {
      getDesignData();
    }
  }, [hasLoaded]);
  const queueOptions = ["Pria - Wanita", "Wanita - Pria"];
  const [isOpenBgm, setIsOpenBgm] = useState(false);
  const [isOpenUcapan, setIsOpenUcapan] = useState(false);
  const setValue = (fields) => {
    setFormData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  };
  const onSubmit = async () => {
    // return console.log(formData);
    try {
      setMessage("");
      setIsErr(false);

      const res = await tempService.createDesign(tempId, formData);
      if (res.status) {
        setMessage(res.message);
        setTimeout(() => {
          onNext();
          setMessage("");
        }, 2250);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setIsErr(true);
        setMessage(error?.response?.data?.message);
      }
    }
  };
  return (
    <TemplateCreate onNext={onSubmit}>
      <Alert
        message={message}
        trigger={message != ""}
        style={!isErr ? "success" : "error"}
      />
      <Modals onClose={() => setIsOpenBgm(false)} trigger={isOpenBgm}>
        <Text style={textStyle.description} className={"font-bold"}>
          Apa yang disebut Link Background Music?
        </Text>
        <Text>
          Link Background Music adalah embed link yang didapat dari platform
          penyedia music yaitu soundcloud. Anda dapat melihat bagaimana cara
          embed Link Background Music
          <a
            href="https://scribehow.com/shared/Tutorial_embed_SoundCloud_Track__u12AQH2ZRJSmKquX5yuo6A"
            className="underline text-blue-500 mx-1"
          >
            disini
          </a>
          dan kami memiliki rekomendasi
          <a
            href="https://on.soundcloud.com/tn9hL"
            className="underline text-blue-500 mx-1"
          >
            playlist
          </a>
          untuk Anda.
        </Text>
      </Modals>
      <Modals onClose={() => setIsOpenUcapan(false)} trigger={isOpenUcapan}>
        <Text style={textStyle.description} className={"font-bold"}>
          Berikut Contoh Ucapan Pembuka
        </Text>
        <Text className={"text-justify"}>
          &quot;Dengan segala kerendahan hati, kami sangat berbahagia bisa
          membagi saat-saat penting ini kepada Bapak/Ibu/Saudara/i. Besar
          harapan kami atas kehadiran serta iringan doa dan restunya agar
          pernikahan yang akan digelar bisa berjalan sebagaimana mestinya.&quot;
        </Text>
      </Modals>

      <TitleBorder>Pilih Cover</TitleBorder>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {covers.map((item, i) => (
          <Image
            onClick={() => setValue({ primary_cover: item })}
            alt={"Gambar" + item}
            key={i}
            src={item}
            width={1080}
            height={1080}
            loading="lazy"
            className={`w-full rounded-lg hover:ring-1 cursor-pointer ${
              item == formData?.primary_cover
                ? "ring-2 ring-black"
                : " opacity-80"
            } transition-all duration-500`}
          />
        ))}
      </ul>
      <Text className={"text-center my-3"}>Atau Upload</Text>
      <CoverButton
        primary_cover={formData?.primary_cover}
        setValue={setValue}
        title={"Primary Cover"}
        isPrimary={true}
        description={"Digunakan untuk bacgkround cover undangan bagian atas."}
      />
      <CoverButton
        className={"mt-6"}
        title={"Secondary Cover"}
        isPrimary={false}
        secondary_cover={formData?.secondary_cover}
        setValue={setValue}
        description={"Digunakan untuk bacgkround cover undangan bagian bawah"}
      />
      <TitleBorder className={"mt-6"}>Data Undangan</TitleBorder>
      {/* <div className="flex items-center gap-4 justify-center mt-3 md:flex-row flex-col">
        <InputTitle
          required
          label={"Link Background Music"}
          placeholder="Link Background Music"
          value={audio}
          onChange={(e) => setValue({ audio: e.target.value })}
        />
        <InputTitle
          required
          label={"Judul Pada Cover"}
          placeholder="We Are Getting Married"
          value={title}
          onChange={(e) => setValue({ title: e.target.value })}
        />
      </div> */}
      {/* <InputTitle
        required
        label={"Link Background Music"}
        placeholder="Link Background Music"
        value={audio}
        onChange={(e) => setValue({ audio: getSrcValue(e.target.value) })}
        icon={
          <FaQuestionCircle
            className="cursor-pointer"
            onClick={() => setIsOpenBgm(true)}
          />
        }
      /> */}
      <DropDown
        title={"Urutan Mempelai"}
        options={queueOptions}
        className={"w-full mt-3"}
        is_groom_first={formData.is_groom_first}
        setValue={setValue}
      />
      <InputTitle
        required
        className={"my-3"}
        label={"Salam Pembuka"}
        placeholder="Salam Pembuka"
        value={formData.greeting}
        onChange={(e) => setValue({ greeting: e.target.value })}
      />
      <TextareaTitle
        label={"Ucapan Pembuka"}
        placeholder="Ucapan Pembuka"
        value={formData.opening_remarks}
        onChange={(e) => setValue({ opening_remarks: e.target.value })}
        icon={
          <FaQuestionCircle
            className="cursor-pointer"
            onClick={() => setIsOpenUcapan(true)}
          />
        }
      />
      <TextareaTitle
        label={"Quotes"}
        placeholder="Mengarungi Ombak Bersama"
        value={formData.quotes}
        onChange={(e) => setValue({ quotes: e.target.value })}
      />
      <InputTitle
        required
        label={"Sumber Quotes"}
        placeholder="Sutan Syahrir"
        value={formData.source_quotes}
        onChange={(e) => setValue({ source_quotes: e.target.value })}
      />
      <UploadAudio audio={formData.audio} setValue={setValue} />
    </TemplateCreate>
  );
}
