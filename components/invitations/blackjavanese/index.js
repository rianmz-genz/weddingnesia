import React, { useContext } from "react";
import HeroBlackJavanese from "./sections/Hero";
import NavbarBlackJavanese from "./navbar";
import HealthyInformationBlackJavanese from "./sections/HealthyInformation";
import BrideBlackJavanese from "./sections/Bride";
import LocationBlackJavanese from "./sections/Location";
import GalleryBlackJavanese from "./sections/Gallery";
import GuestBookBlackJavanese from "./sections/GuestBook";
import CountdownBlackJavanese from "./sections/Countdown";
import { InvitationContext } from "@/context/invitation";
import QuotesBlackJavanese from "./sections/Quotes";
import FooterInvitation from "@/components/globals/FooterInvitation";

export default function BlackJavanese() {
  return (
    <div className="mb-12">
      <NavbarBlackJavanese />
      <HeroBlackJavanese />
      <BrideBlackJavanese />
      <LocationBlackJavanese />
      {/* <CountdownBlackJavanese /> */}
      <GalleryBlackJavanese />
      <QuotesBlackJavanese />
      <FooterInvitation />
    </div>
  );
}
