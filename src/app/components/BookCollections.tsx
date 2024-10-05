import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const BookCollections = () => {
  return (
    <section className="section-container flex h-[852px] gap-24 bg-secondary py-[133px]">
      {/* CTA with Signature */}
      <div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-title text-[49px] font-medium uppercase leading-[59px] text-typo-tertiary">
              Patrick Bet-David&apos;s
            </h4>

            <h2 className="primary-text-gradient font-title text-[70px] font-bold uppercase leading-[84px]">
              Signed <br /> Collection
            </h2>
          </div>

          {/* CTA Button */}
          <button className="btn-primary">
            SHOP NOW <FaArrowRightLong className="ml-3" />
          </button>
        </div>

        {/* Signature */}
        <div className="relative -left-8 mt-8 h-[233px] w-[754px]">
          <Image
            src="/assets/images/pat-signature-white.webp"
            alt="Pat Signature"
            sizes="(max-width: 600px) 800px, 800px"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Book Images */}
      <div className="-mt-8 flex h-[588px] gap-6">
        <div className="relative h-full w-[370px]">
          <Image
            src="/assets/images/img-22.webp"
            alt="Book - Choose Your Enemy Wisely"
            fill
            sizes="(max-width: 600px) 400px, 400px"
            className="object-contain object-top"
          />
        </div>

        <div className="relative h-full w-[404px]">
          <Image
            src="/assets/images/img-15.webp"
            alt="Book - Your Next Five Moves"
            fill
            sizes="(max-width: 600px) 450px, 450px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
export default BookCollections;
