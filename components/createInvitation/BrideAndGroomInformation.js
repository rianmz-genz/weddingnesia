import React, { useEffect, useState } from "react";
import TemplateCreate from "./TemplateCreate";
import { InputLeftWithTitle, InputTitle } from "../globals/Input";
import InputProfile from "../globals/InputProfile";
import ContainerPart from "./ContainerPart";
import { VscMention } from "react-icons/vsc";
import TitleBorder from "../globals/TitleBorder";
import tempService from "@/api/integrations/temp";
import Cookies from "js-cookie";
import axios from "axios";
import Alert from "../globals/Alert";
export default function BrideAndGroomInformation({
  onNext,
  setIsLoading,
  isLoading,
}) {
  const [message, setMessage] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [coupleData, setCoupleData] = useState({
    bride_avatar: "",
    bride_name: "",
    bride_fullname: "",
    bride_father: "",
    bride_mother: "",
    bride_instagram: "",
    bride_sequence: "",
    groom_avatar: "",
    groom_name: "",
    groom_fullname: "",
    groom_father: "",
    groom_mother: "",
    groom_instagram: "",
    groom_sequence: "",
  });
  const tempId = Cookies.get("tempId");
  const [hasLoaded, setHasLoaded] = useState(false);
  const getCoupleData = async () => {
    try {
      setMessage("");
      const res = await tempService.getCouple(tempId);
      if (res.status) {
        // console.log(res);
        setCoupleData(res.data.bride);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status !== 404) {
          setMessage(error?.response?.data?.message);
          setIsErr(true);
        }
      }
    } finally {
      setIsLoading(false);
      setHasLoaded(true);
    }
  };
  useEffect(() => {
    if (!hasLoaded) {
      getCoupleData();
    }
  }, [hasLoaded]);
  const onSubmit = async () => {
    try {
      setMessage("");
      setIsErr(false);

      const res = await tempService.createCouple(tempId, coupleData);
      if (res.status) {
        // console.log(res);
        setMessage(res.message);
        setTimeout(() => {
          onNext();
          setMessage("");
        }, 2250);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error?.response?.data?.message);
        setIsErr(true);
      }
    }
  };
  const setValue = (fields) => {
    setCoupleData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  };
  return (
    <TemplateCreate onNext={onSubmit}>
      <Alert
        message={message}
        trigger={message != ""}
        style={!isErr ? "success" : "error"}
      />
      <div className="flex justify-center gap-6 flex-col">
        <ContainerPart>
          <TitleBorder>Mempelai Pria</TitleBorder>
          <InputProfile
            groom_avatar={coupleData.groom_avatar}
            setValue={setValue}
            isMan
          />
          <div className="flex flex-col space-y-3 my-1 md:my-3 py-3 md:py-6 border-b border-black/10">
            <InputTitle
              required
              value={coupleData.groom_fullname}
              onChange={(e) => setValue({ groom_fullname: e.target.value })}
              label="Nama Lengkap Pria*"
              placeholder="Nama Lengkap Pria"
            />
            <InputTitle
              required
              value={coupleData.groom_name}
              onChange={(e) => setValue({ groom_name: e.target.value })}
              label="Nama Panggilan Pria*"
              placeholder="Nama Panggilan Pria"
            />
          </div>
          <div className="flex flex-col space-y-3 my-1 md:my-3 pb-3 md:pb-6 pt-3 border-b border-black/10">
            <InputTitle
              required
              value={coupleData.groom_father}
              onChange={(e) => setValue({ groom_father: e.target.value })}
              label="Nama Ayah Pria*"
              placeholder="Nama Ayah Pria"
            />
            <InputTitle
              required
              value={coupleData.groom_mother}
              onChange={(e) => setValue({ groom_mother: e.target.value })}
              label="Nama Ibu Pria*"
              placeholder="Nama Ibu Pria"
            />
          </div>

          <div className="md:pb-6 pb-3 mb-3 pt-3 md:mb-6 border-b border-black/10">
            <InputTitle
              required
              value={coupleData.groom_sequence}
              onChange={(e) => setValue({ groom_sequence: e.target.value })}
              label="Urutan Anak Pria*"
              placeholder="Anak bungsu"
            />
          </div>
          <InputLeftWithTitle
            left={<VscMention className="text-xl" />}
            label={"Instagram Pria"}
            placeholder="Instagram Pria"
            value={coupleData.groom_instagram}
            onChange={(e) => setValue({ groom_instagram: e.target.value })}
          />
        </ContainerPart>
        <ContainerPart className={"mt-6"}>
          <TitleBorder>Mempelai Wanita</TitleBorder>
          <InputProfile
            bride_avatar={coupleData.bride_avatar}
            setValue={setValue}
          />
          <div className="flex flex-col space-y-3 my-1 md:my-3 py-3 md:py-6 border-b border-black/10">
            <InputTitle
              required
              label="Nama Lengkap Wanita*"
              placeholder="Nama Lengkap Wanita"
              value={coupleData.bride_fullname}
              onChange={(e) => setValue({ bride_fullname: e.target.value })}
            />
            <InputTitle
              required
              label="Nama Panggilan Wanita*"
              placeholder="Nama Panggilan Wanita"
              value={coupleData.bride_name}
              onChange={(e) => setValue({ bride_name: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-3 my-1 md:my-3 pb-3 md:pb-6 pt-3 border-b border-black/10">
            <InputTitle
              required
              label="Nama Ayah Wanita*"
              placeholder="Nama Ayah Wanita"
              value={coupleData.bride_father}
              onChange={(e) => setValue({ bride_father: e.target.value })}
            />
            <InputTitle
              required
              label="Nama Ibu Wanita*"
              placeholder="Nama Ibu Wanita"
              value={coupleData.bride_mother}
              onChange={(e) => setValue({ bride_mother: e.target.value })}
            />
          </div>

          <div className="md:pb-6 pb-3 mb-3 pt-3 md:mb-6 border-b border-black/10">
            <InputTitle
              required
              label="Urutan Anak Wanita*"
              placeholder="Anak pertama"
              value={coupleData.bride_sequence}
              onChange={(e) => setValue({ bride_sequence: e.target.value })}
            />
          </div>
          <InputLeftWithTitle
            left={<VscMention className="text-xl" />}
            label={"Instagram Wanita"}
            placeholder="Instagram Wanita"
            value={coupleData.bride_instagram}
            onChange={(e) => setValue({ bride_instagram: e.target.value })}
          />
        </ContainerPart>
      </div>
    </TemplateCreate>
  );
}
