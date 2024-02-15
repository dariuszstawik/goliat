import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import HeroSection from "./components/global-components/navbar";

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return (
    <>
      <div>
        <HeroSection />
        <h1>{t("title")}</h1>
      </div>
    </>
  );
}
