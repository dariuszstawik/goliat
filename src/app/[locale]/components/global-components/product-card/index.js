import Link from "next/link";

export default function ProductCard({
  productCardImg,
  alt,
  productCardTitle,
  icon,
  isRed,
  href,
}) {
  return (
    <div className="w-[372px] h-[488px] flex flex-col border-[1px] border-black rounded-xl overflow-hidden shrink-0">
      <div className="h-[312px]">
        <img
          src={productCardImg ? productCardImg : "/plyta-budowlana-osb.png"}
          alt={alt ? alt : "product-card"}
          className="h-full object-cover"
        />
      </div>
      <div className="bg-gray-200 grow">
        <div className="w-20 h-20 bg-yellow-400 flex justify-center items-center border-[1px] border-black rounded-full mx-auto -translate-y-1/2">
          <img
            src={icon ? icon : "/icon-plyta-budowlana-osb.png"}
            alt="asset"
            className="object-cover w-8"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 grow -translate-y-1/4 px-6">
          <h4 className="text-center">{productCardTitle}</h4>
          <Link href={href ? href : "/"}>Zobacz więcej</Link>
        </div>
      </div>
    </div>
  );
}
