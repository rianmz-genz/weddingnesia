import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import Image from "next/image";
import React from "react";

export default function GuestBookBlackJavanese() {
  return (
    <div id="book" className="py-12 w-full bg-slate-50">
      <Text style={textStyle.smallTitleAllura} className={"text-center"}>
        Buku Tamu
      </Text>
      <div className="w-11/12 mx-auto shadow rounded-md h-96 scrollbar overflow-y-scroll md:px-8 px-4 py-2 md:py-4">
        <ul className="gap-4 flex flex-col">
          {[1, 2, 3, 4, 5, 6, 8, 9, 11].map((item, i) => (
            <CommentCard key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function CommentCard() {
  return (
    <li className="flex gap-2 items-start justify-start">
      <div className="flex justify-center rounded-full w-12 md:w-10 h-10 items-center bg-slate-200">
        <Text>Lu</Text>
      </div>
      <div className="w-full">
        <div className="w-full rounded-md px-4 py-2 bg-slate-100">
          <Text style={textStyle.titleQuestion}>Luffy</Text>
          <Text>
            Sejatinya pernikahan adalah lembaran baru kehidupan, kebahagiaan,
            kebersamaan, dan hal-hal baik lainnya yang menyertai.
          </Text>
        </div>
        <p className="text-xs mt-2">27 Agustus 2023 20.39</p>
      </div>
    </li>
  );
}
