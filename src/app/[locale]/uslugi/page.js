import ContactForm from "../components/global-components/contact-form";
import HeroSection from "../components/global-components/hero-section";
import MapPoland from "../components/global-components/map-poland";
import ParagraphWithImage from "../components/global-components/paragraph-with-image";
import WelcomeSection from "../components/homepage/welcome-section";

export default function Uslugi() {
  return (
    <div>
      <HeroSection
        backgroundImage="/hero-plyty-meblowe.jpg"
        heroCircle="/hero-circle-uslugi.png"
        isServicesPage
      />

      <ParagraphWithImage
        title="Piła panelowa 1"
        icon="/icon-ciecie-proste.svg"
        productCardImg="/pila-panelowa1.jpg"
        productCardTitle="piła panelowa SCM Gabbiani Galaxy 105T"
      >
        <p className="mb-9">
          Maszyna posiada obrotnicę do cięcia paneli w dwóch płaszczyznach
          Załadunek automatyczny możliwy z trzech stron ( lewo , prawo i tył)
        </p>
        <ul className="mb-9">
          <li>Maksymalny wymiar materiału 3200mm x 1850 mm (przy obracaniu)</li>
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
        icon="/icon-ciecie-na-okraglo.svg"
        productCardImg="/pila-panelowa2.jpg"
        productCardTitle="piła panelowa SCM Gabbiani Galaxy T3110"
        hasGrayBg
      >
        <p className="mb-9">
          Solidna i kompaktowa podstawa maszyny zapewnia precyzyjne prowadzenie
          wózka piły zapewniając wieloletnią niezawodną pracę. Zastosowanie
          prowadnic pryzmatycznych pozwala zredukować drgania, gwarantuje lepszą
          prędkość i jakość cięcia. Pilarka panelowa to przemysłowe rozwiązanie
          bogate w wyposażeni standardowe, które gwarantuje najlepszy stosunek
          ceny do wydajności. Szybkość, precyzja, elastyczność i wydajność z
          gabbiani. Została zaprojektowana tak, aby zapewnić wysoką wydajność w
          produkcji przemysłowej. Wybór odpowiedniego oprzyżądowania daje
          możliwość cięcia tworzywa sztucznego, płyt o powierzchniach pokrytych
          akrylem, kompozytów.
        </p>
      </ParagraphWithImage>

      <ParagraphWithImage
        title="Centrum obróbcze CNC"
        icon="/icon-wycinanie-ksztaltow.svg"
        productCardImg="/centrum-obrobcze-cnc.jpg"
        productCardTitle="Centrum obrobcze
          3121 PRO PLUS InfoTEC CNC"
      >
        <p className="mb-9">
          Maszyny CNC wyspecjalizowane do ciężkiej pracy. Znajdują one szerokie
          zastosowanie w wielu branżach, a ich zadaniem jest sprostać wszelkim
          wymaganiom produkcyjnym. Użyte podzespoły oraz zastosowana przemysłowa
          technologia produkcji maszyn marki InfoTEC CNC, sprawiają, iż są to
          profesjonalne urządzenia wyspecjalizowane do bezawaryjnej,
          wielozmianowej pracy pod dużymi obciążeniami.
        </p>
        <p>
          InfoTEC Seria PRO PLUS są to automatyczne centrum nestingowe
          dedykowana dla firm z branży meblarskiej o dużym wolumenie produkcji.
          Wzmocnione łoże maszyny oraz napędy i ich przeniesienie gwarantują
          niespotykaną wydajność i rentowność. Maszyny z tej serii doskonale
          nadają się do pracy wielozmianowej.
        </p>
      </ParagraphWithImage>

      <ParagraphWithImage
        title="Okleiniarka OTT twister"
        icon="/icon-ciecie-proste.svg"
        productCardImg="/okleiniarka-ott-twister.jpg"
        productCardTitle="okleiniarka OTT twister"
        hasGrayBg
      >
        <p className="mb-9">
          Agregat okleinujący producenta Ott do zakładów rzemieślniczych do
          zastosowania granulatu kleju topliwego. W swoim parku maszyn posiadamy
          także okleiniarkę krzywoliniową do oklejania zaoblonych krawędzi.
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
        icon="/icon-ciecie-proste.svg"
        productCardImg="/pila-formatowa.jpg"
        productCardTitle="Piła Formatowa z podcinakiem 
          REMA DMMS 40/340 SPECIAL"
      >
        <p className="mb-9">
          Oklejanie krawędzi za pomocą kleju termotopliwego na krawędziach w
          rolkach i paskach na kształtowanych panelach, po prostu niezbędne i
          funkcjonalne. Zaprojektowana jako ekonomiczna, niezawodna i praktyczna
          maszyna do oklejania krawędzi paneli prostych i kształtowych.
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
      <WelcomeSection />
      <MapPoland />
    </div>
  );
}
