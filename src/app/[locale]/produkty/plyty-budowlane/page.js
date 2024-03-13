import ContactForm from "../../components/global-components/contact-form";
import HeroSection from "../../components/global-components/hero-section";
import MapPoland from "../../components/global-components/map-poland";
import ParagraphWithIcons from "../../components/global-components/paragraph-with-icons";
import ParagraphWithImage from "../../components/global-components/paragraph-with-image";
import ProductCard from "../../components/global-components/product-card";
import ProductsCarousel from "../../components/global-components/products-carousel";
import plytyBudowlane from "../../data/plyty-budowlane";

export default function PlytyBudowlane() {
  return (
    <div>
      <HeroSection
        backgroundImage="/hero-plyty-budowlane.jpg"
        heroCircle="/hero-circle-plyty-budowlane.png"
        hasRedBg
      />

      <ParagraphWithImage
        title="Płyty budowlane"
        icon="/icon-plyty-budowlane.svg"
        whiteIcon="/icon-plyty-budowlane-white.svg"
        productCardImg="/plyta-durelis.jpg"
        productCardTitle="płyta Durelis"
        isRed
      >
        <p className="mb-9">
          Płyty budowlane to druga grupa płyt drewnopochodnych; W naszej ofercie
          płyt budowlanych znajdują się klasyczne rozwiązania na bazie płyt
          drewnopochodnych takie jak: OSB, Durelis, V100, MFP, JDS oraz płyty
          wiórowo-cementowe. Te ostatnie idealnie nadzadzą się do prac
          zewnętrznych oraz wewnętrznych. Zbudowane są z betonu lekkiego i mają
          obustronne zbrojenie siatką z włókna szklanego. Sprawdź dokładny opis
          poszczególnych płyt i przekonaj się, która z nich będzie najbardzej
          odpowiedna do twojego projektu.
        </p>
        <p>
          Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
          zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
          zapraszamy do zapoznania się z całą ofertą płyt budowlanych bądź
          wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
        </p>
      </ParagraphWithImage>
      <div className="w-screen bg-primaryGray py-16 flex justify-center">
        <ul className="grid grid-cols-3 gap-16">
          {plytyBudowlane.map((plyta) => (
            <li key={plyta.id}>
              <ProductCard
                productCardImg={plyta.img}
                alt={plyta.name}
                productCardTitle={plyta.name}
                icon={plyta.icon}
                whiteIcon={plyta.whiteIcon}
                href={plyta.href}
                isRed
              />
            </li>
          ))}
        </ul>
      </div>
      <ParagraphWithIcons
        title="Pozostałe kategorie"
        icon1="/icon-plyty-meblowe.svg"
        icon2="/icon-plyty-specjalistyczne.svg"
        icon3="/icon-sklejki.svg"
        icon4="/icon-plyty-opakowaniowe.svg"
        icon5="/icon-plyty-pilsniowe.svg"
        img="/other-categories-asset.svg"
      >
        <p className="mb-9">
          Zapoznaj się ze szczegółową ofertą naszych pozostałych płyt.
          Znajdziesz tam płyty meblowe, płyty specjalistyczne, płyty
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
      <ProductsCarousel content="productCategories" />
      <ContactForm />

      <MapPoland />
    </div>
  );
}
