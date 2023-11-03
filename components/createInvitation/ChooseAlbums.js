import React, { useEffect, useState } from "react";
import TemplateCreate from "./TemplateCreate";
import TitleBorder from "../globals/TitleBorder";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import Button from "../globals/Button";
import { buttonStyle } from "@/utils/enum";
import { FiSave, FiTrash } from "react-icons/fi";
import handleUploadApi from "@/api/integrations/upload";
import Skeleton from "../globals/Skeleton";
import tempService from "@/api/integrations/temp";
import Cookies from "js-cookie";
import axios from "axios";
import Alert from "../globals/Alert";

export default function ChoseAlbums({ onNext }) {
  const tempId = Cookies.get("tempId");
  const [files, setFiles] = useState([]);
  const [filesSrc, setFilesSrc] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  const onUploadAlbums = async () => {
    try {
      setErr("");
      const res = await tempService.createAlbum(tempId, { album: filesSrc });
      if (res.status) {
        onNext();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErr(error?.response?.data?.message);
      }
    }
  };
  const [hasLoaded, setHasLoaded] = useState(false);
  const [err, setErr] = useState("");
  const getAlbumData = async () => {
    try {
      setErr("");
      const res = await tempService.getAlbum(tempId);
      if (res.status) {
        // console.log(res);
        setFilesSrc(res.data.album);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErr(error?.response?.data?.message);
      }
    } finally {
      setIsLoading(false);
      setHasLoaded(true);
    }
  };
  useEffect(() => {
    if (!hasLoaded) {
      getAlbumData();
    }
  }, [hasLoaded]);
  return (
    <TemplateCreate onNext={onUploadAlbums}>
      <Alert message={err} trigger={err !== ""} style={"error"} />
      <TitleBorder>Upload Album</TitleBorder>
      {/* <div className="flex justify-end">
        <Button
          onClick={uploadAlbums}
          type="button"
          style={buttonStyle.greensmall}
        >
          <FiSave />
        </Button>
      </div> */}
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
        {filesSrc.length < 15 && isLoading ? (
          <Skeleton className="w-32 h-32 bg-slate-200 rounded-lg" />
        ) : (
          <label className="w-32 h-32 rounded-md cursor-pointer bg-slate-500/10 flex justify-center items-center">
            <HiOutlineDocumentPlus className="text-slate-500 text-xl" />
            <input
              type="file"
              hidden
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => onChange(e.target.files[0])}
            />
          </label>
        )}
      </ul>
      {/* {isSaved && (
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
      )} */}
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
      <img
        src={src}
        alt="Wayang"
        width={1080}
        height={1080}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
