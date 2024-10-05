import Logo from "../../../public/assets/logo/logo-white.svg";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between bg-primary px-[31px] py-10">
        {/* Logo */}
        <Link href="/" className="flex w-fit items-center gap-2.5">
          <Logo fill="white" width={115} height={115} />
          <span className="font-title text-[112px] font-extrabold leading-[134px] tracking-[12px] text-typo-tertiary">
            VTMERCH
          </span>
        </Link>

        {/* Menu Icon */}
        <div className="cursor-pointer pr-[125px]">
          <IoIosMenu className="text-6xl text-typo-tertiary" />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
