import React from "react";
import TemplateCreate from "./TemplateCreate";
import { InputLeftWithTitle } from "../globals/Input";
import Text from "../globals/Text";

export default function ConfigureDomain({ slug, onNext, setValue }) {
  return (
    <TemplateCreate isLast onNext={onNext}>
      <InputLeftWithTitle
        left={"weddingnesia.id/"}
        label={"Domain*"}
        placeholder="ucuplovesurti"
        value={slug}
        onChange={(e) => setValue({ slug: e.target.value })}
      />
    </TemplateCreate>
  );
}
