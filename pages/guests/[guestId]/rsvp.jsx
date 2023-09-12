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
const listStatus = [
  {
    label: "Ya, Saya akan hadir",
    value: "SURE",
    icon: <HiOutlineCheckCircle className="text-green-500 text-4xl" />,
  },

  {
    label: "Belum tahu",
    value: "NOT_SURE",
    icon: <HiOutlineQuestionMarkCircle className="text-yellow-500 text-4xl" />,
  },
  {
    label: "Maaf, Saya tidak bisa hadir",
    value: "ABSENT",
    icon: <HiOutlineXCircle className="text-red-500 text-4xl" />,
  },
];
function GuestAttendance() {
  const router = useRouter();
  const guestId = router.query.guestId;
  const [rsvpStatus, setRsvpStatus] = useState("NOT_SURE");
  const [message, setMessage] = useState("");
  const [statusApi, setStatusApi] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [guest, setGuest] = useState({
    name: "john doe",
    rsvp_status: "NOT_SURE",
    code: "example-code",
  });

  const handleChangeRsvpStatus = () => {
    if (isLoading) return;
    setIsLoading(true);
    GuestUpdateRSVPStatus(guestId, rsvpStatus).then((res) => {
      setTrigger(true);
      if (res.status) {
        setStatusApi(true);
        setMessage("Berhasil mengkonfirmasi");
      } else {
        setStatusApi(false);
        setMessage("Gagal mengkonfirmasi");
      }
      setTimeout(() => {
        setTrigger(false);
      }, 4000);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getGuest();
  }, [router.isReady]);
  const getGuest = () => {
    const guestId = router.query?.guestId;

    if (guestId) {
      setIsLoading(true);
      GuestGetById({ guestId }).then((res) => {
        if (res) {
          const data = {
            name: res.name,
            rsvp_status: res.rsvp_status,
            code: res.qr_code,
          };
          setGuest(data);
          setIsLoading(false);
          setRsvpStatus(res.rsvp_status);
        }
      });
    }
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
          <h1 className="text-2xl">Apakah Saudara Berkenan Hadir?</h1>
          <div className="flex flex-col gap-4 my-8">
            {listStatus.map(({ label, value, icon }, i) => {
              return (
                <ButtonRsvp
                  key={i}
                  label={label}
                  value={value}
                  icon={icon}
                  onClick={() => setRsvpStatus(value)}
                  currentValue={rsvpStatus}
                />
              );
            })}
          </div>
          <Button
            onClick={handleChangeRsvpStatus}
            style={buttonStyle.blackLarge}
            className="w-fit"
          >
            Konfirmasi
          </Button>
        </div>
      )}
    </DashboardGuest>
  );
}

export default GuestAttendance;
