"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../product-card";
import plytyMeblowe from "@/app/[locale]/data/plyty-meblowe";
import plytyBudowlane from "@/app/[locale]/data/plyty-budowlane";
import plytySpecjalistyczne from "@/app/[locale]/data/plyty-specjalistyczne";
import plytyOpakowaniowe from "@/app/[locale]/data/plyty-opakowaniowe";
import plytyPilsniowe from "@/app/[locale]/data/plyty-pilsniowe";
import sklejki from "@/app/[locale]/data/sklejki";
import productCategories from "@/app/[locale]/data/product-categories";
import servicesData from "@/app/[locale]/data/services";

export default function ProductsCarousel({ title, content }) {
  const settings2xl = {
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

  const settingsXl = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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

  return (
    <>
      <section className="relative py-5 px-0 hidden xl:block lg:p-8 w-[90%] mx-auto ">
        {title && <h3 className="mx-auto text-center mb-8">{title}</h3>}
        <div className="hidden lg:block">
          <Slider {...settings2xl} className="relative flex gap-6 pl-20">
            {content === "plytyMeblowe" &&
              plytyMeblowe.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={`/pl/produkty/plyty-meblowe/${plyta.slug}`}
                    isInCarousel
                  />
                </li>
              ))}

            {content === "plytyBudowlane" &&
              plytyBudowlane.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    whiteIcon={plyta.whiteIcon}
                    href={`/pl/produkty/plyty-budowlane/${plyta.slug}`}
                    isRed
                    isInCarousel
                  />
                </li>
              ))}

            {content === "plytySpecjalistyczne" &&
              plytySpecjalistyczne.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={`/pl/produkty/plyty-specjalistyczne/${plyta.slug}`}
                    isInCarousel
                  />
                </li>
              ))}

            {content === "plytyOpakowaniowe" &&
              plytyOpakowaniowe.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={plyta.href}
                    isInCarousel
                  />
                </li>
              ))}

            {content === "plytyPilsniowe" &&
              plytyPilsniowe.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    whiteIcon={plyta.whiteIcon}
                    href={`/pl/produkty/plyty-pilsniowe/${plyta.slug}`}
                    isRed
                    isInCarousel
                  />
                </li>
              ))}

            {content === "sklejki" &&
              sklejki.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    whiteIcon={plyta.whiteIcon}
                    href={`/pl/produkty/sklejki/${plyta.slug}`}
                    isRed
                    isInCarousel
                  />
                </li>
              ))}

            {content === "productCategories" &&
              productCategories.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={plyta.href}
                    isInCarousel
                  />
                </li>
              ))}

            {content === "servicesData" &&
              servicesData.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    // href={plyta.href}
                    href="/pl/uslugi"
                    isInCarousel
                  />
                </li>
              ))}
          </Slider>
        </div>
      </section>

      {/* <section className="relative py-5 px-0 hidden xl:block 2xl:hidden lg:p-8 w-[90%] mx-auto ">
        {title && <h3 className="mx-auto text-center mb-8">{title}</h3>}
        <div className="hidden lg:block">
          <Slider {...settingsXl} className="relative flex gap-6 pl-20">
            {content === "plytyMeblowe" &&
              plytyMeblowe.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={plyta.href}
                  />
                </li>
              ))}

            {content === "plytyBudowlane" &&
              plytyBudowlane.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={plyta.href}
                  />
                </li>
              ))}

            {content === "plytySpecjalistyczne" &&
              plytySpecjalistyczne.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={plyta.href}
                  />
                </li>
              ))}

            {content === "plytyOpakowaniowe" &&
              plytyOpakowaniowe.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={plyta.href}
                  />
                </li>
              ))}

            {content === "plytyPilsniowe" &&
              plytyPilsniowe.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={plyta.href}
                  />
                </li>
              ))}

            {content === "sklejki" &&
              sklejki.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={plyta.href}
                  />
                </li>
              ))}

            {content === "productCategories" &&
              productCategories.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={plyta.href}
                  />
                </li>
              ))}

            {content === "servicesData" &&
              servicesData.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={plyta.href}
                  />
                </li>
              ))}
          </Slider>
        </div>
      </section> */}
    </>
  );
}
