import GetBadgeInvitation from "@/components/globals/GetBadge";
import Text from "@/components/globals/Text";
import { textStyle } from "@/utils/enum";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiEdit, FiEye } from "react-icons/fi";
export default function InvitationItem({ slug, status, id }) {
  const router = useRouter();
  const onClickEdit = () => {
    Cookies.set("tempId", id);
    router.push("/create");
  };
  return (
    <li className="w-full bg-white shadow-sm px-4 py-2 rounded-md flex justify-between items-center">
      <Text style={textStyle.description}>{slug}</Text>
      <div className="flex items-center justify-center space-x-4 text-xl">
        <Link href={`/dashboard/invitations/${slug}`}>
          <FiEye />
        </Link>
        <button onClick={onClickEdit}>
          <FiEdit />
        </button>
        <GetBadgeInvitation status={status} />
      </div>
    </li>
  );
}
