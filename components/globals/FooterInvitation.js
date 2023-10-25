import React from "react";
import { Logo, Text } from "..";
import { textStyle } from "@/utils/enum";
import Link from "next/link";

export default function FooterInvitation() {
  return (
    <Link
      href={"https://app.weddingnesia.id"}
      className="mt-12  mb-24 lg:w-6/12 mx-auto flex flex-col justify-center items-center"
    >
      <Logo className={"lg:w-2/12 w-36 opacity-70"} />
      <p className="text-xs text-black/50 text-center">
        Website Undangan Pernikahan Online
      </p>
    </Link>
  );
}
