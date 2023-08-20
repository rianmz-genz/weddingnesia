import BlackJavanese from "@/components/invitations/blackjavanese";
import { BiBook } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { GiBigDiamondRing } from "react-icons/gi";

const DemoInvitationData = [
  {
    slug: "blackjavanese",
    component: <BlackJavanese />,
  },
];

export const NavbarInvitation = [
  {
    icon: <GiBigDiamondRing />,
    href: "#bride",
  },
  {
    icon: <FaLocationDot />,
    href: "#location",
  },
  {
    icon: <BiBook />,
    href: "#book",
  },
];

export const HealthyInformation = [
  {
    src: "/images/nojabat.svg",
    text: "Menggunakan Salam Namaste Sebagai Ganti Berjabat Tangan",
    w: "w-20",
  },
  {
    src: "/images/masker.svg",
    text: "Wajib Menggunakan Masker",
    w: "w-20",
  },
  {
    src: "/images/jagajarak.svg",
    text: "Saling Menjaga Jarak Dalam Acara",
    w: "w-28",
  },

  {
    src: "/images/cuci.svg",
    text: "Jaga Kebersihan dengan Mencuci Tangan atau Handsanitizer",
    w: "w-24",
  },
];
export default DemoInvitationData;
