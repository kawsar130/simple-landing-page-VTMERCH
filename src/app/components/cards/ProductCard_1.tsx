import Image from "next/image";
import { Product } from "@/types";
import { FC } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard_1: FC<ProductCardProps> = ({ product }) => {
  const { name, price, sale_price, thumbnail } = product;

  return (
    <div>
      {/* Product Image */}
      <div className="relative h-[397px] w-[357px] space-y-4 overflow-hidden rounded-xl">
        <Image
          src={thumbnail}
          alt="Product Image"
          fill
          sizes="(max-width: 600px) 400px, 400px"
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 space-y-3">
        <p className="text-typo-tertiary font-medium leading-[19px]">{name}</p>
        <div className="flex items-center gap-3 text-xl font-medium leading-6">
          <p className="text-typo-tertiary/80">$ {sale_price}</p>
          <p className="text-typo-tertiary line-through">$ {price}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard_1;
