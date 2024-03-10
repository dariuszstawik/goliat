import ContactForm from "../../components/global-components/contact-form";
import HeroSection from "../../components/global-components/hero-section";
import MapPoland from "../../components/global-components/map-poland";
import ParagraphWithIcons from "../../components/global-components/paragraph-with-icons";
import ParagraphWithImage from "../../components/global-components/paragraph-with-image";
import ProductCard from "../../components/global-components/product-card";
import ProductsCarousel from "../../components/global-components/products-carousel";
import plytyOpakowaniowe from "../../data/plyty-opakowaniowe";

export default function PlytyOpakowaniowe() {
  return (
    <div>
      <HeroSection
        backgroundImage="/hero-plyty-opakowaniowe.jpg"
        heroCircle="/hero-circle-plyty-opakowaniowe.png"
      />
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

      <div className="w-screen bg-primaryGray py-16 flex justify-center">
        <ul className="grid grid-cols-3 gap-16">
          {plytyOpakowaniowe.map((plyta) => (
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
        icon4="/icon-plyty-specjalistyczne.svg"
        icon5="/icon-plyty-pilsniowe.svg"
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
