import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React, { useContext } from "react";
import LocationItem from "./LocationItem";
import { InvitationContext } from "@/context/invitation";

export default function LocationBlackJavanese() {
  const {
    timezone,
    reception_time_start,
    reception_time_end,
    reception_date,
    reception_address,
    reception_map,
    wedding_time_start,
    wedding_time_end,
    wedding_date,
    wedding_address,
    wedding_map,
  } = useContext(InvitationContext);
  return (
    <div id="location" className="py-12 w-11/12 mx-auto">
      <Text style={textStyle.smallTitleAllura} className={"text-center"}>
        Lokasi
      </Text>
      <LocationItem
        date={reception_date ?? Date.now()}
        address={reception_address}
        start_time={reception_time_start}
        end_time={reception_time_end}
        src={reception_map}
        timezone={timezone}
        title={"Resepsi"}
      />
      {reception_map != wedding_map && wedding_map != "" && (
        <LocationItem
          date={wedding_date ?? Date.now()}
          address={wedding_address}
          start_time={wedding_time_start}
          end_time={wedding_time_end}
          src={wedding_map}
          timezone={timezone}
          title={"Akad"}
        />
      )}
    </div>
  );
}
