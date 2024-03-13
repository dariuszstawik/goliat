import Image from "next/image";

export default function NavbarAsset() {
  return (
    <Image
      src="/navbar-asset.png"
      width={303}
      height={61}
      className="hidden lg:block"
    />
  );
}
