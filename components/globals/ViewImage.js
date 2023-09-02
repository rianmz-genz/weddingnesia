import React from "react";
import Button from "./Button";
import { buttonStyle } from "@/utils/enum";
import { FiX } from "react-icons/fi";

export default function ViewImage({ src, onClose }) {
  return (
    <div className="w-full h-screen bg-black/60 backdrop-blur-md z-50 flex justify-center items-center fixed top-0 left-0 ">
      <Button
        type="button"
        onClick={onClose}
        style={buttonStyle.dangersmall}
        className={"fixed top-6 right-6"}
      >
        <FiX />
      </Button>
      <img src={src} alt="preview" width={1080} height={1080} />
    </div>
  );
}
