import InvitationBySlugApi from "@/api/integrations/invitation/BySlug";
import { InvitationContext } from "@/context/invitation";
import { initialValue } from "@/store";
import DemoInvitationData from "@/store/demo";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function DemoInvitation() {
  const router = useRouter();
  const { sl, i } = router.query;

  const [invitation, setInvitation] = useState({});
  const [currentInvitation, setIsCurrentInvitation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getInvitation();
    if (sl) {
      const current = DemoInvitationData.find((item) => item.slug == sl);
      setIsCurrentInvitation(current);
    }
  }, [router.isReady, sl]);

  const getInvitation = () => {
    InvitationBySlugApi({ slug: i }).then((resInvitation) => {
      if (resInvitation) {
        setInvitation(resInvitation);
        setIsLoading(false);
      } else {
        return <Err />;
      }
    });
  };

  if (isLoading) {
    return (
      <div className="bg-white h-screen w-full flex justify-center items-center flex-col">
        <Image
          src={"/images/search.svg"}
          alt="search illustration"
          width={1080}
          height={1080}
          className="w-4/12"
        />
        <p className="mt-3">Mencari Undangan..</p>
      </div>
    );
  }
  if (!sl || (!i && !isLoading)) return <NotFoundMessage />;
  if (invitation == undefined) return <NotFoundMessage />;
  if (invitation == false) return <NotFoundMessage />;
  if (invitation?.order) {
    if (invitation?.order[0].status != "PAID") {
      return <NotFoundMessage />;
    }
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

function Err() {
  return (
    <div className="w-full h-screen bg-black text-white flex justify-center items-center">
      Gagal mendapatkan data undangan
    </div>
  );
}
