import BlackJavanese from "@/components/invitations/blackjavanese";
import { BiBook } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { GiBigDiamondRing } from "react-icons/gi";
import { RiGalleryLine } from "react-icons/ri";

const DemoInvitationData = [
  {
    slug: "blackjavanese",
    component: <BlackJavanese />,
    cover: "/images/coverblackjavanese.svg",
    bride: "Adrian & Vinka",
    comment: "Bagus dan simple!",
  },
];

export const ThemeData = [
  {
    label: "Black Javanese",
    slug: "blackjavanese",
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
    icon: <RiGalleryLine />,
    href: "#gallery",
  },
];

export const HealthyInformation = [
  {
    src: "/images/nojabat.svg",
    text: "Menggunakan Salam Namaste Sebagai Ganti Berjabat Tangan",
    w: "w-24",
  },
  {
    src: "/images/masker.svg",
    text: "Wajib Menggunakan Masker",
    w: "w-24",
  },
  {
    src: "/images/jagajarak.svg",
    text: "Saling Menjaga Jarak Dalam Acara",
    w: "w-24",
  },
  {
    src: "/images/cuci.svg",
    text: "Jaga Kebersihan dengan Mencuci Tangan atau Handsanitizer",
    w: "w-24",
  },
];
export default DemoInvitationData;
