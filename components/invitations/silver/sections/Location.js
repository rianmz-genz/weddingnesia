import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import LocationItem from "./LocationItem";
import { InvitationContext } from "@/context/invitation";
import AOS from "aos";
import "aos/dist/aos.css";
export default function LocationSilver() {
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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="location" className="w-full bg-gray-100">
      <div className="py-12 w-11/12 mx-auto">
        {/* <Text style={textStyle.smallTitleAllura} className={"text-center"}>
        Lokasi
      </Text> */}
        <LocationItem
          data-aos="fade-up"
          data-aos-duration="1000"
          date={wedding_date ?? Date.now()}
          address={wedding_address}
          start_time={wedding_time_start}
          end_time={wedding_time_end}
          src={wedding_map}
          timezone={timezone}
          title={"Akad"}
        />
        <LocationItem
          data-aos="fade-up"
          data-aos-duration="1000"
          date={reception_date ?? Date.now()}
          address={reception_address}
          start_time={reception_time_start}
          end_time={reception_time_end}
          src={reception_map}
          timezone={timezone}
          title={"Resepsi"}
        />
      </div>
    </div>
  );
}
