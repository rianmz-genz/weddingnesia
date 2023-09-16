import React, { useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = ({ audioLink }) => {
  return <div dangerouslySetInnerHTML={{ __html: audioLink }}></div>;
};

export default AudioPlayer;
