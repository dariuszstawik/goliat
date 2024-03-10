import ContactForm from "../../components/global-components/contact-form";
import HeroSection from "../../components/global-components/hero-section";
import MapPoland from "../../components/global-components/map-poland";
import ParagraphWithIcons from "../../components/global-components/paragraph-with-icons";
import ParagraphWithImage from "../../components/global-components/paragraph-with-image";
import ProductCard from "../../components/global-components/product-card";
import ProductsCarousel from "../../components/global-components/products-carousel";
import plytyPilsniowe from "../../data/plyty-pilsniowe";

export default function PlytyPilsniowe() {
  return (
    <div>
      <HeroSection
        backgroundImage="/hero-plyty-pilsniowe.jpg"
        heroCircle="/hero-circle-plyty-pilsniowe.png"
      />
      <ParagraphWithImage
        title="Płyty pilśniowe"
        icon="/icon-plyty-pilsniowe.svg"
        productCardImg="/plyta-pilsniowa-surowa-twarda.jpg"
        productCardTitle="płyta pilśniowa surowa twarda"
      >
        <p className="mb-9">
          Płyty pilśniowe - zwane potocznie dyktą, to wyrób z drewna w postaci
          płyty wykonanej z rozwłóknionej tkanki drzewnej przez spilśnienie jej
          i uformowanie w odpowiedniej temperaturze pod (normalnym lub
          zwiększonym) ciśnieniem. Powstaje tym samym zwarty i solidny produkt,
          który ma wiele praktycznych zalet. Płyty pilśniowe służą jako materiał
          do izolacji ścian, wygłuszenia stropów i poprawy parametrów
          akustycznych pomieszczeń, a także jako okładziny ścienne, sufitowe
          oraz materiał na podłogi. Płyty pilśniowe dzielą się na 3 kategorie:
          miękka - porowata, twarda - surowa oraz lakierowana.
        </p>
        <p>
          Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
          zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
          zapraszamy do zapoznania się z całą ofertą płyt pilśniowych bądź
          wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
        </p>
      </ParagraphWithImage>

      <div className="w-screen bg-primaryGray py-16 flex justify-center">
        <ul className="grid grid-cols-3 gap-16">
          {plytyPilsniowe.map((plyta) => (
            <li key={plyta.id}>
              <ProductCard
                productCardImg={plyta.img}
                alt={plyta.name}
                productCardTitle={plyta.name}
                icon={plyta.icon}
                href={plyta.href}
              />
            </li>
          ))}
        </ul>
      </div>
      <ParagraphWithIcons
        title="Pozostałe kategorie"
        icon1="/icon-plyty-meblowe.svg"
        icon2="/icon-plyty-budowlane.svg"
        icon3="/icon-sklejki.svg"
        icon4="/icon-plyty-opakowaniowe.svg"
        icon5="/icon-plyty-specjalistyczne.svg"
        img="/other-categories-asset.svg"
      >
        <p className="mb-9">
          Zapoznaj się ze szczegółową ofertą naszych pozostałych płyt.
          Znajdziesz tam płyty meblowe, płyty budowlane, płyty opakowaniowe,
          sklejki i płyty pilśniowe. W każdej kategorii poznasz szczegółowy opis
          płyt, które Cię interesują.
        </p>
        <p>
          Informacje o rozmiarach, grubościach, parametrach oraz zastosowaniu
          danych płyt znajdą Państwo w karcie danego produktu - zapraszamy do
          zapoznania się z całą ofertą płyt drewnopochodnych bądź wykonania
          telefonu i rozmowy o szczegółach z naszym handlowcem!
        </p>
      </ParagraphWithIcons>
      <ProductsCarousel content="productCategories" />
      <ContactForm />

      <MapPoland />
    </div>
  );
}
