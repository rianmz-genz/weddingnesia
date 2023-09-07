import DashboardGuest from "@/components/layout/DashboardGuest";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineXCircle,
} from "react-icons/hi";

function MapStatus(status) {
  return (
    <div className="w-auto flex flex-row bg-slate-200 rounded-full items-center px-4 py-1">
      {status.icon}
      <span>{status.label}</span>
    </div>
  );
}

function GuestAttendance() {
  const router = useRouter();
  const guestId = router.query.guestId;

  const [statusConfirmation, setStatusConfirmation] =
    useState("Belum Tahu nih");

  const listStatus = [
    {
      label: "Ya, Saya akan hadir",
      icon: <HiOutlineCheckCircle className="text-green-500 w-10 h-auto" />,
    },

    {
      label: "Belum tahu",
      icon: (
        <HiOutlineQuestionMarkCircle className="text-yellow-500 w-10 h-auto" />
      ),
    },
    {
      label: "Maaf, Saya tidak bisa hadir",
      icon: <HiOutlineXCircle className="text-red-500 w-10 h-auto" />,
    },
  ];

  return (
    <DashboardGuest>
      <div className="px-16 w-full h-full pt-16">
        <h1 className="text-2xl">Apakah Saudara Berkenan Hadir?</h1>
        <div className="flex flex-col gap-4 my-8">
          {listStatus.map((status) => MapStatus(status))}
        </div>
        <buttton className="bg-yellow-500 rounded-full px-4 py-2 flex-shrink-0 text-white">
          Konfirmasi
        </buttton>
      </div>
    </DashboardGuest>
  );
}

export default GuestAttendance;
