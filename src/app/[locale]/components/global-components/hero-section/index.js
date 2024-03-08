"use client";
import Image from "next/image";
import HeroIconsBar from "../hero-icons-bar";
import HeroCircleHomepage from "../hero-circle-homepage";

export default function HeroSection({ backgroundImage, heroCircle }) {
  console.log("backgroundImage", backgroundImage);
  return (
    <section className="pt-32 w-screen min-h-[90vh] flex flex-col bg-green-400 overflow-hidden">
      <div
        className="w-full bg-blue-300 flex justify-center items-center grow"
        style={{
          // backgroundImage: "url('/hero-homepage.jpg')",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src="/hero-circle-homepage.svg"
          // src={heroCircle}
          width={465}
          height={465}
          alt="hero-circle"
          className=""
        />
        {/* <HeroCircleHomepage className="w-[465px] h-[465px]" /> */}
      </div>

      {/* <div className="w-full h-40 bg-yellow-400"></div> */}
      <HeroIconsBar />
    </section>
  );
}
