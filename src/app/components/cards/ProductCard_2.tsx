import Image from "next/image";
import { Product } from "@/types";
import { FC } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard_2: FC<ProductCardProps> = ({ product }) => {
  const { name, price, sale_price, thumbnail } = product;

  return (
    <div className="bg-tertiary-light card-shadow flex w-[386px] flex-col gap-6 rounded-xl p-4 pb-6">
      {/* Product Image */}
      <div className="relative h-[354px] w-full overflow-hidden rounded-lg">
        <Image
          src={thumbnail}
          alt="Product Image"
          fill
          sizes="(max-width: 600px) 400px, 400px"
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex w-full flex-col gap-4 px-2">
        <p className="font-semibold leading-[19px] text-typo-secondary">
          {name}
        </p>
        <div className="flex items-center gap-3 text-xl font-medium leading-6">
          <p className="text-typo-secondary">$ {sale_price}</p>
          <p className="text-typo-disabled line-through">$ {price}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard_2;
