import { Button } from "@/components";
import DashboardGuest from "@/components/layout/DashboardGuest";
import { alertStyle, buttonStyle } from "@/utils/enum";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineXCircle,
} from "react-icons/hi";
import GuestUpdateRSVPStatus from "@/api/integrations/guest/GuestChangeRSVPStatus";
import ButtonRsvp from "@/components/guest/ButtonRsvp";
import Alert from "@/components/globals/Alert";
import GuestGetById from "@/api/integrations/guest/GuestGetById";
import Skeleton from "@/components/globals/Skeleton";
import GuestPostComment from "@/api/integrations/guest/GuestPostComment";

function GuestAttendance() {
  const router = useRouter();
  const guestId = router.query.guestId;
  const [message, setMessage] = useState("");
  const [statusApi, setStatusApi] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");

  const handleChangeRsvpStatus = () => {
    if (isLoading) return;
    setIsLoading(true);
    GuestPostComment(guestId, { message: comment }).then((res) => {
      setTrigger(true);
      if (res.status) {
        setStatusApi(true);
        setMessage("Berhasil berkomentar");
      } else {
        setStatusApi(false);
        setMessage("Gagal berkomentar");
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
      {isLoading ? (
        <Skeleton className="w-11/12 mx-auto mt-6 h-96 bg-slate-200" />
      ) : (
        <div className="px-16 w-full h-full pt-16">
          <h1 className="text-2xl">Komentar Anda</h1>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="lg:p-4 px-4 py-2 rounded-md border-0 ring-0 w-full my-6 focus:outline-none"
            placeholder="Semoga jadi keluarga yang sakinah mawadah dan warohmah ya kak!"
          ></textarea>
          <Button
            onClick={handleChangeRsvpStatus}
            style={buttonStyle.blackLarge}
            className="w-fit"
          >
            Posting komentar
          </Button>
        </div>
      )}
    </DashboardGuest>
  );
}

export default GuestAttendance;
