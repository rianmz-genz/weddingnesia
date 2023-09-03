import React, { useState } from "react";
import TemplateCreate from "./TemplateCreate";
import TitleBorder from "../globals/TitleBorder";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import Image from "next/image";
import Button from "../globals/Button";
import { buttonStyle } from "@/utils/enum";
import { FiSave, FiTrash } from "react-icons/fi";
import handleUploadApi from "@/api/integrations/upload";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Skeleton from "../globals/Skeleton";

export default function ChoseAlbums({ albums, setValue, onNext }) {
  const [files, setFiles] = useState([]);
  const [filesSrc, setFilesSrc] = useState(albums);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(albums.length > 0);
  const onChange = (file) => {
    setIsLoading(true);
    setFiles([...files, file]);
    handleUploadApi({ file }).then((res) => {
      setFilesSrc([...filesSrc, res]);
      setIsLoading(false);
    });
  };
  const onDelete = (idx) => {
    const filteredFiles = files.filter((item, i) => i != idx);
    const filteredFileSrc = filesSrc.filter((item, i) => i != idx);
    setFiles(filteredFiles);
    setFilesSrc(filteredFileSrc);
  };
  const uploadAlbums = async () => {
    if (files.length >= 3) {
      changeValue();
      setIsSaved(true);
    }
  };

  const changeValue = () => {
    setValue({ albums: filesSrc });
  };
  return (
    <TemplateCreate isNoSave={true} onNext={onNext}>
      <TitleBorder>Upload Album</TitleBorder>
      <div className="flex justify-end">
        <Button
          onClick={uploadAlbums}
          type="button"
          style={buttonStyle.greensmall}
        >
          <FiSave />
        </Button>
      </div>
      <ul className="w-full lg:justify-start justify-center my-6 flex flex-wrap gap-3">
        {filesSrc.length > 0 &&
          filesSrc?.map((item, idx) => {
            return (
              <li key={idx}>
                {isLoading ? (
                  <Skeleton className="w-32 h-32 bg-slate-200 rounded-lg" />
                ) : (
                  <AlbumItem src={item} onDelete={() => onDelete(idx)} />
                )}
              </li>
            );
          })}
        {filesSrc.length < 15 && (
          <label className="w-32 h-32 rounded-md cursor-pointer bg-slate-500/10 flex justify-center items-center">
            <HiOutlineDocumentPlus className="text-slate-500 text-xl" />
            <input
              type="file"
              hidden
              accept=".png"
              onChange={(e) => onChange(e.target.files[0])}
            />
          </label>
        )}
      </ul>
      {isSaved && (
        <>
          <Button
            type="submit"
            style={buttonStyle.blackLarge}
            className={"w-full mt-6"}
          >
            Simpan & Lanjutkan
          </Button>
          <Button style={buttonStyle.dangerlarge} className={"w-full mt-3"}>
            Batalkan
          </Button>
        </>
      )}
    </TemplateCreate>
  );
}

const AlbumItem = ({ onDelete, src }) => {
  return (
    <div className="w-32 h-32 rounded-md overflow-hidden group relative ring-1 ring-black/30">
      <div className="absolute inset-0 flex backdrop-blur-xl justify-center items-center group-hover:opacity-80 opacity-0 bg-white/80 transition-all duration-500">
        <Button
          onClick={onDelete}
          type="button"
          style={buttonStyle.dangersmall}
        >
          <FiTrash />
        </Button>
      </div>
      <Image
        src={src}
        alt="Wayang"
        width={1080}
        height={1080}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
