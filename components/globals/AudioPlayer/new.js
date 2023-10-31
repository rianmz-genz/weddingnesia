import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

function NewAudioPlayer({ audioUrl }) {
  const audioRef = useRef(null);
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

  return (
    <div className="fixed z-50 bottom-3 left-3 backdrop-blur-md">
      <audio ref={audioRef} src={audioUrl} autoPlay className="hidden" />
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
