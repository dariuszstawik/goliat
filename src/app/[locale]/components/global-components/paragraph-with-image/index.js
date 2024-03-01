import ProductCard from "../product-card";

export default function ParagraphWithImage({
  title,
  titleIcon,
  productCardImage,
  productCardIcon,
  productCardTitle,
  isRed,
}) {
  return (
    <section className="w-[80%] mx-auto flex gap-16 justify-center items-center">
      <ProductCard></ProductCard>
      <div className="flex flex-col">
        <div className="flex gap-16 mb-9">
          <h2>Płyty meblowe</h2>
          <img src="/icon-plyta-budowlana-osb.png" alt="icon" />
        </div>
        <div>
          <p className="mb-9">
            Płyty meblowe, jak sama nazwa wskazuje - idealnie nadadzą się do
            wykończenia wnętrza mieszkania. Płyty meblowe to nic innego jak
            płyty drewnopochodne, czyli rodzaj kompozytu drzewnego, w którym
            zawartość cząstek pochodzenia drzewnego powinna przekraczać 50%.
            Głównym materiałem do produkcji płyt drewniopochodnych jest odpad
            powstający podczas uzyskiwania tarcicy oraz paździerze, czyli
            zdrewniałe części łodyg roślin włóknistych. Aby płyta drewnopochodna
            osiągnęła swój końcowy wygląd, wióry drzewne (trociny, wióry,
            gałęzie drzew oraz paździerze) łączone są ze sobą za pomocą kleju
            syntetycznego o odpowiednich właściwościach. Następnie mieszanka z
            wiórów drzewnych oraz kleju syntetycznego poddawana jest obróbce
            termicznej oraz prasie, która działa na powstały półprodukt z
            odpowiednim ciśnieniem. Jest to proces tworzenia najczęściej
            występującej na rynku płyty wiórowej. Może ona mieć wykończenie
            “surowe” szlifowane, bądź być pokryta fornirem, lakierem czy też
            laminatem.
          </p>
          <p>
            Szczegółowe informacje o rozmiarach, grubościach, parametrach oraz
            zastosowaniu danych płyt znajdą Państwo w karcie danego produktu -
            zapraszamy do zapoznania się z całą ofertą płyt meblowych bądź
            wykonania telefonu i rozmowy o szczegółach z naszym handlowcem!
          </p>
        </div>
        <div className="flex items-center ml-auto">
          <span>Porozmawiaj z handlowcem</span>
          <span className="text-red-500 ml-10 mr-3">
            {"\u003E\u003E\u003E"}
          </span>
          <img src="/icon-porozmawiaj.png" alt="icon" className="w-20" />
        </div>
      </div>
    </section>
  );
}
