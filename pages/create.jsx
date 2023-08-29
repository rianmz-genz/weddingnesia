import BreadCumbersCreate from "@/components/createInvitation/BreadCumbersCreate";
import BrideAndGroomInformation from "@/components/createInvitation/BrideAndGroomInformation";
import ChooseDesign from "@/components/createInvitation/ChooseDesign";
import ConfigureDomain from "@/components/createInvitation/ConfigureDomain";
import LocationInformation from "@/components/createInvitation/LocationInformation";
import Loader from "@/components/globals/Loader";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export default function Create() {
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
      value: "Desain",
    },
    {
      label: "Atur Domain",
      value: "Domain",
    },
  ];
  const [currentMenu, setCurrentMenu] = useState({});
  const [isLoading, setIsLoading] = useState({});
  const data = {
    owner_id: "",
    audio: "",
    timezone: "",
    bride_name: "",
    bride_avatar: "",
    bride_fullname: "",
    bride_info: "",
    bride_instagram: "",
    groom_name: "",
    groom_avatar: "",
    groom_fullname: "",
    groom_info: "",
    groom_instagram: "",
  };
  const [initialData, setinitialData] = useState(data);
  useEffect(() => {
    getCurrentMenu();
  }, []);
  const getCurrentMenu = () => {
    const current = Cookies.get("currentMenu");
    setCurrentMenu(current ? JSON.parse(current) : cucumbersItem[0]);
    setIsLoading(false);
  };
  const handleClickMenu = (idx) => {
    setIsLoading(true);
    try {
      const selectedMenu = cucumbersItem.find((item, i) => i == idx);
      setCurrentMenu(selectedMenu);
      Cookies.set("currentMenu", JSON.stringify(selectedMenu));
      setTimeout(() => {
        setIsLoading(false);
      }, 50);
    } catch (e) {
      console.log(e);
    }
  };
  const onNext = () => {
    console.log(initialData);
  };
  function getComponentView() {
    switch (currentMenu.value) {
      case "Mempelai":
        return (
          <BrideAndGroomInformation
            onNext={onNext}
            {...initialData}
            setValue={setValue}
          />
        );
      case "Lokasi":
        return <LocationInformation />;
      case "Desain":
        return <ChooseDesign />;
      case "Domain":
        return <ConfigureDomain />;
    }
  }
  const setValue = (fields) => {
    setinitialData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  };
  return (
    <div className="w-full min-h-screen bg-slate-50 py-12">
      <div className="w-11/12 mx-auto">
        <BreadCumbersCreate
          current={currentMenu}
          items={cucumbersItem}
          className={"my-6"}
          onClick={(idx) => handleClickMenu(idx)}
        />
        {isLoading ? (
          <Loader className={"mx-auto text-2xl"} />
        ) : (
          getComponentView()
        )}
      </div>
    </div>
  );
}
