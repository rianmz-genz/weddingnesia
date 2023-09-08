import { Button } from "@/components";
import DashboardGuest from "@/components/layout/DashboardGuest";
import { buttonStyle } from "@/utils/enum";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineXCircle,
} from "react-icons/hi";
import GuestUpdateRSVPStatus from "@/api/integrations/guest/GuestChangeRSVPStatus";

function GuestAttendance() {
  const router = useRouter();
  const guestId = router.query.guestId;
  const [rsvpStatus, setRsvpStatus] = useState("NOT_SURE");

  const listStatus = [
    {
      label: "Ya, Saya akan hadir",
      value: "SURE",
      icon: <HiOutlineCheckCircle className="text-green-500 w-10 h-auto" />,
    },

    {
      label: "Belum tahu",
      value: "NOT_SURE",
      icon: (
        <HiOutlineQuestionMarkCircle className="text-yellow-500 w-10 h-auto" />
      ),
    },
    {
      label: "Maaf, Saya tidak bisa hadir",
      value: "ABSENT",
      icon: <HiOutlineXCircle className="text-red-500 w-10 h-auto" />,
    },
  ];

  const handleChangeRsvpStatus = () => {
    GuestUpdateRSVPStatus(guestId, rsvpStatus).then((res) => {
      console.log(res);
    });
  };

  return (
    <DashboardGuest>
      <div className="px-16 w-full h-full pt-16">
        <h1 className="text-2xl">Apakah Saudara Berkenan Hadir?</h1>
        <div className="flex flex-col gap-4 my-8">
          {listStatus.map((status) => {
            return (
              <button
                key={status.value}
                onClick={() => setRsvpStatus(status.value)}
                className="w-fit flex flex-row bg-slate-200 rounded-full items-center px-4 py-1"
              >
                {status.icon}
                <span>{status.label}</span>
              </button>
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
    </DashboardGuest>
  );
}

export default GuestAttendance;
