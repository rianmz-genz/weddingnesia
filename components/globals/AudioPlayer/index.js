import React, { useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = ({ audioLink }) => {
  return (
    <div className="fixed bottom-4 lg:bottom-3 left-3 z-40">
      <iframe
        width="150"
        height="75"
        className="lg:w-[150px] w-[100px] lg:h-[75px] h-[60px]"
        allow="autoplay"
        src={audioLink}
      ></iframe>
    </div>
  );
};

export default AudioPlayer;
