import Image from "next/image";
import ProductCard from "../product-card";

export default function ParagraphWithIcons({
  title,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  img,
  isRed,
  hasGrayBg,
  children,
  isOnAboutPage,
  isReverse,
  locale,
}) {
  return (
    <div className={`w-screen ${hasGrayBg && "bg-primaryGray"}`}>
      <section
        className={`w-[80%] mx-auto py-16 flex ${
          isReverse && "flex-row-reverse"
        } flex flex-col lg:flex-row gap-0 lg:gap-16 lg:justify-center lg:items-center
      }`}
      >
        <div className="w-[372px] h-[488px] shrink-0 justify-center items-center hidden lg:flex relative">
          <Image
            src={img}
            width={372}
            height={488}
            // fill
            sizes={372}
            alt="asset"
            className={`${isOnAboutPage && "w-64"}`}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row gap-2 md:gap-8 lg:gap-2 2xl:gap-8 mb-9">
            <h2 className="mt-auto mb-2 xl:mr-4 leading-tight">{title}</h2>
            {(icon1 || icon2 || icon3 || icon4 || icon5) && (
              <div className="flex gap-4 my-auto">
                <Image
                  src={icon1 ? icon1 : "/icon-plyty-meblowe.svg"}
                  alt="icon"
                  width={49}
                  height={35}
                  className="h-9"
                />
                <Image
                  src={icon2 ? icon2 : "/icon-plyty-meblowe.svg"}
                  alt="icon"
                  width={49}
                  height={35}
                  className="h-9"
                />
                <Image
                  src={icon3 ? icon3 : "/icon-plyty-meblowe.svg"}
                  alt="icon"
                  width={49}
                  height={35}
                  className="h-9"
                />
                <Image
                  src={icon4 ? icon4 : "/icon-plyty-meblowe.svg"}
                  alt="icon"
                  width={49}
                  height={35}
                  className="h-9"
                />
                <Image
                  src={icon5 ? icon5 : "/icon-plyty-meblowe.svg"}
                  alt="icon"
                  width={49}
                  height={35}
                  className="h-9"
                />
              </div>
            )}
          </div>
          <div>{children}</div>
          <div className="flex items-center ml-auto mt-4">
            {locale === "en" ? (
              <h4 className="">Talk to a sales representative</h4>
            ) : (
              <h4 className="">Porozmawiaj z&nbsp;handlowcem</h4>
            )}
            <span className="text-red-500 ml-4 mr-3">
              {"\u003E\u003E\u003E\u003E"}
            </span>
            <a href="tel:+48 62 737 64 80">
              <img src="/icon-porozmawiaj.png" alt="icon" className="w-20" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
