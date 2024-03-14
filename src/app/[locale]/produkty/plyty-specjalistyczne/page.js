import ContactForm from "../../components/global-components/contact-form";
import HeroSection from "../../components/global-components/hero-section";
import MapPoland from "../../components/global-components/map-poland";
import ParagraphWithIcons from "../../components/global-components/paragraph-with-icons";
import ParagraphWithImage from "../../components/global-components/paragraph-with-image";
import ProductCard from "../../components/global-components/product-card";
import ProductsCarousel from "../../components/global-components/products-carousel";
import plytySpecjalistyczne from "../../data/plyty-specjalistyczne";

export default function PlytySpecjalistyczne() {
  return (
    <div>
      <HeroSection
        backgroundImage="/hero-plyty-specjalistyczne.jpg"
        heroCircle="/hero-circle-plyty-specjalistyczne.png"
      />
      <ParagraphWithImage
        title="Płyty specjalistyczne"
        icon="/icon-plyty-specjalistyczne.svg"
        productCardImg="/plyta-mdf.jpg"
        productCardTitle="płyta MDF ognioodporna"
      >
        <p className="mb-9">
          Płyty specjalistyczne to płyty drewnopochodne o zwiększonych
          parametrach odporności na dane czynniki lub takie płyty, których waga
          jest znacznie mniejsza niż w klasycznych płytach drewnopochodnych, a
          parametry nośnośni balansują na tym samym poziomie. Pod hasłem płyty
          specjalistyczne kryją się także płyty meblowe, które poprzez swoje
          barwienie dają możliwość uzyskania pięknego frezu w danej kolorystyce.
          Płyty specjalistyczne dzielą się na: ognioodporne, akystyczne,
          komórkowe, wilgocioodporne, barwione w masie, płyty o obniżonej wadze
          oraz antypoślizgowe i takie, które są idealnym rozwiązaniem na
          antresole. Wiesz jakich płyt potrzebujesz do swojego projektu -
          zadzwoń do naszego sprzedawcy i złóż zamówienie.
        </p>
        <p>
          Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
          zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
          zapraszamy do zapoznania się z całą ofertą płyt specjalistycznych bądź
          wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
        </p>
      </ParagraphWithImage>
      <div className="w-screen bg-primaryGray py-16 flex justify-center">
        <ul className="grid grid-cols-3 gap-16">
          {plytySpecjalistyczne.map((plyta) => (
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
      <div className="mb-8">
        <ProductsCarousel content="productCategories" />
      </div>
      <ContactForm />

      <MapPoland />
    </div>
  );
}
