import Image from "next/image";

export default function NavbarAsset() {
  return (
    <Image
      src="/asset.svg"
      width={303}
      height={61}
      className="hidden lg:block"
    />
  );
}
