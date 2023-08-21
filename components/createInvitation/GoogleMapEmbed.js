// components/GoogleMapEmbed.js
import React from "react";

const GoogleMapEmbed = ({ iframeHtml }) => {
  return (
    <div className="w-full flex justify-center">
      <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />
    </div>
  );
};

export default GoogleMapEmbed;
