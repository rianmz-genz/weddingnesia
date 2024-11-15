import GetGuestBook from "@/api/integrations/invitation/guest/GetGuestBook";
import { Text } from "@/components";
import { InvitationContext } from "@/context/invitation";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

export default function GuestBookSilver() {
  const { id } = useContext(InvitationContext);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    GetGuestBook(id).then((res) => {
      if (res.status) {
        setMessages(res.data.guests);
      }
    });
  }, [id]);
  return (
    <div id="book" className="py-12 w-full overflow-hidden relative">
      {/* <Image
        src="/images/bunga.svg"
        alt="kembang"
        width={1080}
        height={1080}
        className="absolute -bottom-1/3 left-0 w-96 z-0"
      /> */}
      <Text style={textStyle.smallTitleAllura} className={"text-center"}>
        Buku Tamu
      </Text>
      <div className="w-8/12 z-30 mx-auto shadow rounded-md h-96 scrollbar overflow-y-scroll md:px-8 px-4 py-2 md:py-4">
        <ul className="gap-4 flex flex-col">
          {messages.map((item, i) => (
            <CommentCard key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function CommentCard({ item }) {
  const { value, style } = StatusRSVP({ status: "SURE" });
  return (
    <li className="flex gap-2 items-start justify-start">
      {item.avatar_url ? (
        <img
          src={avatar_url}
          alt="profile"
          width={1080}
          height={1080}
          className="rounded-full w-12 md:w-10 h-10"
        />
      ) : (
        <div className="flex justify-center rounded-full w-12 md:w-10 h-10 items-center bg-slate-200">
          <Text>{item.name.substring(0, 2)}</Text>
        </div>
      )}
      <div className="w-full">
        <div className="w-full rounded-md px-4 py-2 bg-slate-100">
          <div className="flex gap-2 items-center">
            <Text style={textStyle.titleQuestion}>{item.name}</Text>
            <div className={`${style} text-xs rounded-full px-2 py-1`}>
              {value}
            </div>
          </div>
          <Text>{item.message}</Text>
        </div>
        <div className="text-[11px] mt-1 flex gap-1">
          <p>{item.updated_at.substring(0, 10)}</p>
          <p>{item.updated_at.substring(11, 16)}</p>
        </div>
      </div>
    </li>
  );
}

export function StatusRSVP({ status }) {
  switch (status) {
    case "ABSENT":
      return { value: "Tidak Hadir", style: "bg-red-500/10 text-red-500" };
    case "SURE":
      return { value: "Hadir", style: "bg-green-500/10 text-green-500" };
    default:
      return { value: "Belum Tahu", style: "bg-yellow-500/10 text-yellow-500" };
  }
}
