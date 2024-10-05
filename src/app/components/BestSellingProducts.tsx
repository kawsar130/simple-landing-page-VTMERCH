"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard_2 from "./cards/ProductCard_2";

const BestSellingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("/data/best-selling-products.json");
        setProducts(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    getProducts();
  }, []);

  return (
    <section className="section-container bg-tertiary h-[877px] space-y-12">
      {/* Section Heading */}
      <h2 className="font-title text-[70px] font-semibold uppercase leading-[84px] tracking-[3px] text-secondary">
        Buy 1 Get 1 Free <br /> On{" "}
        <span className="outlined-text">Best Selling Products</span>
      </h2>

      {/* Products */}
      <div className="grid grid-cols-4 gap-6">
        {products.length > 0 &&
          products.map((product, index) => (
            <ProductCard_2 key={index} product={product} />
          ))}
      </div>
    </section>
  );
};
export default BestSellingProducts;
