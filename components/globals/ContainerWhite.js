import React from "react";

export default function ContainerWhite({ children, className }) {
  return (
    <div
      className={`sm:max-w-lg lg:max-w-5xl 2xl:max-w-7xl p-7 rounded-xl mx-auto bg-white w-full ${className}`}
    >
      {children}
    </div>
  );
}
