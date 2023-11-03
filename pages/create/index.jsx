import BreadCumbersCreate from "@/components/createInvitation/BreadCumbersCreate";
import BrideAndGroomInformation from "@/components/createInvitation/BrideAndGroomInformation";
import ConfigureDomain from "@/components/createInvitation/ConfigureDomain";
import LocationInformation from "@/components/createInvitation/LocationInformation";
import OtherData from "@/components/createInvitation/OtherData";
import ChooseAlbums from "@/components/createInvitation/ChooseAlbums";
import Loader from "@/components/globals/Loader";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CreateInvitationContext } from "@/context/create-invitation";
import Skeleton from "@/components/globals/Skeleton";
import CreateInvitationApi from "@/api/integrations/invitation/CreateInvitation";
const cucumbersItem = [
  {
    label: "Informasi Mempelai",
    value: "Mempelai",
  },
  {
    label: "Informasi Lokasi",
    value: "Lokasi",
  },
  {
    label: "Data Undangan",
    value: "Data",
  },
  {
    label: "Album",
    value: "Albums",
  },
  {
    label: "Atur Domain",
    value: "Domain",
  },
];
export default function Create() {
  const [currentMenu, setCurrentMenu] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentMenu();
  }, []);
  const getCurrentMenu = () => {
    const current = Cookies.get("currentMenu");
    setCurrentMenu(current ? JSON.parse(current) : cucumbersItem[0]);
    setIsLoading(false);
  };
  const handleClickMenu = (idx) => {
    try {
      const selectedMenu = cucumbersItem.find((item, i) => i == idx);
      setCurrentMenu(selectedMenu);
      Cookies.set("currentMenu", JSON.stringify(selectedMenu));
    } catch (e) {
      //console.log(e);
    }
  };
  const onNext = async () => {
    if (currentMenu.value != "Domain") {
      const index = cucumbersItem.findIndex(
        (item, i) => item.value == currentMenu.value
      );
      handleClickMenu(index + 1);
    }
    if (currentMenu.value == "Domain") {
      return;
    }
  };
  function GetComponentView() {
    switch (currentMenu.value) {
      case "Mempelai":
        return (
          <BrideAndGroomInformation
            onNext={onNext}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        );
      case "Lokasi":
        return (
          <LocationInformation onNext={onNext} setIsLoading={setIsLoading} />
        );
      case "Data":
        return <OtherData onNext={onNext} setIsLoading={setIsLoading} />;
      case "Albums":
        return <ChooseAlbums onNext={onNext} setIsLoading={setIsLoading} />;
      case "Domain":
        return <ConfigureDomain onNext={onNext} setIsLoading={setIsLoading} />;
    }
  }
  return (
    <div className="w-full min-h-screen bg-slate-100 py-12">
      <div className=" sm:max-w-lg lg:max-w-5xl 2xl:max-w-7xl px-7 mx-auto flex lg:flex-row flex-col items-start">
        <BreadCumbersCreate
          current={currentMenu}
          items={cucumbersItem}
          onClick={(idx) => handleClickMenu(idx)}
        />
        {isLoading ? (
          <div className="w-full flex flex-col gap-3">
            <Skeleton className="w-full h-16 bg-white" />
            <div className="flex gap-3">
              <Skeleton className="w-1/2 h-16 bg-white" />
              <Skeleton className="w-1/2 h-16 bg-white" />
            </div>
            <Skeleton className="w-full h-32 bg-white" />
          </div>
        ) : (
          GetComponentView()
        )}
      </div>
    </div>
  );
}
