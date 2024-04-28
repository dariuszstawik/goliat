import { unstable_setRequestLocale } from "next-intl/server";
import ContactForm from "../../components/global-components/contact-form";
import HeroSection from "../../components/global-components/hero-section";
import MapPoland from "../../components/global-components/map-poland";
import ParagraphWithIcons from "../../components/global-components/paragraph-with-icons";
import ParagraphWithImage from "../../components/global-components/paragraph-with-image";
import ProductCard from "../../components/global-components/product-card";
import ProductsCarousel from "../../components/global-components/products-carousel";
// import plytyPilsniowe from "../../data/plyty-pilsniowe";
import { useTranslations } from "next-intl";
import { plytyPilsniowe, plytyPilsnioweEn } from "../../data/plyty-pilsniowe";

export default function PlytyPilsniowe({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  const tc = useTranslations("ContactForm");
  const tm = useTranslations("mapPoland");
  const ti = useTranslations("Icons");

  const plytyPilsnioweList =
    locale === "en" ? plytyPilsnioweEn : plytyPilsniowe;

  return (
    <div>
      <HeroSection
        backgroundImage="/hero-plyty-pilsniowe.jpg"
        heroCircle="/hero-circle-plyty-pilsniowe.png"
        hasRedBg
        icon1={ti("shortLeadTimes")}
        icon2={ti("consulting")}
        icon3={ti("wideRange")}
        icon4={ti("quality")}
      />
      <ParagraphWithImage
        title={locale === "en" ? "Fiberboards" : "Płyty pilśniowe"}
        icon="/icon-plyty-pilsniowe.svg"
        whiteIcon={"/icon-plyty-pilsniowe-white.svg"}
        productCardImg="/plyta-pilsniowa-surowa-twarda.jpg"
        productCardTitle={
          locale === "en"
            ? "raw hard fiberboard"
            : "płyta pilśniowa surowa twarda"
        }
        href="/pl/produkty/plyty-pilsniowe/plyta-pilsniowa-surowa-twarda"
        isRed
        locale={locale}
      >
        <p className="mb-9">{t("pilsniowe1Paragraph")}</p>
        <p>{t("pilsniowe2Paragraph")}</p>
      </ParagraphWithImage>

      <div className="w-screen bg-primaryGray py-16 flex justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
          {plytyPilsnioweList.map((plyta) => (
            <li key={plyta.id}>
              <ProductCard
                productCardImg={plyta.img}
                alt={plyta.name}
                productCardTitle={plyta.name}
                icon={plyta.icon}
                whiteIcon={plyta.whiteIcon}
                href={`/${locale}/produkty/plyty-pilsniowe/${plyta.slug}`}
                isRed
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
        <ProductsCarousel content="productCategories" />
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
