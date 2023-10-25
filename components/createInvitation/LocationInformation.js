import React, { useState } from "react";
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

export default function LocationInformation({
  wedding_date,
  timezone,
  wedding_time_start,
  wedding_time_end,
  wedding_address,
  wedding_map,
  reception_date,
  reception_time_start,
  reception_time_end,
  reception_address,
  reception_map,
  onNext,
  setValue,
}) {
  const getSrcValue = (iframeString) => {
    const startIndex = iframeString.indexOf('src="') + 5;
    const endIndex = iframeString.indexOf('"', startIndex);
    if (startIndex === -1 && endIndex === -1 && endIndex < startIndex) return;
    return iframeString.slice(startIndex, endIndex);
  };
  const copyData = (e) => {
    if (e) {
      setValue({ wedding_map: reception_map });
      setValue({ wedding_address: reception_address });
      setValue({ wedding_date: reception_date });
      setValue({ wedding_time_start: reception_time_start });
      setValue({ wedding_time_end: reception_time_end });
    } else {
      setValue({ wedding_map: "" });
      setValue({ wedding_address: "" });
      setValue({ wedding_date: "" });
      setValue({ wedding_time_start: "" });
      setValue({ wedding_time_end: "" });
    }
  };
  const [isOpenFaqMap, setIsOpenFaqMap] = useState(false);
  return (
    <TemplateCreate onNext={onNext}>
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
        value={reception_map}
        onChange={(e) =>
          setValue({ reception_map: getSrcValue(e.target.value) })
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
        value={reception_address}
        onChange={(e) => setValue({ reception_address: e.target.value })}
        className={"my-3"}
        label={"Nama Lokasi*"}
        placeholder="Rumah/Gedung.."
      />
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          required
          value={reception_date}
          onChange={(e) => setValue({ reception_date: e.target.value })}
          type="date"
          min={dateNow()}
          label={"Tanggal Acara*"}
        />
        <InputTitle
          required
          value={timezone}
          onChange={(e) => setValue({ timezone: e.target.value })}
          placeholder="WIB"
          label={"Tampilan Zona Waktu*"}
        />
      </div>
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          required
          value={reception_time_start}
          onChange={(e) => setValue({ reception_time_start: e.target.value })}
          type="time"
          label={"Jam Mulai Acara*"}
        />
        <InputTitle
          required
          value={reception_time_end}
          onChange={(e) => setValue({ reception_time_end: e.target.value })}
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
        value={wedding_map}
        onChange={(e) => setValue({ wedding_map: getSrcValue(e.target.value) })}
        className={"my-3"}
        label={"Embed Google Maps"}
        placeholder="Embed google maps"
      />
      <InputTitle
        value={wedding_address}
        onChange={(e) => setValue({ wedding_address: e.target.value })}
        className={"my-3"}
        label={"Nama Lokasi"}
        placeholder="Rumah/Gedung.."
      />
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          value={wedding_date}
          onChange={(e) => setValue({ wedding_date: e.target.value })}
          type="date"
          min={dateNow()}
          label={"Tanggal Acara"}
        />
      </div>
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          value={wedding_time_start}
          onChange={(e) => setValue({ wedding_time_start: e.target.value })}
          type="time"
          label={"Jam Mulai Acara"}
        />
        <InputTitle
          value={wedding_time_end}
          onChange={(e) => setValue({ wedding_time_end: e.target.value })}
          type="time"
          label={"Jam Selesai Acara"}
        />
      </div>
    </TemplateCreate>
  );
}
