import React, { useContext } from "react";
import HeroSilver from "./sections/Hero";
import NavbarSilver from "./navbar";
import HealthyInformationSilver from "./sections/HealthyInformation";
import BrideSilver from "./sections/Bride";
import LocationSilver from "./sections/Location";
import GallerySilver from "./sections/Gallery";
import GuestBookSilver from "./sections/GuestBook";
import CountdownSilver from "./sections/Countdown";
import { InvitationContext } from "@/context/invitation";
import QuotesSilver from "./sections/Quotes";
import FooterInvitation from "@/components/globals/FooterInvitation";
import ScrollToTopButton from "@/components/globals/ScrollToTopButton";
import CoverSilver from "./sections/Cover";

export default function SilverInvitation() {
  return (
    <div className="mb-12">
      <CoverSilver />
      <NavbarSilver />
      <HeroSilver />
      <BrideSilver />
      <CountdownSilver />
      <LocationSilver />
      <GallerySilver />
      <QuotesSilver />
      {/* <GuestBookSilver /> */}
      <FooterInvitation />
      <ScrollToTopButton />
    </div>
  );
}
