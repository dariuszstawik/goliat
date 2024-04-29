"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../product-card";
import {
  plytyPilsniowe,
  plytyPilsnioweEn,
} from "@/app/[locale]/data/plyty-pilsniowe";
import PlytyPilsniowe from "@/app/[locale]/produkty/plyty-pilsniowe/page";
import { servicesData, servicesDataEn } from "@/app/[locale]/data/services";
import {
  productCategories,
  productCategoriesEn,
} from "@/app/[locale]/data/product-categories";
import {
  plytyMeblowe,
  plytyMebloweEn,
} from "@/app/[locale]/data/plyty-meblowe";
import {
  plytyBudowlane,
  plytyBudowlaneEn,
} from "@/app/[locale]/data/plyty-budowlane";
import {
  plytySpecjalistyczne,
  plytySpecjalistyczneEn,
} from "@/app/[locale]/data/plyty-specjalistyczne";
import { sklejki, sklejkiEN } from "@/app/[locale]/data/sklejki";
import {
  plytyOpakowaniowe,
  plytyOpakowanioweEn,
} from "@/app/[locale]/data/plyty-opakowaniowe";
import {
  productsMain,
  productsMainEn,
} from "@/app/[locale]/data/products-main";

export default function ProductsCarousel({ title, content, locale }) {
  const plytyMebloweList = locale === "en" ? plytyMebloweEn : plytyMeblowe;

  const plytyBudowlaneList =
    locale === "en" ? plytyBudowlaneEn : plytyBudowlane;

  const plytySpecjalistyczneList =
    locale === "en" ? plytySpecjalistyczneEn : plytySpecjalistyczne;

  const sklejkiList = locale === "en" ? sklejkiEN : sklejki;

  const plytyPilsnioweList =
    locale === "en" ? plytyPilsnioweEn : plytyPilsniowe;

  const plytyOpakowanioweList =
    locale === "en" ? plytyOpakowanioweEn : plytyOpakowaniowe;

  const servicesDataList = locale === "en" ? servicesDataEn : servicesData;

  const productCategoriesList =
    locale === "en" ? productCategoriesEn : productCategories;

  const productsMainList = locale === "en" ? productsMainEn : productsMain;

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
              plytyMebloweList.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={`/${locale}/produkty/plyty-meblowe/${plyta.slug}`}
                    isInCarousel
                    locale={locale}
                  />
                </li>
              ))}

            {content === "plytyBudowlane" &&
              plytyBudowlaneList.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    whiteIcon={plyta.whiteIcon}
                    href={`/${locale}/produkty/plyty-budowlane/${plyta.slug}`}
                    isRed
                    isInCarousel
                    locale={locale}
                  />
                </li>
              ))}

            {content === "plytySpecjalistyczne" &&
              plytySpecjalistyczneList.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={`/${locale}/produkty/plyty-specjalistyczne/${plyta.slug}`}
                    isInCarousel
                    locale={locale}
                  />
                </li>
              ))}

            {content === "plytyOpakowaniowe" &&
              plytyOpakowanioweList.map((plyta) => (
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
              plytyPilsnioweList.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    whiteIcon={plyta.whiteIcon}
                    href={`/${locale}/produkty/plyty-pilsniowe/${plyta.slug}`}
                    isRed
                    isInCarousel
                    locale={locale}
                  />
                </li>
              ))}

            {content === "sklejki" &&
              sklejkiList.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    whiteIcon={plyta.whiteIcon}
                    href={`/${locale}/produkty/sklejki/${plyta.slug}`}
                    isRed
                    isInCarousel
                  />
                </li>
              ))}

            {content === "productCategories" &&
              productCategoriesList.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    href={`/${locale}${plyta.href}`}
                    isInCarousel
                    locale={locale}
                  />
                </li>
              ))}

            {content === "productsMain" &&
              productsMainList.map((plyta) => (
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
              servicesDataList.map((plyta) => (
                <li key={plyta.id}>
                  <ProductCard
                    productCardImg={plyta.img}
                    alt={plyta.name}
                    productCardTitle={plyta.name}
                    icon={plyta.icon}
                    locale={locale}
                    href={`/${locale}/uslugi`}
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
