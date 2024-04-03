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
  const t = useTranslations("Index");
  return (
    <>
      <div>
        <HeroSection
          backgroundImage="/hero-homepage.jpg"
          heroCircle="/hero-circle-homepage.png"
        />
        <div className="hidden lg:block">
          <WelcomeSection />
        </div>
        <ProductsCarousel
          // title="Przykładowe płyty meblowe"
          content="plytyMeblowe"
        />

        {/* <ProductCard /> */}
        <div className="pb-4">
          <ParagraphWithImage
            title="Płyty meblowe"
            icon="icon-plyty-meblowe.svg"
            productCardImg="/plyta-wiorowa.jpg"
            productCardTitle="płyta wiórowa laminowana biała"
            href="/pl/produkty/plyty-meblowe"
          >
            <p className="mb-9">
              Płyty meblowe, jak sama nazwa wskazuje - idealnie nadadzą się do
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
              fornirem, lakierem czy też laminatem.
            </p>
            <p>
              Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
              zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
              zapraszamy do zapoznania się z całą ofertą płyt meblowych bądź
              wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
            </p>
          </ParagraphWithImage>

          <ProductsCarousel
            title="Przykładowe płyty meblowe"
            content="plytyMeblowe"
          />
          <ButtonWithArrows href={`/${locale}/produkty/plyty-meblowe`}>
            Pełna oferta płyt meblowych
          </ButtonWithArrows>
        </div>

        <div className="w-screen bg-primaryGray pb-4">
          <ParagraphWithImage
            title="Płyty budowlane"
            icon="icon-plyty-budowlane.svg"
            whiteIcon="/icon-plyty-budowlane-white.svg"
            productCardImg="/plyta-durelis.jpg"
            productCardTitle="płyta Durelis"
            href="/pl/produkty/plyty-budowlane"
            isRed
          >
            <p className="mb-9">
              Płyty budowlane to druga grupa płyt drewnopochodnych; W naszej
              ofercie płyt budowlanych znajdują się klasyczne rozwiązania na
              bazie płyt drewnopochodnych takie jak: OSB, Durelis, V100, MFP,
              JDS oraz płyty wiórowo-cementowe. Te ostatnie idealnie nadzadzą
              się do prac zewnętrznych oraz wewnętrznych. Zbudowane są z betonu
              lekkiego i mają obustronne zbrojenie siatką z włókna szklanego.
              Sprawdź dokładny opis poszczególnych płyt i przekonaj się, która z
              nich będzie najbardzej odpowiedna do twojego projektu.
            </p>
            <p>
              Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
              zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
              zapraszamy do zapoznania się z całą ofertą płyt budowlanych bądź
              wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
            </p>
          </ParagraphWithImage>
          <ProductsCarousel
            title="Przykładowe płyty budowlane"
            content="plytyBudowlane"
          />
          <ButtonWithArrows href={`/${locale}/produkty/plyty-budowlane`}>
            Pełna oferta płyt budowlanych
          </ButtonWithArrows>
        </div>

        <div className="pb-4">
          <ParagraphWithImage
            title="Płyty specjalistyczne"
            icon="icon-plyty-specjalistyczne.svg"
            productCardImg="/plyta-mdf.jpg"
            productCardTitle="płyta MDF ognioodporna"
            href="/pl/produkty/plyty-specjalistyczne"
          >
            <p className="mb-9">
              Płyty budowlane to druga grupa płyt drewnopochodnych; W naszej
              ofercie płyt budowlanych znajdują się klasyczne rozwiązania na
              bazie płyt drewnopochodnych takie jak: OSB, Durelis, V100, MFP,
              JDS oraz płyty wiórowo-cementowe. Te ostatnie idealnie nadzadzą
              się do prac zewnętrznych oraz wewnętrznych. Zbudowane są z betonu
              lekkiego i mają obustronne zbrojenie siatką z włókna szklanego.
              Sprawdź dokładny opis poszczególnych płyt i przekonaj się, która z
              nich będzie najbardzej odpowiedna do twojego projektu.
            </p>
            <p>
              Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
              zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
              zapraszamy do zapoznania się z całą ofertą płyt budowlanych bądź
              wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
            </p>
          </ParagraphWithImage>
          <ProductsCarousel
            title="Przykładowe płyty specjalistyczne"
            content="plytySpecjalistyczne"
          />
          <ButtonWithArrows href={`/${locale}/produkty/plyty-specjalistyczne`}>
            Pełna oferta płyt specjalistycznych
          </ButtonWithArrows>
        </div>

        <div className="w-screen bg-primaryGray pb-4">
          <ParagraphWithImage
            title="Sklejki"
            icon="icon-sklejki.svg"
            whiteIcon="/icon-sklejki-white.svg"
            productCardImg="/sklejki.jpg"
            productCardTitle="sklejka antypoślizgowa HEXA"
            href="/pl/produkty/sklejki"
            isRed
          >
            <p className="mb-9">
              Sklejka jest materiałem drewnopochodnym często wykorzystywanym w
              branży stolarskiej. Jej stosowanie pomaga uniknąć wielu
              niepożądanych sytuacji. W porównaniu do litego drewna nie pęka i
              nie wypacza się. Posiada wysoką wytrzymałość na gięcie statyczne,
              przez co często sprawdza się lepiej niż stal. Sklejka powstaje ze
              sklejonych ze sobą fornirów (cienkich warstw drewna). Układanie
              warstw następuje naprzemiennie-krzyżowo (są zatem ułożone do
              siebie prostopadle). Kolejne warstwy są klejone w prasach o dużym
              nacisku. Sklejka może mieć od 3 do nawet 50 mm grubości. Sklejki
              dzielą się w zależności od drewna, z którego są wytwarzane. W
              naszej ofercie znajdą Państwo sklejkę brzozową, olchową, bukową i
              sosnową.
            </p>
            <p>
              Szczegółowe informacje o materiałach, rozmiarach, grubościach,
              parametrach oraz zastosowaniu danych sklejek znajdą Państwo w
              karcie danego produktu - zapraszamy do zapoznania się z całą
              ofertą sklejek bądź wykonania telefonu i rozmowy o szczegółach z
              naszym handlowcem!
            </p>
          </ParagraphWithImage>
          <ProductsCarousel title="Przykładowe sklejki" content="sklejki" />
          <ButtonWithArrows href={`/${locale}/produkty/sklejki`}>
            Pełna oferta sklejek
          </ButtonWithArrows>
        </div>

        <ParagraphWithImage
          title="Płyty opakowaniowe"
          icon="icon-plyty-opakowaniowe.svg"
          productCardImg="/plyta-hdf-surowa2.jpg"
          productCardTitle="płyta HDF surowa"
          href="/pl/produkty/plyty-opakowaniowe"
        >
          <p className="mb-9">
            Niektóre płyty drewnopochodne wykorzystywane są w przemyśle
            opakowaniowym. Najepszym materiałem do tego typu zastosowań są:
            płyta HDF surowa, płyta OSB, sklejki oraz surowa płyta wiórowa.
            Każda z tych płyt występuje w różnych grubościach oraz klasach. Nasi
            handlowcy zadbają o to, aby Państwa produkt został zapakowany w jak
            najbardziej ekonomiczny i bezpieczny sposób. Wycinamy otwory,
            tworzymy łuki oraz docinamy elementy w taki sposób, aby łatwo je
            było połączyć w dalszym procesie.
          </p>
          <p>
            Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
            zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
            zapraszamy do zapoznania się z całą ofertą płyt opakowaniowych bądź
            wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
          </p>
        </ParagraphWithImage>
        <ProductsCarousel
          title="Przykładowe płyty opakowaniowe"
          content="plytyOpakowaniowe"
        />
        <ButtonWithArrows href={`/${locale}/produkty/plyty-opakowaniowe`}>
          Pełna oferta płyt opakowaniowych
        </ButtonWithArrows>

        <div className="w-screen bg-primaryGray pb-4">
          <ParagraphWithImage
            title="Płyty pilśniowe"
            icon="icon-plyty-pilsniowe.svg"
            whiteIcon={"/icon-plyty-pilsniowe-white.svg"}
            productCardImg="/plyta-pilsniowa-surowa-twarda.jpg"
            productCardTitle="płyta pilśniowa surowa twarda"
            href="/pl/produkty/plyty-pilsniowe"
            isRed
          >
            <p className="mb-9">
              Płyty pilśniowe - zwane potocznie dyktą, to wyrób z drewna w
              postaci płyty wykonanej z rozwłóknionej tkanki drzewnej przez
              spilśnienie jej i uformowanie w odpowiedniej temperaturze pod
              (normalnym lub zwiększonym) ciśnieniem. Powstaje tym samym zwarty
              i solidny produkt, który ma wiele praktycznych zalet. Płyty
              pilśniowe służą jako materiał do izolacji ścian, wygłuszenia
              stropów i poprawy parametrów akustycznych pomieszczeń, a także
              jako okładziny ścienne, sufitowe oraz materiał na podłogi. Płyty
              pilśniowe dzielą się na 3 kategorie: miękka - porowata, twarda -
              surowa oraz lakierowana.
            </p>
            <p>
              Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
              zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
              zapraszamy do zapoznania się z całą ofertą płyt pilśniowych bądź
              wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
            </p>
          </ParagraphWithImage>
          <ProductsCarousel
            title="Przykładowe płyty pilśniowe"
            content="plytyPilsniowe"
          />
          <ButtonWithArrows href={`/${locale}/produkty/plyty-pilsniowe`}>
            Pełna oferta płyt pilśniowych
          </ButtonWithArrows>
        </div>

        <ServicesBar />

        <ParagraphWithImage
          title="Piła panelowa 1"
          icon="icon-ciecie-proste.svg"
          productCardImg="/pila-panelowa1.jpg"
          productCardTitle="piła panelowa SCM Gabbiani Galaxy 105T"
        >
          <p className="mb-9">
            Maszyna posiada obrotnicę do cięcia paneli w dwóch płaszczyznach
            Załadunek automatyczny możliwy z trzech stron ( lewo , prawo i tył)
          </p>
          <ul className="mb-9">
            <li>
              Maksymalny wymiar materiału 3200mm x 1850 mm (przy obracaniu)
            </li>
            <li>Minimalny wymiar materiału przy obracaniu 1500mm x 1500mm </li>
            <li>Maksymalna grubość cięcia paczki paneli – 90 mm</li>
          </ul>
          <p>
            {" "}
            Używane, cięcie: 4.300 mm x 4.300 m, wysokość cięcia 105 mm, 4
            przednie tablice powietrza 2500 x 600 mm, winda.
          </p>
        </ParagraphWithImage>

        <ParagraphWithImage
          title="Piła panelowa 2"
          icon="icon-ciecie-na-okraglo.svg"
          productCardImg="/pila-panelowa2.jpg"
          productCardTitle="piła panelowa SCM Gabbiani Galaxy T3110"
          hasGrayBg
        >
          <p className="mb-9">
            Solidna i kompaktowa podstawa maszyny zapewnia precyzyjne
            prowadzenie wózka piły zapewniając wieloletnią niezawodną pracę.
            Zastosowanie prowadnic pryzmatycznych pozwala zredukować drgania,
            gwarantuje lepszą prędkość i jakość cięcia. Pilarka panelowa to
            przemysłowe rozwiązanie bogate w wyposażeni standardowe, które
            gwarantuje najlepszy stosunek ceny do wydajności. Szybkość,
            precyzja, elastyczność i wydajność z gabbiani. Została
            zaprojektowana tak, aby zapewnić wysoką wydajność w produkcji
            przemysłowej. Wybór odpowiedniego oprzyżądowania daje możliwość
            cięcia tworzywa sztucznego, płyt o powierzchniach pokrytych akrylem,
            kompozytów.
          </p>
        </ParagraphWithImage>

        <ParagraphWithImage
          title="Centrum obróbcze CNC"
          icon="icon-wycinanie-ksztaltow.svg"
          productCardImg="/centrum-obrobcze-cnc.jpg"
          productCardTitle="Centrum obrobcze
          3121 PRO PLUS InfoTEC CNC"
        >
          <p className="mb-9">
            Maszyny CNC wyspecjalizowane do ciężkiej pracy. Znajdują one
            szerokie zastosowanie w wielu branżach, a ich zadaniem jest sprostać
            wszelkim wymaganiom produkcyjnym. Użyte podzespoły oraz zastosowana
            przemysłowa technologia produkcji maszyn marki InfoTEC CNC,
            sprawiają, iż są to profesjonalne urządzenia wyspecjalizowane do
            bezawaryjnej, wielozmianowej pracy pod dużymi obciążeniami.
          </p>
          <p>
            InfoTEC Seria PRO PLUS są to automatyczne centrum nestingowe
            dedykowana dla firm z branży meblarskiej o dużym wolumenie
            produkcji. Wzmocnione łoże maszyny oraz napędy i ich przeniesienie
            gwarantują niespotykaną wydajność i rentowność. Maszyny z tej serii
            doskonale nadają się do pracy wielozmianowej.
          </p>
        </ParagraphWithImage>

        <ParagraphWithImage
          title="Okleiniarka OTT twister"
          icon="icon-ciecie-proste.svg"
          productCardImg="/okleiniarka-ott-twister1.png"
          productCardTitle="okleiniarka OTT twister"
          hasGrayBg
        >
          <p className="mb-9">
            Agregat okleinujący producenta Ott do zakładów rzemieślniczych do
            zastosowania granulatu kleju topliwego. W swoim parku maszyn
            posiadamy także okleiniarkę krzywoliniową do oklejania zaoblonych
            krawędzi.
          </p>
          <ul className="mb-9">
            <li>Jednostronna okleiniarka w wersji prawostronnej.</li>
            <li>Grubość krawędzi: 0,4-12 mm</li>
            <li>Wymiary obrabianego przedmiotu: Minimalna szerokość: 70 mm</li>
            <li>Minimalna wysokość: 8 mm</li>
            <li>Wysokość maksymalna: 60 mm</li>
            <li>Minimalna długość: 150 mm</li>
            <li>Prędkość robocza: 14-20 m/min bez kołków</li>
          </ul>
        </ParagraphWithImage>

        <ParagraphWithImage
          title="Piła formatowa"
          icon="icon-ciecie-proste.svg"
          productCardImg="/pila-formatowa.jpg"
          productCardTitle="Piła Formatowa z podcinakiem 
          REMA DMMS 40/340 SPECIAL"
        >
          <p className="mb-9">
            Oklejanie krawędzi za pomocą kleju termotopliwego na krawędziach w
            rolkach i paskach na kształtowanych panelach, po prostu niezbędne i
            funkcjonalne. Zaprojektowana jako ekonomiczna, niezawodna i
            praktyczna maszyna do oklejania krawędzi paneli prostych i
            kształtowych.
          </p>
          <ul className="mb-9">
            <li>Minimalna szerokość panelu 50 mm</li>
            <li>Minimalna odpowiednia długość krawędzi 210 mm</li>
            <li>
              Minimalny promień wewnętrzny przy grubości krawędzi 0,4 mm (góra
              wklęsła) 25 mm
            </li>
            <li>
              Minimalny promień zewnętrzny przy grubości krawędzi 0,4 mm
              (powierzchnia wypukła) 5 mm
            </li>
          </ul>
        </ParagraphWithImage>

        <ContactForm />

        <MapPoland />
      </div>
    </>
  );
}
