import React from "react";
import TemplateCreate from "./TemplateCreate";
import { InputTitle } from "../globals/Input";
import Text from "../globals/Text";
import { textStyle } from "@/utils/enum";
import Alert from "../globals/Alert";

export default function ConfigureDomain({ slug, onNext, setValue }) {
  const handleSlugChange = (e) => {
    const newSlug = e.target.value.trim(); // Remove leading and trailing spaces
    if (newSlug === "") {
      return;
    }
    setValue({ slug: newSlug });
  };
  return (
    <TemplateCreate isLast onNext={onNext}>
      <InputTitle
        label={"Domain*"}
        placeholder="ucuplovesurti"
        value={slug}
        onChange={handleSlugChange}
        required
      />
      <Text className={"italic"}>weddingnesia.id/invitation?sl={slug}</Text>
      <Alert />
    </TemplateCreate>
  );
}
