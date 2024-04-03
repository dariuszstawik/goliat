"use client";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({
  productCardImg,
  alt,
  productCardTitle,
  productCardSubtitle,
  icon,
  whiteIcon,
  isRed,
  href,
  isInCarousel,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${
        isInCarousel
          ? "w-[372px] xl:w-[300px] 2xl:w-[372px]"
          : "w-[310px] lg:w-[372px]"
      }  h-[488px] flex flex-col border-[1px] border-black rounded-xl overflow-hidden shrink-0 ${
        isRed
          ? isHovered &&
            "bg-primaryRed hover:shadow-2xl transition-all duration-200"
          : isHovered &&
            "bg-primaryYellow hover:shadow-2xl transition-all duration-200"
      }   `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[312px] overflow-hidden">
        <img
          src={productCardImg ? productCardImg : "/plyta-budowlana-osb.png"}
          alt={alt ? alt : "product-card"}
          className="min-h-full object-cover"
        />
      </div>
      <div
        className={`border-t-[1px] border-t-black grow bg-transparent hover:${
          isRed ? "bg-primaryRed" : "bg-primaryYellow"
        }`}
      >
        <div
          className={`w-20 h-20 ${
            isRed
              ? isHovered
                ? "bg-white"
                : "bg-primaryRed"
              : isHovered
              ? "bg-white"
              : "bg-primaryYellow"
          } flex justify-center items-center border-[1px] border-black rounded-full mx-auto -translate-y-1/2`}
        >
          <img
            src={isHovered ? icon : whiteIcon ? whiteIcon : icon}
            alt="asset"
            className={`object-cover w-8 `}
          />
        </div>
        <div
          className={`flex flex-col justify-center items-center gap-2 grow -translate-y-1/4 px-6 ${
            isRed && isHovered && "text-white"
          }`}
        >
          <h4 className="text-center">{productCardTitle}</h4>
          {productCardSubtitle ? (
            productCardSubtitle
          ) : href ? (
            <Link
              href={href ? href : ""}
              className={`${!isRed && isHovered && "text-primaryRed"}`}
            >
              Zobacz więcej
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
