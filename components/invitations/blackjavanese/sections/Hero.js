import React from "react";

export default function HeroBlackJavanese() {
  const src = "/images/coverblackjavanese.svg";
  return (
    <div
      className={`w-full min-h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="w-full min-h-screen bg-black/40"></div>
    </div>
  );
}
