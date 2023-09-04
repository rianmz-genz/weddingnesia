import React, { useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = ({ audioLink }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const audioRef = React.useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch((error) => {
        setIsError(true);
      });
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    audioRef.current?.play().catch((error) => {
      setIsError(true);
    });
  }, [audioLink]);

  return (
    <div className="fixed bottom-6 left-6">
      {isError ? (
        <p className="text-red-500">Error loading audio</p>
      ) : (
        <>
          <audio
            hidden
            ref={audioRef}
            controls
            src={audioLink}
            type="audio/mpeg"
          />
          <button
            onClick={togglePlay}
            className="bg-blue-100 text-blue-500 p-3 lg:p-4 rounded-full text-sm lg:text-base"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
