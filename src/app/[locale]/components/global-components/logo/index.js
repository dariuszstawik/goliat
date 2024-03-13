import Image from "next/image";

export default function Logo({ v2, hasNoMargin }) {
  return v2 ? (
    <Image src="/logo2.svg" width="325" height="112" className="-mt-16" />
  ) : (
    <Image
      src="/logo.png"
      width="212"
      height="63"
      className={`hasNoMargin ? "m-0" : "m-4"`}
    />
  );
}
