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
      className="w-full bg-gradient-radial from-yellow-400/50 via-yellow-400/5 to-transparent min-h-screen flex justify-center items-center md:flex-row flex-col gap-3 md:mt-0 mt-6"
    >
      <div className="md:w-6/12 w-11/12 gap-6 flex flex-col justify-start items-start">
        <Text style={textStyle.bigtitle}>{initialValue.home.hero.title}</Text>
        <Text style={textStyle.description} className={"text-black/70"}>
          {initialValue.home.hero.description}
        </Text>
        <div className="flex w-full flex-wrap space-y-3 md:space-y-0 md:space-x-3">
          <Link className={"md:w-fit w-full"} href="/auth/register">
            <Button className={"w-full"}>Buat Undangan</Button>
          </Link>
          <Button
            className={"flex space-x-3 items-center md:w-fit w-full"}
            style={buttonStyle.silverlarge}
          >
            <AiFillPlayCircle className="text-3xl" />
            <p>Cara Buat Undangan</p>
          </Button>
        </div>
      </div>
      <Image
        className="md:w-6/12 w-11/12 md:scale-110"
        src={initialValue.home.tutorial.img}
        alt="WeddingNesia"
        width={1080}
        height={1080}
      />
    </section>
  );
};

export default HeroSection;
