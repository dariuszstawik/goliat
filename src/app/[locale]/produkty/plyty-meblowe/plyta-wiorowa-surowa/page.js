import ButtonWithArrows from "@/app/[locale]/components/global-components/button-with-arrows";
import ContactForm from "@/app/[locale]/components/global-components/contact-form";
import HeroSection from "@/app/[locale]/components/global-components/hero-section";
import MapPoland from "@/app/[locale]/components/global-components/map-poland";
import ParagraphWithImage from "@/app/[locale]/components/global-components/paragraph-with-image";
import ProductsCarousel from "@/app/[locale]/components/global-components/products-carousel";

export default function PlytaWiorowaSurowa() {
  return (
    <div>
      <HeroSection
        backgroundImage="/plyta-wiorowa-surowa-hero.jpg"
        hasProductIcon
      />
      <ParagraphWithImage
        title="Płyta wiórowa surowa"
        icon="/icon-plyty-meblowe.svg"
        hasNoTitleIcon
        productCardImg="/plyta-wiorowa-surowa.jpg"
        productCardTitle="płyta wiórowa surowa"
        productCardSubtitle="płyta meblowa"
      >
        <p className="mb-9">
          Płyta wiórowa surowa to podstawowy materiał konstrukcyjny dla
          przemysłu meblarskiego i budownictwa. Płyty wiórowe wytwarzane są z
          wiórów drzewnych, pochodzących ze zdrowego drewna drobnogabarytowego
          lub odpadowego. Wióry sprasowane są z dodatkiem żywic przy użyciu
          ciśnienia i temperatury. Dzięki użytym technologiom płyta wiórowa
          zachowuje stabilność parametrów fizykomechanicznych i wymiarowych,
          jest łatwa w obróbce, a zastosowane na zewnętrznej warstwie drobne
          frakcje drewna czynią powierzchnię gładką i gotową do uszlachetnienia.
          Płytę wiórową z powodzeniem możemy stosować do produkcji paneli
          podłogowych, blatów, parapetów, opakowań, ścianek działowych, a przede
          wszystkim do produkcji mebli tapicerowanych i skrzyniowych. Po
          uszlachetnieniu laminowaniem, fornirowaniem, czy lakierowaniem
          doskonale nadaje się na korpusy i fronty.
        </p>
      </ParagraphWithImage>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[80%] gap-6 mx-auto mb-24">
        <div className="flex flex-col">
          <span className="text-[44px] font-semibold my-8">2800x2070</span>
          <div>
            <span className="text-xl">grubości [mm]:</span>{" "}
            <span> 10 / 12 / 15 / 16 / 18 / 19</span>
          </div>
          <span> 22 / 25 / 28 / 30 / 32 / 36 / 38</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[44px] font-semibold my-8">2840x1830</span>
          <div>
            <span className="text-xl">grubości [mm]:</span>{" "}
            <span> 10 / 12 / 15 / 16 / 18 / 19</span>
          </div>
          <span> 22 / 25 / 28 / 30 / 32 / 36 / 38</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[44px] font-semibold my-8">2750x1830</span>
          <div>
            <span className="text-xl">grubości [mm]:</span>{" "}
            <span> 10 / 12 / 15 / 16 / 18 / 19</span>
          </div>
          <span> 22 / 25 / 28 / 30 / 32 / 36 / 38</span>
        </div>
      </div>
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
