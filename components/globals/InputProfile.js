import { initialValue } from "@/store";
import React, { useState } from "react";
import { FiCheckCircle, FiEye, FiFolder, FiTrash } from "react-icons/fi";
import Button from "./Button";
import { buttonStyle } from "@/utils/enum";
import ViewImage from "./ViewImage";
import handleUploadApi from "@/api/integrations/upload";
import Loader from "./Loader";

export default function InputProfile({
  isMan = false,
  setValue,
  bride_avatar,
  groom_avatar,
}) {
  const { man, woman } = initialValue;
  const [src, setSrc] = useState(
    isMan && groom_avatar != ""
      ? groom_avatar
      : !isMan && bride_avatar != ""
      ? bride_avatar
      : isMan
      ? man
      : woman
  );
  const [imgFile, setImgFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [hitted, setHitted] = useState(null);
  const [isHit, setIsHit] = useState(false);
  const onPick = (file) => {
    setImgFile(file);
    setSrc(URL.createObjectURL(file));
  };
  const handleTrash = () => {
    setImgFile(null);
    setSrc(isMan ? man : woman);
  };
  const previewImage = (src) => {
    setPreview(src);
  };
  const closePreview = () => {
    setPreview(null);
  };
  const uploadImage = () => {
    if (hitted) return;
    const key = isMan ? "groom_avatar" : "bride_avatar";
    setIsHit(true);
    handleUploadApi({ file: imgFile })
      .then((res) => {
        //console.log(res);
        setValue({ [key]: res });
        setIsHit(false);
        setHitted(true);
      })
      .catch((err) => {
        console.log(err);
        setIsHit(false);
      });
  };
  // console.log(groom_avatar, "iya");
  return (
    <div className="w-full flex gap-5 items-center ">
      {preview != null && <ViewImage onClose={closePreview} src={preview} />}
      <div className="relative group">
        <img
          src={src}
          loading="lazy"
          alt={`Mempelai ${isMan ? "Laki-Laki" : "Perempuan"}`}
          width={1080}
          height={1080}
          className="md:w-24 h-16 md:h-24 w-16 rounded-full object-cover"
        />
        {imgFile && (
          <div className="absolute flex justify-center backdrop-blur-md items-center inset-0 group-hover:opacity-80 opacity-30 rounded-full bg-black/60 transition-all duration-500">
            <button
              type="button"
              onClick={() => previewImage(src)}
              className="text-white"
            >
              <FiEye />
            </button>
          </div>
        )}
      </div>
      <div className="w-8/12">
        {imgFile ? (
          <div className="flex gap-2">
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
          <label className="flex gap-1 cursor-pointer text-yellow-600 items-center rounded-md  bg-black px-4 py-2 w-fit">
            <FiFolder />
            <p className="text-sm">Upload</p>
            <input
              onChange={(e) => onPick(e.target.files[0])}
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              className="hidden"
              name={isMan ? "Pria" : "Wanita"}
            />
          </label>
        )}
        <p className="md:w-8/12 w-full mt-2 text-sm">
          Ekstensi File JPG, PNG, Ukuran Maksimal File 2MB
        </p>
      </div>
    </div>
  );
}
