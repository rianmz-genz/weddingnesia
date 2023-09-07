import { DashboardUser, Text } from "@/components";
import BreadCumbers from "@/components/globals/BreadCumbers";
import DetailInvitationAction from "@/components/globals/DetailInvitationAction";
import { GetPackage } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import QRCode from "react-qr-code";
import GetGuestsByInvitationId from "@/api/integrations/invitation/guest/GetGuestsByInvitationId";
import TopBottomText from "@/components/globals/TopBottomText";
import Modals from "@/components/globals/Modals";

export default function InvitationsDetail() {
  const invitationId = "5302a206-55b1-49fb-8a13-c6e992e5c213";
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [guests, setGuests] = useState([]);
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
    if (status === "SURE") {
      result = "Akan Datang";
    }
    if (status === "ABSENT") {
      result = "Tidak Datang";
    }
    if (status === "NOT_SURE") {
      result = "Belum Tahu";
    }
    return result;
  };

  const convertToGuestRowTable = (guest) => {
    return {
      name: guest.name,
      confirm: convertRSVP(guest.rsvp_status), // present: "27-09-2027 11:00",
      present: guest.attendace_at ?? "Belum hadir",
      qr: (
        <QRCode
          className="w-16 h-16 object-cover"
          value={guest.qr_code}
          width={1080}
          height={1080}
        />
      ),
      action: <DetailInvitationAction openDelete={openDelete} />,
    };
  };

  useEffect(() => {
    GetGuestsByInvitationId(invitationId).then((res) => {
      const guests = res.data.guests;
      setGuests(guests.map((guest) => convertToGuestRowTable(guest)));
    });
  }, []);

  const openDelete = () => {
    setIsOpenDelete(true);
  };
  const onCloseDelete = () => {
    setIsOpenDelete(false);
  };
  return (
    <>
      <Modals onClose={onCloseDelete} trigger={isOpenDelete}>
        <h1>on delete 2</h1>
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
              {/*{details.map(({ top, bottom }, idx) => (*/}
              {/*  <TopBottomText key={idx} top={top} bottom={bottom} />*/}
              {/*))}*/}
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
            data={guests}
            onSelectedRowsChange={(row) => console.log(row.selectedRows)}
            fixedHeader
          />
        </div>
      </DashboardUser>
    </>
  );
}
