import React, { useState } from "react";
import Text from "../../components/globals/Text";
import { alertStyle, buttonStyle, textStyle } from "../../utils/enum";
import TitleBorder from "../../components/globals/TitleBorder";
import ContainerWhite from "../../components/globals/ContainerWhite";
import Image from "next/image";
import QA from "../../components/globals/QA";
import PreviewTemplate from "../../components/createInvitation/preview/PreviewTemplate";
import { formatDate } from "@/utils";
import GoogleMapEmbed from "@/components/createInvitation/GoogleMapEmbed";
import { Button } from "@/components";
import PreviewPage from "@/components/createInvitation/preview";
import GetAllDesign from "@/api/integrations/design/GetAllDesign";
import CreateInvitationApi from "@/api/integrations/invitation/CreateInvitation";
import { CreateInvitationContext } from "@/context/create-invitation";
import Alert from "@/components/globals/Alert";
import Modals from "@/components/globals/Modals";
import Skeleton from "@/components/globals/Skeleton";
import { useRouter } from "next/router";
import SelectTemplateApi from "@/api/integrations/order/SelectTemplate";

export default function PreviewDataInvitation({ pageProps }) {
  const [isHitApi, setIsHitApi] = useState(true);
  const [message, setMessage] = useState("");
  const [statusApi, setStatusApi] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [triggerModal, setTriggerModal] = useState(false);
  const { init, designs } = pageProps;
  const router = useRouter();
  setTimeout(() => {
    setIsHitApi(false);
  }, 500);
  const {
    audio,
    timezone,
    bride_name,
    bride_avatar,
    bride_fullname,
    bride_info,
    bride_instagram,
    groom_name,
    groom_avatar,
    groom_fullname,
    groom_info,
    groom_instagram,
    wedding_date,
    wedding_time_start,
    wedding_time_end,
    wedding_address,
    wedding_map,
    reception_date,
    reception_time_start,
    reception_time_end,
    reception_address,
    reception_map,
    primary_cover,
    secondary_cover,
    slug,
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
      a: groom_info,
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
      a: bride_info,
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
      a: reception_time_start + " " + timezone,
    },
    {
      q: "Jam Selesai",
      a: reception_time_end + " " + timezone,
    },
    {
      q: "Alamat",
      a: reception_address,
    },
  ];
  const weddings = [
    {
      q: "Tanggal",
      a: formatDate(wedding_date),
    },
    {
      q: "Jam Mulai",
      a: wedding_time_start + " " + timezone,
    },
    {
      q: "Jam Selesai",
      a: wedding_time_end + " " + timezone,
    },
    {
      q: "Alamat",
      a: wedding_address,
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

  const handleSubmit = () => {
    setTriggerModal(false);
    setIsHitApi(true);
    init.title = "Welcome to Our Wedding";
    CreateInvitationApi({ data: init }).then((res) => {
      setTrigger(true);
      console.log("response", res);
      if (res) {
        const data = {
          design_id: designs[0].id,
          invitation_id: res.id,
        };
        SelectTemplateApi({ data }).then((resTemplate) => {
          console.log("select", data);
          if (resTemplate) {
            setStatusApi(true);
            setMessage("Berhasil membuat data undangan");
            setTimeout(() => {
              router.push(`/dashboard/invitations/${res.slug}`);
            }, 1500);
          } else {
            setStatusApi(false);
            setMessage(data?.message ?? "Gagal membuat data undangan");
          }
        });
        setIsHitApi(false);
        setTimeout(() => {
          setTrigger(false);
        }, 4000);
      } else {
        setStatusApi(false);
        setMessage("Gagal membuat data undangan");
      }
    });
  };
  const contextValue = {
    isHitApi,
    statusApi,
    message,
    triggerModal,
    trigger,
  };
  return (
    <CreateInvitationContext.Provider value={contextValue}>
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
          reception_map={reception_map}
          albums={albums}
          bride_avatar={bride_avatar}
          brides={brides}
          grooms={grooms}
          groom_avatar={groom_avatar}
          receptions={receptions}
          weddings={weddings}
          wedding_map={wedding_map}
          slug={slug}
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
    </CreateInvitationContext.Provider>
  );
}

export async function getServerSideProps({ req }) {
  try {
    const init = req.cookies.dataInvitation;
    const designs = await GetAllDesign();
    if (!init || !designs) {
      return {
        props: {
          init: null,
          designs: null,
        },
      };
    }
    // Misalnya, jika Anda ingin mengurutkan berdasarkan urutan: Freemium, Premium, Eksklusif, Pro, Elegant
    if (init || designs) {
      return {
        props: {
          init: JSON.parse(init),
          designs,
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
