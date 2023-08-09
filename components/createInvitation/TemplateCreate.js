import React from "react";
import Button from "../globals/Button";
import { buttonStyle } from "@/utils/enum";

export default function TemplateCreate({ className, children, onNext }) {
  return (
    <div className={`${className} bg-white w-full rounded-md p-4 md:p-8`}>
      {children}
      <Button
        onClick={onNext}
        style={buttonStyle.blackLarge}
        className={"w-full mt-6"}
      >
        Lanjutkan
      </Button>
    </div>
  );
}
