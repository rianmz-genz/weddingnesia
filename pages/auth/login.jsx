import { AuthPage, Button, InputIcon, Logo, Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { FiKey } from "react-icons/fi";
import GoogleIcon from "@/public/images/google.png";
import FacebookIcon from "@/public/images/Facebook.png";
import InstagramIcon from "@/public/images/instagram.png";
import LoginApi from "@/api/auth/LoginApi";
import Cookies from "js-cookie";
import { urlAuthFacebook, urlAuthGoogle } from "@ApiRoutes/auth";
import Loader from "@/components/globals/Loader";
import MyLog from "@/utils/MyLog";
import Alert from "@/components/globals/Alert";

function ProviderButton(provider) {
  let icon;
  switch (provider.name) {
    case "google":
      icon = GoogleIcon;
      break;
    case "facebook":
      icon = FacebookIcon;
      break;
    case "instagram":
      icon = InstagramIcon;
      break;
    default:
      icon = GoogleIcon;
      break;
  }
  return (
    <div
      key={provider.name}
      className="w-full flex flex-row justify-center rounded-lg py-3 shadow-md"
    >
      <Link href={provider.url} className="flex flex-row justify-start gap-4">
        <Image src={icon} alt="icon" className="w-8 h-8" />
        <span>Sign in with {provider.name}</span>
      </Link>
    </div>
  );
}

const LoginView = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loginUrl, setLoginUrl] = useState(null);
  const [facebookUrl, setFacebookUrl] = useState(null);
  const [isHitApi, setIsHitApi] = useState(false);
  const [isErr, setIsErr] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsHitApi(true);
    setIsErr(false);
    setMessage("");

    LoginApi({ email, password }).then((res) => {
      setMessage(res.message);
      if (res.status === false) {
        setIsErr(true);
      }
      setIsHitApi(false);
      if (res.code === 200) {
        Cookies.set("token", res.data.access_token, { expires: 2 });
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      }
    });
  };

  useEffect(() => {
    fetch(urlAuthGoogle, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => setLoginUrl(data.url));
  }, []);

  useEffect(() => {
    fetch(urlAuthFacebook, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => setFacebookUrl(data.url))
      .catch((error) => {
        setServerError(error);
      });
  }, []);

  const providers = [
    {
      name: "google",
      url: loginUrl ?? "#",
    },
    {
      name: "facebook",
      url: facebookUrl ?? "#",
    },
  ];

  return (
    <AuthPage onSubmit={handleLogin}>
      <Alert
        message={message}
        trigger={message != ""}
        style={!isErr ? "success" : "error"}
      />
      <Logo className={"w-8/12"} />
      <div className="w-full mt-6">
        <Text className={"mb-1"} style={textStyle.titleQuestion}>
          Email
        </Text>
        <InputIcon
          required
          autoFocus={true}
          placeholder="Email"
          type="email"
          icon={<BiUser className="text-black mr-2" />}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Text className={"mb-1 mt-3"} style={textStyle.titleQuestion}>
          Password
        </Text>
        <InputIcon
          required
          type="password"
          placeholder="Password"
          icon={<FiKey className="text-black mr-2" />}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className={"mt-6 w-full"}>
          {isHitApi ? <Loader /> : "Masuk"}
        </Button>
        <Text className={"text-center mt-3"}>
          Belum memiliki akun?{" "}
          <Link
            href={"/auth/register"}
            className="font-semibold underline text-yellow-700/80"
          >
            Daftar
          </Link>
        </Text>
      </div>
    </AuthPage>
  );
};

export default LoginView;
