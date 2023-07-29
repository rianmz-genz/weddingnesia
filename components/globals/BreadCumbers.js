import Link from "next/link";
import React from "react";

export default function BreadCumbers({ items, back }) {
  return (
    <ul className="flex space-x-3">
      {items?.map((item, idx) => {
        return (
          <div className="flex space-x-3" key={idx}>
            <li>{idx == 0 ? <Link href={back}>{item}</Link> : item}</li>
            {items?.length != idx + 1 && <li>&gt;</li>}
          </div>
        );
      })}
    </ul>
  );
}
