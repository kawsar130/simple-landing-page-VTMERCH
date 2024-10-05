import Image from "next/image";

const HeroWithQuote = () => {
  return (
    <section className="primary-background-gradient h-[577px] px-[90px]">
      <div className="flex justify-between">
        {/* Hero Quote Text */}
        <div className="relative flex items-center py-[54px]">
          <Image
            src="/assets/icons/quotes.svg"
            alt="Quote Sign"
            width={221}
            height={221}
            className="absolute left-0 top-[54px]"
          />

          <blockquote className="ml-[60px] whitespace-nowrap font-title text-5xl font-bold uppercase leading-[58px] text-typo-tertiary">
            Our mission is to enlighten, entertain <br />
            and empower current and future <br />
            leaders around the world.
          </blockquote>
        </div>

        {/* Hero Image */}
        <div className="relative -mt-[148px] h-[725px] w-[571px]">
          <Image
            src="/assets/images/img-9.webp"
            alt="Pat's Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroWithQuote;
