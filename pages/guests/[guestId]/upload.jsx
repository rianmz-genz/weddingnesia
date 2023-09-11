import { Button } from "@/components";
import DashboardGuest from "@/components/layout/DashboardGuest";
import { buttonStyle } from "@/utils/enum";
import { useRouter } from "next/router";
import { MdCloudUpload } from "react-icons/md";
import InputProfile from "@/components/globals/InputProfile";
import { useState } from "react";
import handleUploadApi from "@/api/integrations/upload";
import MyLog from "@/utils/MyLog";

function GuestUpload() {
  const router = useRouter();
  const guestId = router.query.guestId;

  const [imgFile, setImgFile] = useState(null)
  const [src, setSrc] = useState(null)
  const onPick = (file) => {
    setImgFile(file);
    setSrc(URL.createObjectURL(file));
  };
  const handleUploadImage = () => {
    handleUploadApi({file: imgFile})
      .then((res) => {
        MyLog("res", res)
        console.log("res 2", res);
      })
      .catch((err) => {
        MyLog("err", err)
        console.log("err 2", res);
      })
  }

  return <DashboardGuest>
    <div className="px-16 w-full h-full pt-16 flex flex-col gap-4">
        <h1 className="text-2xl">Bagikan Moment Bersama Mempelai</h1>
        <img src={src} alt="preview"/>
        <div className="bg-slate-200 w-fit px-4 py-2 flex flex-row rounded-full items-center justify-start gap-2">
            <MdCloudUpload className="text-4xl h-auto" />
            <input type="file"
              onChange={(e) => onPick(e.target.files[0])}
              name="avatar" id="avatar" className="w-0"/>
            <label htmlFor="avatar" className="text-xl">Pilih File</label>
        </div>
        <Button
          onClick={handleUploadImage}
          style={buttonStyle.blackLarge}
          className="w-fit">
          Konfirmasi
        </Button>
      </div>
  </DashboardGuest>;
}

export default GuestUpload;
