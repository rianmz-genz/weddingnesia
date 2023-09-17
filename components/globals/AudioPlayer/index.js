import React, { useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = ({ audioLink }) => {
  return (
    <div className="fixed bottom-12 lg:bottom-20 left-3 z-50">
      <iframe width="150" height="75" allow="autoplay" src={audioLink}></iframe>
    </div>
  );
};

export default AudioPlayer;
