import InvitationBySlugApi from "@/api/integrations/invitation/BySlug";
import { InvitationContext } from "@/context/invitation";
import { initialValue } from "@/store";
import DemoInvitationData from "@/store/demo";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function DemoInvitation() {
  const router = useRouter();
  const { slug, to } = router.query;
  const [invitation, setInvitation] = useState({});
  const [currentInvitation, setIsCurrentInvitation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getInvitation();
  }, [router.isReady, slug]);

  const getInvitation = () => {
    InvitationBySlugApi({ slug }).then((resInvitation) => {
      if (resInvitation) {
        setInvitation(resInvitation);
        setIsLoading(false);
        if (resInvitation?.theme) {
          const current = DemoInvitationData.find(
            (item) => item.slug == resInvitation?.theme?.name
          );
          setIsCurrentInvitation(current);
        }
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
  if (!slug) return <NotFoundMessage />;
  if (invitation == undefined) return <NotFoundMessage />;
  if (invitation == false) return <NotFoundMessage />;
  if (invitation?.guests.order) {
    if (invitation?.guests.order[0].status != "PAID") {
      return <NotFoundMessage />;
    }
  }

  return (
    <InvitationContext.Provider value={{ ...invitation.guests, to }}>
      {!isLoading && currentInvitation?.component}
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
