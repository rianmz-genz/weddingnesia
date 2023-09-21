import { Button, DashboardUser, Input, Text } from "@/components";
import BreadCumbers from "@/components/globals/BreadCumbers";
import DetailInvitationAction from "@/components/globals/DetailInvitationAction";
import TopBottomText from "@/components/globals/TopBottomText";
import { GetPackage, formatDate, formatHour } from "@/utils";
import { alertStyle, buttonStyle, textStyle } from "@/utils/enum";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import QRCode from "react-qr-code";
import { getServerSideProps } from "..";
import Modals from "@/components/globals/Modals";
import GetGuestsByInvitationId from "@/api/integrations/invitation/guest/GetGuestsByInvitationId";
import GuestDeleteById from "@/api/integrations/guest/GuestDeleteById";
import GuestCheckin from "@/api/integrations/guest/GuestCheckin";
import GuestUpdate from "@/api/integrations/guest/GuestUpdate";
import { BiUser } from "react-icons/bi";
import GuestSendEmailInvitation from "@/api/integrations/guest/GuestSendEmailInvitation";
import InvitationBySlugApi from "@/api/integrations/invitation/BySlug";
import Image from "next/image";
import Skeleton from "@/components/globals/Skeleton";
import { FiHome, FiPlus } from "react-icons/fi";
import GuestCreate from "@/api/integrations/guest/GuestCreate";
import { InputLeftWithTitle, InputTitle } from "@/components/globals/Input";
import Alert from "@/components/globals/Alert";
import { redirect } from "next/dist/server/api-utils";
import CheckoutApi from "@/api/integrations/payment/CheckoutApi";
import { ShowSnap } from "@/pages/payment";
import GetBadgeInvitation from "@/components/globals/GetBadge";
import DeleteInvitationApi from "@/api/integrations/invitation/Delete";

