import React from "react";
import TemplateCreate from "./TemplateCreate";
import { InputLeftWithTitle } from "../globals/Input";
import Text from "../globals/Text";

export default function ConfigureDomain() {
  return (
    <TemplateCreate>
      <InputLeftWithTitle
        left={"weddingnesia.id/"}
        label={"Domain*"}
        placeholder="ucuplovesurti"
      />
    </TemplateCreate>
  );
}
