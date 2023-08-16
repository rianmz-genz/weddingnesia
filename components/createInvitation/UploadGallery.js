import React from "react";
import Text from "../globals/Text";
import Button from "../globals/Button";
import { buttonStyle, textStyle } from "@/utils/enum";

export default function UploadGallery() {
  return (
    <div className="w-6/12">
      <Text style={textStyle.description} className={"mb-3"}>
        Upload Gallery Foto
      </Text>
      <Button style={buttonStyle.blackMedium}>Pilih File</Button>
    </div>
  );
}
