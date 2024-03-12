"use client";
import Image from "next/image";
import HeroIconsBar from "../hero-icons-bar";
import HeroCircleHomepage from "../hero-circle-homepage";
import ServicesBar from "../servoces-bar";

export default function HeroSection({
  backgroundImage,
  heroCircle,
  contactIcon,
  isServicesPage,
  hasProductsIcons,
  hasRedBg,
}) {
  console.log("backgroundImage", backgroundImage);
  return (
    <section className="relative pt-32 w-screen min-h-[90vh] flex flex-col bg-green-400 overflow-hidden z-20">
      <div
        className="relative w-full bg-primaryGray flex justify-center items-center grow"
        style={{
          // backgroundImage: "url('/hero-homepage.jpg')",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {heroCircle && (
          <Image
            // src="/hero-circle-homepage.svg"
            src={heroCircle}
            width={465}
            height={465}
            alt="hero-circle"
            className=""
          />
        )}
        {contactIcon && (
          <Image
            src={contactIcon}
            width={140}
            height={140}
            alt="contact-icon"
            className="absolute top-10 right-20"
          />
        )}

        {hasProductsIcons && (
          <>
            <div className="flex gap-6 absolute top-10 right-20">
              <Image
                src="/product-icon1.svg"
                width={140}
                height={140}
                alt="contact-icon"
              />
              <Image
                src="/product-icon2.svg"
                width={140}
                height={140}
                alt="contact-icon"
              />
              <Image
                src="/product-icon3.svg"
                width={140}
                height={140}
                alt="contact-icon"
              />
            </div>
            <div className="flex gap-6 absolute bottom-10 left-20">
              <Image
                src="/product-icon4.svg"
                width={140}
                height={140}
                alt="contact-icon"
              />
              <Image
                src="/product-icon5.svg"
                width={140}
                height={140}
                alt="contact-icon"
              />
              <Image
                src="/product-icon6.svg"
                width={140}
                height={140}
                alt="contact-icon"
              />
            </div>
          </>
        )}
      </div>

      {/* <div className="w-full h-40 bg-yellow-400"></div> */}

      {isServicesPage ? <ServicesBar /> : <HeroIconsBar hasRedBg={hasRedBg} />}
    </section>
  );
}
