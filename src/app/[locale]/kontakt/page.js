import { useTranslations } from "next-intl";
import ContactParagraph from "../components/contact-page/contact-paragraph";
import ContactForm from "../components/global-components/contact-form";
import HeroSection from "../components/global-components/hero-section";
import MapPoland from "../components/global-components/map-poland";
import { unstable_setRequestLocale } from "next-intl/server";

export const runtime = "edge";

export default function Kontakt({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("contact");
  const tc = useTranslations("ContactForm");
  const ti = useTranslations("Icons");
  const tm = useTranslations("mapPoland");

  return (
    <div>
      <HeroSection
        backgroundImage="/hero-contact.jpg"
        contactIcon="/contact-icon.svg"
        icon1={ti("shortLeadTimes")}
        icon2={ti("consulting")}
        icon3={ti("wideRange")}
        icon4={ti("quality")}
      />
      <ContactParagraph
        img="/contact-poland.svg"
        paragraph1={t("paragraph1")}
        paragraph2={t("paragraph2")}
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
