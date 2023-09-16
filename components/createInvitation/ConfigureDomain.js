import React from "react";
import TemplateCreate from "./TemplateCreate";
import { InputTitle } from "../globals/Input";
import Text from "../globals/Text";
import { textStyle } from "@/utils/enum";
import Alert from "../globals/Alert";
import { AiOutlineInfo } from "react-icons/ai";

export default function ConfigureDomain({ slug, onNext, setValue }) {
  const handleSlugChange = (e) => {
    const newSlug = e.target.value.trim(); // Remove leading and trailing spaces
    if (newSlug === "" && e.target.value.length > 1) {
      return;
    }
    setValue({ slug: newSlug });
  };
  return (
    <TemplateCreate isLast onNext={onNext}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-1 rounded-full bg-blue-500/10 text-blue-500 ">
          <AiOutlineInfo />
        </div>
        <div>
          <p className="text-sm">
            Yang sering digunakan biasanya menggunakan love atau dan seperti
          </p>
          <p className="text-sm">
            weddingnesia.id/theme?sl=blackjavanese?i=adrianlovevinka
          </p>
        </div>
      </div>
      <InputTitle
        label={"Domain*"}
        placeholder="ucuplovesurti"
        value={slug}
        onChange={handleSlugChange}
        required
      />
      <Text className={"italic"}>
        weddingnesia.id/theme?sl=blackjavanese?i={slug}
      </Text>
      <Alert />
    </TemplateCreate>
  );
}
