import ButtonWithArrows from "@/app/[locale]/components/global-components/button-with-arrows";
import ContactForm from "@/app/[locale]/components/global-components/contact-form";
import HeroSection from "@/app/[locale]/components/global-components/hero-section";
import MapPoland from "@/app/[locale]/components/global-components/map-poland";
import ParagraphWithImage from "@/app/[locale]/components/global-components/paragraph-with-image";
import ProductsCarousel from "@/app/[locale]/components/global-components/products-carousel";
import {
  plytyPilsniowe,
  plytyPilsnioweEn,
} from "@/app/[locale]/data/plyty-pilsniowe";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export const dynamicParams = false;

export function generateStaticParams({ params }) {
  const slugs =
    params === "en"
      ? plytyPilsniowe.map((product) => ({
          slug: product.slug,
        }))
      : plytyPilsnioweEn.map((product) => ({
          slug: product.slug,
        }));

  return slugs;
}

export default function PlytaPilsniowa({ params }) {
  const locale = params.locale;

  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  const ti = useTranslations("Icons");
  const tc = useTranslations("ContactForm");
  const tm = useTranslations("mapPoland");

  const product =
    params.locale === "en"
      ? plytyPilsnioweEn.find((product) => product.slug === params.slug)
      : plytyPilsniowe.find((product) => product.slug === params.slug);

  return (
    <div>
      <HeroSection
        backgroundImage="/hero-plyty-pilsniowe.jpg"
        productIcon="/product-icon6.svg"
        hasRedBg
        icon1={ti("shortLeadTimes")}
        icon2={ti("consulting")}
        icon3={ti("wideRange")}
        icon4={ti("quality")}
      />
      <ParagraphWithImage
        title={product.name}
        icon={product.icon}
        hasNoTitleIcon
        productCardImg={product.img}
        productCardTitle={product.name}
        productCardSubtitle={product.category}
        href={product.href}
        isRed
        locale={locale}
      >
        <p className="mb-9">{product.description}</p>
        {product.description2Paragraph && (
          <div className="mb-9">{product.description2Paragraph}</div>
        )}
      </ParagraphWithImage>
      {product.content}
      <ProductsCarousel
        title={t("relatedServices")}
        content="servicesData"
        locale={locale}
      />
      <div className="mb-8">
        <ButtonWithArrows href={`/${locale}/uslugi`}>
          {t("goToServices")}
        </ButtonWithArrows>
      </div>
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
      <ProductsCarousel
        title={t("fiberBoardsCheckOther")}
        content="plytyPilsniowe"
        locale={locale}
      />
      <div className="mb-8">
        <ButtonWithArrows href={`/${locale}/produkty/plyty-pilsniowe`} isRed>
          {t("backToFiberBoards")}
        </ButtonWithArrows>
      </div>
      <MapPoland
        salesDirector={tm("salesDirector")}
        salesRepresentative={tm("salesRepresentative")}
        headOfSalesDepartment={tm("headOfSalesDepartment")}
      />
    </div>
  );
}
