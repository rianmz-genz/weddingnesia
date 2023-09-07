import { Button } from "@/components";
import DashboardGuest from "@/components/layout/DashboardGuest";
import { buttonStyle } from "@/utils/enum";
import { useRouter } from "next/router";
import { MdCloudUpload } from "react-icons/md";

function GuestUpload() {
  const router = useRouter();
  const guestId = router.query.guestId;

  return <DashboardGuest>
    <div className="px-16 w-full h-full pt-16 flex flex-col gap-4">
        <h1 className="text-2xl">Bagikan Moment Bersama Mempelai</h1>
        <div className="bg-slate-200 w-fit px-4 py-2 flex flex-row rounded-full items-center justify-start gap-2">
            <MdCloudUpload className="text-4xl h-auto" />
            <input type="file" name="avatar" id="avatar" className="w-0"/>
            <label htmlFor="avatar" className="text-xl">Pilih File</label>
        </div>
        <Button style={buttonStyle.blackLarge} className="w-fit">
          Konfirmasi
        </Button>
      </div>
  </DashboardGuest>;
}

export default GuestUpload;
