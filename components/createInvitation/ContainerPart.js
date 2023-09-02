import React from "react";

export default function ContainerPart({ children, className }) {
  return <div className={`w-full ${className}`}>{children}</div>;
}
