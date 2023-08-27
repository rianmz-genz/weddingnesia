import Button from "@/components/globals/Button";
import SectionParagraph from "@/components/globals/SectionParagraph";
import Text from "@/components/globals/Text";
import { initialValue } from "@/store";
import benefits from "@/store/pricing";
import { buttonStyle, textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function PriceSection() {
  const { pricing } = initialValue.home;
  return (
    <section
      id="price"
      className="bg-slate-50 sm:max-w-lg lg:max-w-7xl mx-auto py-16 lg:py-32 px-7"
    >
      <SectionParagraph
        className={"lg:w-8/12 text-center mx-auto"}
        title={pricing.title}
        description={pricing.description}
      />
      <ul className="grid grid-cols-1 lg:grid-cols-5 mt-12 gap-3 place-items-center">
        {benefits.map(({ data }, i) => (
          <PriceCard
            key={i}
            src={data.src}
            benefits={data.benefits}
            name={data.name}
            price={data.price}
            slug={data.slug}
          />
        ))}
      </ul>
    </section>
  );
}

const PriceCard = ({ src, name, price, slug, benefits }) => {
  const thePrice = price.toLocaleString("id-ID").split(".");

  return (
    <li
      className={`${
        slug == "eksklusif"
          ? "bg-black text-white shadow-2xl shadow-black/70 hover:shadow-xl transition-all duration-500"
          : "shadow bg-white z-30"
      }  rounded-xl px-4 py-8 w-full text-center h-fit`}
    >
      <Image
        src={src}
        alt={name}
        width={1080}
        height={1080}
        className="w-16 mx-auto"
      />
      <Text style={textStyle.smalltitle} className={`font-semibold mt-5 mb-2 `}>
        {name}
      </Text>
      <div>
        {price == 0 ? (
          <Text style={textStyle.mdtitle} className={"font-semibold"}>
            Free
          </Text>
        ) : (
          <span className="flex items-center justify-center">
            <Text style={textStyle.mdtitle} className={"font-semibold"}>
              {thePrice[0]}
            </Text>
            <Text
              style={textStyle.smalldescription}
              className={"font-semibold"}
            >
              .{thePrice[1]}
            </Text>
          </span>
        )}
      </div>
      <ul className={`"w-full flex flex-col gap-3 mb-8 mt-6`}>
        {benefits.map((item, i) => (
          <li className="text-black/80 items-center  flex gap-2" key={i}>
            <AiOutlineCheckCircle className="text-green-500" />
            <p className={`text-sm ${slug == "eksklusif" ? "text-white" : ""}`}>
              {item}
            </p>
          </li>
        ))}
      </ul>
      <Button
        style={
          slug == "eksklusif" ? buttonStyle.whitelarge : buttonStyle.blackLarge
        }
      >
        Buat Undangan
      </Button>
    </li>
  );
};
