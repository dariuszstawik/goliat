import { unstable_setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/global-components/navbar";
import Footer from "./components/global-components/footer";
import { useTranslations } from "next-intl";

import Script from "next/script";

const locales = ["en", "de", "pl"];

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Goliat Sp. z o.o.",
  description:
    "Sprawdzone płyty drewnopochodne: płyty meblowe, płyty specjalistyczne, płyty budowlane.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);
  const t = useTranslations("Navbar");

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <Navbar
          locale={locale}
          products={t("products")}
          services={t("services")}
          about={t("about")}
          contact={t("contact")}
          furnitureBoards={t("furnitureBoards")}
          constructionBoards={t("constructionBoards")}
          specialisticBoards={t("specialisticBoards")}
          plywood={t("plywood")}
          packagingBoards={t("packagingBoards")}
          fiberboards={t("fiberboards")}
        />

        {children}

        <Footer locale={locale} />
      </body>
      {/* <Script
        src={`https://cdn-cookieyes.com/client_data/9205946e2a20a50abcb59d70/script.js`}
      ></Script> */}
    </html>
  );
}
