import Text from "@/components/globals/Text";
import { InvitationContext } from "@/context/invitation";
import { textStyle } from "@/utils/enum";
import React, { useContext } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function QuotesBlackJavanese() {
  const { secondary_cover, quotes, source_quotes } =
    useContext(InvitationContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={`w-full h-fit bg-cover bg-center mb-20 flex justify-center items-center`}
      style={{ backgroundImage: `url(${secondary_cover})` }}
    >
      <div className="w-full min-h-48 py-12 bg-black/40  text-white">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto w-11/12 lg:w-6/12 flex flex-col justify-center items-center"
        >
          <Text style={textStyle.title} className={"text-center mb-1"}>
            &quot;{quotes}&quot;
          </Text>
          <Text style={textStyle.descriptionAllura}>-{source_quotes}-</Text>
        </div>
      </div>
    </div>
  );
}
