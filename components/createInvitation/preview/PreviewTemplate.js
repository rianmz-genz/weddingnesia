import React from "react";
import Text from "../../globals/Text";
import TitleBorder from "../../globals/TitleBorder";
import Image from "next/image";
import QA from "../../globals/QA";

export default function PreviewTemplate({ items, children, title }) {
  return (
    <div className="lg:w-6/12 w-full">
      <TitleBorder>{title}</TitleBorder>
      {items.map(({ q, a }, i) => (
        <QA key={i} q={q} a={a} />
      ))}
      {children}
    </div>
  );
}
