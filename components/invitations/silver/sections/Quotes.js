import Text from "@/components/globals/Text";
import { InvitationContext } from "@/context/invitation";
import { textStyle } from "@/utils/enum";
import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function QuotesSilver() {
  const { secondary_cover, quotes, source_quotes } = useContext(InvitationContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-full h-fit bg-cover bg-center mb-20 flex justify-center items-center relative"
      style={{ backgroundImage: `url(${secondary_cover})` }}
    >
      <div className="w-full min-h-48 py-12 bg-black/50 backdrop-blur-sm text-white flex justify-center items-center">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto w-11/12 lg:w-6/12 flex flex-col justify-center items-center text-center p-8 rounded-lg shadow-lg bg-black/30"
        >
          {/* Quotes Text */}
          <Text
            style={textStyle.title}
            className="text-3xl lg:text-4xl font-semibold mb-4 text-white leading-snug"
          >
            &quot;{quotes}&quot;
          </Text>

          {/* Source of the Quotes */}
          <Text
            style={textStyle.descriptionAllura}
            className="text-lg mt-3 px-4 py-2 border-t border-gray-300 text-gray-200"
          >
            - {source_quotes} -
          </Text>
        </div>
      </div>
    </div>
  );
}
