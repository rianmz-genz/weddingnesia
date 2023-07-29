import { DashboardUser, Text } from "@/components";
import BreadCumbers from "@/components/globals/BreadCumbers";
import TopBottomText from "@/components/globals/TopBottomText";
import { GetPackage } from "@/utils";
import { textStyle } from "@/utils/enum";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DataTable from "react-data-table-component";

export default function InvitationsDetail() {
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
      name: "Kehadiran",
      selector: (row) => row.present,
    },
    {
      name: "QR",
      selector: (row) => row.qr,
    },
    {
      name: "Aksi",
      selector: (row) => row.action,
    },
  ];
  const datas = [
    {
      name: "Adrian Aji Septa",
      confirm: "Hadir",
      present: "27-09-2027 11:00",
      qr: (
        <img
          src="/images/scanner.png"
          alt="gambar qr"
          className="w-16 h-16 object-cover"
          width={1080}
          height={1080}
        />
      ),
      action: "ACtion",
    },
    {
      name: "Adrian Aji Septa",
      confirm: "Hadir",
      present: "27-09-2027 11:00",
      qr: (
        <img
          src="/images/scanner.png"
          alt="gambar qr"
          className="w-16 h-16 object-cover"
          width={1080}
          height={1080}
        />
      ),
      action: "ACtion",
    },
    {
      name: "Adrian Aji Septa",
      confirm: "Hadir",
      present: "27-09-2027 11:00",
      qr: (
        <img
          src="/images/scanner.png"
          alt="gambar qr"
          className="w-16 h-16 object-cover"
          width={1080}
          height={1080}
        />
      ),
      action: "ACtion",
    },
    {
      name: "Adrian Aji Septa",
      confirm: "Hadir",
      present: "27-09-2027 11:00",
      qr: (
        <img
          src="/images/scanner.png"
          alt="gambar qr"
          className="w-16 h-16 object-cover"
          width={1080}
          height={1080}
        />
      ),
      action: "ACtion",
    },
    {
      name: "Adrian Aji Septa",
      confirm: "Hadir",
      present: "27-09-2027 11:00",
      qr: (
        <img
          src="/images/scanner.png"
          alt="gambar qr"
          className="w-16 h-16 object-cover"
          width={1080}
          height={1080}
        />
      ),
      action: "ACtion",
    },
    {
      name: "Adrian Aji Septa",
      confirm: "Hadir",
      present: "27-09-2027 11:00",
      qr: (
        <img
          src="/images/scanner.png"
          alt="gambar qr"
          className="w-16 h-16 object-cover"
          width={1080}
          height={1080}
        />
      ),
      action: "ACtion",
    },
    {
      name: "Adrian Aji Septa",
      confirm: "Hadir",
      present: "27-09-2027 11:00",
      qr: (
        <img
          src="/images/scanner.png"
          alt="gambar qr"
          className="w-16 h-16 object-cover"
          width={1080}
          height={1080}
        />
      ),
      action: "ACtion",
    },
    {
      name: "Adrian Aji Septa",
      confirm: "Hadir",
      present: "27-09-2027 11:00",
      qr: (
        <img
          src="/images/scanner.png"
          alt="gambar qr"
          className="w-16 h-16 object-cover"
          width={1080}
          height={1080}
        />
      ),
      action: "ACtion",
    },
    {
      name: "Adrian Aji Septa",
      confirm: "Hadir",
      present: "27-09-2027 11:00",
      qr: (
        <img
          src="/images/scanner.png"
          alt="gambar qr"
          className="w-16 h-16 object-cover"
          width={1080}
          height={1080}
        />
      ),
      action: "ACtion",
    },
    {
      name: "Adrian Aji Septa",
      confirm: "Hadir",
      present: "27-09-2027 11:00",
      qr: (
        <img
          src="/images/scanner.png"
          alt="gambar qr"
          className="w-16 h-16 object-cover"
          width={1080}
          height={1080}
        />
      ),
      action: "ACtion",
    },
    {
      name: "Adrian Aji Septa",
      confirm: "Hadir",
      present: "27-09-2027 11:00",
      qr: (
        <img
          src="/images/scanner.png"
          alt="gambar qr"
          className="w-16 h-16 object-cover"
          width={1080}
          height={1080}
        />
      ),
      action: "ACtion",
    },
  ];
  return (
    <DashboardUser>
      <div className="w-11/12 mx-auto mt-6">
        <BreadCumbers back={"/dashboard"} items={items} />
        <div className="w-full flex mt-8 space-x-3">
          <img
            className="w-6/12"
            src="/images/mockuplaptop.png"
            alt="Gambar Cover"
            width={1080}
            height={1080}
          />
          <div className="w-6/12 space-y-3 flex flex-col justify-start">
            {details.map(({ top, bottom }, idx) => (
              <TopBottomText key={idx} top={top} bottom={bottom} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 my-12">
        <DataTable
          selectableRows
          pagination={datas.length > 10}
          title={"Daftar Tamu Undangan"}
          progressPending={false}
          columns={columns}
          data={datas}
          onSelectedRowsChange={(row) => console.log(row.selectedRows)}
          fixedHeader
        />
      </div>
    </DashboardUser>
  );
}
