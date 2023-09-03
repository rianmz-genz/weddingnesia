import React from "react";

export default function Skeleton({ className = "w-full h-16 bg-white" }) {
  return <div className={`${className} animate-pulse rounded-lg`}></div>;
}
