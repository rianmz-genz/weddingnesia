import { AuthPage, Button, InputIcon, Logo, Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Link from "next/link";
import React, { useState } from "react";
import { FiKey, FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import RegisterApi from "@/api/auth/RegisterApi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorEmail(null)
    RegisterApi({ name, email, password }).then((res) => {
      if (res.errors != null) {
        console.log('error');
        setErrorEmail(res.errors.email)
      } else {
        console.log('success');
      }
    });
  };
  return (
    <AuthPage onSubmit={handleRegister}>
      <Logo className={"w-8/12"} />
      <div className="w-full mt-6">
        <Text className={"mb-1"} style={textStyle.titleQuestion}>
          Name
        </Text>
        <InputIcon
          autoFocus={true}
          placeholder="Name"
          icon={<FiUser className="text-black mr-2" />}
          onChange={(e) => setName(e.target.value)}
        />
        <Text className={"mb-1 mt-3"} style={textStyle.titleQuestion}>
          Email
        </Text>
        <InputIcon
          autoFocus={true}
          placeholder="Email"
          icon={<AiOutlineMail className="text-black mr-2" />}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorEmail ? <div className="text-sm text-red-500">{errorEmail}</div> : ''}
        <Text className={"mb-1 mt-3"} style={textStyle.titleQuestion}>
          Password
        </Text>
        <InputIcon
          type="password"
          placeholder="Password"
          icon={<FiKey className="text-black mr-2" />}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Text className={"mb-1 mt-3"} style={textStyle.titleQuestion}>
          Confirm Password
        </Text>
        <InputIcon
          type="password"
          placeholder="Confirm Password"
          icon={<FiKey className="text-black mr-2" />}
        />
        <Button className={"mt-6 w-full"}>Daftar</Button>
        <Text className={"text-center mt-3"}>
          Sudah memiliki akun?{" "}
          <Link
            href={"/auth/login"}
            className="font-semibold underline text-yellow-700/80"
          >
            Masuk
          </Link>
        </Text>
      </div>
    </AuthPage>
  );
};

export default Register;
