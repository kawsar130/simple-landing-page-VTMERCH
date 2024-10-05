import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between bg-primary px-[31px] py-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative h-[115px] w-[115px]">
            <Image
              src="/assets/logo/logo-white.svg"
              alt="VTMERCH Logo"
              fill
              className="object-contain invert"
            />
          </div>

          {/* Toggle Menu */}
          <span className="font-title text-[112px] font-extrabold leading-[134px] tracking-[12px] text-typo-bright">
            VTMERCH
          </span>
        </Link>

        <div className="cursor-pointer pr-[125px]">
          <IoIosMenu className="text-6xl text-typo-bright" />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
