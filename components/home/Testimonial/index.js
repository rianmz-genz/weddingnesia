import Button from "@/components/globals/Button";
import Container from "@/components/globals/Container";
import Text from "@/components/globals/Text";
import { initialValue } from "@/store";
import { buttonStyle, textStyle } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Testimonial = () => {
  const { testimonials } = initialValue.home;
  return (
    <section className="w-full py-24 bg-gradient-to-t from-yellow-600 via-transparent to-transparent">
      <div className="flex mx-auto flex-col px-7 sm:max-w-lg lg:max-w-5xl 2xl:max-w-7xl lg:flex-row justify-center items-center">
        <div className="lg:w-6/12 w-full">
          <Text style={textStyle.bigtitle}>{testimonials.title}</Text>
          <Text
            className={"mt-3 mb-6 pr-6 text-black/80"}
            style={textStyle.description}
          >
            {testimonials.description}
          </Text>
          <Link href={testimonials.button.href}>
            <Button style={buttonStyle.primarylarge}>
              {testimonials.button.value}
            </Button>
          </Link>
        </div>
        <ul className="lg:w-6/12 w-full mt-6 lg:mt-0 flex space-y-6 flex-col justify-center items-center">
          {testimonials.items.map((item, idx) => (
            <li
              key={idx}
              className="bg-white shadow px-6 py-8 rounded-lg w-full flex justify-between items-center"
            >
              <Image
                src={item.avatar}
                alt={`Testimonial ${item.name}`}
                width={1080}
                height={1080}
                className="rounded-full w-24 hidden lg:block"
              />
              <div className="w-full pl-8">
                <Text
                  style={textStyle.smalldescription}
                  className={"text-black/80"}
                >
                  &quot;{item.comment}&quot;
                </Text>
                <div className="mt-2 flex">
                  <Text className={"font-bold"}>{item.name} -</Text>
                  <Text className={"ml-1 text-black/70"}>{item.job}</Text>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonial;
