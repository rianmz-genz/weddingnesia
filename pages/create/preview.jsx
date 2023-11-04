import React, { useEffect, useState } from "react";
import Text from "../../components/globals/Text";
import { alertStyle, buttonStyle, textStyle } from "../../utils/enum";
import { formatDate } from "@/utils";
import { Button } from "@/components";
import PreviewPage from "@/components/createInvitation/preview";
import Alert from "@/components/globals/Alert";
import Modals from "@/components/globals/Modals";
import { useRouter } from "next/router";
import tempService from "@/api/integrations/temp";
import Cookies from "js-cookie";
import axios from "axios";
export default function PreviewDataInvitation({ pageProps }) {
  const [isHitApi, setIsHitApi] = useState(true);
  const [message, setMessage] = useState("");
  const [statusApi, setStatusApi] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [triggerModal, setTriggerModal] = useState(false);
  const [init, setInit] = useState({});
  const router = useRouter();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!hasLoaded) {
      getData();
    }
  }, [hasLoaded]);
  const tempId = Cookies.get("tempId");
  const getData = async () => {
    try {
      const res = await tempService.get(tempId);
      if (res.status) {
        setInit(res.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response.data);
      }
    } finally {
      setHasLoaded(true);
      setIsHitApi(false);
    }
  };
  // setTimeout(() => {
  //   setIsHitApi(false);
  // }, 500);
  const {
    audio,
    wedding_time_zone,
    bride_name,
    bride_avatar,
    bride_fullname,
    groom_father,
    groom_mother,
    groom_sequence,
    bride_father,
    bride_mother,
    bride_sequence,
    bride_instagram,
    groom_name,
    groom_avatar,
    groom_fullname,
    groom_instagram,
    wedding_date,
    wedding_start,
    wedding_end,
    wedding_location_name,
    wedding_maps,
    reception_date,
    reception_start,
    reception_end,
    reception_location_name,
    reception_maps,
    primary_cover,
    secondary_cover,
    domain,
    title,
    is_groom_first,
    greeting,
    opening_remarks,
    quotes,
    source_quotes,
    albums,
  } = init;
  const grooms = [
    {
      q: "Nama Lengkap",
      a: groom_fullname,
    },
    {
      q: "Nama Panggilan",
      a: groom_name,
    },
    {
      q: "Informasi",
      a:
        "anak " +
        groom_sequence +
        " dari pasangan Bapak " +
        groom_father +
        " dan Ibu" +
        groom_mother,
    },
    {
      q: "Instagram",
      a: `@${groom_instagram}`,
    },
  ];
  const brides = [
    {
      q: "Nama Lengkap",
      a: bride_fullname,
    },
    {
      q: "Nama Panggilan",
      a: bride_name,
    },
    {
      q: "Informasi",
      a:
        "anak " +
        bride_sequence +
        " dari pasangan Bapak " +
        bride_father +
        " dan Ibu" +
        bride_mother,
    },
    {
      q: "Instagram",
      a: `@${bride_instagram}`,
    },
  ];
  const receptions = [
    {
      q: "Tanggal",
      a: formatDate(reception_date),
    },
    {
      q: "Jam Mulai",
      a: reception_start + " " + wedding_time_zone,
    },
    {
      q: "Jam Selesai",
      a: reception_end + " " + wedding_time_zone,
    },
    {
      q: "Alamat",
      a: reception_location_name,
    },
  ];
  const weddings = [
    {
      q: "Tanggal",
      a: formatDate(wedding_date),
    },
    {
      q: "Jam Mulai",
      a: wedding_start + " " + wedding_time_zone,
    },
    {
      q: "Jam Selesai",
      a: wedding_end + " " + wedding_time_zone,
    },
    {
      q: "Alamat",
      a: wedding_location_name,
    },
  ];
  const greetings = [
    {
      q: "Judul Undangan",
      a: "Welcome to Our Wedding",
    },
    {
      q: "Salam Pembuka",
      a: greeting,
    },
    {
      q: "Ucapan Pembuka",
      a: opening_remarks,
    },
  ];
  const quotess = [
    {
      q: "Urutan Mempelai",
      a: is_groom_first ? "Pria - Wanita" : "Wanita - Pria",
    },
    {
      q: "Quotes",
      a: quotes,
    },
    {
      q: "Sumber Quotes",
      a: `-${source_quotes}-`,
    },
  ];

  const handleSubmit = async () => {
    setTriggerModal(false);
    Cookies.remove("tempId");
    Cookies.remove("currentMenu");
    try {
      setIsHitApi(true);
      const res = await tempService.save(tempId);
      if (res.status) {
        setStatusApi(true);
        router.push("/dashboard/invitations");
      }
      setMessage(res.message);
    } catch (error) {
      setStatusApi(true);
      setMessage(error.response.data.message);
    } finally {
      setIsHitApi(false);
      setTrigger(true);
    }
  };
  return (
    <div>
      <Alert
        trigger={trigger}
        style={statusApi ? alertStyle.success : alertStyle.error}
        message={message}
      />
      <Modals trigger={triggerModal} onClose={() => setTriggerModal(false)}>
        <Text style={textStyle.smalltitle} className={"text-center"}>
          Apakah anda yakin ingin membuat undangan?
        </Text>
        <Button
          onClick={handleSubmit}
          style={buttonStyle.blackMedium}
          className={"w-full mt-3"}
        >
          Buat
        </Button>
      </Modals>
      <PreviewPage
        isLoading={isHitApi}
        reception_map={reception_maps}
        albums={albums}
        bride_avatar={bride_avatar}
        brides={brides}
        grooms={grooms}
        groom_avatar={groom_avatar}
        receptions={receptions}
        weddings={weddings}
        wedding_map={wedding_maps}
        slug={domain}
        primary_cover={primary_cover}
        secondary_cover={secondary_cover}
        title={title}
        is_groom_first={is_groom_first}
        greeting={greeting}
        opening_remarks={opening_remarks}
        quotes={quotes}
        source_quotes={source_quotes}
        quotess={quotess}
        greetings={greetings}
        audio={audio}
        onOpenModal={() => {
          if (isHitApi) return;
          setTriggerModal(true);
        }}
      />
    </div>
  );
}
