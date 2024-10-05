import Image from "next/image";
import { Product } from "@/types";
import { FC } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, sale_price, thumbnail } = product;

  return (
    <div>
      <div className="relative h-[397px] w-[357px] space-y-4 overflow-hidden rounded-xl">
        <Image
          src={thumbnail}
          alt="Product Image"
          fill
          sizes="(max-width: 600px) 400px, 400px"
          className="object-cover"
        />
      </div>

      <div className="mt-4 space-y-3">
        <p className="font-medium leading-[19px] text-bright">{name}</p>
        <div className="flex items-center gap-3 text-xl font-medium leading-6">
          <p className="text-bright/80">$ {sale_price}</p>
          <p className="text-bright line-through">$ {price}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
