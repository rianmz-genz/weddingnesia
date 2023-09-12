import { Button } from "@/components";
import DashboardGuest from "@/components/layout/DashboardGuest";
import { alertStyle, buttonStyle } from "@/utils/enum";
import { useRouter } from "next/router";
import { MdCloudUpload } from "react-icons/md";
import InputProfile from "@/components/globals/InputProfile";
import { useState } from "react";
import handleUploadApi from "@/api/integrations/upload";
import MyLog from "@/utils/MyLog";
import GuestUpdateAvatarApi from "@/api/integrations/guest/GuestUpdateAvatar";
import Skeleton from "@/components/globals/Skeleton";
import Alert from "@/components/globals/Alert";

function GuestUpload() {
  const router = useRouter();
  const guestId = router.query.guestId;

  const [imgFile, setImgFile] = useState(null);
  const [src, setSrc] = useState(null);

  const [message, setMessage] = useState("");
  const [statusApi, setStatusApi] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onPick = (file) => {
    setImgFile(file);
    setSrc(URL.createObjectURL(file));
  };
  const handleUploadImage = () => {
    uploadImage();
  };
  const uploadImage = () => {
    setIsLoading(true);
    handleUploadApi({ file: imgFile })
      .then((res) => {
        console.log("res", res);
        if (res) {
          updateAvatar(res);
        }
      })
      .catch((err) => {
        MyLog("err", err);
        console.log("err 2", res);
      });
  };
  const updateAvatar = (avatar) => {
    const data = {
      avatar,
    };
    GuestUpdateAvatarApi({ guestId, data }).then((res) => {
      setTrigger(true);
      if (res) {
        setMessage("Berhasil mengupload moment");
        setStatusApi(true);
      } else {
        setMessage("Gagal mengupload moment");
        setStatusApi(false);
      }
      setTimeout(() => {
        setTrigger(false);
      }, 4000);
      setIsLoading(false);
    });
  };

  return (
    <DashboardGuest>
      <Alert
        message={message}
        trigger={trigger}
        style={statusApi ? alertStyle.success : alertStyle.error}
      />
      <div className="px-16 w-full h-full pt-16 flex flex-col gap-4">
        {isLoading ? (
          <Skeleton className="w-11/12 mx-auto mt-6 h-96 bg-slate-200" />
        ) : (
          <>
            <h1 className="text-2xl">Bagikan Moment Bersama Mempelai</h1>
            {src && (
              <img
                src={src}
                alt="preview"
                width={1080}
                height={1080}
                className="w-full"
              />
            )}
            <div className="bg-slate-200 w-fit px-4 py-2 flex flex-row rounded-full items-center justify-start gap-2">
              <MdCloudUpload className="text-4xl h-auto" />
              <input
                type="file"
                onChange={(e) => onPick(e.target.files[0])}
                name="avatar"
                id="avatar"
                className="w-0"
              />
              <label htmlFor="avatar" className="text-xl">
                Pilih File
              </label>
            </div>
            <Button
              onClick={handleUploadImage}
              style={buttonStyle.blackLarge}
              className="w-fit"
            >
              Konfirmasi
            </Button>
          </>
        )}
      </div>
    </DashboardGuest>
  );
}

export default GuestUpload;
