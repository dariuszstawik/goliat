import ButtonWithArrows from "@/app/[locale]/components/global-components/button-with-arrows";
import ContactForm from "@/app/[locale]/components/global-components/contact-form";
import HeroSection from "@/app/[locale]/components/global-components/hero-section";
import MapPoland from "@/app/[locale]/components/global-components/map-poland";
import ParagraphWithImage from "@/app/[locale]/components/global-components/paragraph-with-image";
import ProductsCarousel from "@/app/[locale]/components/global-components/products-carousel";
import plytySpecjalistyczne from "@/app/[locale]/data/plyty-specjalistyczne";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = plytySpecjalistyczne.map((product) => ({
    slug: product.slug,
  }));

  return slugs;
}

export default function PlytaSpecjalistyczna({ params }) {
  const product = plytySpecjalistyczne.find(
    (product) => product.slug === params.slug
  );

  return (
    <div>
      <HeroSection
        backgroundImage="/foto-specjalistyczne.jpg"
        productIcon="/product-icon3.svg"
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
        <div className="mb-9">{product.description}</div>
        {product.description1 && (
          <div className="mb-9">{product.description1}</div>
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
        title="Sprawdź pozostałe płyty specjalistyczne"
        content="plytySpecjalistyczne"
      />
      <div className="mb-8">
        <ButtonWithArrows href="/pl/produkty/plyty-specjalistyczne">
          Wróć do oferty płyt specjalistycznych
        </ButtonWithArrows>
      </div>
      <MapPoland />
    </div>
  );
}
