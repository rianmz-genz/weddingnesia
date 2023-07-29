import React from "react";
import Text from "./Text";
import { textStyle } from "@/utils/enum";

export default function TopBottomText({ top, bottom }) {
  return (
    <div>
      <Text
        style={textStyle.description}
        className={"font-semibold text-black/80"}
      >
        {top}
      </Text>
      <Text style={textStyle.description} className={"w-fit"}>
        {bottom}
      </Text>
    </div>
  );
}
