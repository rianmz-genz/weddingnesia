import Text from "@/components/globals/Text";
import { formatDate } from "@/utils";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";

export default function LocationItem({
  title,
  start_time,
  end_time,
  venue,
  address,
  src,
  date,
  timezone,
  ...props
}) {
  return (
    <div
      {...props}
      className="w-full mt-6 rounded-md p-6 flex flex-col items-center"
    >
      <Text style={textStyle.descriptionAllura}>{title}</Text>
      <ImageText2
        title={formatDate(date)}
        src={"/images/date.svg"}
        description={`${start_time} - ${end_time} ${timezone}`}
      />
      <ImageText2 title={address} src={"/images/location.svg"} />
        {src && <iframe
        src={src}
        width="600"
        height="450"
        className="w-full mt-8"
      ></iframe>}
    </div>
  );
}

export function ImageText2({ src, title, description }) {
  return (
    <>
      <Image
        src={src}
        alt="tanggal"
        className="w-12 mt-5"
        width={1080}
        height={1080}
      />
      <Text style={textStyle.description} className={"font-bold my-2"}>
        {title}
      </Text>
      <Text style={textStyle.smalldescription} className={"text-center"}>
        {description}
      </Text>
    </>
  );
}
