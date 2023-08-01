import { Button, DashboardUser, NavbarUser, Text } from "@/components";
import { initialValue } from "@/store";
import { buttonStyle, textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";

const DashboardUserView = () => {
  const { src, bold, caption, description, greeting, title } =
    initialValue.dashboard.user;
  return (
    <DashboardUser>
      <div className="flex w-full h-5/6 items-center justify-center flex-col mt-12">
        <div className="w-full flex justify-center items-center space-x-6">
          <Image
            src={src}
            alt="Beranda Image"
            width={1080}
            height={1080}
            className="w-3/12"
          />
          <div>
            <Text style={textStyle.bigtitle}>{title}</Text>
            <Text style={textStyle.title} className={"font-bold"}>
              {description}
            </Text>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-6 space-x-2 mb-1">
          <Text style={textStyle.title}>{greeting}</Text>
          <Text style={textStyle.title} className={"font-bold text-yellow-600"}>
            {bold}
          </Text>
        </div>
        <Text style={textStyle.description}>{caption}</Text>
        <Button style={buttonStyle.blackLarge} className={"mt-6"}>
          Buat Undangan
        </Button>
      </div>
    </DashboardUser>
  );
};

export default DashboardUserView;
