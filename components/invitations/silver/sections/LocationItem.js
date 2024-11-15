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
      className="w-full mt-6 rounded-lg p-6 bg-white shadow-lg flex flex-col items-center md:w-8/12 mx-auto"
    >
      

      <div className="flex items-center gap-4 w-full mb-4">
        <img width={1080} height={1080} className="md:w-24 w-12 md:h-24 h-12 rounded-md object-cover" src={"/images/background.png"} />
        <Text style={textStyle.descriptionAllura} className="text-start text-2xl mb-4">
        {title}
      </Text>
      </div>
      
      <div className="flex items-start w-full mb-4">
        <ImageText2
          title={formatDate(date)}
          src={"/images/date.svg"}
          description={`${start_time} - ${end_time} ${timezone}`}
        />
      </div>
      
      <div className="flex items-start w-full mb-6">
        <ImageText2 title={address} src={"/images/location.svg"} />
      </div>

      {/* Map Iframe */}
      {src && (
        <iframe
          src={src}
          width="100%"
          height="350"
          className="rounded-md shadow-md"
          loading="lazy"
        ></iframe>
      )}

     
    </div>
  );
}

export function ImageText2({ src, title, description }) {
  return (
    <div className="flex items-center w-full gap-4 mb-4">
      <Image
        src={src}
        alt={title}
        className="w-10 h-10 object-contain"
        width={40}
        height={40}
      />
      <div>
        <Text style={textStyle.description} className="font-bold">
          {title}
        </Text>
        {description && (
          <Text style={textStyle.smallDescription} className="text-gray-600">
            {description}
          </Text>
        )}
      </div>
    </div>
  );
}
