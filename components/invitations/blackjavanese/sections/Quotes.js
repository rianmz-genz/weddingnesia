import Text from "@/components/globals/Text";
import { InvitationContext } from "@/context/invitation";
import { textStyle } from "@/utils/enum";
import React, { useContext } from "react";

export default function QuotesBlackJavanese() {
  const { secondary_cover, quotes, source_quotes } =
    useContext(InvitationContext);
  return (
    <div
      className={`w-full h-fit bg-cover bg-center mb-20 flex justify-center items-center`}
      style={{ backgroundImage: `url(${secondary_cover})` }}
    >
      <div className="w-full min-h-48 py-12 bg-black/40  text-white">
        <div className="mx-auto w-6/12">
          <Text style={textStyle.title}>{quotes}</Text>
          <Text style={textStyle.descriptionAllura}>-{source_quotes}-</Text>
        </div>
      </div>
    </div>
  );
}
