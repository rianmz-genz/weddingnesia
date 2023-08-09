import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loader({ className }) {
  return <AiOutlineLoading3Quarters className={`animate-spin ${className}`} />;
}
