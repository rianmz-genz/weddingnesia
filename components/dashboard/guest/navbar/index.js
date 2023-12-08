import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import { HiOutlineEnvelope, HiOutlineCalendar } from "react-icons/hi2";
import { MdCloudUpload } from "react-icons/md";
import { HiTicket } from "react-icons/hi";

const NavbarGuest = () => {
  const router = useRouter();
  const guestId = router.query?.guestId;
  const navbar = [
    {
      label: "E-Ticket",
      href: `/guests/${guestId}/e-ticket`,
      icon: <HiTicket />,
    },
    {
      label: "Kehadiran",
      href: `/guests/${guestId}/rsvp`,
      icon: <HiOutlineCalendar />,
    },
    {
      label: "Komentar",
      href: `/guests/${guestId}/comment`,
      icon: <HiOutlineEnvelope />,
    },
    {
      label: "Upload",
      href: `/guests/${guestId}/upload`,
      icon: <MdCloudUpload />,
    },
  ];
  const { pathname } = router;
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <ToggleButton
        isOpened={isOpened}
        onClick={() => setIsOpened(!isOpened)}
      />
      <nav
        className={`w-full md:w-2/12 flex flex-col md:left-0 items-center py-12 z-30 fixed transition-all duration-500 top-0 h-screen shadow shadow-black/5 bg-white ${
          isOpened ? "max-md:right-0" : "max-md:-right-full"
        }`}
      >
        <ul className={`w-8/12 mt-12 mb-12 flex flex-col space-y-4 `}>
          {navbar.map(({ label, href, icon }, idx) => (
            <li
              key={idx}
              className={`${
                pathname == href && "font-bold"
              } flex items-center space-x-3 text-lg`}
            >
              <p className={`${pathname == href && "text-yellow-600"} text-xl`}>
                {icon}
              </p>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavbarGuest;
