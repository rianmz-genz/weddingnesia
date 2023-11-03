import React, { useState } from "react";
import Text from "../globals/Text";
import { buttonStyle, textStyle } from "@/utils/enum";
import Button from "../globals/Button";
import { FiCheckCircle, FiTrash } from "react-icons/fi";
import Loader from "../globals/Loader";
import uploadServices from "@/api/integrations/upload/audio";

const UploadAudio = ({ setValue, audio }) => {
  const [file, setFile] = useState(audio ?? null);
  const [isHit, setIsHit] = useState(false);
  const [hitted, setHitted] = useState(audio != "");
  const uploadAudio = async () => {
    if (file == null || hitted) return;
    try {
      setIsHit(true);
      const res = await uploadServices.audio(file);
      if (res.status) {
        setValue({ audio: res.data.url });
      }
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      setIsHit(false);
      setHitted(true);
    }
  };
  return (
    <div className={`w-full my-3`}>
      <div className="flex gap-2 items-center">
        <Text style={textStyle.description}>Upload Audio</Text>
      </div>
      <div className="flex w-full gap-3 items-center justify-start">
        {audio != "" ? (
          <p className="px-4 py-2 w-full rounded border border-black/10">
            {audio}
          </p>
        ) : (
          <input
            className="px-4 py-2 mt-1 w-full rounded border border-black/10 focus:outline-none focus:ring-2 ring-yellow-800 transition-all duration-300"
            type="file"
            accept="audio/mp3"
            onChange={(e) => {
              setHitted(false);
              setFile(e.target.files[0]);
            }}
          />
        )}
        {file != null && (
          <>
            {!hitted && (
              <Button
                onClick={() => {
                  setValue({ audio: "" });
                  setFile(null);
                }}
                type="button"
                style={buttonStyle.dangersmall}
              >
                <FiTrash />
              </Button>
            )}

            <Button
              type="button"
              className={"flex items-center gap-1"}
              onClick={() => uploadAudio()}
              style={buttonStyle.greensmall}
            >
              {hitted && "Tersimpan"}
              {isHit ? <Loader /> : <FiCheckCircle />}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadAudio;
