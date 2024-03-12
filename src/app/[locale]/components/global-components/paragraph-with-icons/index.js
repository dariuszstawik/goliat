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
}) {
  return (
    <div className={`w-screen ${hasGrayBg && "bg-primaryGray"}`}>
      <section
        className={`w-[80%] mx-auto py-16 flex ${
          isReverse && "flex-row-reverse"
        } gap-16 justify-center items-center 
      }`}
      >
        <div className="w-[372px] h-[488px] shrink-0 flex justify-center items-center">
          <img src={img} alt="asset" className={`${isOnAboutPage && "w-64"}`} />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-10 mb-9">
            <h2 className="mt-auto">{title}</h2>
            {(icon1 || icon2 || icon3 || icon4 || icon5) && (
              <div className="flex gap-6">
                <Image
                  src={icon1 ? icon1 : "/icon-plyty-meblowe.svg"}
                  alt="icon"
                  width={49}
                  height={35}
                  className="w-12"
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
          <div className="flex items-center ml-auto">
            <h4>Porozmawiaj z handlowcem</h4>
            <span className="text-red-500 ml-4 mr-3">
              {"\u003E\u003E\u003E\u003E"}
            </span>
            <img src="/icon-porozmawiaj.png" alt="icon" className="w-20" />
          </div>
        </div>
      </section>
    </div>
  );
}