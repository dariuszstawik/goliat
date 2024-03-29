import ButtonWithArrows from "@/app/[locale]/components/global-components/button-with-arrows";
import ContactForm from "@/app/[locale]/components/global-components/contact-form";
import HeroSection from "@/app/[locale]/components/global-components/hero-section";
import MapPoland from "@/app/[locale]/components/global-components/map-poland";
import ParagraphWithImage from "@/app/[locale]/components/global-components/paragraph-with-image";
import ProductsCarousel from "@/app/[locale]/components/global-components/products-carousel";
import plytyBudowlane from "@/app/[locale]/data/plyty-budowlane";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = plytyBudowlane.map((product) => ({
    slug: product.slug,
  }));

  return slugs;
}

export default function PlytaBudowlana({ params }) {
  const product = plytyBudowlane.find(
    (product) => product.slug === params.slug
  );

  return (
    <div>
      <HeroSection
        backgroundImage="/hero-plyty-budowlane.jpg"
        // heroCircle="/hero-circle-plyty-budowlane.png"
        productIcon="/product-icon2.svg"
        hasRedBg
      />
      <ParagraphWithImage
        title={product.name}
        icon={product.icon}
        hasNoTitleIcon
        productCardImg={product.img}
        productCardTitle={product.name}
        productCardSubtitle="płyta budowlana"
        href={product.href}
        isRed
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
        title="Sprawdź pozostałe płyty budowlane"
        content="plytyBudowlane"
      />
      <div className="mb-8">
        <ButtonWithArrows href="/pl/produkty/plyty-budowlane" isRed>
          Wróć do oferty płyt budowlanych
        </ButtonWithArrows>
      </div>
      <MapPoland />
    </div>
  );
}
