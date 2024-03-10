import Image from "next/image";

export default function ContactParagraph({ isRed, hasGrayBg, children, img }) {
  return (
    <div className={`w-screen ${hasGrayBg && "bg-primaryGray"}`}>
      <section
        className={`w-[80%] mx-auto py-16 flex gap-16 justify-center items-center 
      }`}
      >
        <div className="w-[372px] h-[488px] flex justify-center items-center shrink-0">
          <img src={img} alt="asset" className="" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-10 mb-9">
            <div className="flex flex-col gap-6">
              <h3 className="mt-auto">+48 62 737 64 80</h3>
              <h3 className="text-primaryRed mt-auto">goliat@goliat.pl</h3>
            </div>
            <div>
              <p className="mb-8">
                Skontaktuj się z nami bezpośrednio, klikając na numer telefonu
                lub adres e-mail, bądź wypełnij poniższy formularz, a odezwiemy
                się do Ciebie z bezpośrednią ofertą na nasze płyty
                drewnopochodne i usługi cięcia.
              </p>
              <p>
                Poniżej formularza znajdziesz mapkę z kontaktami do konkretnych
                przedstawicieli działów handlowych. Wiesz co Cię interesuje -
                wykonaj telefon bezpośrednio do handlowca odpowiedzialnego za
                twój rejon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
