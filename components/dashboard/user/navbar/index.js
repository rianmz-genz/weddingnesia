import Logo from "@/components/Logo";
import { initialValue } from "@/store";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiLogOut, BiMenuAltRight } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import ToggleButton from "./ToggleButton";

const NavbarUser = () => {
  const { navbar } = initialValue.dashboard.user;
  const router = useRouter();
  const { pathname } = router;
  const [isOpened, setIsOpened] = useState(false);
  const onLogout = () => {
    router.push("/auth/login");
  };
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
        <div className="w-8/12">
          <li className={` flex items-center space-x-3 text-lg`}>
            <p className={` text-xl`}>
              <BiLogOut />
            </p>
            <button onClick={onLogout}>Logout</button>
          </li>
        </div>
      </nav>
    </>
  );
};

export default NavbarUser;
