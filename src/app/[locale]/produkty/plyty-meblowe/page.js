import ContactForm from "../../components/global-components/contact-form";
import HeroSection from "../../components/global-components/hero-section";
import MapPoland from "../../components/global-components/map-poland";
import ParagraphWithIcons from "../../components/global-components/paragraph-with-icons";
import ParagraphWithImage from "../../components/global-components/paragraph-with-image";
import ProductCard from "../../components/global-components/product-card";
import ProductsCarousel from "../../components/global-components/products-carousel";
import plytyMeblowe from "../../data/plyty-meblowe";

export default function PlytyMeblowe() {
  return (
    <div>
      <HeroSection
        backgroundImage="/foto-plyty-meblowe.jpg"
        heroCircle="/hero-circle-plyty-meblowe.png"
      />
      <ParagraphWithImage
        title="Płyty meblowe"
        icon="/icon-plyty-meblowe.svg"
        productCardImg="/plyta-wiorowa.jpg"
        productCardTitle="płyta wiórowa laminowana"
        href="/pl/produkty/plyty-meblowe/plyta-wiorowa-laminowana-biala"
      >
        <p className="mb-9">
          Płyty meblowe, jak sama nazwa wskazuje - idealnie nadadzą się do
          wykończenia wnętrza mieszkania. Płyty meblowe to nic innego jak płyty
          drewnopochodne, czyli rodzaj kompozytu drzewnego, w którym zawartość
          cząstek pochodzenia drzewnego powinna przekraczać 50%. Głównym
          materiałem do produkcji płyt drewniopochodnych jest odpad powstający
          podczas uzyskiwania tarcicy oraz paździerze, czyli zdrewniałe części
          łodyg roślin włóknistych. Aby płyta drewnopochodna osiągnęła swój
          końcowy wygląd, wióry drzewne (trociny, wióry, gałęzie drzew oraz
          paździerze) łączone są ze sobą za pomocą kleju syntetycznego o
          odpowiednich właściwościach. Następnie mieszanka z wiórów drzewnych
          oraz kleju syntetycznego poddawana jest obróbce termicznej oraz
          prasie, która działa na powstały półprodukt z odpowiednim ciśnieniem.
          Jest to proces tworzenia najczęściej występującej na rynku płyty
          wiórowej. Może ona mieć wykończenie “surowe” szlifowane, bądź być
          pokryta fornirem, lakierem czy też laminatem.
        </p>
        <p>
          Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
          zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
          zapraszamy do zapoznania się z całą ofertą płyt meblowych bądź
          wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
        </p>
      </ParagraphWithImage>

      <div className="w-screen bg-primaryGray py-16 flex justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
          {plytyMeblowe.map((plyta) => (
            <li key={plyta.id}>
              <ProductCard
                productCardImg={plyta.img}
                alt={plyta.name}
                productCardTitle={plyta.name}
                icon={plyta.icon}
                href={`/pl/produkty/plyty-meblowe/${plyta.slug}`}
                isInCarousel
              />
            </li>
          ))}
        </ul>
      </div>
      <ParagraphWithIcons
        title="Pozostałe kategorie"
        icon1="/icon-plyty-budowlane.svg"
        icon2="/icon-plyty-specjalistyczne.svg"
        icon3="/icon-sklejki.svg"
        icon4="/icon-plyty-opakowaniowe.svg"
        icon5="/icon-plyty-pilsniowe.svg"
        img="/other-categories-asset.svg"
      >
        <p className="mb-9">
          Zapoznaj się ze szczegółową ofertą naszych pozostałych płyt.
          Znajdziesz tam płyty budowlane, płyty specjalistyczne, płyty
          opakowaniowe, sklejki i płyty pilśniowe. W każdej kategorii poznasz
          szczegółowy opis płyt, które Cię interesują.
        </p>
        <p>
          Informacje o rozmiarach, grubościach, parametrach oraz zastosowaniu
          danych płyt znajdą Państwo w karcie danego produktu - zapraszamy do
          zapoznania się z całą ofertą płyt drewnopochodnych bądź wykonania
          telefonu i rozmowy o szczegółach z naszym handlowcem!
        </p>
      </ParagraphWithIcons>

      <div className="mb-8 hidden lg:block">
        <ProductsCarousel content="productCategories" />
      </div>
      <ContactForm />

      <MapPoland />
    </div>
  );
}
