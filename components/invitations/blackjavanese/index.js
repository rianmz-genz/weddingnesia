import React from "react";
import HeroBlackJavanese from "./sections/Hero";
import NavbarBlackJavanese from "./navbar";
import HealthyInformationBlackJavanese from "./sections/HealthyInformation";
import BrideBlackJavanese from "./sections/Bride";
import LocationBlackJavanese from "./sections/Location";
import GalleryBlackJavanese from "./sections/Gallery";
import GuestBookBlackJavanese from "./sections/GuestBook";
import CountdownBlackJavanese from "./sections/Countdown";

export default function BlackJavanese() {
  return (
    <div className="mb-12">
      <NavbarBlackJavanese />
      <HeroBlackJavanese />
      <HealthyInformationBlackJavanese />
      <CountdownBlackJavanese />
      <BrideBlackJavanese />
      <LocationBlackJavanese />
      <GalleryBlackJavanese />
      <GuestBookBlackJavanese />
    </div>
  );
}
