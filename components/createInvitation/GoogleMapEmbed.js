// components/GoogleMapEmbed.js
import React from "react";

const GoogleMapEmbed = ({ src }) => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        src={src}
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default GoogleMapEmbed;
