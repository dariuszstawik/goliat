import Image from "next/image";

export default function Logo({ v2, hasNoMargin, onClick }) {
  return v2 ? (
    <Image
      src="/logo.png"
      width="318"
      height="168"
      className="-mt-10"
      onClick={onClick}
    />
  ) : (
    <Image
      src="/logo.png"
      width="212"
      height="63"
      className={`${hasNoMargin ? "m-0" : "m-4"}`}
      onClick={onClick}
    />
  );
}
