import Image from "next/image";
import ContactForm from "../components/global-components/contact-form";
import HeroSection from "../components/global-components/hero-section";
import MapPoland from "../components/global-components/map-poland";
import ParagraphWithImage from "../components/global-components/paragraph-with-image";
import ParagraphWithIcons from "../components/global-components/paragraph-with-icons";
import ProductsCarousel from "../components/global-components/products-carousel";

export default function OFirmie() {
  return (
    <div>
      <HeroSection backgroundImage="/hero-homepage.jpg" hasProductsIcons />
      <ParagraphWithImage
        title="Parę słów o grupie Goliat"
        icon="/icon-logo1.svg"
        img="/europa4.svg"
      >
        <p className="mb-8">
          Nasza firma istnieje na rynku od 30 lat. Zdobyte doświadczenie pozwala
          nam nie tylko na bycie rozpoznawalnym wśród licznego grona klientów,
          ale również służyć doradztwem w wielu kwestiach związanych z
          wykorzystywaniem i zastosowaniem materiałów drewnopodobnych w
          produkcji przemysłowej. W swojej grupie posiadamy oddział zajmujący
          się sprzedażą detaliczną znajdujący się w Olsztynie z szerokim wyborem
          zwłaszcza płyt wiórowych laminowanych oraz sprzedażą hurtową,
          zlokalizowany wraz ze swoimi magazynami i nowoczesną halą produkcyjną
          w Ostrowie Wielkopolskim.
        </p>
        <p>
          Inwestujemy w rozwój. W swojej karierze aż 8-krotnie zdobyliśmy Gazelę
          Biznesu, która jest najstarszym, najbardziej wiarygodnym i
          najpopularniejszym rankingiem małych i średnich firm w Polsce.
          {/* Możemy
          poszczycić się także certyfikatem Rzetelnej Firmy praz znakiem FSC,
          czyli odpowiedzialnej gospodarki leśnej o numerze C116227. W naszej
          branży szczególnie istotne jest, żeby dbać o pochodzenie surowca,
          który jest głównym składnikiem naszych produktów. */}
        </p>
      </ParagraphWithImage>
      <div className="relative w-screen h-[300px] lg:h-[440px] overflow-hidden">
        <Image
          src="/smiling-man.jpg"
          alt="zdjęcie pracownika"
          fill={true}
          className="w-full object-cover"
        />
      </div>

      <ParagraphWithIcons
        title="W grupie siła!"
        img="/other-categories-asset.svg"
        isReverse
      >
        <p className="mb-8">
          Ludzie, którzy pracują w naszej firmie, to wykwalifikowani specjaliści
          od płyt meblowych. Dzięki swojej wiedzy i wieloletnim stażu w naszej
          firmie sprawnie obsługują zamówienia, jakie wpadają w ich ręce. Mamy w
          swoim zespole ekspertów od centrum obróbczego CNC, pił panelowych,
          okleiniarek i wpraawnych operatorów wózków widłowych. Dzięki ich pracy
          zespołowej nasze zamówienia są dostarczane do klientów na czas i są
          dobrze zabezpieczone w podróży.
        </p>
        <p>
          Inwestujemy nie tylko w firmę jako placówkę - wspieramy kariery
          zawodowe naszych pracowników. Inwestujemy w szkolenia i kursy.
          Wszystko to po to, aby nasi pracownicy poszerzali swoje umiejętności i
          stawali się ekspertami w tym, co robią.
        </p>
      </ParagraphWithIcons>
      <div className="relative w-screen h-[300px] lg:h-[440px] overflow-hidden">
        <Image
          src="/foto-ofirmie2.jpg"
          alt="zdjęcie pracownika"
          fill={true}
          className="w-full object-cover"
        />
      </div>
      <ParagraphWithIcons
        title="Nowoczesne centrum obróbcze to..."
        img="/circled-left-arrow.svg"
        isOnAboutPage
      >
        <p className="mb-8">
          niezawodny system maszyn, które są w stanie wykonać najbardziej
          zaawansowane kształty i spełnić oczekiwania wymagających klientów. Na
          naszych maszynach jesteśmy w stanie wykonać hurtowe cięcia w bardzo
          krótkim czasie. Wszelkie zaoblenia, otwory, gwiazdki, fale, frezowania
          w dowolnym kształcie i inne. Wszystko to, co można zrobić z płytą
          drewnopochodną - wykonają Państwo u nas.
        </p>
        <p>
          Nasi operatorzy wykorzystują rozmiar płyty w maksymalny sposób,
          zmniejszając w ten sposób koszt Państwa inwestycji w produkt. Służymy
          doświadczeniem i wspieramy naszych klientów w doborze odpowiedniej
          płyty i jej formatu. Niezawodne centrum obróbcze w połączeniu z
          doświadczonym zespołem to przepis na sukces naszych produktów. Grupa
          Goliat rozwija się wraz z rozwojem swoich klientów. Zapraszamy do
          współpracy!
        </p>
      </ParagraphWithIcons>
      <div className="relative w-screen h-[300px] lg:h-[440px] overflow-hidden">
        <Image
          src="/foto-ofirmie3.jpg"
          alt="zdjęcie pracownika"
          fill={true}
          className="w-full object-cover"
        />
      </div>
      <ProductsCarousel
        content="productCategories"
        title="Sprawdź ofertę naszych płyt drewnopochodnych"
      />
      <MapPoland />
      <ContactForm />
    </div>
  );
}
