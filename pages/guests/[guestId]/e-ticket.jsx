import DashboardGuest from "@/components/layout/DashboardGuest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import GuestGetById from "@/api/integrations/guest/GuestGetById";
import MyLog from "@/utils/MyLog";
import GetDomain from "@/api/utils/GetDomain";

function GuestETicket() {
  const router = useRouter();
  const [guest, setGuest] = useState({
    name: "john doe",
    rsvp_status: "NOT_SURE",
    code: "example-code",
  });

  useEffect(() => {
    const guestId = router.query.guestId;
    const url = `${GetDomain()}/guests/${guestId}`;

    GuestGetById({ url }).then((res) => {
      MyLog("res", res);
      if (res.status === true) {
        // setGuest(res.data.guest);
        MyLog("guest", guest);
        console.log("guest", guest);
      }
      if (res.status === false) {
        console.log(res.message);
        MyLog("message", res.message);
      }
    });
  }, [router.isReady]);

  const userData = [
    {
      label: "Kepada",
      value: guest.name,
    },
    {
      label: "Konfirmasi Kehadiranmu",
      value: guest.rsvp_status,
    },
  ];

  const mapUserData = (item) => (
    <div>
      <span>{item.label}</span>
      <h1 className="text-xl font-semibold">{item.value}</h1>
    </div>
  );

  return (
    <DashboardGuest>
      <div className="px-16 w-full h-full pt-16">
        <h1 className="text-2xl font-semibold">E-Ticket Kamu</h1>
        <div className="flex flex-row justify-center items-start gap-4">
          <QRCode
            className="w-72 h-4w-72 object-cover"
            value={guest.code}
            width={1080}
            height={1080}
          />
          <div className="flex flex-col gap-6">
            {userData.map((item) => mapUserData(item))}
          </div>
        </div>
      </div>
    </DashboardGuest>
  );
}

export default GuestETicket;
