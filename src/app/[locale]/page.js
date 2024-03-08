import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import HeroSection from "./components/global-components/hero-section";
import ProductCard from "./components/global-components/product-card";
import ParagraphWithImage from "./components/global-components/paragraph-with-image";
import ButtonWithArrows from "./components/global-components/button-with-arrows";
import ContactForm from "./components/global-components/contact-form";
import MapPoland from "./components/global-components/map-poland";
import Logo from "./components/global-components/logo";
import Navbar from "./components/global-components/navbar";
import WelcomeSection from "./components/homepage/welcome-section";

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return (
    <>
      <div>
        <HeroSection
          backgroundImage="/hero-homepage.jpg"
          // heroCircle="/hero-circle-homepage.svg"
        />
        <WelcomeSection />
        {/* <h1>{t("title")}</h1> */}

        <div className="w-full h-screen">
          {/* <ProductCard /> */}
          <ParagraphWithImage></ParagraphWithImage>
          <ButtonWithArrows>Porozmawiaj z handlowcem</ButtonWithArrows>
        </div>
        <ContactForm />
        <MapPoland />
      </div>
    </>
  );
}
