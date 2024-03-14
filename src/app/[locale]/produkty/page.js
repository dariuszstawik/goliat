import { unstable_setRequestLocale } from "next-intl/server";
import ButtonWithArrows from "../components/global-components/button-with-arrows";
import HeroSection from "../components/global-components/hero-section";
import ParagraphWithImage from "../components/global-components/paragraph-with-image";
import ProductsCarousel from "../components/global-components/products-carousel";
import Image from "next/image";

export default function Produkty({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <HeroSection
        backgroundImage="/hero-produkty.jpg"
        heroCircle="/hero-circle-produkty.png"
        hasRedBg
      />

      <div className="flex flex-col gap-2 my-16 items-center">
        <h2 className="mt-auto mb-6 xl:mr-4">Produkty</h2>

        <div className="flex gap-4">
          <Image
            src="/icon-plyty-meblowe.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
          <Image
            src="/icon-plyty-budowlane.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
          <Image
            src="/icon-plyty-specjalistyczne.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
          <Image
            src="/icon-sklejki.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
          <Image
            src="/icon-plyty-opakowaniowe.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
          <Image
            src="/icon-plyty-pilsniowe.svg"
            alt="icon"
            width={49}
            height={35}
            className="h-9"
          />
        </div>
      </div>

      <ProductsCarousel content="plytyMeblowe" />

      <div className="pb-4">
        <ParagraphWithImage
          title="Płyty meblowe"
          icon="/icon-plyty-meblowe.svg"
          productCardImg="/plyta-wiorowa.jpg"
          productCardTitle="płyta biurowa laminowana biała"
        >
          <p className="mb-9">
            Płyty meblowe, jak sama nazwa wskazuje - idealnie nadadzą się do
            wykończenia wnętrza mieszkania. Płyty meblowe to nic innego jak
            płyty drewnopochodne, czyli rodzaj kompozytu drzewnego, w którym
            zawartość cząstek pochodzenia drzewnego powinna przekraczać 50%.
            Głównym materiałem do produkcji płyt drewniopochodnych jest odpad
            powstający podczas uzyskiwania tarcicy oraz paździerze, czyli
            zdrewniałe części łodyg roślin włóknistych. Aby płyta drewnopochodna
            osiągnęła swój końcowy wygląd, wióry drzewne (trociny, wióry,
            gałęzie drzew oraz paździerze) łączone są ze sobą za pomocą kleju
            syntetycznego o odpowiednich właściwościach. Następnie mieszanka z
            wiórów drzewnych oraz kleju syntetycznego poddawana jest obróbce
            termicznej oraz prasie, która działa na powstały półprodukt z
            odpowiednim ciśnieniem. Jest to proces tworzenia najczęściej
            występującej na rynku płyty wiórowej. Może ona mieć wykończenie
            “surowe” szlifowane, bądź być pokryta fornirem, lakierem czy też
            laminatem.
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
          icon="/icon-plyty-budowlane.svg"
          whiteIcon="/icon-plyty-budowlane-white.svg"
          productCardImg="/plyta-durelis.jpg"
          productCardTitle="płyta Durelis"
          isRed
        >
          <p className="mb-9">
            Płyty budowlane to druga grupa płyt drewnopochodnych; W naszej
            ofercie płyt budowlanych znajdują się klasyczne rozwiązania na bazie
            płyt drewnopochodnych takie jak: OSB, Durelis, V100, MFP, JDS oraz
            płyty wiórowo-cementowe. Te ostatnie idealnie nadzadzą się do prac
            zewnętrznych oraz wewnętrznych. Zbudowane są z betonu lekkiego i
            mają obustronne zbrojenie siatką z włókna szklanego. Sprawdź
            dokładny opis poszczególnych płyt i przekonaj się, która z nich
            będzie najbardzej odpowiedna do twojego projektu.
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
          icon="/icon-plyty-specjalistyczne.svg"
          productCardImg="/plyta-mdf.jpg"
          productCardTitle="płyta MDF ognioodporna"
        >
          <p className="mb-9">
            Płyty budowlane to druga grupa płyt drewnopochodnych; W naszej
            ofercie płyt budowlanych znajdują się klasyczne rozwiązania na bazie
            płyt drewnopochodnych takie jak: OSB, Durelis, V100, MFP, JDS oraz
            płyty wiórowo-cementowe. Te ostatnie idealnie nadzadzą się do prac
            zewnętrznych oraz wewnętrznych. Zbudowane są z betonu lekkiego i
            mają obustronne zbrojenie siatką z włókna szklanego. Sprawdź
            dokładny opis poszczególnych płyt i przekonaj się, która z nich
            będzie najbardzej odpowiedna do twojego projektu.
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
          icon="/icon-sklejki.svg"
          whiteIcon="/icon-sklejki-white.svg"
          productCardImg="/sklejki.jpg"
          productCardTitle="sklejka antypoślizgowa HEXA"
          isRed
        >
          <p className="mb-9">
            Sklejka jest materiałem drewnopochodnym często wykorzystywanym w
            branży stolarskiej. Jej stosowanie pomaga uniknąć wielu
            niepożądanych sytuacji. W porównaniu do litego drewna nie pęka i nie
            wypacza się. Posiada wysoką wytrzymałość na gięcie statyczne, przez
            co często sprawdza się lepiej niż stal. Sklejka powstaje ze
            sklejonych ze sobą fornirów (cienkich warstw drewna). Układanie
            warstw następuje naprzemiennie-krzyżowo (są zatem ułożone do siebie
            prostopadle). Kolejne warstwy są klejone w prasach o dużym nacisku.
            Sklejka może mieć od 3 do nawet 50 mm grubości. Sklejki dzielą się w
            zależności od drewna, z którego są wytwarzane. W naszej ofercie
            znajdą Państwo sklejkę brzozową, olchową, bukową i sosnową.
          </p>
          <p>
            Szczegółowe informacje o materiałach, rozmiarach, grubościach,
            parametrach oraz zastosowaniu danych sklejek znajdą Państwo w karcie
            danego produktu - zapraszamy do zapoznania się z całą ofertą sklejek
            bądź wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
          </p>
        </ParagraphWithImage>
        <ProductsCarousel title="Przykładowe sklejki" content="sklejki" />
        <ButtonWithArrows href={`/${locale}/produkty/sklejki`}>
          Pełna oferta sklejek
        </ButtonWithArrows>
      </div>

      <ParagraphWithImage
        title="Płyty opakowaniowe"
        icon="/icon-plyty-opakowaniowe.svg"
        productCardImg="/plyta-hdf-surowa.jpg"
        productCardTitle="płyta HDF surowa"
      >
        <p className="mb-9">
          Niektóre płyty drewnopochodne wykorzystywane są w przemyśle
          opakowaniowym. Najepszym materiałem do tego typu zastosowań są: płyta
          HDF surowa, płyta OSB, sklejki oraz surowa płyta wiórowa. Każda z tych
          płyt występuje w różnych grubościach oraz klasach. Nasi handlowcy
          zadbają o to, aby Państwa produkt został zapakowany w jak najbardziej
          ekonomiczny i bezpieczny sposób. Wycinamy otwory, tworzymy łuki oraz
          docinamy elementy w taki sposób, aby łatwo je było połączyć w dalszym
          procesie.
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
          icon="/icon-plyty-pilsniowe.svg"
          whiteIcon={"/icon-plyty-pilsniowe-white.svg"}
          productCardImg="/plyta-pilsniowa-surowa-twarda.jpg"
          productCardTitle="płyta pilśniowa surowa twarda"
          isRed
        >
          <p className="mb-9">
            Płyty pilśniowe - zwane potocznie dyktą, to wyrób z drewna w postaci
            płyty wykonanej z rozwłóknionej tkanki drzewnej przez spilśnienie
            jej i uformowanie w odpowiedniej temperaturze pod (normalnym lub
            zwiększonym) ciśnieniem. Powstaje tym samym zwarty i solidny
            produkt, który ma wiele praktycznych zalet. Płyty pilśniowe służą
            jako materiał do izolacji ścian, wygłuszenia stropów i poprawy
            parametrów akustycznych pomieszczeń, a także jako okładziny ścienne,
            sufitowe oraz materiał na podłogi. Płyty pilśniowe dzielą się na 3
            kategorie: miękka - porowata, twarda - surowa oraz lakierowana.
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
    </div>
  );
}
