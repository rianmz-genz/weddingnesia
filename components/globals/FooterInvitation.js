import React from "react";
import { Logo, Text } from "..";
import { textStyle } from "@/utils/enum";
import Link from "next/link";

export default function FooterInvitation() {
  return (
    <Link
      href={"https://app.weddingnesia.id"}
      className="mt-12 mb-24 w-6/12 mx-auto flex flex-col justify-center items-center"
    >
      <Logo className={"w-2/12 opacity-70"} />
      <p className="text-xs text-black/50">
        Website Undangan Pernikahan Online
      </p>
    </Link>
  );
}
