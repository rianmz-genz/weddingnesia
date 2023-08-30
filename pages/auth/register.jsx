import { AuthPage, Button, InputIcon, Logo, Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Link from "next/link";
import React, { useState } from "react";
import { FiKey, FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import RegisterApi from "@/api/auth/RegisterApi";

const Register = () => {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  function formValidator() {
    let result = true
    setErrorName(null)
    setErrorEmail(null)
    setErrorPassword(null)
    setErrorConfirmPassword(null)
    if (name.length < 1) {
      setErrorName("The name field is required")
      result = false
    }
    if (email.length < 1) {
      setErrorEmail("The email field is required")
      result = false
    }
    if (password.length < 6) {
      setErrorPassword("Password must be at least 6 characters long")
      result = false
    }
    if (password !== confirmPassword) {
      result = false
      setErrorConfirmPassword("Your password and confirmation password do not match.")
    }
    return result
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const validation = formValidator()

    if (validation) {
      RegisterApi({ name, email, password }).then((res) => {
        const data = res.data;
        if (data.errors != null) {
          setErrorEmail(data.errors.email)
        } else {
          setSuccess(true)
        }
      });
    }
  };

  const successRegister = () => {
    return <>
      <span className="text-green-500 text-center">Registration Successful!</span>
      <span className="text-xs text-center">Please check your email for further instructions to validate your account.</span>
    </>
  }
  return (
    <AuthPage onSubmit={handleRegister}>
      <Logo className={"w-8/12"} />
      {success ? successRegister() : <></>}
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
        {errorName ? <div className="text-sm text-red-500">{errorName}</div> : ''}
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
        {errorPassword ? <div className="text-sm text-red-500">{errorPassword}</div> : ''}
        <Text className={"mb-1 mt-3"} style={textStyle.titleQuestion}>
          Confirm Password
        </Text>
        <InputIcon
          type="password"
          placeholder="Confirm Password"
          icon={<FiKey className="text-black mr-2" />}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errorConfirmPassword ? <div className="text-sm text-red-500">{errorConfirmPassword}</div> : ''}
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
