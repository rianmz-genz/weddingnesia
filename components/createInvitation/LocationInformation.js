import React, { useEffect, useState } from "react";
import TemplateCreate from "./TemplateCreate";
import TitleLocation from "./TitleLocation";
import { InputTitle } from "../globals/Input";
import GoogleMapEmbed from "./GoogleMapEmbed";
import TitleBorder from "../globals/TitleBorder";
import { dateNow } from "@/utils";
import Text from "../globals/Text";
import Modals from "../globals/Modals";
import { FaQuestionCircle } from "react-icons/fa";
import { textStyle } from "@/utils/enum";
import tempService from "@/api/integrations/temp";
import Cookies from "js-cookie";
import axios from "axios";
import Alert from "../globals/Alert";

export default function LocationInformation({ onNext, setIsLoading }) {
  const tempId = Cookies.get("tempId");
  const [isOpenFaqMap, setIsOpenFaqMap] = useState(false);
  const [message, setMessage] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [formData, setFormData] = useState({
    reception_maps: "",
    reception_location_name: "",
    reception_date: "",
    reception_time_zone: "",
    reception_start: "",
    reception_end: "",
    wedding_maps: "",
    wedding_location_name: "",
    wedding_date: "",
    wedding_time_zone: "",
    wedding_start: "",
    wedding_end: "",
  });
  const getSrcValue = (iframeString) => {
    const startIndex = iframeString.indexOf('src="') + 5;
    const endIndex = iframeString.indexOf('"', startIndex);
    if (startIndex === -1 && endIndex === -1 && endIndex < startIndex) return;
    return iframeString.slice(startIndex, endIndex);
  };
  const setValue = (fields) => {
    setFormData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  };
  const copyData = (e) => {
    if (e) {
      setValue({ wedding_maps: formData.reception_maps });
      setValue({ wedding_location_name: formData.reception_location_name });
      setValue({ wedding_date: formData.reception_date });
      setValue({ wedding_start: formData.reception_start });
      setValue({ wedding_end: formData.reception_end });
      setValue({ wedding_time_zone: formData.reception_time_zone });
    } else {
      setValue({ wedding_maps: "" });
      setValue({ wedding_location_name: "" });
      setValue({ wedding_date: "" });
      setValue({ wedding_start: "" });
      setValue({ wedding_end: "" });
      setValue({ wedding_time_zone: "" });
    }
  };
  const onSubmit = async () => {
    try {
      setMessage("");
      setIsErr(false);

      const res = await tempService.createLocation(tempId, formData);
      if (res.status) {
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
  const [hasLoaded, setHasLoaded] = useState(false);
  const getLocationData = async () => {
    try {
      setMessage("");
      const res = await tempService.getLocation(tempId);
      if (res.status) {
        // console.log(res);
        setFormData(res.data.location);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status !== 404) {
          setMessage(error?.response?.data?.message);
          setIsErr(true);
        } else if (error?.response?.status !== 404) {
        } else {
          setMessage(error?.message);
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
      getLocationData();
    }
  }, [hasLoaded]);
  return (
    <TemplateCreate onNext={onSubmit}>
      <Alert
        message={message}
        trigger={message != ""}
        style={!isErr ? "success" : "error"}
      />

      <Modals onClose={() => setIsOpenFaqMap(false)} trigger={isOpenFaqMap}>
        <Text style={textStyle.description} className={"font-bold"}>
          Apa yang disebut Embed Google Maps?
        </Text>
        <Text>
          Embed Google Maps adalah embed link yang didapat dari platform google
          maps. Anda dapat melihat bagaimana cara mengembed Link Google Maps
          <a
            href="https://scribehow.com/shared/Tutorial_embed_google_maps__ElDeH9ZfRO6a_q4aUoXedw"
            className="underline text-blue-500 mx-1"
          >
            disini.
          </a>
        </Text>
      </Modals>
      <TitleBorder>Resepsi</TitleBorder>
      <InputTitle
        required
        className={"my-3"}
        type="text"
        label={"Embed Google Maps*"}
        placeholder="Embed google maps"
        value={formData?.reception_maps}
        onChange={(e) =>
          setValue({ reception_maps: getSrcValue(e.target.value) })
        }
        icon={
          <FaQuestionCircle
            className="cursor-pointer"
            onClick={() => setIsOpenFaqMap(true)}
          />
        }
      />
      <InputTitle
        required
        value={formData?.reception_location_name}
        onChange={(e) => setValue({ reception_location_name: e.target.value })}
        className={"my-3"}
        label={"Nama Lokasi*"}
        placeholder="Rumah/Gedung.."
      />
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          required
          value={formData?.reception_date}
          onChange={(e) => setValue({ reception_date: e.target.value })}
          type="date"
          min={dateNow()}
          label={"Tanggal Acara*"}
        />
        <InputTitle
          required
          value={formData?.reception_time_zone}
          onChange={(e) => setValue({ reception_time_zone: e.target.value })}
          placeholder="WIB"
          label={"Tampilan Zona Waktu*"}
        />
      </div>
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          required
          value={formData?.reception_start}
          onChange={(e) => setValue({ reception_start: e.target.value })}
          type="time"
          label={"Jam Mulai Acara*"}
        />
        <InputTitle
          required
          value={formData?.reception_end}
          onChange={(e) => setValue({ reception_end: e.target.value })}
          type="time"
          label={"Jam Selesai Acara*"}
        />
      </div>
      <TitleBorder className={"mt-12"}>Akad</TitleBorder>
      <label className="flex items-center gap-2">
        <input type="checkbox" onChange={(e) => copyData(e.target.checked)} />
        <Text>Sama Dengan Resepsi</Text>
      </label>
      <InputTitle
        value={formData?.wedding_maps}
        onChange={(e) =>
          setValue({ wedding_maps: getSrcValue(e.target.value) })
        }
        className={"my-3"}
        label={"Embed Google Maps"}
        placeholder="Embed google maps"
      />
      <InputTitle
        value={formData?.wedding_location_name}
        onChange={(e) => setValue({ wedding_location_name: e.target.value })}
        className={"my-3"}
        label={"Nama Lokasi"}
        placeholder="Rumah/Gedung.."
      />
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          value={formData?.wedding_date}
          onChange={(e) => setValue({ wedding_date: e.target.value })}
          type="date"
          min={dateNow()}
          label={"Tanggal Acara"}
        />
      </div>
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          value={formData?.wedding_start}
          onChange={(e) => setValue({ wedding_start: e.target.value })}
          type="time"
          label={"Jam Mulai Acara"}
        />
        <InputTitle
          value={formData?.wedding_end}
          onChange={(e) => setValue({ wedding_end: e.target.value })}
          type="time"
          label={"Jam Selesai Acara"}
        />
      </div>
    </TemplateCreate>
  );
}
