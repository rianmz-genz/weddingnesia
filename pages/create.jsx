import BreadCumbersCreate from "@/components/createInvitation/BreadCumbersCreate";
import BrideAndGroomInformation from "@/components/createInvitation/BrideAndGroomInformation";
import ChooseDesign from "@/components/createInvitation/ChooseDesign";
import ConfigureDomain from "@/components/createInvitation/ConfigureDomain";
import LocationInformation from "@/components/createInvitation/LocationInformation";
import Loader from "@/components/globals/Loader";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

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
  wedding_date: "",
  wedding_time_start: "",
  wedding_time_end: "",
  wedding_address: "",
  wedding_map: "",
  reception_date: "",
  reception_time_start: "",
  reception_time_end: "",
  reception_address: "",
  reception_map: "",
  albums: [],
};
export default function Create({ init }) {
  const [currentMenu, setCurrentMenu] = useState({});
  const [isLoading, setIsLoading] = useState({});
  const [initialData, setinitialData] = useState(init ?? data);
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
  const saveData = () => {
    const data = JSON.stringify(initialData);
    Cookies.set("dataInvitation", data);
  };
  const onNext = (e) => {
    e.preventDefault();
    if (currentMenu.value != "Domain") {
      saveData();
    }
  };
  function getComponentView() {
    switch (currentMenu.value) {
      case "Mempelai":
        return (
          <BrideAndGroomInformation
            onNext={onNext}
            {...initialData}
            setValue={setValue}
            saveData={saveData}
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

export async function getServerSideProps({ req }) {
  try {
    const init = req.cookies.dataInvitation;
    console.log(init);
    if (!init)
      return {
        props: {
          init: null,
        },
      };
    // Misalnya, jika Anda ingin mengurutkan berdasarkan urutan: Freemium, Premium, Eksklusif, Pro, Elegant
    return {
      props: {
        init: JSON.parse(init),
      },
    };
  } catch (error) {
    console.error("Error fetching packages:", error.message);
    return {
      props: {
        init: undefined,
      },
    };
  }
}
