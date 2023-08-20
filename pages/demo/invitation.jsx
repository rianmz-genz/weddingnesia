import { initialValue } from "@/store";
import DemoInvitationData from "@/store/demo";
import { useRouter } from "next/router";
import React from "react";
export default function DemoInvitation() {
  const router = useRouter();
  const { sl } = router.query;
  const currentInvitation = DemoInvitationData.find((item) => item.slug == sl);
  if (!currentInvitation) {
    // Jika currentInvitation adalah undefined, kembalikan halaman 404.
    return <NotFoundMessage />; // Ganti ini dengan komponen 404 yang sesuai
  }
  return currentInvitation.component;
}

function NotFoundMessage() {
  return (
    <div className="w-full h-screen bg-black text-white flex justify-center items-center">
      404 - Invitation Not Found
    </div>
  );
}
