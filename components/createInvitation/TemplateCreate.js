import React, { useState } from "react";
import Button from "../globals/Button";
import { buttonStyle } from "@/utils/enum";
import { removeCookie } from "@/utils";
import { useRouter } from "next/router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Cookies from "js-cookie";

export default function TemplateCreate({
  className,
  children,
  onNext,
  isLast,
}) {
  function removeCookie(key) {
    Cookies.remove(key);
    return;
  }
  const [isCanceling, setIsCanceling] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();
  const onCancel = () => {
    try {
      setIsCanceling(true);
      removeCookie("currentMenu");
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    onNext().then((res) => setisLoading((prev) => false));
  };
  return (
    <form
      onSubmit={onSubmit}
      className={`${className} bg-white w-full rounded-md p-4 md:p-8`}
    >
      {children}
      <Button
        type="submit"
        style={buttonStyle.blackLarge}
        className={"w-full mt-6"}
      >
        {isLoading ? (
          <AiOutlineLoading3Quarters className="text-red-500 mx-auto text-lg animate-spin" />
        ) : isLast ? (
          "Selesaikan"
        ) : (
          "Simpan & Lanjutkan"
        )}
      </Button>
      <Button
        onClick={onCancel}
        style={buttonStyle.dangerlarge}
        className={"w-full mt-3"}
      >
        {isCanceling ? (
          <AiOutlineLoading3Quarters className="text-red-500 mx-auto text-lg animate-spin" />
        ) : (
          "Batalkan"
        )}
      </Button>
    </form>
  );
}
