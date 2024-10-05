import { FiPhone } from "react-icons/fi";
import Logo from "../../../public/assets/logo/logo-white.svg";
import FacebookIcon from "../../../public/assets/icons/facebook.svg";
import InstagramIcon from "../../../public/assets/icons/instagram.svg";
import TwitterIcon from "../../../public/assets/icons/twitter.svg";
import LinkedInIcon from "../../../public/assets/icons/linkedin.svg";
import VisaIcon from "../../../public/assets/icons/visa.svg";
import ApplePayIcon from "../../../public/assets/icons/apple-pay.svg";
import DinersClubIcon from "../../../public/assets/icons/diners-club.svg";
import AmexIcon from "../../../public/assets/icons/amex.svg";
import PaypalIcon from "../../../public/assets/icons/paypal.svg";
import AmericanExpressIcon from "../../../public/assets/icons/american-express.svg";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="section-container h-[748px] bg-secondary-dark pb-11 pt-12">
      {/* Main Contents */}
      <div>
        {/* Logo */}
        <div className="h-[152px] border-b border-b-[#A6A5A380]">
          <Link href="/" className="flex w-fit items-center gap-2">
            <Logo fill="red" width={112} height={112} />
            <span className="font-title text-[100px] font-extrabold leading-[120px] tracking-[5px] text-typo-tertiary">
              VTMERCH
            </span>
          </Link>
        </div>

        {/* Footer Contents */}
        <div className="mt-12 flex gap-[114px] text-typo-tertiary">
          {/* Newsletter Subscription */}
          <div className="w-[517px]">
            <p className="font-title text-2xl font-medium leading-[29px]">
              Subscribe and be the first to receive notifications about our
              upcoming releases and the latest news.
            </p>

            <div className="mt-12 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="rounded-xl border border-tertiary-light/50 bg-transparent p-3 text-center placeholder-typo-tertiary"
              />
              <button className="btn-primary text-secondary-light w-full px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links and Contact Details */}
          <div className="flex gap-[174px]">
            {/* Customer Services */}
            <div className="max-w-[300px]">
              <h4 className="text-xl font-medium leading-6">
                Customer Services
              </h4>

              <ul className="mt-6 flex flex-col gap-4 text-typo-tertiary/80">
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Search</li>
                <li className="cursor-pointer">Privacy Policy</li>
                <li className="cursor-pointer">Contact Us</li>
                <li className="cursor-pointer">Terms of Service</li>
                <li className="cursor-pointer">Refund policy</li>
                <li className="cursor-pointer">Track Order</li>
              </ul>
            </div>

            {/* Products */}
            <div className="max-w-[300px]">
              <h4 className="text-xl font-medium leading-6">Products</h4>

              <ul className="mt-6 flex flex-col gap-4 text-typo-tertiary/80">
                <li className="cursor-pointer">Featured products</li>
                <li className="cursor-pointer">Bestseller</li>
                <li className="cursor-pointer">Latest products</li>
                <li className="cursor-pointer">All collections</li>
                <li className="cursor-pointer">All products</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="max-w-[300px]">
              <h4 className="text-xl font-medium leading-6">Contact Us</h4>

              <ul className="mt-6 flex flex-col gap-4 text-typo-tertiary/80">
                <li className="cursor-pointer">
                  Available between 8AM to 8PM. Ready to answer your questions.
                </li>
                <li className="cursor-pointer">
                  <a
                    href="tel:+88013456789"
                    className="flex items-center gap-3"
                  >
                    <FiPhone /> 013456789
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="mailto:store@valuetainment.com"
                    className="flex items-center gap-3"
                  >
                    <HiOutlineMail />
                    store@valuetainment.com
                  </a>
                </li>
              </ul>

              {/* Social Media Icons */}
              <div className="mt-4 flex gap-3">
                <Link href="#">
                  <FacebookIcon fill="white" width={20} height={20} />
                </Link>
                <Link href="#">
                  <InstagramIcon fill="white" width={20} height={20} />
                </Link>
                <Link href="#">
                  <TwitterIcon fill="white" width={20} height={20} />
                </Link>
                <Link href="#">
                  <LinkedInIcon fill="white" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Contents */}
      <div className="mt-[120px] flex items-center justify-between text-typo-tertiary/80">
        <p>© 2024 Valuetainment Store. All rights reserved.</p>

        {/* Payment Methods */}
        <div className="flex gap-2">
          <Link href="#">
            <VisaIcon fill="white" width={32} height={20} />
          </Link>
          <Link href="#">
            <ApplePayIcon fill="white" width={32} height={20} />
          </Link>
          <Link href="#">
            <DinersClubIcon fill="white" width={32} height={20} />
          </Link>
          <Link href="#">
            <VisaIcon fill="white" width={32} height={20} />
          </Link>
          <Link href="#">
            <AmexIcon fill="white" width={32} height={20} />
          </Link>
          <Link href="#">
            <PaypalIcon fill="white" width={32} height={20} />
          </Link>
          <Link href="#">
            <AmericanExpressIcon fill="white" width={32} height={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
