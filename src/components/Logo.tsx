import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="./logo.svg" alt="Logo" width={30} height={30} />
        <p className="text-xl text-neutral-700 font-medium">NextBan.AI</p>
      </div>
    </Link>
  );
};
