import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import HeroSection from "./components/global-components/hero-section";
import ProductCard from "./components/global-components/product-card";
import ParagraphWithImage from "./components/global-components/paragraph-with-image";
import ButtonWithArrows from "./components/global-components/button-with-arrows";
import ContactForm from "./components/global-components/contact-form";
import MapPoland from "./components/global-components/map-poland";
import Logo from "./components/global-components/logo";
import Navbar from "./components/global-components/navbar";
import WelcomeSection from "./components/homepage/welcome-section";
import ProductsCarousel from "./components/global-components/products-carousel";
import ServicesBar from "./components/global-components/servoces-bar";
import CardCarousel from "./components/global-components/card-carousel";

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  const ti = useTranslations("Icons");
  const tc = useTranslations("ContactForm");
  const tm = useTranslations("mapPoland");

  return (
    <>
      <div>
        <HeroSection
          backgroundImage="/hero-homepage.jpg"
          heroCircle="/hero-circle-homepage.png"
          icon1={ti("shortLeadTimes")}
          icon2={ti("consulting")}
          icon3={ti("wideRange")}
          icon4={ti("quality")}
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
        <ProductsCarousel
          // title="Przykładowe płyty meblowe"
          content="productsMain"
          locale={locale}
        />

        {/* <ProductCard /> */}
        <div className="pb-4">
          <ParagraphWithImage
            title={t("plytyMeblowe")}
            icon="icon-plyty-meblowe.svg"
            productCardImg="/plyta-wiorowa.jpg"
            productCardTitle={
              locale === "en"
                ? "laminated chipboard"
                : "płyta wiórowa laminowana"
            }
            href={`/${locale}/produkty/plyty-meblowe`}
            locale={locale}
          >
            <p className="mb-9">
              {/* Płyty meblowe, jak sama nazwa wskazuje - idealnie nadadzą się do
              wykończenia wnętrza mieszkania. Płyty meblowe to nic innego jak
              płyty drewnopochodne, czyli rodzaj kompozytu drzewnego, w którym
              zawartość cząstek pochodzenia drzewnego powinna przekraczać 50%.
              Głównym materiałem do produkcji płyt drewniopochodnych jest odpad
              powstający podczas uzyskiwania tarcicy oraz paździerze, czyli
              zdrewniałe części łodyg roślin włóknistych. Aby płyta
              drewnopochodna osiągnęła swój końcowy wygląd, wióry drzewne
              (trociny, wióry, gałęzie drzew oraz paździerze) łączone są ze sobą
              za pomocą kleju syntetycznego o odpowiednich właściwościach.
              Następnie mieszanka z wiórów drzewnych oraz kleju syntetycznego
              poddawana jest obróbce termicznej oraz prasie, która działa na
              powstały półprodukt z odpowiednim ciśnieniem. Jest to proces
              tworzenia najczęściej występującej na rynku płyty wiórowej. Może
              ona mieć wykończenie “surowe” szlifowane, bądź być pokryta
              fornirem, lakierem czy też laminatem. */}
              {t("meblowe1Paragraph")}
            </p>
            <p>
              {/* Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
              zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
              zapraszamy do zapoznania się z całą ofertą płyt meblowych bądź
              wykonania telefonu i rozmowy o szczegółach z naszym handlowcem! */}
              {t("meblowe2Paragraph")}
            </p>
          </ParagraphWithImage>

          <ProductsCarousel
            title={t("sampleFurnitureBoards")}
            content="plytyMeblowe"
            locale={locale}
          />
          <ButtonWithArrows href={`/${locale}/produkty/plyty-meblowe`}>
            {/* Pełna oferta płyt meblowych */}
            {t("furnitureBoardsFullOffer")}
          </ButtonWithArrows>
        </div>

        <div className="w-screen bg-primaryGray pb-4">
          <ParagraphWithImage
            title={t("plytyBudowlane")}
            icon="icon-plyty-budowlane.svg"
            whiteIcon="/icon-plyty-budowlane-white.svg"
            productCardImg="/plyta-durelis.jpg"
            productCardTitle={
              locale === "en" ? "Durelis board" : "płyta Durelis - P5"
            }
            href={`/${locale}/produkty/plyty-budowlane/`}
            isRed
            locale={locale}
          >
            <p className="mb-9">
              {/* Płyty budowlane to druga grupa płyt drewnopochodnych; W naszej
              ofercie płyt budowlanych znajdują się klasyczne rozwiązania na
              bazie płyt drewnopochodnych takie jak: OSB, Durelis, V100, MFP,
              JDS oraz płyty wiórowo-cementowe. Te ostatnie idealnie nadzadzą
              się do prac zewnętrznych oraz wewnętrznych. Zbudowane są z betonu
              lekkiego i mają obustronne zbrojenie siatką z włókna szklanego.
              Sprawdź dokładny opis poszczególnych płyt i przekonaj się, która z
              nich będzie najbardzej odpowiedna do twojego projektu. */}
              {t("budowlane1Paragraph")}
            </p>
            <p>
              {/* Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
              zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
              zapraszamy do zapoznania się z całą ofertą płyt budowlanych bądź
              wykonania telefonu i rozmowy o szczegółach z naszym handlowcem! */}
              {t("budowlane2Paragraph")}
            </p>
          </ParagraphWithImage>
          <ProductsCarousel
            title={t("sampleConstructionBoards")}
            content="plytyBudowlane"
            locale={locale}
          />
          <ButtonWithArrows href={`/${locale}/produkty/plyty-budowlane`}>
            {t("constructionBoardsFullOffer")}
          </ButtonWithArrows>
        </div>

        <div className="pb-4">
          <ParagraphWithImage
            title={t("plytySpecjalistyczne")}
            icon="icon-plyty-specjalistyczne.svg"
            productCardImg="/plyta-mdf.jpg"
            productCardTitle={
              locale === "en"
                ? "fire-resistant MDF board"
                : "płyta MDF ognioodporna"
            }
            href={`/${locale}/produkty/plyty-specjalistyczne/`}
            locale={locale}
          >
            <p className="mb-9">{t("specjalistyczne1Paragraph")}</p>
            <p>{t("specjalistyczne2Paragraph")}</p>
          </ParagraphWithImage>
          <ProductsCarousel
            title={t("sampleSpecialisticBoards")}
            content="plytySpecjalistyczne"
            locale={locale}
          />
          <ButtonWithArrows href={`/${locale}/produkty/plyty-specjalistyczne`}>
            {/* Pełna oferta płyt specjalistycznych */}
            {t("specialisticBoardsFullOffer")}
          </ButtonWithArrows>
        </div>

        <div className="w-screen bg-primaryGray pb-4">
          <ParagraphWithImage
            title={t("sklejki")}
            icon="icon-sklejki.svg"
            whiteIcon="/icon-sklejki-white.svg"
            productCardImg="/sklejki.jpg"
            productCardTitle={
              locale === "en"
                ? "HEXA anti-slip plywood"
                : "sklejka antypoślizgowa HEXA"
            }
            href={`/${locale}/produkty/sklejki`}
            locale={locale}
            isRed
          >
            <p className="mb-9">{t("sklejki1Paragraph")}</p>
            <p>{t("sklejki2Paragraph")}</p>
          </ParagraphWithImage>
          <ProductsCarousel
            title={t("samplePlaywoodBoards")}
            content="sklejki"
            locale={locale}
          />
          <ButtonWithArrows href={`/${locale}/produkty/sklejki`}>
            {/* Pełna oferta sklejek */}
            {t("playwoodBoardsFullOffer")}
          </ButtonWithArrows>
        </div>

        <ParagraphWithImage
          title={t("plytyOpakowaniowe")}
          icon="icon-plyty-opakowaniowe.svg"
          productCardImg="/plyta-hdf-surowa2.jpg"
          productCardTitle="płyta HDF surowa"
          href={`/${locale}/produkty/plyty-opakowaniowe`}
          locale={locale}
        >
          <p className="mb-9">
            {/* Niektóre płyty drewnopochodne wykorzystywane są w przemyśle
            opakowaniowym. Najepszym materiałem do tego typu zastosowań są:
            płyta HDF surowa, płyta OSB, sklejki oraz surowa płyta wiórowa.
            Każda z tych płyt występuje w różnych grubościach oraz klasach. Nasi
            handlowcy zadbają o to, aby Państwa produkt został zapakowany w jak
            najbardziej ekonomiczny i bezpieczny sposób. Wycinamy otwory,
            tworzymy łuki oraz docinamy elementy w taki sposób, aby łatwo je
            było połączyć w dalszym procesie. */}
            {t("opakowaniowe1Paragraph")}
          </p>
          <p>
            {/* Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
            zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
            zapraszamy do zapoznania się z całą ofertą płyt opakowaniowych bądź
            wykonania telefonu i rozmowy o szczegółach z naszym handlowcem! */}
            {t("opakowaniowe2Paragraph")}
          </p>
        </ParagraphWithImage>
        <ProductsCarousel
          title={t("samplePackagingBoards")}
          content="plytyOpakowaniowe"
          locale={locale}
        />
        <ButtonWithArrows href={`/${locale}/produkty/plyty-opakowaniowe`}>
          {/* Pełna oferta płyt opakowaniowych */}
          {t("packagingBoardsFullOffer")}
        </ButtonWithArrows>

        <div className="w-screen bg-primaryGray pb-4">
          <ParagraphWithImage
            title={t("plytyPilsniowe")}
            icon="icon-plyty-pilsniowe.svg"
            whiteIcon={"/icon-plyty-pilsniowe-white.svg"}
            productCardImg="/plyta-pilsniowa-surowa-twarda.jpg"
            productCardTitle="płyta pilśniowa surowa twarda"
            href="/pl/produkty/plyty-pilsniowe"
            isRed
            locale={locale}
          >
            <p className="mb-9">
              {/* Płyty pilśniowe - zwane potocznie dyktą, to wyrób z drewna w
              postaci płyty wykonanej z rozwłóknionej tkanki drzewnej przez
              spilśnienie jej i uformowanie w odpowiedniej temperaturze pod
              (normalnym lub zwiększonym) ciśnieniem. Powstaje tym samym zwarty
              i solidny produkt, który ma wiele praktycznych zalet. Płyty
              pilśniowe służą jako materiał do izolacji ścian, wygłuszenia
              stropów i poprawy parametrów akustycznych pomieszczeń, a także
              jako okładziny ścienne, sufitowe oraz materiał na podłogi. Płyty
              pilśniowe dzielą się na 3 kategorie: miękka - porowata, twarda -
              surowa oraz lakierowana. */}
              {t("pilsniowe1Paragraph")}
            </p>
            <p>
              {/* Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
              zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
              zapraszamy do zapoznania się z całą ofertą płyt pilśniowych bądź
              wykonania telefonu i rozmowy o szczegółach z naszym handlowcem! */}
              {t("pilsniowe2Paragraph")}
            </p>
          </ParagraphWithImage>
          <ProductsCarousel
            title={t("sampleFiberBoards")}
            content="plytyPilsniowe"
            locale={locale}
          />
          <ButtonWithArrows href={`/${locale}/produkty/plyty-pilsniowe`}>
            {/* Pełna oferta płyt pilśniowych */}
            {t("fiberBoardsFullOffer")}
          </ButtonWithArrows>
        </div>

        <ServicesBar
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
          productCardTitle={
            locale === "en"
              ? "panel saw SCM Gabbiani Galaxy T3110"
              : "piła panelowa SCM Gabbiani Galaxy T3110"
          }
          hasGrayBg
          locale={locale}
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
          productCardTitle={
            locale === "en"
              ? "Machining center 3121 PRO PLUS InfoTEC CNC"
              : "Centrum obrobcze 3121 PRO PLUS InfoTEC CNC"
          }
          locale={locale}
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
          productCardTitle={
            locale === "en"
              ? "OTT twister edgebander"
              : "okleiniarka OTT twister"
          }
          hasGrayBg
          locale={locale}
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
          productCardTitle={
            locale === "en"
              ? "Format saw with undercutter REMA DMMS 40/340 SPECIAL"
              : "Piła Formatowa z podcinakiem REMA DMMS 40/340 SPECIAL"
          }
          locale={locale}
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

        <MapPoland
          salesDirector={tm("salesDirector")}
          salesRepresentative={tm("salesRepresentative")}
          headOfSalesDepartment={tm("headOfSalesDepartment")}
        />
      </div>
    </>
  );
}
