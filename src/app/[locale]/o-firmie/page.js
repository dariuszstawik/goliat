import Image from "next/image";
import ContactForm from "../components/global-components/contact-form";
import HeroSection from "../components/global-components/hero-section";
import MapPoland from "../components/global-components/map-poland";
import ParagraphWithImage from "../components/global-components/paragraph-with-image";
import ParagraphWithIcons from "../components/global-components/paragraph-with-icons";
import ProductsCarousel from "../components/global-components/products-carousel";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function OFirmie({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("about");
  const ti = useTranslations("Icons");
  const tc = useTranslations("ContactForm");
  const tm = useTranslations("mapPoland");

  return (
    <div>
      <HeroSection
        backgroundImage="/hero-homepage.jpg"
        hasProductsIcons
        icon1={ti("shortLeadTimes")}
        icon2={ti("consulting")}
        icon3={ti("wideRange")}
        icon4={ti("quality")}
      />
      <ParagraphWithImage
        title={t("section1Title")}
        icon="/icon-logo1.svg"
        img="/europa4.svg"
        locale={locale}
      >
        <p className="mb-8">{t("section1Paragraph1")}</p>
        <p>
          {t("section1Paragraph2")}
          {/* Możemy
          poszczycić się także certyfikatem Rzetelnej Firmy praz znakiem FSC,
          czyli odpowiedzialnej gospodarki leśnej o numerze C116227. W naszej
          branży szczególnie istotne jest, żeby dbać o pochodzenie surowca,
          który jest głównym składnikiem naszych produktów. */}
        </p>
      </ParagraphWithImage>
      <div className="relative w-screen h-[300px] lg:h-[440px] overflow-hidden">
        <Image
          src="/smiling-man.jpg"
          alt="zdjęcie pracownika"
          fill={true}
          sizes={"100vw"}
          className="w-full object-cover"
        />
      </div>

      <ParagraphWithIcons
        title={t("section2Title")}
        img="/other-categories-asset.svg"
        isReverse
        locale={locale}
      >
        <p className="mb-8">{t("section2Paragraph1")}</p>
        <p>{t("section2Paragraph2")}</p>
      </ParagraphWithIcons>
      <div className="relative w-screen h-[300px] lg:h-[440px] overflow-hidden">
        <Image
          src="/foto-ofirmie2.jpg"
          alt="zdjęcie pracownika"
          fill={true}
          sizes={"100vw"}
          className="w-full object-cover"
        />
      </div>
      <ParagraphWithIcons
        title={t("section3Title")}
        img="/circled-left-arrow.svg"
        isOnAboutPage
        locale={locale}
      >
        <p className="mb-8">{t("section3Paragraph1")}</p>
        <p>{t("section3Paragraph2")}</p>
      </ParagraphWithIcons>
      <div className="relative w-screen h-[300px] lg:h-[440px] overflow-hidden">
        <Image
          src="/foto-ofirmie3.jpg"
          alt="zdjęcie pracownika"
          fill={true}
          sizes={"100vw"}
          className="w-full object-cover"
        />
      </div>
      <ProductsCarousel
        content="productCategories"
        title="Sprawdź ofertę naszych płyt drewnopochodnych"
      />
      <MapPoland
        salesDirector={tm("salesDirector")}
        salesRepresentative={tm("salesRepresentative")}
        headOfSalesDepartment={tm("headOfSalesDepartment")}
      />
      <ContactForm
        locale={locale}
        name={tc("name")}
        phone={tc("phone")}
        email={tc("email")}
        message={tc("message")}
        marketing={tc("marketing")}
        privacy={tc("privacy")}
        submit={tc("submit")}
      />
    </div>
  );
}
