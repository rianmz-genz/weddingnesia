const {
  default: GetBadgeInvitation,
} = require("@/components/globals/GetBadge");
const { default: Text } = require("@/components/globals/Text");
const { textStyle } = require("@/utils/enum");
const { default: Link } = require("next/link");
const { FiEye, FiEdit } = require("react-icons/fi");

export default function InvitationItem({ groom_name, bride_name, slug }) {
  return (
    <li className="w-full bg-white shadow-sm px-4 py-2 rounded-md flex justify-between items-center">
      <Text style={textStyle.description}>
        {groom_name} dan {bride_name}
      </Text>
      <div className="flex items-center justify-center space-x-4 text-xl">
        <Link href={`/dashboard/invitations/${slug}`}>
          <FiEye />
        </Link>
        <Link href={"#"}>
          <FiEdit />
        </Link>
        <GetBadgeInvitation />
      </div>
    </li>
  );
}