export default function InvitationsDetail() {
  const [guestId, setGuestId] = useState("");
  const [guests, setGuests] = useState([]);
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState(0);
  const [guestEmail, setGuestEmail] = useState("");
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenDelInv, setIsOpenDelInv] = useState(false);
  const router = useRouter();
  const [invitation, setInvitation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [guestNameCreate, setGuestNameCreate] = useState("");
  const [guestPhoneCreate, setGuestPhoneCreate] = useState(0);
  const [guestEmailCreate, setGuestEmailCreate] = useState("");
  const [snapToken, setSnapToken] = useState("");
  const [deleteText, setDeleteText] = useState("");
  const [message, setMessage] = useState(false);
  const [statusApi, setStatusApi] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const items = [<FiHome key={1} />, router.query.name];
  const details = [
    {
      top: "Undangan Milik",
      bottom: (
        <span className="text-2xl font-bold">
          {invitation?.groom_name} & {invitation?.bride_name}
        </span>
      ),
    },
    {
      top: "Link",
      bottom: (
        <Link
          href={`/theme?sl=blackjavanese&i=${router.query.name}`}
          className="italic underline"
        >
          https://app.weddingnesia.id/theme?sl=blackjavanese&i=
          {router.query.name}
        </Link>
      ),
    },
    {
      top: "Tanggal Nikah",
      bottom: formatDate(invitation?.wedding_date ?? Date.now()),
    },
    {
      top: "Status",
      bottom: (
        <GetBadgeInvitation
          status={invitation.order && invitation?.order[0]?.status == "PAID"}
        />
      ),
    },
    // {
    //   top: "Paket",
    //   bottom: GetPackage(),
    // },
  ];
  const columns = [
    {
      name: "Nama Tamu",
      selector: (row) => row.name,
    },
    {
      name: "Konfirmasi Kehadiran",
      selector: (row) => row.confirm,
    },
    {
      name: "Hadir Pada",
      selector: (row) => row.present,
    },
    {
      name: "Aksi",
      selector: (row) => row.action,
    },
  ];

  const convertRSVP = (status) => {
    let result = "ERROR";
    if (status == "SURE") {
      result = "Akan Datang";
    }
    if (status == "ABSENT") {
      result = "Tidak Datang";
    }
    if (status == "NOT_SURE") {
      result = "Belum Tahu";
    }
    return result;
  };

  const convertToGuestRowTable = (guest) => {
    return {
      name: guest.name,
      confirm: convertRSVP(guest.rsvp_status),
      present:
        guest.attendance_at == null
          ? "Belum Hadir"
          : formatHour(guest.attendance_at),
      qr: (
        <QRCode
          className="w-16 h-16 object-cover"
          value={guest.qr_code}
          width={1080}
          height={1080}
        />
      ),
      action: (
        <DetailInvitationAction
          showGuest={() => router.push(`/guests/${guest.id}/e-ticket`)}
          checkinGuest={() => handleCheckin(guest.qr_code)}
          openDelete={() => openDelete(guest.id)}
          openEdit={() => openEdit(guest.id)}
          sendEmailInvitation={() => handleSendEmailInvitation(guest.id)}
        />
      ),
    };
  };

  useEffect(() => {
    getInvitation();
  }, [router.isReady]);
  const getInvitation = () => {
    setIsLoading(true);
    InvitationBySlugApi({ slug: router.query.name }).then((resInvitation) => {
      console.log(resInvitation);
      if (resInvitation) {
        setInvitation(resInvitation);
        getGuests(resInvitation?.id);
      }
    });
  };
  const getGuests = (id) => {
    GetGuestsByInvitationId(id).then((guests) => {
      console.log(guests.data.guests);
      setGuests(guests.data.guests);
      setIsLoading(false);
    });
  };
  const handleCreateGuest = (e) => {
    e.preventDefault();
    const data = {
      name: guestNameCreate,
      email: guestEmailCreate,
      phone: guestPhoneCreate,
      invitationId: invitation.id,
    };
    GuestCreate(data).then((res) => {
      if (res) {
        getInvitation();
        setStatusApi(true);
        setTrigger(true);
        setMessage("Berhasil menambahkan data tamu");
        setTimeout(() => {
          setTrigger(false);
        }, 4000);
      } else {
        setStatusApi(false);
        setTrigger(true);
        setMessage("Gagal menambahkan data tamu");
        setTimeout(() => {
          setTrigger(false);
        }, 4000);
      }
      setIsOpenCreate(false);
    });
  };

  const handleCheckin = (paramGuestCode) => {
    GuestCheckin(paramGuestCode).then((res) => {
      if (res.status === true) {
        getInvitation();
      }
      if (res.status === false) {
        console.log("error checkin");
      }
    });
  };

  const handleSendEmailInvitation = (paramGuestId) => {
    GuestSendEmailInvitation(paramGuestId).then((res) => {
      if (res.status === true) {
        console.log("success send email invitation");
      }
      if (res.status === false) {
        console.log("error send email invitation");
      }
    });
  };

  const openEdit = (paramGuestId) => {
    const guest = guests.filter((guest) => guest.id === paramGuestId)[0];
    console.log(guest);
    setGuestName(guest.name);
    setGuestEmail(guest.email);
    setGuestPhone(guest.phone);
    setGuestId(paramGuestId);
    setIsOpenEdit(true);
  };
  const onCloseEdit = () => {
    setIsOpenEdit(false);
  };
  const handleUpdateGuest = (e) => {
    e.preventDefault();
    const data = { name: guestName, email: guestEmail, phone: guestPhone };
    GuestUpdate(guestId, data).then((res) => {
      setIsOpenEdit(false);
      if (res) {
        getInvitation();
        setStatusApi(true);
        setTrigger(true);
        setMessage("Berhasil mengubah data tamu");
        setTimeout(() => {
          setTrigger(false);
        }, 4000);
      } else {
        setStatusApi(false);
        setTrigger(true);
        setMessage("Gagal mengubah data tamu");
        setTimeout(() => {
          setTrigger(false);
        }, 4000);
      }
    });
  };
  const openDelete = (paramGuestId) => {
    setGuestId(paramGuestId);
    setIsOpenDelete(true);
  };
  const onCloseDelete = () => {
    setIsOpenDelete(false);
  };
  const onCloseCreate = () => {
    setIsOpenCreate(false);
  };
  const handleDeleteGuest = () => {
    GuestDeleteById(guestId).then((res) => {
      setIsOpenDelete(false);
      if (res) {
        getInvitation();
        setStatusApi(true);
        setTrigger(true);
        setMessage("Berhasil menghapus data tamu");
        setTimeout(() => {
          setTrigger(false);
        }, 4000);
      } else {
        setStatusApi(false);
        setTrigger(true);
        setMessage("Gagal menghapus data tamu");
        setTimeout(() => {
          setTrigger(false);
        }, 4000);
      }
    });
  };
  const handleDelInv = (e) => {
    e.preventDefault();
    // console.log(invitation.id);
    // setIsLoading(true);
    DeleteInvitationApi({ id: invitation.id }).then((res) => {
      setIsOpenDelInv(false);
      console.log(res);
      if (res) {
        getInvitation();
        setStatusApi(true);
        setTrigger(true);
        setMessage("Berhasil menghapus data undangan");
        router.push("/dashboard/invitations");
      } else {
        setStatusApi(false);
        setTrigger(true);
        setMessage("Gagal menghapus data undangan");
        setIsLoading(false);
      }
      setTimeout(() => {
        setTrigger(false);
      }, 4000);
    });
  };
  const handleCO = async (orderId) => {
    // console.log(orderId);
    setIsLoading(true);
    CheckoutApi({ orderId }).then((response) => {
      if (!response.data?.snap_token) {
        setTrigger(true);
        setStatusApi(false);
        setMessage(response.message);
      }
      const token = response.data?.snap_token;
      console.log(token);
      setSnapToken(token);
      setIsLoading(false);
    });
  };
  return (
    <>
      <Alert
        trigger={trigger}
        style={statusApi ? alertStyle.success : alertStyle.error}
        message={message}
      />
      <Modals onClose={onCloseDelete} trigger={isOpenDelete}>
        <Text style={textStyle.description} className="text-center mb-3">
          Apakah anda yakin menghapus tamu ini?
        </Text>
        <div className="flex">
          <Button
            className={"w-full"}
            style={buttonStyle.dangerlarge}
            onClick={handleDeleteGuest}
          >
            Hapus
          </Button>
        </div>
      </Modals>

      {/* create */}
      <Modals onClose={onCloseCreate} trigger={isOpenCreate}>
        <form
          onSubmit={handleCreateGuest}
          className="w-full max-w-[450px] bg-white px-6 py-12 rounded-md shadow-lg shadow-blue-600/10 flex flex-col items-center"
        >
          <Text style={textStyle.title}>Tambah Tamu</Text>
          <div className="w-full flex flex-col gap-3">
            <InputTitle
              label={"Nama"}
              autoFocus={true}
              value={guestNameCreate}
              placeholder="Name"
              required
              onChange={(e) => setGuestNameCreate(e.target.value)}
            />
            <InputLeftWithTitle
              label={"Nomor Telepon"}
              left={"+62"}
              type="number"
              value={guestPhoneCreate}
              autoFocus={true}
              placeholder="Phone"
              required
              onChange={(e) => setGuestPhoneCreate(e.target.value)}
            />
            <InputTitle
              label={"Email"}
              value={guestEmailCreate}
              autoFocus={true}
              placeholder="Email"
              type="email"
              required
              onChange={(e) => setGuestEmailCreate(e.target.value)}
            />
          </div>

          <Button className={"mt-6 w-full"}>Tambah</Button>
        </form>
      </Modals>
      {/* update */}
      <Modals onClose={onCloseEdit} trigger={isOpenEdit}>
        <h1>Update Data Tamu</h1>
        <form
          onSubmit={handleUpdateGuest}
          className="w-full max-w-[450px] bg-white px-6 py-12 rounded-md shadow-lg shadow-blue-600/10 flex flex-col items-center"
        >
          <Text style={textStyle.title}>Tambah Tamu</Text>
          <div className="w-full flex flex-col gap-3">
            <InputTitle
              label={"Nama"}
              autoFocus={true}
              value={guestName}
              placeholder="Name"
              onChange={(e) => setGuestName(e.target.value)}
              required
            />
            <InputLeftWithTitle
              label={"Nomor Telepon"}
              left={"+62"}
              type="number"
              value={guestPhone}
              autoFocus={true}
              placeholder="Phone"
              onChange={(e) => setGuestPhone(e.target.value)}
              required
            />
            <InputTitle
              label={"Email"}
              value={guestEmail}
              autoFocus={true}
              placeholder="Email"
              onChange={(e) => setGuestEmail(e.target.value)}
              type="email"
              required
            />
          </div>
          <Button className={"mt-6 w-full"}>Edit</Button>
        </form>
      </Modals>
      {/* delete inv */}
      <Modals onClose={() => setIsOpenDelInv(false)} trigger={isOpenDelInv}>
        <form
          onSubmit={handleDelInv}
          className="w-full max-w-[450px] bg-white px-6 py-12 rounded-md shadow-blue-600/10 flex flex-col items-center"
        >
          <Text>
            Jika Anda yakin akan menghapus undangan ini tolong ketikan slug
            undangan Anda yaitu &quot;
            <span className="font-bold">{invitation.slug}</span>&quot;
          </Text>
          <Input
            className={"my-3"}
            placeholder={invitation.slug}
            value={deleteText}
            onChange={(e) => setDeleteText(e.target.value)}
          />
          <Button
            disabled={invitation.slug != deleteText}
            className={`${
              invitation.slug != deleteText
                ? "cursor-not-allowed opacity-40"
                : ""
            } w-full`}
            type="submit"
            style={buttonStyle.dangerlarge}
          >
            Hapus
          </Button>
        </form>
      </Modals>
      <DashboardUser>
        <div className="w-11/12 mx-auto mt-6">
          <BreadCumbers back={"/dashboard/invitations"} items={items} />
          <div className="w-full flex mt-8 md:space-x-3 md:flex-row flex-col">
            {isLoading ? (
              <>
                <Skeleton className="bg-slate-200 md:w-6/12 w-full lg:h-64 sm:h-48" />
                <ul className="md:w-6/12 w-full flex flex-col gap-3">
                  <Skeleton className="bg-slate-200 w-1/3 h-12" />
                  <Skeleton className="bg-slate-200 w-2/3 h-12" />
                  <Skeleton className="bg-slate-200 w-1/3 h-12" />
                  <Skeleton className="bg-slate-200 w-2/3 h-12" />
                  <Skeleton className="bg-slate-200 w-1/3 h-12" />
                  <Skeleton className="bg-slate-200 w-2/3 h-12" />
                </ul>
              </>
            ) : (
              <>
                <img
                  className="md:w-6/12 w-full lg:h-64 sm:h-48 object-cover rounded-md my-2"
                  src={invitation?.primary_cover}
                  alt="Gambar Cover"
                  width={1080}
                  height={1080}
                />
                <div className="md:w-6/12 w-full max-md:mt-6 gap-3 flex flex-col justify-start">
                  {details.map(({ top, bottom }, idx) => (
                    <TopBottomText key={idx} top={top} bottom={bottom} />
                  ))}
                  {invitation.status != "PAID" && (
                    <Button
                      className={"w-full"}
                      onClick={() =>
                        handleCO(
                          invitation.order[invitation.order.length - 1].id
                        )
                      }
                      style={buttonStyle.greensmall}
                    >
                      Checkout
                    </Button>
                  )}
                  {snapToken && ShowSnap(snapToken)}
                  <Button
                    className={"w-full"}
                    onClick={() => setIsOpenDelInv(true)}
                    style={buttonStyle.dangersmall}
                  >
                    Hapus
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
        {/* <div className="w-11/12 mx-auto mt-6">
          <div className="w-full flex mt-8 md:space-x-3 md:flex-row flex-col">
            {isLoading ? (
              <Skeleton className="bg-slate-200 w-full h-96" />
            ) : (
              <div className="flex gap-3 ">
                <div>
                  <Text className={"mb-2"}>Checkout</Text>
                  
                </div>
              </div>
            )}
          </div>
        </div> */}
        {/* <div className="md:px-4 px-2 my-12">
          {isLoading ? (
            <Skeleton className="bg-slate-200 w-full h-96" />
          ) : (
            <DataTable
              className="scrollbar"
              selectableRows
              pagination={true}
              title={"Daftar Tamu Undangan"}
              progressPending={false}
              actions={
                <ActionTable
                  onOpenCreate={() => {
                    setIsOpenCreate(true);
                  }}
                />
              }
              progressComponent={
                <AiOutlineLoading3Quarters className="text-xl text-black animate-spin" />
              }
              columns={columns}
              data={guests.map((guest) => convertToGuestRowTable(guest))}
              fixedHeader
            />
          )}
        </div> */}
      </DashboardUser>
    </>
  );
}

const ActionTable = ({ onOpenCreate }) => {
  return (
    <div className="flex">
      <Button
        type="button"
        onClick={onOpenCreate}
        style={buttonStyle.greensmall}
      >
        <FiPlus />
      </Button>
    </div>
  );
};
