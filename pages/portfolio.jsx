import { Container, NavbarLandingpage, Text } from "@/components";
import DemoInvitationData from "@/store/demo";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div className="w-full min-h-screen">
      <Container>
        <NavbarLandingpage />
        <div className="w-full text-center flex flex-col items-center mt-24 mb-8">
          <Text style={textStyle.mdtitle}>Portfolio Undangan Online</Text>
          <Text style={textStyle.smalltitle} className={"md:w-8/12 mt-2"}>
            Berikut ini adalah beberapa portofolio undangan online digital
            terbaik yang telah dibuat menggunakan weddingnesia!
          </Text>
        </div>
      </Container>
      <div className="flex my-6"></div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:max-w-lg lg:max-w-7xl mx-auto px-7">
        {DemoInvitationData.map(({ bride, comment, cover, slug }, i) => (
          <InvitationCard
            key={i}
            bride={bride}
            comment={comment}
            slug={slug}
            cover={cover}
          />
        ))}
      </ul>
    </div>
  );
}

function InvitationCard({ slug, cover, bride, comment }) {
  return (
    <Link
      href={`/demo/invitation?sl=${slug}`}
      className="w-full rounded-xl transition-all duration-500 shadow hover:shadow-xl"
    >
      <Image
        src={cover}
        alt={bride}
        width={1080}
        height={1080}
        className="w-full object-cover h-48 rounded-t-md"
      />
      <div className="px-6 py-3">
        <Text style={textStyle.description} className={"font-bold"}>
          {bride}
        </Text>
        <Text style={textStyle.smalldescription}>&quot;{comment}&quot;</Text>
      </div>
    </Link>
  );
}
