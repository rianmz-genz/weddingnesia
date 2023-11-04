import tempService from "@/api/integrations/temp";
import { Button, DashboardUser, Text } from "@/components";
import Loader from "@/components/globals/Loader";
import { initialValue } from "@/store";
import { buttonStyle, textStyle } from "@/utils/enum";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export async function getServerSideProps(context) {
  const token = context.req.cookies.token;
  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const DashboardUserView = () => {
  const { src, bold, caption, description, greeting, title } =
    initialValue.dashboard.user;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleCreate = async () => {
    setIsLoading(true);
    try {
      const res = await tempService.create();
      if (res.code == 201) {
        Cookies.set("tempId", res?.data?.temp.id);
        router.push("/create");
        setIsLoading(false);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
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
        <Text style={textStyle.description} className={"text-center"}>
          {caption}
        </Text>
        <Button
          onClick={handleCreate}
          style={buttonStyle.blackLarge}
          className={"mt-6"}
        >
          {isLoading ? <Loader /> : "Buat Undangan"}
        </Button>
      </div>
    </DashboardUser>
  );
};

export default DashboardUserView;
