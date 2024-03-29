import ButtonWithArrows from "@/app/[locale]/components/global-components/button-with-arrows";
import ContactForm from "@/app/[locale]/components/global-components/contact-form";
import HeroSection from "@/app/[locale]/components/global-components/hero-section";
import MapPoland from "@/app/[locale]/components/global-components/map-poland";
import ParagraphWithImage from "@/app/[locale]/components/global-components/paragraph-with-image";
import ProductsCarousel from "@/app/[locale]/components/global-components/products-carousel";
import plytyMeblowe from "@/app/[locale]/data/plyty-meblowe";
import sklejki from "@/app/[locale]/data/sklejki";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = sklejki.map((product) => ({
    slug: product.slug,
  }));

  return slugs;
}

export default function Sklejka({ params }) {
  const product = sklejki.find((product) => product.slug === params.slug);

  return (
    <div>
      <HeroSection
        backgroundImage="/foto-sklejki.jpg"
        productIcon="/product-icon4.svg"
        hasRedBg
      />
      <ParagraphWithImage
        title={product.name}
        icon={product.icon}
        hasNoTitleIcon
        productCardImg={product.img}
        productCardTitle={product.name}
        productCardSubtitle="płyta meblowa"
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
      <ProductsCarousel title="Sprawdź pozostałe sklejki" content="sklejki" />
      <div className="mb-8">
        <ButtonWithArrows href="/pl/produkty/sklejki" isRed>
          Wróć do oferty sklejek
        </ButtonWithArrows>
      </div>
      <MapPoland />
    </div>
  );
}
