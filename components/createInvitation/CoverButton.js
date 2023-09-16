import Image from "next/image";
import React, { useState } from "react";
import Text from "../globals/Text";
import Button from "../globals/Button";
import { buttonStyle, textStyle } from "@/utils/enum";
import Loader from "../globals/Loader";
import { FiCheckCircle, FiFolder, FiTrash } from "react-icons/fi";
import handleUploadApi from "@/api/integrations/upload";

export default function CoverButton({
  title,
  description,
  className,
  isPrimary,
  setValue,
  primary_cover,
  secondary_cover,
}) {
  const wayang = "/images/wayang.svg";
  const [src, setSrc] = useState(
    isPrimary && primary_cover != ""
      ? primary_cover
      : !isPrimary && secondary_cover !== ""
      ? secondary_cover
      : wayang
  );
  const [file, setFile] = useState(null);
  const [isHit, setIsHit] = useState(false);
  const [hitted, setHitted] = useState(false);
  const onChange = (file) => {
    setFile(file);
    setSrc(URL.createObjectURL(file));
  };
  const handleTrash = () => {
    setFile(null);
    setSrc(wayang);
  };
  const uploadImage = () => {
    if (hitted) return;
    const key = isPrimary ? "primary_cover" : "secondary_cover";
    setIsHit(true);
    handleUploadApi({ file })
      .then((res) => {
        console.log(key);
        setValue({ [key]: res });
        setIsHit(false);
        setHitted(true);
      })
      .catch((err) => {
        console.log(err);
        setIsHit(false);
      });
  };
  return (
    <div
      className={`flex md:flex-row flex-col gap-2 md:gap-6 w-full ${className}`}
    >
      <img
        className="md:w-6/12 object-cover rounded-md h-36"
        src={src}
        width={1080}
        height={1080}
        alt="Wayang"
      />
      <div className="md:w-6/12 w-full">
        <Text style={textStyle.description} className={"font-bold"}>
          {title}
        </Text>
        <Text className={"md:w-8/12"} style={textStyle.smalldescription}>
          {description}
        </Text>
        {file ? (
          <div className="flex gap-2 mt-2">
            {!hitted && (
              <Button
                type="button"
                onClick={handleTrash}
                style={buttonStyle.dangersmall}
              >
                <FiTrash />
              </Button>
            )}
            <Button
              type="button"
              className={"flex items-center gap-1"}
              onClick={uploadImage}
              style={buttonStyle.greensmall}
            >
              {hitted && "Tersimpan"}
              {isHit ? <Loader /> : <FiCheckCircle />}
            </Button>
          </div>
        ) : (
          <label className="flex gap-1 mt-2 cursor-pointer text-yellow-600 items-center rounded-md  bg-black px-4 py-2 w-fit">
            <FiFolder />
            <p className="text-sm">Upload</p>
            <input
              onChange={(e) => onChange(e.target.files[0])}
              type="file"
              accept=".png"
              hidden
            />
          </label>
        )}
      </div>
    </div>
  );
}
