import Button from "@/components/globals/Button";
import Text from "@/components/globals/Text";
import { initialValue } from "@/store";
import { buttonStyle, textStyle } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full bg-gradient-radial from-yellow-400/50 via-yellow-400/5 to-transparent h-fit py-16 lg:py-36 flex justify-center items-center lg:flex-row flex-col gap-3 lg:mt-0 mt-6"
    >
      <div className="lg:w-6/12 w-full gap-6 flex flex-col justify-start items-start">
        <Text style={textStyle.bigtitle}>{initialValue.home.hero.title}</Text>
        <Text style={textStyle.description} className={"text-black/70"}>
          {initialValue.home.hero.description}
        </Text>
        <div className="flex w-full flex-wrap space-y-3 lg:space-y-0 lg:space-x-3">
          <Link className={"lg:w-fit w-full"} href="/auth/register">
            <Button className={"w-full"}>Buat Undangan</Button>
          </Link>
          <Button
            className={"flex space-x-3 items-center lg:w-fit w-full"}
            style={buttonStyle.silverlarge}
          >
            <AiFillPlayCircle className="text-3xl" />
            <p>Cara Buat Undangan</p>
          </Button>
        </div>
      </div>
      <Image
        className="lg:w-6/12 w-11/12 lg:scale-110"
        src={initialValue.home.tutorial.img}
        alt="WeddingNesia"
        width={1080}
        height={1080}
      />
    </section>
  );
};

export default HeroSection;
