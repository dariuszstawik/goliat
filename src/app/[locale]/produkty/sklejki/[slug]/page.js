import ButtonWithArrows from "@/app/[locale]/components/global-components/button-with-arrows";
import ContactForm from "@/app/[locale]/components/global-components/contact-form";
import HeroSection from "@/app/[locale]/components/global-components/hero-section";
import MapPoland from "@/app/[locale]/components/global-components/map-poland";
import ParagraphWithImage from "@/app/[locale]/components/global-components/paragraph-with-image";
import ProductsCarousel from "@/app/[locale]/components/global-components/products-carousel";
import { sklejki, sklejkiEN } from "@/app/[locale]/data/sklejki";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export const dynamicParams = false;
export const runtime = "edge";

export const metadata = {
  title: {
    en: "Sklejka | Goliat Sp. z o.o.",
    pl: "Sklejka | Goliat Sp. z o.o.",
  },
};

export function generateStaticParams({ params }) {
  const slugs =
    params === "en"
      ? sklejkiEN.map((product) => ({
          slug: product.slug,
        }))
      : sklejki.map((product) => ({
          slug: product.slug,
        }));

  return slugs;
}

export default function Sklejka({ params }) {
  const locale = params.locale;

  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  const ti = useTranslations("Icons");
  const tc = useTranslations("ContactForm");
  const tm = useTranslations("mapPoland");

  const product =
    params.locale === "en"
      ? sklejkiEN.find((product) => product.slug === params.slug)
      : sklejki.find((product) => product.slug === params.slug);

  return (
    <div>
      <HeroSection
        backgroundImage="/foto-sklejki.jpg"
        productIcon="/product-icon4.svg"
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
        locale={locale}
        isRed
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
        title={t("plywoodCheckOther")}
        content="sklejki"
        locale={locale}
      />
      <div className="mb-8">
        <ButtonWithArrows href={`/${locale}/produkty/sklejki`}>
          {t("backToPlywoodBoards")}
        </ButtonWithArrows>
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
