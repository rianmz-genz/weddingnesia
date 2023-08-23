import { useRouter } from "next/router";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { AuthPage, Button, InputIcon, Logo, Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiUser } from "react-icons/bi";
import { FiKey } from "react-icons/fi";
import GoogleIcon from "@/public/images/google.png";
import FacebookIcon from "@/public/images/Facebook.png";
import InstagramIcon from "@/public/images/instagram.png";

function ProviderButton(provider) {
  let icon;
  switch (provider.name) {
    case 'Google':
      icon = GoogleIcon;
      break;
    case 'Facebook':
      icon = FacebookIcon;
      break;
    case 'Instagram':
      icon = InstagramIcon;
      break;
    default:
      icon = GoogleIcon;
      break;
  }
  return (
    <div key={provider.name} className="w-full flex flex-row justify-center rounded-lg py-3 shadow-md">
      <button className="flex flex-row justify-start gap-4" onClick={() => signIn(provider.id)}>
        <Image src={icon} alt="icon" className="w-8 h-8" />
        <span>Sign in with {provider.name}</span>
      </button>
    </div>
  )
}

export default function SignIn({
  providers,
}) {
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <AuthPage onSubmit={handleLogin}>
      <Logo className={"w-8/12"} />
      <div className="w-full mt-6">
        <Text className={"mb-1"} style={textStyle.titleQuestion}>
          Email
        </Text>
        <InputIcon
          autoFocus={true}
          placeholder="Email"
          icon={<BiUser className="text-black mr-2" />}
        />
        <Text className={"mb-1 mt-3"} style={textStyle.titleQuestion}>
          Password
        </Text>
        <InputIcon
          type="password"
          placeholder="Password"
          icon={<FiKey className="text-black mr-2" />}
        />
        <Button className={"mt-6 w-full"}>Masuk</Button>
        <Text className={"text-center mt-3"}>
          Belum memiliki akun?{" "}
          <Link
            href={"/auth/register"}
            className="font-semibold underline text-yellow-700/80"
          >
            Daftar
          </Link>
        </Text>
        <div className="flex flex-col justify-center gap-4 mt-4">
          {Object.values(providers).map((provider) => ProviderButton(provider))}
        </div>
      </div>
    </AuthPage>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
