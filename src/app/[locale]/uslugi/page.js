import { unstable_setRequestLocale } from "next-intl/server";
import ContactForm from "../components/global-components/contact-form";
import HeroSection from "../components/global-components/hero-section";
import MapPoland from "../components/global-components/map-poland";
import ParagraphWithImage from "../components/global-components/paragraph-with-image";
import WelcomeSection from "../components/homepage/welcome-section";
import { useTranslations } from "next-intl";

export const runtime = "edge";

export const metadata = {
  title: "Uslugi | Goliat Sp. z o.o.",
  description:
    "Sprawdzone płyty drewnopochodne: płyty meblowe, płyty specjalistyczne, płyty budowlane.",
};

export default function Uslugi({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  const ti = useTranslations("Icons");
  const tc = useTranslations("ContactForm");
  const tm = useTranslations("mapPoland");
  return (
    <div>
      <HeroSection
        backgroundImage="/foto-uslugi.jpg"
        heroCircle={
          locale === "en"
            ? "/hero-circle-uslugi-en.svg"
            : "/hero-circle-uslugi.png"
        }
        isServicesPage
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
        <p> {t("panelSaw12Paragraph")}</p>
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
          locale === "en" ? "OTT twister edgebander" : "okleiniarka OTT twister"
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
      <MapPoland
        salesDirector={tm("salesDirector")}
        salesRepresentative={tm("salesRepresentative")}
        headOfSalesDepartment={tm("headOfSalesDepartment")}
        locale={locale}
      />
    </div>
  );
}
