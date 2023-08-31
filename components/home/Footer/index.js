import Text from "@/components/globals/Text";
import { initialValue } from "@/store";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { footer } = initialValue.home;
  const main = {
    title: "Main",
    childs: [
      {
        label: "Home",
        href: "/#hero",
      },
      {
        label: "Tentang",
        href: "/about",
      },
      {
        label: "Kontak",
        href: "/contact",
      },
    ],
  };
  const product = {
    title: "Produk",
    childs: [
      {
        label: "Portfolio",
        href: "/portfolio",
      },
      {
        label: "Tentang",
        href: "/about",
      },
      {
        label: "Kontak",
        href: "/contact",
      },
    ],
  };
  const member = {
    title: "Member",
    childs: [
      {
        label: "Login",
        href: "/auth/login",
      },
      {
        label: "Daftar",
        href: "/auth/register",
      },
      {
        label: "Reseller",
        href: "/reseller",
      },
    ],
  };
  const backLink = [{ data: main }, { data: product }, { data: member }];
  return (
    <footer className="w-full bg-black py-24">
      <div className="px-7 sm:max-w-lg lg:max-w-7xl  mx-auto">
        <div className="flex lg:flex-row flex-col items-start justify-between border-b border-white/10 pb-20">
          <Image
            src={footer.whiteLogo}
            className="lg:w-2/12 w-36 mb-8 object-contain"
            alt="White Logo WeddingNesia"
            width={1080}
            height={1080}
          />
          <div className="flex w-full lg:w-8/12 items-start lg:ml-12 lg:flex-row flex-col">
            {backLink.map(({ data }, i) => (
              <BacklinkView key={i} childs={data.childs} title={data.title} />
            ))}
          </div>
        </div>
        <Text className={"text-white/90 text-center mt-6 items-center"}>
          Est. 2023 @ <span className="font-bold text-white">weddingnesia</span>
        </Text>
      </div>
    </footer>
  );
};

export default Footer;

const BacklinkView = ({ title, childs }) => {
  return (
    <ul className="lg:w-3/12 w-full mt-8 lg:mt-0">
      <Text
        style={textStyle.smalltitle}
        className={"font-bold text-white mb-6"}
      >
        {title}
      </Text>
      {childs.map((item, i) => (
        <Link href={item.href} key={i}>
          <Text style={textStyle.description} className={" text-white/70 mb-1"}>
            {item.label}
          </Text>
        </Link>
      ))}
    </ul>
  );
};
