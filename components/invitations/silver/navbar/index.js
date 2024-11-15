import { NavbarInvitation } from "@/store/demo";
import Link from "next/link";
import React from "react";
import { GiBigDiamondRing } from "react-icons/gi";
export default function NavbarSilver() {
  return (
    <nav className="w-fit px-8 py-6 bg-slate-100/50 backdrop-blur-md fixed rounded-full bottom-3 left-1/2 -translate-x-1/2 z-40">
      <ul className="flex justify-around items-center gap-6 w-full text-black text-xl">
        {NavbarInvitation.map(({ icon, href }, i) => (
          <li key={i}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                if (document && window) {
                  const targetElement = document.querySelector(href);
                  if (targetElement) {
                    window.scrollTo({
                      top: targetElement.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              href={href}
              scroll={true}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
