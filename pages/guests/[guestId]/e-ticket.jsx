import GetGuestById from "@/api/integrations/guest/GetGuestById";
import DashboardGuest from "@/components/layout/DashboardGuest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

function GuestEticket() {
  const router = useRouter();
  const [guest, setGuest] = useState({name: "john doe", rsvp_status: "NOT_SURE"})

  useEffect(() => {
    const guestId = router.query.guestId;

    GetGuestById(guestId).then((res) => {
      if (res.status === true) {
        setGuest(res.data.guest)      
      }
    })
  })

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
            value="my-code"
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

export default GuestEticket;
