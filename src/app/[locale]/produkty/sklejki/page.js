import ContactForm from "../../components/global-components/contact-form";
import HeroSection from "../../components/global-components/hero-section";
import MapPoland from "../../components/global-components/map-poland";
import ParagraphWithIcons from "../../components/global-components/paragraph-with-icons";
import ParagraphWithImage from "../../components/global-components/paragraph-with-image";
import ProductCard from "../../components/global-components/product-card";
import sklejki from "../../data/sklejki";

export default function Sklejki() {
  return (
    <div>
      <HeroSection
        backgroundImage="/hero-sklejki.jpg"
        heroCircle="/hero-circle-sklejki.png"
      />
      <ParagraphWithImage
        title="Sklejki"
        icon="/icon-sklejki.svg"
        productCardImg="/sklejki.jpg"
        productCardTitle="sklejka antypoślizgowa HEXA"
      >
        <p className="mb-9">
          Sklejka jest materiałem drewnopochodnym często wykorzystywanym w
          branży stolarskiej. Jej stosowanie pomaga uniknąć wielu niepożądanych
          sytuacji. W porównaniu do litego drewna nie pęka i nie wypacza się.
          Posiada wysoką wytrzymałość na gięcie statyczne, przez co często
          sprawdza się lepiej niż stal. Sklejka powstaje ze sklejonych ze sobą
          fornirów (cienkich warstw drewna). Układanie warstw następuje
          naprzemiennie-krzyżowo (są zatem ułożone do siebie prostopadle).
          Kolejne warstwy są klejone w prasach o dużym nacisku. Sklejka może
          mieć od 3 do nawet 50 mm grubości. Sklejki dzielą się w zależności od
          drewna, z którego są wytwarzane. W naszej ofercie znajdą Państwo
          sklejkę brzozową, olchową, bukową i sosnową.
        </p>
        <p>
          Szczegółowe informacje o materiałach, rozmiarach, grubościach,
          parametrach oraz zastosowaniu danych sklejek znajdą Państwo w karcie
          danego produktu - zapraszamy do zapoznania się z całą ofertą sklejek
          bądź wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
        </p>
      </ParagraphWithImage>

      <div className="w-screen bg-primaryGray py-16 flex justify-center">
        <ul className="grid grid-cols-3 gap-16">
          {sklejki.map((plyta) => (
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
        icon3="/icon-plyty-specjalistyczne.svg"
        icon4="/icon-plyty-opakowaniowe.svg"
        icon5="/icon-plyty-pilsniowe.svg"
        img="/other-categories-asset.svg"
      >
        <p className="mb-9">
          Zapoznaj się ze szczegółową ofertą naszych pozostałych płyt.
          Znajdziesz tam płyty budowlane, płyty specjalistyczne, płyty
          opakowaniowe, płyty meblowe i płyty pilśniowe. W każdej kategorii
          poznasz szczegółowy opis płyt, które Cię interesują.
        </p>
        <p>
          Informacje o rozmiarach, grubościach, parametrach oraz zastosowaniu
          danych płyt znajdą Państwo w karcie danego produktu - zapraszamy do
          zapoznania się z całą ofertą płyt drewnopochodnych bądź wykonania
          telefonu i rozmowy o szczegółach z naszym handlowcem!
        </p>
      </ParagraphWithIcons>
      <ContactForm />

      <MapPoland />
    </div>
  );
}
