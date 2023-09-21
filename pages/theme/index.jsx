import InvitationBySlugApi from "@/api/integrations/invitation/BySlug";
import { InvitationContext } from "@/context/invitation";
import { initialValue } from "@/store";
import DemoInvitationData from "@/store/demo";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function DemoInvitation() {
  const router = useRouter();
  const { sl, i } = router.query;
  const currentInvitation = DemoInvitationData.find((item) => item.slug == sl);
  const [invitation, setInvitation] = useState({});
  useEffect(() => {
    getInvitation();
  }, [router.isReady]);
  const getInvitation = () => {
    InvitationBySlugApi({ slug: i }).then((resInvitation) => {
      if (resInvitation.order.length == 0) {
        return <NotFoundMessage />;
      }
      setInvitation(resInvitation);
    });
  };
  if (!currentInvitation || invitation?.order[0].status != "PAID") {
    // Jika currentInvitation adalah undefined, kembalikan halaman 404.
    return <NotFoundMessage />; // Ganti ini dengan komponen 404 yang sesuai
  }

  return (
    <InvitationContext.Provider value={invitation}>
      {currentInvitation.component}
    </InvitationContext.Provider>
  );
}

function NotFoundMessage() {
  return (
    <div className="w-full h-screen bg-black text-white flex justify-center items-center">
      undangan belum dibayar atau diaktifkan
    </div>
  );
}
