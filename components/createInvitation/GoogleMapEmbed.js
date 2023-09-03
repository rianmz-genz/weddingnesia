// components/GoogleMapEmbed.js
import React from "react";

const GoogleMapEmbed = ({ iframeHtml }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: iframeHtml }}
      className="w-full flex justify-center"
    ></div>
  );
};

export default GoogleMapEmbed;
