import Image from "next/image";
import Background from "@/public/images/background.png";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-screen h-screen relative">
      <Image src={Background} alt="background error page" className="w-full h-full object-cover" />
      <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold">404</h1>
        <span className="text-white">Sorry, we were unable to find that page</span>
        <span className="text-white">Start from <Link href="/" className="underline hover:decoration-yellow-700">home page</Link></span>
      </div>
    </div>
  );
}
