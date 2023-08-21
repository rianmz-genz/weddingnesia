import { NavbarInvitation } from "@/store/demo";
import Link from "next/link";
import React from "react";
import { GiBigDiamondRing } from "react-icons/gi";
export default function NavbarBlackJavanese() {
  return (
    <nav className="w-full py-6 bg-black/50 backdrop-blur-md fixed bottom-0 left-0 z-50">
      <ul className="flex justify-around items-center w-full text-white text-xl">
        {NavbarInvitation.map(({ icon, href }, i) => (
          <li key={i}>
            <Link href={href}>{icon}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
