import { Button, DashboardUser, Input, Text } from "@/components";
import BreadCumbers from "@/components/globals/BreadCumbers";
import DetailInvitationAction from "@/components/globals/DetailInvitationAction";
import TopBottomText from "@/components/globals/TopBottomText";
import { GetPackage } from "@/utils";
import { textStyle } from "@/utils/enum";
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

export default function InvitationsDetail() {
  const [guestId, setGuestId] = useState("");
  const [guests, setGuests] = useState([]);
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState(0);
  const [guestEmail, setGuestEmail] = useState("");
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const router = useRouter();
  const items = ["Undangan", router.query.name];
  const details = [
    {
      top: "Undangan Milik",
      bottom: <span className="text-2xl font-bold">{router.query.name}</span>,
    },
    {
      top: "Link",
      bottom: (
        <Link href={"/"} className="italic underline">
          https://asjkajskasj
        </Link>
      ),
    },
    {
      top: "Tanggal Nikah",
      bottom: "29-06-2027",
    },
    {
      top: "Paket",
      bottom: GetPackage(),
    },
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
      // present: "27-09-2027 11:00",
      present: guest.attendace_at ?? "Belum hadir",
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
          checkinGuest={() => handleCheckin(guest.qr_code)}
          openDelete={() => openDelete(guest.id)}
          openEdit={() => openEdit(guest.id)}
          sendEmailInvitation={() => handleSendEmailInvitation(guest.id)}
        />
      ),
    };
  };

  useEffect(() => {
    GetGuestsByInvitationId("5302a206-55b1-49fb-8a13-c6e992e5c213").then(
      (res) => {
        const guests = res.data.guests;
        setGuests(guests);
      }
    );
  }, []);

  const handleCheckin = (paramGuestCode) => {
    GuestCheckin(paramGuestCode).then((res) => {
      if (res.status === true) {
        console.log("success checkin");
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
  const handleUpdateGuest = () => {
    const data = { name: guestName, email: guestEmail, phone: guestPhone };
    GuestUpdate(guestId, data).then((res) => {
      setIsOpenDelete(false);
      if (res.status === true) {
        console.log("success update");
      }
      if (res.status === false) {
        console.log("error update");
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
  const handleDeleteGuest = () => {
    GuestDeleteById(guestId).then((res) => {
      setIsOpenDelete(false);
      console.log(res);
      if (res.status === true) {
        console.log("success delete");
      }
      if (res.status === false) {
        console.log("error delete");
      }
    });
  };
  return (
    <>
      <Modals onClose={onCloseDelete} trigger={isOpenDelete}>
        <h1>Apakah anda yakin menghapus tamu ini?</h1>
        <Button onClick={handleDeleteGuest}>Hapus</Button>
      </Modals>

      <Modals onClose={onCloseEdit} trigger={isOpenEdit}>
        <h1>Update Data Tamu</h1>
        <form
          onSubmit={handleUpdateGuest}
          className="w-full max-w-[450px] bg-white px-6 py-12 rounded-md shadow-lg shadow-blue-600/10 flex flex-col items-center"
        >
          <Text className={"mb-1"} style={textStyle.titleQuestion}>
            Name
          </Text>
          <Input
            autoFocus={true}
            value={guestName}
            placeholder="Name"
            icon={<BiUser className="text-black mr-2" />}
            onChange={(e) => setGuestName(e.target.value)}
          />
          <Text className={"mb-1"} style={textStyle.titleQuestion}>
            Phone
          </Text>
          <Input
            type="number"
            value={guestPhone}
            autoFocus={true}
            placeholder="Phone"
            icon={<BiUser className="text-black mr-2" />}
            onChange={(e) => setGuestPhone(e.target.value)}
          />
          <Text className={"mb-1"} style={textStyle.titleQuestion}>
            Email
          </Text>
          <Input
            type="email"
            value={guestEmail}
            autoFocus={true}
            placeholder="Email"
            icon={<BiUser className="text-black mr-2" />}
            onChange={(e) => setGuestEmail(e.target.value)}
          />
          <Button className={"mt-6 w-full"}>Masuk</Button>
        </form>
      </Modals>
      <DashboardUser>
        <div className="w-11/12 mx-auto mt-6">
          <BreadCumbers back={"/dashboard"} items={items} />
          <div className="w-full flex mt-8 md:space-x-3 md:flex-row flex-col">
            <img
              className="md:w-6/12 w-full h-48 object-cover rounded-md my-2"
              src="/images/mockuplaptop.png"
              alt="Gambar Cover"
              width={1080}
              height={1080}
            />
            <div className="md:w-6/12 w-full max-md:mt-6 space-y-3 flex flex-col justify-start">
              {/* {details.map(({ top, bottom }, idx) => (
              <TopBottomText key={idx} top={top} bottom={bottom} />
            ))} */}
            </div>
          </div>
        </div>
        <div className="md:px-4 px-2 my-12">
          <DataTable
            className="scrollbar"
            selectableRows
            pagination={true}
            title={"Daftar Tamu Undangan"}
            progressPending={false}
            progressComponent={
              <AiOutlineLoading3Quarters className="text-xl text-black animate-spin" />
            }
            columns={columns}
            data={guests.map((guest) => convertToGuestRowTable(guest))}
            onSelectedRowsChange={(row) => console.log(row.selectedRows)}
            fixedHeader
          />
        </div>
      </DashboardUser>
    </>
  );
}
