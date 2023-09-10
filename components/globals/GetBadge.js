import Text from "./Text";

export default function GetBadgeInvitation({ status }) {
  switch (status) {
    case false:
      return (
        <div className={`bg-red-500/10 text-red-500 px-4 py-2  rounded-md`}>
          <Text>Tidak Aktif</Text>
        </div>
      );
    case true:
      return (
        <div className={`bg-green-500/10 text-green-500 px-4 py-2 rounded-md`}>
          <Text>Aktif</Text>
        </div>
      );
  }
}
