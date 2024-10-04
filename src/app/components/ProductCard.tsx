import Image from "next/image";

const ProductCard = () => {
  return (
    <div>
      <div className="relative h-[397px] w-[357px] space-y-4 overflow-hidden rounded-xl">
        <Image
          src="/assets/images/img-1.webp"
          alt="Product Image"
          fill
          objectFit="cover"
        />
      </div>

      <div className="mt-4 space-y-3">
        <p className="font-medium leading-[19px] text-bright">
          Army Green Active Short Sleeve
        </p>
        <div className="flex items-center gap-3 text-xl leading-6">
          <p className="text-bright/80">$ 34.95</p>
          <p className="text-bright line-through">$ 34.95</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
