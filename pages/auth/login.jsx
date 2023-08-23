import { AuthPage, Button, InputIcon, Logo, Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiUser } from "react-icons/bi";
import { FiKey } from "react-icons/fi";
import GoogleIcon from "@/public/images/google.png";
import FacebookIcon from "@/public/images/Facebook.png";
import InstagramIcon from "@/public/images/instagram.png";

const LoginView = () => {
  const thirdProviderClass = 'flex flex-row p-4 shadow-md rounded-xl w-16 h-16';
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
        <div className="flex flex-row justify-center gap-4 mt-4">
          <button className={thirdProviderClass}>
            <Image src={GoogleIcon} alt="google icon" />
          </button>
          <button className={thirdProviderClass}>
            <Image src={FacebookIcon} alt="facebook icon" />  
          </button>
          <button className={thirdProviderClass}>
            <Image src={InstagramIcon} alt="instagram icon" />
          </button>
        </div>
      </div>
    </AuthPage>
  );
};

export default LoginView;
