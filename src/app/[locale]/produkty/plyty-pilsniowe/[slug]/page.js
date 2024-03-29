import ButtonWithArrows from "@/app/[locale]/components/global-components/button-with-arrows";
import ContactForm from "@/app/[locale]/components/global-components/contact-form";
import HeroSection from "@/app/[locale]/components/global-components/hero-section";
import MapPoland from "@/app/[locale]/components/global-components/map-poland";
import ParagraphWithImage from "@/app/[locale]/components/global-components/paragraph-with-image";
import ProductsCarousel from "@/app/[locale]/components/global-components/products-carousel";
import plytyPilsniowe from "@/app/[locale]/data/plyty-pilsniowe";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = plytyPilsniowe.map((product) => ({
    slug: product.slug,
  }));

  return slugs;
}

export default function PlytaPilsniowa({ params }) {
  const product = plytyPilsniowe.find(
    (product) => product.slug === params.slug
  );

  return (
    <div>
      <HeroSection
        backgroundImage="/hero-plyty-pilsniowe.jpg"
        productIcon="/product-icon6.svg"
        hasRedBg
      />
      <ParagraphWithImage
        title={product.name}
        icon={product.icon}
        hasNoTitleIcon
        productCardImg={product.img}
        productCardTitle={product.name}
        productCardSubtitle="płyta pilśniowa"
        href={product.href}
        isRed
      >
        <p className="mb-9">{product.description}</p>
        {product.description2Paragraph && (
          <div className="mb-9">{product.description2Paragraph}</div>
        )}
      </ParagraphWithImage>
      {product.content}
      <ProductsCarousel
        title="Sprawdź usługi powiązane z tą płytą"
        content="servicesData"
      />
      <div className="mb-8">
        <ButtonWithArrows href="/pl/uslugi">
          Przejdź na stronę główną naszych usług
        </ButtonWithArrows>
      </div>
      <ContactForm />
      <ProductsCarousel
        title="Sprawdź pozostałe płyty pilśniowe"
        content="plytyPilsniowe"
      />
      <div className="mb-8">
        <ButtonWithArrows href="/pl/produkty/plyty-pilsniowe" isRed>
          Wróć do oferty płyt pilśniowych
        </ButtonWithArrows>
      </div>
      <MapPoland />
    </div>
  );
}
