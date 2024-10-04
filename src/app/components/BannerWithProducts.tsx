"use client";

import Slider from "react-slick";
import ProductCard from "./ProductCard";

const BannerWithProducts = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="relative flex h-[726px] items-end bg-primary pb-14 pl-[187px]">
      <p className="absolute left-[150px] top-[116px] font-brusher text-[140px] uppercase leading-[168px] tracking-[1px] text-white/40">
        Future Looks Bright!
      </p>

      {/* Products */}
      <div className="w-full overflow-hidden">
        <div className="w-[1920px]">
          <div className="slider-container">
            <Slider {...settings}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BannerWithProducts;
