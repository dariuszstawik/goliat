import { unstable_setRequestLocale } from "next-intl/server";
import ContactForm from "../components/global-components/contact-form";
import HeroSection from "../components/global-components/hero-section";
import MapPoland from "../components/global-components/map-poland";
import ParagraphWithImage from "../components/global-components/paragraph-with-image";
import WelcomeSection from "../components/homepage/welcome-section";
import { useTranslations } from "next-intl";

export default function Uslugi({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  const ti = useTranslations("Icons");
  const tc = useTranslations("ContactForm");
  return (
    <div>
      <HeroSection
        backgroundImage="/foto-uslugi.jpg"
        heroCircle="/hero-circle-uslugi.png"
        isServicesPage
      />

      <ParagraphWithImage
        title={t("panelSaw1")}
        icon="/icon-ciecie-proste.svg"
        productCardImg="/pila-panelowa1.jpg"
        productCardTitle="piła panelowa SCM Gabbiani Galaxy 105T"
        lang={locale}
      >
        <p className="mb-9">
          {/* Maszyna posiada obrotnicę do cięcia paneli w dwóch płaszczyznach
            Załadunek automatyczny możliwy z trzech stron ( lewo , prawo i tył) */}
          {t("panelSaw11Paragraph")}
        </p>
        <ul className="mb-9">
          <li>
            {/* Maksymalny wymiar materiału 3200mm x 1850 mm (przy obracaniu) */}
            {t("panelSaw1Li1")}
          </li>
          <li>
            {/* Minimalny wymiar materiału przy obracaniu 1500mm x 1500mm  */}
            {t("panelSaw1Li2")}
          </li>
          <li>
            {/* Maksymalna grubość cięcia paczki paneli – 90 mm */}
            {t("panelSaw1Li3")}
          </li>
        </ul>
        <p>
          {" "}
          {/* Używane, cięcie: 4.300 mm x 4.300 m, wysokość cięcia 105 mm, 4
            przednie tablice powietrza 2500 x 600 mm, winda. */}
          {t("panelSaw12Paragraph")}
        </p>
      </ParagraphWithImage>

      <ParagraphWithImage
        title={t("panelSaw2")}
        icon="/icon-ciecie-na-okraglo.svg"
        productCardImg="/pila-panelowa2.jpg"
        productCardTitle="piła panelowa SCM Gabbiani Galaxy T3110"
        hasGrayBg
        lang={locale}
      >
        <p className="mb-9">
          {/* Solidna i kompaktowa podstawa maszyny zapewnia precyzyjne
            prowadzenie wózka piły zapewniając wieloletnią niezawodną pracę.
            Zastosowanie prowadnic pryzmatycznych pozwala zredukować drgania,
            gwarantuje lepszą prędkość i jakość cięcia. Pilarka panelowa to
            przemysłowe rozwiązanie bogate w wyposażeni standardowe, które
            gwarantuje najlepszy stosunek ceny do wydajności. Szybkość,
            precyzja, elastyczność i wydajność z gabbiani. Została
            zaprojektowana tak, aby zapewnić wysoką wydajność w produkcji
            przemysłowej. Wybór odpowiedniego oprzyżądowania daje możliwość
            cięcia tworzywa sztucznego, płyt o powierzchniach pokrytych akrylem,
            kompozytów. */}
          {t("panelSaw21Paragraph")}
        </p>
      </ParagraphWithImage>

      <ParagraphWithImage
        title={t("cncMachiningCenter")}
        icon="/icon-wycinanie-ksztaltow.svg"
        productCardImg="/centrum-obrobcze-cnc.jpg"
        productCardTitle="Centrum obrobcze
          3121 PRO PLUS InfoTEC CNC"
        lang={locale}
      >
        <p className="mb-9">
          {/* Maszyny CNC wyspecjalizowane do ciężkiej pracy. Znajdują one
            szerokie zastosowanie w wielu branżach, a ich zadaniem jest sprostać
            wszelkim wymaganiom produkcyjnym. Użyte podzespoły oraz zastosowana
            przemysłowa technologia produkcji maszyn marki InfoTEC CNC,
            sprawiają, iż są to profesjonalne urządzenia wyspecjalizowane do
            bezawaryjnej, wielozmianowej pracy pod dużymi obciążeniami. */}
          {t("cnc1Paragraph")}
        </p>
        <p>
          {/* InfoTEC Seria PRO PLUS są to automatyczne centrum nestingowe
            dedykowana dla firm z branży meblarskiej o dużym wolumenie
            produkcji. Wzmocnione łoże maszyny oraz napędy i ich przeniesienie
            gwarantują niespotykaną wydajność i rentowność. Maszyny z tej serii
            doskonale nadają się do pracy wielozmianowej. */}
          {t("cnc2Paragraph")}
        </p>
      </ParagraphWithImage>

      <ParagraphWithImage
        title={t("ottTwister")}
        icon="/icon-ciecie-proste.svg"
        productCardImg="/okleiniarka-ott-twister1.png"
        productCardTitle="okleiniarka OTT twister"
        hasGrayBg
        lang={locale}
      >
        <p className="mb-9">
          {/* Agregat okleinujący producenta Ott do zakładów rzemieślniczych do
            zastosowania granulatu kleju topliwego. W swoim parku maszyn
            posiadamy także okleiniarkę krzywoliniową do oklejania zaoblonych
            krawędzi. */}
          {t("ott1Paragraph")}
        </p>
        <ul className="mb-9">
          <li>
            {/* Jednostronna okleiniarka w wersji prawostronnej. */}
            {t("ottLi1")}
          </li>
          <li>
            {/* Grubość krawędzi: 0,4-12 mm */}
            {t("ottLi2")}
          </li>
          <li>
            {/* Wymiary obrabianego przedmiotu: Minimalna szerokość: 70 mm */}
            {t("ottLi3")}
          </li>
          <li>
            {/* Minimalna wysokość: 8 mm */}
            {t("ottLi4")}
          </li>
          <li>
            {/* Wysokość maksymalna: 60 mm */}
            {t("ottLi5")}
          </li>
          <li>
            {/* Minimalna długość: 150 mm */}
            {t("ottLi6")}
          </li>
          <li>
            {/* Prędkość robocza: 14-20 m/min bez kołków */}
            {t("ottLi7")}
          </li>
        </ul>
      </ParagraphWithImage>

      <ParagraphWithImage
        title={t("formatSaw")}
        icon="/icon-ciecie-proste.svg"
        productCardImg="/pila-formatowa.jpg"
        productCardTitle="Piła Formatowa z podcinakiem 
          REMA DMMS 40/340 SPECIAL"
        lang={locale}
      >
        <p className="mb-4">
          {/* Oklejanie krawędzi za pomocą kleju termotopliwego na krawędziach w
            rolkach i paskach na kształtowanych panelach, po prostu niezbędne i
            funkcjonalne. Zaprojektowana jako ekonomiczna, niezawodna i
            praktyczna maszyna do oklejania krawędzi paneli prostych i
            kształtowych. */}
          {t("formatSaw1Paragraph")}
        </p>
        <ul className="mb-4">
          <li>
            {/* Minimalna szerokość panelu 50 mm */}
            {t("formatSawLi1")}
          </li>
          <li>
            {/* Minimalna odpowiednia długość krawędzi 210 mm */}
            {t("formatSawLi2")}
          </li>

          <li>
            {/* Minimalny promień wewnętrzny przy grubości krawędzi 0,4 mm (góra
              wklęsła) 25 mm */}
            {t("formatSawLi3")}
          </li>
          <li>
            {/* Minimalny promień zewnętrzny przy grubości krawędzi 0,4 mm
              (powierzchnia wypukła) 5 mm */}
            {t("formatSawLi4")}
          </li>
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
      <MapPoland />
    </div>
  );
}
