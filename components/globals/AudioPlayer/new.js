import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

function NewAudioPlayer({ audioUrl, isOpen, audioRef }) {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  //   playAudio(audioRef.current);
  return (
    <div
      className={`fixed z-30 bottom-7 left-7 backdrop-blur-md ${
        !isOpen && "hidden"
      }`}
    >
      <audio ref={audioRef} src={audioUrl} className="hidden" />
      <button
        onClick={toggleAudio}
        className="p-2 text-xl rounded-full bg-blue-500/10 text-blue-500"
      >
        {isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
      </button>
    </div>
  );
}

export default NewAudioPlayer;
