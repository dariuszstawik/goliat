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
  productIcon,
  hasRedBg,
  icon1,
  icon2,
  icon3,
  icon4,
  services,
  services1,
  services2,
  services3,
}) {
  return (
    <section className="relative pt-32 w-screen min-h-[90vh] flex flex-col bg-green-400 z-20">
      <div
        className="relative w-full bg-primaryGray flex justify-center items-center grow"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {heroCircle ? (
          <Image
            src={heroCircle}
            width={465}
            height={465}
            priority={true}
            alt="hero-circle"
            className="w-64 md:w-96 lg:w-[465px]"
          />
        ) : (
          <div className="h-64 md:h-96 lg:h-[465px] opacity-full" />
        )}
        {contactIcon && (
          <Image
            src={contactIcon}
            width={140}
            height={140}
            priority={true}
            alt="contact-icon"
            className="absolute top-10 right-20 hidden md:block"
          />
        )}

        {hasProductsIcons && (
          <>
            <div className="lg:flex gap-6 absolute top-10 right-20 hidden">
              <Image
                src="/product-icon1.svg"
                width={140}
                height={140}
                priority={true}
                alt="contact-icon"
              />
              <Image
                src="/product-icon2.svg"
                width={140}
                height={140}
                priority={true}
                alt="contact-icon"
              />
              <Image
                src="/product-icon3.svg"
                width={140}
                height={140}
                priority={true}
                alt="contact-icon"
              />
            </div>
            <div className="lg:flex gap-6 absolute bottom-10 left-20 hidden">
              <Image
                src="/product-icon4.svg"
                width={140}
                height={140}
                priority={true}
                alt="contact-icon"
              />
              <Image
                src="/product-icon5.svg"
                width={140}
                height={140}
                priority={true}
                alt="contact-icon"
              />
              <Image
                src="/product-icon6.svg"
                width={140}
                height={140}
                priority={true}
                alt="contact-icon"
              />
            </div>
          </>
        )}

        {productIcon && (
          <Image
            src={productIcon}
            width={140}
            height={140}
            priority={true}
            alt="contact-icon"
            className="absolute top-10 right-20"
          />
        )}
      </div>

      {isServicesPage ? (
        <ServicesBar
          services={services}
          services1={services1}
          services2={services2}
          services3={services3}
        />
      ) : (
        <HeroIconsBar
          hasRedBg={hasRedBg}
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          icon4={icon4}
        />
      )}
    </section>
  );
}
