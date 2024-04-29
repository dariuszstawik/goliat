import { unstable_setRequestLocale } from "next-intl/server";
import ContactForm from "../../components/global-components/contact-form";
import HeroSection from "../../components/global-components/hero-section";
import MapPoland from "../../components/global-components/map-poland";
import ParagraphWithIcons from "../../components/global-components/paragraph-with-icons";
import ParagraphWithImage from "../../components/global-components/paragraph-with-image";
import ProductCard from "../../components/global-components/product-card";
import ProductsCarousel from "../../components/global-components/products-carousel";

import { useTranslations } from "next-intl";
import {
  plytyOpakowaniowe,
  plytyOpakowanioweEn,
} from "../../data/plyty-opakowaniowe";

export default function PlytyOpakowaniowe({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  const tc = useTranslations("ContactForm");
  const tm = useTranslations("mapPoland");
  const ti = useTranslations("Icons");

  const plytyOpakowanioweList =
    locale === "en" ? plytyOpakowanioweEn : plytyOpakowaniowe;

  return (
    <div>
      <HeroSection
        backgroundImage="/foto-opakowaniowe.jpg"
        heroCircle={
          locale === "en"
            ? "/hero-circle-plyty-opakowaniowe-en.svg"
            : "/hero-circle-plyty-opakowaniowe.png"
        }
        icon1={ti("shortLeadTimes")}
        icon2={ti("consulting")}
        icon3={ti("wideRange")}
        icon4={ti("quality")}
      />
      <ParagraphWithImage
        title={t("plytyOpakowaniowe")}
        icon="/icon-plyty-opakowaniowe.svg"
        productCardImg="/plyta-hdf-surowa2.jpg"
        productCardTitle={
          locale === "en" ? "raw hdf board" : "płyta HDF surowa"
        }
        href={`/${locale}/produkty/plyty-meblowe/plyta-hdf-surowa`}
        locale={locale}
      >
        <p className="mb-9">{t("opakowaniowe1Paragraph")}</p>
        <p>{t("opakowaniowe2Paragraph")}</p>
      </ParagraphWithImage>

      <div className="w-screen bg-primaryGray py-16 flex justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
          {plytyOpakowanioweList.map((plyta) => (
            <li key={plyta.id}>
              <ProductCard
                productCardImg={plyta.img}
                alt={plyta.name}
                productCardTitle={plyta.name}
                icon={plyta.icon}
                href={`/${locale}/produkty/${plyta.type}/${plyta.slug}`}
                locale={locale}
              />
            </li>
          ))}
        </ul>
      </div>
      <ParagraphWithIcons
        title={t("otherCategories")}
        icon1="/icon-plyty-meblowe.svg"
        icon2="/icon-plyty-budowlane.svg"
        icon3="/icon-sklejki.svg"
        icon4="/icon-plyty-opakowaniowe.svg"
        icon5="/icon-plyty-specjalistyczne.svg"
        img="/other-categories-asset.svg"
        locale={locale}
      >
        <p className="mb-9">{t("otherCategoriesParagraph1")}</p>
        <p>{t("otherCategoriesParagraph2")}</p>
      </ParagraphWithIcons>
      <div className="mb-8">
        <ProductsCarousel content="productCategories" locale={locale} />
      </div>
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
