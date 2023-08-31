import { Text } from "@/components";
import { textStyle } from "@/utils/enum";
import React from "react";

export default function CountdownBlackJavanese() {
  const countdownData = [
    {
      label: "Hari",
      value: "00",
    },
    {
      label: "Jam",
      value: "00",
    },
    {
      label: "Menit",
      value: "00",
    },
    {
      label: "Detik",
      value: "00",
    },
  ];
  return (
    <div className="w-full bg-slate-50 py-12">
      <Text style={textStyle.smallTitleAllura} className={"text-center"}>
        Menghitung Hari
      </Text>
      <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto gap-3 mt-6">
        {countdownData.map(({ label, value }, i) => (
          <CountdownCard key={i} label={label} value={value} />
        ))}
      </ul>
    </div>
  );
}
function CountdownCard({ label, value }) {
  return (
    <li className="flex flex-col items-center rounded-full shadow w-full p-8">
      <Text style={textStyle.smallTitleAllura}>{value}</Text>
      <Text>{label}</Text>
    </li>
  );
}
