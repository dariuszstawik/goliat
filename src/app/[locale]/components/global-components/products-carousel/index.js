"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../product-card";

export default function ProductsCarousel({ title }) {
  const settingsLg = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: (
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-left.png"
        alt="chevron-left"
      />
    ),
    nextArrow: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios-glyphs/60/chevron-right.png"
        alt="chevron-right"
      />
    ),
  };

  const settingsSm = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // prevArrow: (
    //   <img
    //     width="60"
    //     height="60"
    //     src="https://img.icons8.com/ios-glyphs/60/chevron-left.png"
    //     alt="chevron-left"
    //     className="absolute top-0 left-32 z-200"
    //   />
    // ),
    // nextArrow: (
    //   <div className="bg-gray-400 w-16 rounded-full">
    //     <img
    //       width="60"
    //       height="60"
    //       src="https://img.icons8.com/ios-glyphs/60/chevron-right.png"
    //       alt="chevron-right"
    //       className="translate-x-full pr-[200px]"
    //     />
    //   </div>
    // ),
    prevArrow: (
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-left.png"
        alt="chevron-left"
        className="absolute top-0 left-32 z-200 !ml-32"
      />
    ),
    nextArrow: (
      <div className="bg-gray-400 w-16 rounded-full">
        <img
          width="60"
          height="60"
          src="https://img.icons8.com/ios-glyphs/60/chevron-right.png"
          alt="chevron-right"
          className="translate-x-full pr-[200px]"
        />
      </div>
    ),
  };

  return (
    <section className="relative bg-white py-5 px-0 lg:p-8 w-[90%] mx-auto ">
      <h3 className="mx-auto text-center mb-8">{title}</h3>
      <div className="hidden lg:block">
        <Slider {...settingsLg} className="relative flex gap-6 pl-20">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>

      <div className="lg:hidden">
        <Slider {...settingsSm}></Slider>
      </div>
    </section>
  );
}
