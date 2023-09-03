import React from "react";
import Text from "./Text";
import { textStyle } from "../../utils/enum";

export default function QA({ q, a }) {
  return (
    <div className="my-3">
      <Text>{q}</Text>
      <Text style={textStyle.smalldescription}>{a}</Text>
    </div>
  );
}
