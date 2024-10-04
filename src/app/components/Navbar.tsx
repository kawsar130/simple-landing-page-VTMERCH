import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-primary flex items-center justify-between px-[31px] py-10">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <div className="relative h-[115px] w-[115px]">
          <Image
            src="/assets/logo/logo-white.svg"
            alt="VTMERCH Logo"
            fill
            objectFit="contain"
            className="invert"
          />
        </div>

        {/* Toggle Menu */}
        <span className="text-typo-bright font-title text-[112px] font-extrabold leading-[134px] tracking-[12px]">
          VTMERCH
        </span>
      </Link>

      <div className="cursor-pointer pr-[125px]">
        <IoIosMenu className="text-typo-bright text-6xl" />
      </div>
    </nav>
  );
};
export default Navbar;
