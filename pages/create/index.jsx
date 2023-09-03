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
  primary_cover: "",
  secondary_cover: "",
  slug: "",
  title: "",
  is_groom_first: true,
  greeting: "",
  opening_remarks: "",
  quotes: "",
  source_quotes: "",
  albums: [],
};
export default function Create({ pageProps }) {
  const [currentMenu, setCurrentMenu] = useState({});
  const [isLoading, setIsLoading] = useState({});
  const [isHitApi, setIsHitApi] = useState(false);
  const [message, setMessage] = useState(false);
  const [statusApi, setStatusApi] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [initialData, setinitialData] = useState(pageProps.init ?? data);
  const router = useRouter();

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
      }, 500);
    } catch (e) {
      console.log(e);
    }
  };
  const saveData = () => {
    const data = JSON.stringify(initialData);
    Cookies.set("dataInvitation", data);
  };
  const onNext = async () => {
    if (currentMenu.value != "Domain") {
      saveData();
      const index = cucumbersItem.findIndex(
        (item, i) => item.value == currentMenu.value
      );
      handleClickMenu(index + 1);
    }
    if (currentMenu.value == "Domain") {
      console.log("iya");
      saveData();
      setIsHitApi(true);
      CreateInvitationApi({ data: initialData }).then((res) => {
        setTrigger(true);
        if (res) {
          setStatusApi(true);
          setMessage("Berhasil membuat data undangan");
          router.push("/create/preview");
        } else {
          setStatusApi(false);
          setMessage("Gagal membuat data undangan");
        }
        setIsHitApi(false);
        setTimeout(() => {
          setTrigger(false);
        }, 4000);
      });
    }
  };
  function GetComponentView() {
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
        return (
          <LocationInformation
            onNext={onNext}
            {...initialData}
            setValue={setValue}
          />
        );
      case "Data":
        return (
          <OtherData onNext={onNext} {...initialData} setValue={setValue} />
        );
      case "Albums":
        return (
          <ChooseAlbums
            onNext={onNext}
            albums={initialData.albums}
            setValue={setValue}
          />
        );
      case "Domain":
        return (
          <ConfigureDomain
            onNext={onNext}
            {...initialData}
            setValue={setValue}
          />
        );
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
  const contextValue = {
    isHitApi,
    statusApi,
    message,
    trigger,
  };
  return (
    <CreateInvitationContext.Provider value={contextValue}>
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
    </CreateInvitationContext.Provider>
  );
}

export async function getServerSideProps({ req }) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return {
        redirect: "/auth/signin",
      };
    }
    const init = req.cookies.dataInvitation;
    if (!init) {
      console.log("undefined");
      return {
        props: {
          init: null,
          token,
        },
      };
    }
    // Misalnya, jika Anda ingin mengurutkan berdasarkan urutan: Freemium, Premium, Eksklusif, Pro, Elegant
    if (init) {
      console.log("iya masuk");
      return {
        props: {
          init: JSON.parse(init),
        },
      };
    }
  } catch (error) {
    console.error("Error fetching packages:", error.message);
    return {
      props: {
        init: undefined,
      },
    };
  }
}
