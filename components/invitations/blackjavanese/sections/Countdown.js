import { Text } from "@/components";
import { InvitationContext } from "@/context/invitation";
import { dateNow } from "@/utils";
import { textStyle } from "@/utils/enum";
import React, { useContext, useEffect, useState } from "react";

export default function CountdownBlackJavanese() {
  const { wedding_date } = useContext(InvitationContext);
  const now = wedding_date ?? new Date();
  const targetDate = new Date(now).getTime();
  const [countdown, setCountdown] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => {
      setIsMounted(false);
      clearInterval(timer);
    };
  }, [wedding_date]);

  function calculateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }
  const countdownData = [
    {
      label: "Hari",
      value: countdown.days,
    },
    {
      label: "Jam",
      value: countdown.hours,
    },
    {
      label: "Menit",
      value: countdown.minutes,
    },
    {
      label: "Detik",
      value: countdown.seconds,
    },
  ];
  return (
    <div className="w-full py-12 bg-gray-100">
      <Text style={textStyle.smallTitleAllura} className={"text-center"}>
        Menghitung Hari
      </Text>
      <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto gap-3 mt-6">
        {isMounted &&
          countdownData.map(({ label, value }, i) => (
            <CountdownCard key={i} label={label} value={value} />
          ))}
      </ul>
    </div>
  );
}
function CountdownCard({ label, value }) {
  return (
    <li className="flex flex-col items-center shadow w-full p-8">
      <Text style={textStyle.smallTitleAllura}>{value}</Text>
      <Text>{label}</Text>
    </li>
  );
}
