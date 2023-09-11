import React from "react";
import { BiRefresh } from "react-icons/bi";
import { FiCheckCircle, FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { RiShareCircleLine } from "react-icons/ri";

export default function DetailInvitationAction({
  showGuest,
  checkinGuest,
  openEdit,
  openDelete,
  sendEmailInvitation,
}) {
  return (
    <ul className="flex w-full my-2 flex-wrap gap-2 transition-all duration-300">
      <IconButton
        onClick={showGuest}
        title="Lihat halaman tamu"
        className={"hover:bg-green-500/10 hover:text-green-500"}
      >
        <FiEye />
      </IconButton>
      <IconButton
        onClick={checkinGuest}
        title="Menghadirkan Tamu"
        className={"hover:bg-green-500/10 hover:text-green-500"}
      >
        <FiCheckCircle />
      </IconButton>
      <IconButton className={"hover:bg-orange-500/10 hover:text-orange-500"}>
        <BiRefresh />
      </IconButton>
      <IconButton
        onClick={sendEmailInvitation}
        className={"hover:bg-indigo-500/10 hover:text-indigo-500"}
      >
        <RiShareCircleLine />
      </IconButton>
      <IconButton
        onClick={openEdit}
        className={"hover:bg-blue-500/10 hover:text-blue-500"}
      >
        <FiEdit />
      </IconButton>
      <IconButton
        onClick={openDelete}
        className={"hover:bg-red-500/10 hover:text-red-500"}
      >
        <FiTrash />
      </IconButton>
    </ul>
  );
}

const IconButton = ({ className, children, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`transition-all duration-300 cursor-pointer rounded-md text-lg p-1 ${className}`}
    >
      {children}
    </button>
  );
};
