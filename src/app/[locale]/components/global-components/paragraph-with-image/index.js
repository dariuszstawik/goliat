import Image from "next/image";
import ProductCard from "../product-card";

export default function ParagraphWithImage({
  title,
  icon,
  productCardImg,
  productCardTitle,
  img,
  href,
  isRed,
  hasGrayBg,
  children,
}) {
  return (
    <div className={`w-screen ${hasGrayBg && "bg-primaryGray"}`}>
      <section
        className={`${
          img ? "w-[100%] pr-28" : "w-[80%]"
        } mx-auto py-16 flex gap-16 justify-center items-center
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
            href={href}
          />
        )}

        <div className="flex flex-col">
          <div className="flex gap-16 mb-9">
            <h2 className="mt-auto">{title}</h2>
            <Image
              src={icon ? icon : "/icon-plyty-meblowe.svg"}
              alt="icon"
              width={72}
              height={66}
            />
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
