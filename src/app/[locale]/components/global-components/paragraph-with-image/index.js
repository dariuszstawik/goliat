import Image from "next/image";
import ProductCard from "../product-card";

export default function ParagraphWithImage({
  title,
  icon,
  whiteIcon,
  hasNoTitleIcon,
  productCardImg,
  productCardTitle,
  productCardSubtitle,
  img,
  href,
  isRed,
  hasGrayBg,
  children,
  lang,
}) {
  return (
    <div
      className={`w-screen ${hasGrayBg && "bg-primaryGray"} overflow-x-hidden`}
    >
      <section
        className={`${
          img ? "w-[100%]" : "w-[80%]"
        } mx-auto py-8 lg:py-16 flex flex-col lg:flex-row gap-16 lg:justify-center lg:items-center
      }`}
      >
        {img ? (
          <div className="relative w-[530px] h-[488px] shrink-0">
            <img src={img} alt="asset" className="absolute -top-20 left-0" />
          </div>
        ) : (
          <ProductCard
            productCardImg={productCardImg}
            productCardTitle={productCardTitle}
            icon={icon}
            whiteIcon={whiteIcon}
            href={href}
            productCardSubtitle={productCardSubtitle}
            isRed={isRed}
          />
        )}

        <div
          className={`${
            img && "w-[80%] lg:pr-16 xl:pr-32 mx-auto -mt-20 lg:mt-0"
          } flex flex-col grow`}
        >
          <div className="flex gap-16 mb-9">
            <h2 className="mt-auto leading-tight">{title}</h2>
            {!hasNoTitleIcon && (
              <img
                src={icon ? icon : "/icon-plyty-meblowe.svg"}
                alt="icon"
                // width={72}
                // height={66}
                className={`w-14 lg:w-16 ${img && "hidden lg:block"}`}
              />
            )}
          </div>
          <div>{children}</div>
          <div className="flex items-center ml-auto mt-4 ">
            {lang === "en" ? (
              <h4 className="">Talk to a sales representative</h4>
            ) : (
              <h4 className="">Porozmawiaj z&nbsp;handlowcem</h4>
            )}
            <span className="text-red-500 ml-2 lg:ml-4 mr-8 lg:mr-3">
              {"\u003E\u003E\u003E\u003E"}
            </span>

            {isRed ? (
              <a href="tel:+48 62 737 64 80">
                <img
                  src="/icon-porozmawiaj-red.svg"
                  alt="icon"
                  className="w-20"
                />
              </a>
            ) : (
              <a href="tel:+48 62 737 64 80">
                <img src="/icon-porozmawiaj.png" alt="icon" className="w-20" />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
