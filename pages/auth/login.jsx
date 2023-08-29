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

function ProviderButton(provider) {
  let icon;
  switch (provider.name) {
    case 'google':
      icon = GoogleIcon;
      break;
    case 'facebook':
      icon = FacebookIcon;
      break;
    case 'instagram':
      icon = InstagramIcon;
      break;
    default:
      icon = GoogleIcon;
      break;
  }
  return (
    <div key={provider.name} className="w-full flex flex-row justify-center rounded-lg py-3 shadow-md">
      <Link href={provider.url} className="flex flex-row justify-start gap-4">
        <Image src={icon} alt="icon" className="w-8 h-8" />
        <span>Sign in with {provider.name}</span>
      </Link>
    </div>
  )
}

const LoginView = () => {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorEmail, setErrorEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    LoginApi({email, password}).then((res) => {
      if (res.errors != null) {
        console.log('error');
        setErrorEmail(res.errors.email)
      } else {
        Cookies.set("token", res.access_token, { expires: 2 });
      }
    })

    //router.push("/dashboard");
  };
  const [loginUrl, setLoginUrl] = useState(null);

  const [facebookUrl, setFacebookUrl] = useState(null);

  useEffect(() => {
      fetch('http://localhost:8000/api/auth/google', {
          headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error('Something went wrong!');
          })
          .then((data) => setLoginUrl( data.url ))
          .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
      fetch('http://localhost:8000/api/auth/facebook', {
          headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error('Something went wrong!');
          })
          .then((data) => setFacebookUrl( data.url ))
          .catch((error) => console.error(error));
  }, []);

  const providers = [
    {
      name: 'google',
      url: loginUrl ?? '#'
    },
    {
      name: 'facebook',
      url: facebookUrl ?? '#'
    },
  ]

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
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorEmail ? <div className="text-sm text-red-500">{errorEmail}</div> : ''}
        <Text className={"mb-1 mt-3"}
              style={textStyle.titleQuestion}>
          Password
        </Text>
        <InputIcon
          type="password"
          placeholder="Password"
          icon={<FiKey className="text-black mr-2" />}
          onChange={(e) => setPassword(e.target.value)}
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
          {providers.map((provider) => ProviderButton(provider))}
        </div>
      </div>
    </AuthPage>
  );
};

export default LoginView;
