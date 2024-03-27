import ButtonWithArrows from "@/app/[locale]/components/global-components/button-with-arrows";
import ContactForm from "@/app/[locale]/components/global-components/contact-form";
import HeroSection from "@/app/[locale]/components/global-components/hero-section";
import MapPoland from "@/app/[locale]/components/global-components/map-poland";
import ParagraphWithImage from "@/app/[locale]/components/global-components/paragraph-with-image";
import ProductsCarousel from "@/app/[locale]/components/global-components/products-carousel";
import plytyMeblowe from "@/app/[locale]/data/plyty-meblowe";

export default function PlytaMeblowa({ params }) {
  const product = plytyMeblowe.find((product) => product.slug === params.slug);

  return (
    <div>
      <HeroSection
        backgroundImage="/foto-plyty-meblowe.jpg"
        heroCircle="/hero-circle-plyty-meblowe.png"
      />
      <ParagraphWithImage
        title={product.name}
        icon={product.icon}
        hasNoTitleIcon
        productCardImg={product.img}
        productCardTitle={product.name}
        productCardSubtitle="płyta meblowa"
        href={product.href}
      >
        <p className="mb-9">{product.description}</p>
      </ParagraphWithImage>
      {product.content}
      <ProductsCarousel
        title="Sprawdź usługi powiązane z tą płytą"
        content="servicesData"
      />
      <div className="mb-8">
        <ButtonWithArrows>
          Przejdź na stronę główną naszych usług
        </ButtonWithArrows>
      </div>
      <ContactForm />
      <ProductsCarousel
        title="Sprawdź pozostałe płyty meblowe"
        content="plytyMeblowe"
      />
      <div className="mb-8">
        <ButtonWithArrows>Wróć do oferty płyt meblowych</ButtonWithArrows>
      </div>
      <MapPoland />
    </div>
  );
}
