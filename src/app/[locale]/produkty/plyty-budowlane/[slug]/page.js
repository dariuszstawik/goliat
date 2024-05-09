import ButtonWithArrows from "@/app/[locale]/components/global-components/button-with-arrows";
import ContactForm from "@/app/[locale]/components/global-components/contact-form";
import HeroSection from "@/app/[locale]/components/global-components/hero-section";
import MapPoland from "@/app/[locale]/components/global-components/map-poland";
import ParagraphWithImage from "@/app/[locale]/components/global-components/paragraph-with-image";
import ProductsCarousel from "@/app/[locale]/components/global-components/products-carousel";
import {
  plytyBudowlane,
  plytyBudowlaneEn,
} from "@/app/[locale]/data/plyty-budowlane";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export const dynamicParams = false;
export const runtime = "edge";
export function generateStaticParams({ params }) {
  const slugs =
    params === "en"
      ? plytyBudowlaneEn.map((product) => ({
          slug: product.slug,
        }))
      : plytyBudowlane.map((product) => ({
          slug: product.slug,
        }));

  return slugs;
}

export default function PlytaBudowlana({ params }) {
  const locale = params.locale;

  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  const ti = useTranslations("Icons");
  const tc = useTranslations("ContactForm");
  const tm = useTranslations("mapPoland");

  const product =
    params.locale === "en"
      ? plytyBudowlaneEn.find((product) => product.slug === params.slug)
      : plytyBudowlane.find((product) => product.slug === params.slug);

  return (
    <div>
      <HeroSection
        backgroundImage="/hero-plyty-budowlane.jpg"
        // heroCircle="/hero-circle-plyty-budowlane.png"
        productIcon="/product-icon2.svg"
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
        <div className="mb-9">{product.description}</div>
        {product.description1 && (
          <div className="mb-9">{product.description1}</div>
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
        title={t("constructionBoardsCheckOther")}
        content="plytyBudowlane"
        locale={locale}
      />
      <div className="mb-8">
        <ButtonWithArrows href={`/${locale}/produkty/plyty-budowlane`}>
          {t("backToConstructionBoards")}
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
