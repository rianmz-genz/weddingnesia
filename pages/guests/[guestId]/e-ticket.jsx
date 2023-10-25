import DashboardGuest from "@/components/layout/DashboardGuest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import GuestGetById from "@/api/integrations/guest/GuestGetById";
import Skeleton from "@/components/globals/Skeleton";
function GuestETicket() {
  const router = useRouter();
  const [guest, setGuest] = useState({
    name: "john doe",
    rsvp_status: "NOT_SURE",
    code: "example-code",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getGuest();
  }, [router.isReady]);
  const getGuest = () => {
    const guestId = router.query?.guestId;

    if (guestId) {
      setIsLoading(true);
      GuestGetById({ guestId }).then((res) => {
        //console.log(res);
        if (res) {
          const data = {
            name: res.name,
            rsvp_status: res.rsvp_status,
            code: res.qr_code,
          };
          setGuest(data);
          setIsLoading(false);
        }
      });
    }
  };
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
        <div className="flex flex-row justify-center items-start gap-4 mt-3">
          {isLoading ? (
            <>
              <Skeleton className="w-6/12 h-72 bg-slate-200" />
              <div className="w-6/12 flex flex-col gap-3">
                <Skeleton className="w-full h-24 bg-slate-200" />
                <Skeleton className="w-full h-24 bg-slate-200" />
              </div>
            </>
          ) : (
            <>
              <QRCode
                className="w-72 h-4w-72 object-cover"
                value={guest.code}
                width={1080}
                height={1080}
              />
              <div className="flex flex-col gap-6">
                {userData.map((item) => mapUserData(item))}
              </div>
            </>
          )}
        </div>
      </div>
    </DashboardGuest>
  );
}

export default GuestETicket;
