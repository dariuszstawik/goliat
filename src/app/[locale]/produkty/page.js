import { unstable_setRequestLocale } from "next-intl/server";
import ButtonWithArrows from "../components/global-components/button-with-arrows";
import HeroSection from "../components/global-components/hero-section";
import ParagraphWithImage from "../components/global-components/paragraph-with-image";
import ProductsCarousel from "../components/global-components/products-carousel";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const runtime = "edge";

export const metadata = {
  title: "Produkty | Goliat Sp. z o.o.",
  description:
    "Sprawdzone płyty drewnopochodne: płyty meblowe, płyty specjalistyczne, płyty budowlane.",
};
export default function Produkty({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  const ti = useTranslations("Icons");
  const tc = useTranslations("ContactForm");
  const tm = useTranslations("mapPoland");

  return (
    <div>
      <HeroSection
        backgroundImage="/foto-produkty.jpg"
        heroCircle={
          locale === "en"
            ? "/hero-circle-produkty-en.svg"
            : "/hero-circle-produkty.png"
        }
        hasRedBg
        icon1={ti("shortLeadTimes")}
        icon2={ti("consulting")}
        icon3={ti("wideRange")}
        icon4={ti("quality")}
      />

      <div className="flex flex-col gap-2 my-16 items-center">
        <h2 className="mt-auto mb-6 xl:mr-4">
          {locale === "en" ? "Products" : "Produkty"}
        </h2>

        <div className="flex gap-4">
          <Image
            src="/icon-plyty-meblowe.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
          <Image
            src="/icon-plyty-budowlane.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
          <Image
            src="/icon-plyty-specjalistyczne.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
          <Image
            src="/icon-sklejki.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
          <Image
            src="/icon-plyty-opakowaniowe.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
          <Image
            src="/icon-plyty-pilsniowe.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
        </div>
      </div>

      <ProductsCarousel content="productsMain" locale={locale} />

      <div className="pb-4">
        <ParagraphWithImage
          title={t("plytyMeblowe")}
          icon="/icon-plyty-meblowe.svg"
          productCardImg="/plyta-wiorowa.jpg"
          productCardTitle={
            locale === "en" ? "laminated chipboard" : "płyta wiórowa laminowana"
          }
          href={`/${locale}/produkty/plyty-meblowe`}
          locale={locale}
        >
          <p className="mb-9">{t("meblowe1Paragraph")}</p>
          <p>{t("meblowe2Paragraph")}</p>
        </ParagraphWithImage>

        <ProductsCarousel
          title={t("sampleFurnitureBoards")}
          content="plytyMeblowe"
          locale={locale}
        />
        <ButtonWithArrows href={`/${locale}/produkty/plyty-meblowe`}>
          {/* Pełna oferta płyt meblowych */}
          {t("furnitureBoardsFullOffer")}
        </ButtonWithArrows>
      </div>

      <div className="w-screen bg-primaryGray pb-4">
        <ParagraphWithImage
          title={t("plytyBudowlane")}
          icon="/icon-plyty-budowlane.svg"
          whiteIcon="/icon-plyty-budowlane-white.svg"
          productCardImg="/plyta-durelis.jpg"
          productCardTitle={
            locale === "en" ? "Durelis board" : "płyta Durelis - P5"
          }
          href={`/${locale}/produkty/plyty-budowlane/`}
          isRed
          locale={locale}
        >
          <p className="mb-9">{t("budowlane1Paragraph")}</p>
          <p>{t("budowlane2Paragraph")}</p>
        </ParagraphWithImage>
        <ProductsCarousel
          title={t("sampleConstructionBoards")}
          content="plytyBudowlane"
          locale={locale}
        />
        <ButtonWithArrows href={`/${locale}/produkty/plyty-budowlane`}>
          {t("constructionBoardsFullOffer")}
        </ButtonWithArrows>
      </div>

      <div className="pb-4">
        <ParagraphWithImage
          title={t("plytySpecjalistyczne")}
          icon="/icon-plyty-specjalistyczne.svg"
          productCardImg="/plyta-mdf.jpg"
          productCardTitle={
            locale === "en"
              ? "fire-resistant MDF board"
              : "płyta MDF ognioodporna"
          }
          href={`/${locale}/produkty/plyty-specjalistyczne/`}
          locale={locale}
        >
          <p className="mb-9">{t("specjalistyczne1Paragraph")}</p>
          <p>{t("specjalistyczne2Paragraph")}</p>
        </ParagraphWithImage>
        <ProductsCarousel
          title={t("sampleSpecialisticBoards")}
          content="plytySpecjalistyczne"
          locale={locale}
        />
        <ButtonWithArrows href={`/${locale}/produkty/plyty-specjalistyczne`}>
          {t("specialisticBoardsFullOffer")}
        </ButtonWithArrows>
      </div>

      <div className="w-screen bg-primaryGray pb-4">
        <ParagraphWithImage
          title={t("sklejki")}
          icon="/icon-sklejki.svg"
          whiteIcon="/icon-sklejki-white.svg"
          productCardImg="/sklejki.jpg"
          productCardTitle={
            locale === "en"
              ? "HEXA anti-slip plywood"
              : "sklejka antypoślizgowa HEXA"
          }
          href={`/${locale}/produkty/sklejki`}
          locale={locale}
          isRed
        >
          <p className="mb-9">{t("sklejki1Paragraph")}</p>
          <p>{t("sklejki2Paragraph")}</p>
        </ParagraphWithImage>
        <ProductsCarousel
          title={t("samplePlaywoodBoards")}
          content="sklejki"
          locale={locale}
        />
        <ButtonWithArrows href={`/${locale}/produkty/sklejki`}>
          {t("playwoodBoardsFullOffer")}
        </ButtonWithArrows>
      </div>

      <ParagraphWithImage
        title={t("plytyOpakowaniowe")}
        icon="/icon-plyty-opakowaniowe.svg"
        productCardImg="/plyta-hdf-surowa2.jpg"
        productCardTitle="płyta HDF surowa"
        href={`/${locale}/produkty/plyty-opakowaniowe`}
        locale={locale}
      >
        <p className="mb-9">{t("opakowaniowe1Paragraph")}</p>
        <p>{t("opakowaniowe2Paragraph")}</p>
      </ParagraphWithImage>
      <ProductsCarousel
        title={t("samplePackagingBoards")}
        content="plytyOpakowaniowe"
        locale={locale}
      />
      <ButtonWithArrows href={`/${locale}/produkty/plyty-opakowaniowe`}>
        {t("packagingBoardsFullOffer")}
      </ButtonWithArrows>

      <div className="w-screen bg-primaryGray pb-4">
        <ParagraphWithImage
          title={t("plytyPilsniowe")}
          icon="/icon-plyty-pilsniowe.svg"
          whiteIcon={"/icon-plyty-pilsniowe-white.svg"}
          productCardImg="/plyta-pilsniowa-surowa-twarda.jpg"
          productCardTitle="płyta pilśniowa surowa twarda"
          href="/pl/produkty/plyty-pilsniowe"
          isRed
          locale={locale}
        >
          <p className="mb-9">{t("pilsniowe1Paragraph")}</p>
          <p>{t("pilsniowe2Paragraph")}</p>
        </ParagraphWithImage>
        <ProductsCarousel
          title={t("sampleFiberBoards")}
          content="plytyPilsniowe"
          locale={locale}
        />
        <ButtonWithArrows href={`/${locale}/produkty/plyty-pilsniowe`}>
          {t("fiberBoardsFullOffer")}
        </ButtonWithArrows>
      </div>
    </div>
  );
}
