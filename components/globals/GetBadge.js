import Text from "./Text";

export default function GetBadgeInvitation({ status }) {
  switch (status) {
    case false:
      return (
        <span
          className={`bg-red-500/10 text-red-500 px-4 py-2 text-xs rounded-md`}
        >
          Tidak Aktif
        </span>
      );
    case true:
      return (
        <span className={`bg-green-500/10 text-green-500 px-4 py-2 rounded-md`}>
          Aktif
        </span>
      );
  }
}
