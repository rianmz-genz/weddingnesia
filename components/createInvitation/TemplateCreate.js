import React, { useContext, useState } from "react";
import Button from "../globals/Button";
import { alertStyle, buttonStyle, textStyle } from "@/utils/enum";
import { removeCookie } from "@/utils";
import { useRouter } from "next/router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Cookies from "js-cookie";
import ScrollToTopButton from "../globals/ScrollToTopButton";
import { CreateInvitationContext } from "@/context/create-invitation";
import Alert from "../globals/Alert";
import ContainerWhite from "../globals/ContainerWhite";
import Image from "next/image";
import Text from "../globals/Text";
import { FaQuestion } from "react-icons/fa";
import Link from "next/link";

export default function TemplateCreate({
  className,
  children,
  onNext,
  isLast,
  isNoSave,
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
      //console.log(err);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onNext().then((res) => setisLoading((prev) => false));
  };
  const context = useContext(CreateInvitationContext);
  const { isHitApi, message, statusApi, trigger } = context;
  return (
    <form
      onSubmit={onSubmit}
      className={`${className} bg-white w-full rounded-md p-4 md:p-8 relative`}
    >
      <div className="absolute top-3 right-3 peer/faq">
        <button
          type="button"
          className="bg-blue-500/10 rounded-full backdrop-blur-xl text-sm text-blue-500 p-2"
        >
          <Link
            target="_blank"
            href="https://scribehow.com/shared/Creating_a_Wedding_Invitation_with_Google_Maps_Integration___zghHEq9Qx2Zx7SMjvlWSA"
          >
            <FaQuestion />
          </Link>
        </button>
      </div>
      <div className="w-fit shadow absolute transition-all duration-500 invisible  bg-blue-500/10 text-blue-500 backdrop-blur-lg top-3 px-4 py-2 rounded-full right-12 peer-hover/faq:visible peer-hover/faq:opacity-100 opacity-0">
        <p className="text-xs">
          Klik untuk melihat cara membuat undangan di
          <span className="font-bold ml-1">weddingnesia.id</span>
        </p>
      </div>
      {children}
      <Alert
        trigger={trigger}
        style={statusApi ? alertStyle.success : alertStyle.error}
        message={message}
      />
      {!isNoSave && (
        <>
          <Button
            type="submit"
            style={buttonStyle.blackLarge}
            className={"w-full mt-6"}
          >
            {isHitApi ? (
              <AiOutlineLoading3Quarters className="text-red-500 mx-auto text-lg animate-spin" />
            ) : isLast ? (
              "Simpan Data"
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
        </>
      )}
      <ScrollToTopButton />
    </form>
  );
}
