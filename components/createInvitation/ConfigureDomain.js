import React, { useEffect, useState } from "react";
import TemplateCreate from "./TemplateCreate";
import { InputTitle } from "../globals/Input";
import Text from "../globals/Text";
import { textStyle } from "@/utils/enum";
import Alert from "../globals/Alert";
import { AiOutlineInfo } from "react-icons/ai";
import axios from "axios";
import Cookies from "js-cookie";
import tempService from "@/api/integrations/temp";
import { useRouter } from "next/router";

export default function ConfigureDomain({ onNext, setIsLoading }) {
  const [slug, setSlug] = useState("");
  const handleSlugChange = (e) => {
    const newSlug = e.target.value.trim(); // Remove leading and trailing spaces
    if (newSlug === "" && e.target.value.length > 1) {
      return;
    }
    setSlug(newSlug);
  };
  const tempId = Cookies.get("tempId");
  const [hasLoaded, setHasLoaded] = useState(false);
  const [message, setMessage] = useState("");
  const [isErr, setIsErr] = useState(false);
  const router = useRouter();
  const getDomainData = async () => {
    try {
      setMessage("");
      const res = await tempService.getDomain(tempId);
      if (res.status) {
        setSlug(res.data.domain);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status !== 404) {
          setMessage(error?.response?.data?.message);
        }
      }
    } finally {
      setIsLoading(false);
      setHasLoaded(true);
    }
  };
  useEffect(() => {
    if (!hasLoaded) {
      getDomainData();
    }
  }, [hasLoaded]);
  const onSaveDomain = async () => {
    try {
      setMessage("");
      setIsErr(true);

      const res = await tempService.createDomain(tempId, { domain: slug });
      if (res.status) {
        setMessage(res.message);
        setTimeout(() => {
          setMessage("");
          router.push("/create/preview");
        }, 2250);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error?.response?.data?.message);
        setIsErr(true);
      }
    }
  };
  return (
    <TemplateCreate isLast onNext={onSaveDomain}>
      <Alert
        message={message}
        trigger={message != ""}
        style={!isErr ? "success" : "error"}
      />
      <div className="flex items-center gap-3 mb-6">
        <div className="p-1 rounded-full bg-blue-500/10 text-blue-500 ">
          <AiOutlineInfo />
        </div>
        <div>
          <p className="text-sm">
            Yang sering digunakan biasanya menggunakan love atau dan seperti
          </p>
          <p className="text-sm">
            weddingnesia.id/theme?sl=blackjavanese?i=adrianlovevinka
          </p>
        </div>
      </div>
      <InputTitle
        label={"Domain*"}
        placeholder="ucuplovesurti"
        value={slug}
        onChange={handleSlugChange}
        required
        defaultValue=""
      />
      <Text className={"italic"}>
        weddingnesia.id/theme?sl=blackjavanese?i={slug}
      </Text>
      <Alert />
    </TemplateCreate>
  );
}
