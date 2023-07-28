import Logo from "@/components/Logo";
import Button from "@/components/globals/Button";
import { initialValue } from "@/store";
import { buttonStyle } from "@/utils/enum";
import Link from "next/link";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import {HiOutlineBars3BottomRight} from 'react-icons/hi2'
const NavbarLandingpage = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="w-full mt-8  flex items-center justify-center bg-white top-0 left-0">
      <nav className="w-full mx-auto flex lg:flex-row flex-col justify-between lg:items-center ">
        <div className="flex justify-between items-center">
          <Logo className={"w-48"} />
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl bg-slate-100 p-2 rounded lg:hidden ">
          {isOpen ? <FiX /> :<HiOutlineBars3BottomRight />}
        </button>
        </div>
        <ul className={`lg:flex lg:flex-row flex-col w-full lg:justify-evenly justify-center items-center bg-white max-lg:shadow px-8 py-8 lg:px-0 lg:py-0 space-y-3 lg:space-y-0 ${isOpen ? "" : "hidden"}`}>
          {initialValue.home.navbar.map((item, idx) => (
            <li key={idx}>
              <a href={item.path} className="font-semibold text-black/80">
                {item.value}
              </a>
            </li>
          ))}
          <li>
             <Link
            href="/auth/login"
            className="font-semibold lg:border-l lg:pl-8 text-black/80"
          >
            Login
          </Link>
         </li>
          <li>
            <Link href={"/auth/register"}>
            <Button style={buttonStyle.outlineprimarylarge}>
              Buat Undangan
            </Button>
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarLandingpage;
