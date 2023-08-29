import Button from "@/components/globals/Button";
import SectionParagraph from "@/components/globals/SectionParagraph";
import Text from "@/components/globals/Text";
import { initialValue } from "@/store";
import benefits from "@/store/pricing";
import { buttonStyle, textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";

export default function PriceSection({ packages }) {
  const { pricing } = initialValue.home;
  console.log(packages);
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
      {/* {packages?.length == 0 && (
        <button className="mt-12 bg-slate-100 mx-auto p-2 rounded-md">
          <BiRefresh />
        </button>
      )} */}
      <ul
        className={`grid grid-cols-1 lg:grid-cols-5 ${
          packages?.length == 0 ? "mt-3" : "mt-12"
        } gap-3 place-items-center`}
      >
        {packages?.length != 0
          ? packages?.map(({ icon, features, name, price, id }, i) => (
              <PriceCard
                key={i}
                src={icon}
                benefits={features}
                name={name}
                price={price}
                slug={id}
              />
            ))
          : [1, 2, 3, 4, 5].map((item) => {
              return (
                <div
                  key={item}
                  className="w-full bg-slate-100 rounded-lg animate-pulse h-96"
                ></div>
              );
            })}
      </ul>
    </section>
  );
}

const PriceCard = ({ src, name, price, slug, benefits }) => {
  const thePrice = price?.toLocaleString("id-ID").split(".");
  return (
    <li
      className={`${
        name == "Eksklusif"
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
        {benefits &&
          JSON.parse(benefits)?.map((item, i) => (
            <li className="text-black/80 items-center  flex gap-2" key={i}>
              <AiOutlineCheckCircle className="text-green-500" />
              <p
                className={`text-sm ${name == "Eksklusif" ? "text-white" : ""}`}
              >
                {item}
              </p>
            </li>
          ))}
      </ul>
      <Button
        style={
          name == "Eksklusif" ? buttonStyle.whitelarge : buttonStyle.blackLarge
        }
      >
        Buat Undangan
      </Button>
    </li>
  );
};
