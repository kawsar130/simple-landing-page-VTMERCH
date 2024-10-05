"use client";

import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

const BannerWithProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("/data/banner-products.json");
        setProducts(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    getProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
  };

  return (
    <section className="relative flex h-[726px] items-end bg-primary pb-14 pl-[187px]">
      <p className="absolute left-[150px] top-[116px] font-brusher text-[140px] uppercase leading-[168px] tracking-[1px] text-white/40">
        Future Looks Bright!
      </p>

      {/* Products */}
      <div className="w-full">
        <div className="w-[1920px]">
          {/* Carousel */}

          <div className="slider-container">
            <Slider {...settings}>
              {products.length > 0 &&
                products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BannerWithProducts;
