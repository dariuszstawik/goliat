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
import ProductsCarousel from "./components/global-components/products-carousel";
import ServicesBar from "./components/global-components/servoces-bar";
import CardCarousel from "./components/global-components/card-carousel";

export const runtime = "edge";

export const metadata = {
  title: "Goliat Sp. z o.o.",
  description:
    "Sprawdzone płyty drewnopochodne: płyty meblowe, płyty specjalistyczne, płyty budowlane.",
  other: {
    "google-site-verification": "67Cr1wiEQFmVwgHiV2_Z5geHdkPT9CqNTQpTHzA0kWM",
  },
};

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  const ti = useTranslations("Icons");
  const tc = useTranslations("ContactForm");
  const tm = useTranslations("mapPoland");

  return (
    <>
      <div>
        <HeroSection
          backgroundImage="/hero-homepage.jpg"
          heroCircle={
            locale === "en"
              ? "/hero-circle-homepage-en.svg"
              : "/hero-circle-homepage.png"
          }
          icon1={ti("shortLeadTimes")}
          icon2={ti("consulting")}
          icon3={ti("wideRange")}
          icon4={ti("quality")}
        />
        <div className="hidden lg:block">
          <WelcomeSection
            title={t("title")}
            subtitle={t("subtitle")}
            products={t("products")}
            services={t("services")}
            contact={t("contact")}
            locale={locale}
          />
        </div>
        <ProductsCarousel content="productsMain" locale={locale} />

        <div className="pb-4">
          <ParagraphWithImage
            title={t("plytyMeblowe")}
            icon="icon-plyty-meblowe.svg"
            productCardImg="/plyta-wiorowa.jpg"
            productCardTitle={
              locale === "en"
                ? "laminated chipboard"
                : "płyta wiórowa laminowana"
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
            icon="icon-plyty-budowlane.svg"
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
            icon="icon-plyty-specjalistyczne.svg"
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
            icon="icon-sklejki.svg"
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
          icon="icon-plyty-opakowaniowe.svg"
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
            icon="icon-plyty-pilsniowe.svg"
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

        <ServicesBar
          services={ti("services")}
          services1={ti("services1")}
          services2={ti("services2")}
          services3={ti("services3")}
        />

        <ParagraphWithImage
          title={t("panelSaw1")}
          icon="/icon-ciecie-proste.svg"
          productCardImg="/pila-panelowa1.jpg"
          productCardTitle={
            locale === "en"
              ? "panel saw SCM Gabbiani Galaxy 105T"
              : "piła panelowa SCM Gabbiani Galaxy 105T"
          }
          locale={locale}
        >
          <p className="mb-9">{t("panelSaw11Paragraph")}</p>
          <ul className="mb-9">
            <li>{t("panelSaw1Li1")}</li>
            <li>{t("panelSaw1Li2")}</li>
            <li>{t("panelSaw1Li3")}</li>
          </ul>
          <p>{t("panelSaw12Paragraph")}</p>
        </ParagraphWithImage>

        <ParagraphWithImage
          title={t("panelSaw2")}
          icon="/icon-ciecie-na-okraglo.svg"
          productCardImg="/pila-panelowa2.jpg"
          productCardTitle={
            locale === "en"
              ? "panel saw SCM Gabbiani Galaxy T3110"
              : "piła panelowa SCM Gabbiani Galaxy T3110"
          }
          hasGrayBg
          locale={locale}
        >
          <p className="mb-9">{t("panelSaw21Paragraph")}</p>
        </ParagraphWithImage>

        <ParagraphWithImage
          title={t("cncMachiningCenter")}
          icon="/icon-wycinanie-ksztaltow.svg"
          productCardImg="/centrum-obrobcze-cnc.jpg"
          productCardTitle={
            locale === "en"
              ? "Machining center 3121 PRO PLUS InfoTEC CNC"
              : "Centrum obrobcze 3121 PRO PLUS InfoTEC CNC"
          }
          locale={locale}
        >
          <p className="mb-9">{t("cnc1Paragraph")}</p>
          <p>{t("cnc2Paragraph")}</p>
        </ParagraphWithImage>

        <ParagraphWithImage
          title={t("ottTwister")}
          icon="/icon-ciecie-proste.svg"
          productCardImg="/okleiniarka-ott-twister1.png"
          productCardTitle={
            locale === "en"
              ? "OTT twister edgebander"
              : "okleiniarka OTT twister"
          }
          hasGrayBg
          locale={locale}
        >
          <p className="mb-9">{t("ott1Paragraph")}</p>
          <ul className="mb-9">
            <li>{t("ottLi1")}</li>
            <li>{t("ottLi2")}</li>
            <li>{t("ottLi3")}</li>
            <li>{t("ottLi4")}</li>
            <li>{t("ottLi5")}</li>
            <li>{t("ottLi6")}</li>
            <li>{t("ottLi7")}</li>
          </ul>
        </ParagraphWithImage>

        <ParagraphWithImage
          title={t("formatSaw")}
          icon="/icon-ciecie-proste.svg"
          productCardImg="/pila-formatowa.jpg"
          productCardTitle={
            locale === "en"
              ? "Format saw with undercutter REMA DMMS 40/340 SPECIAL"
              : "Piła Formatowa z podcinakiem REMA DMMS 40/340 SPECIAL"
          }
          locale={locale}
        >
          <p className="mb-4">{t("formatSaw1Paragraph")}</p>
          <ul className="mb-4">
            <li>{t("formatSawLi1")}</li>
            <li>{t("formatSawLi2")}</li>

            <li>{t("formatSawLi3")}</li>
            <li>{t("formatSawLi4")}</li>
            <li>{t("formatSawLi5")}</li>
            <li>{t("formatSawLi6")}</li>
            <li>{t("formatSawLi7")}</li>
            <li>{t("formatSawLi8")}</li>
            <li>{t("formatSawLi9")}</li>
            <li>{t("formatSawLi10")}</li>
            <li>{t("formatSawLi11")}</li>
          </ul>
        </ParagraphWithImage>

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

        <MapPoland
          salesDirector={tm("salesDirector")}
          salesRepresentative={tm("salesRepresentative")}
          headOfSalesDepartment={tm("headOfSalesDepartment")}
          locale={locale}
        />
      </div>
    </>
  );
}
