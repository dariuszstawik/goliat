import Logo from "../logo";

export default function Footer() {
  return (
    <section className="text-base w-full px-32 py-10 flex flex-col gap-10">
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-32">
        <Logo hasNoMargin />
        <div className="flex gap-4 shrink-0 items-center">
          <img src="/fb-icon.png" alt="facebook" />
          <img src="/linkedin-icon.png" alt="linkedin" />
          <img src="/insta-icon.png" alt="instagram" />
        </div>
        <div className="flex gap-4 shrink-0 items-center">
          <img
            src="/rzetelna-firma.png"
            alt="rzetelna firma"
            className="items-center shrink-0"
          />
        </div>
      </div>
      <div className="w-full min-h-40 flex flex-wrap gap-10 lg:gap-32">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 grow">
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold">Goliat Sp. z o.o. </p>
              <p>
                <span className="text-primaryRed">e-mail:</span>{" "}
                goliat@goliat.pl
              </p>
              <p>
                <span className="text-primaryRed">tel.:</span> +48 62 737 64 80
              </p>
            </div>
            <div className="flex flex-col gap-0">
              <p>Grupa Goliat - sprzedaż </p>
              <p>hurtowa i detaliczna</p>
              <p className=" text-primaryRed font-semibold">Goliat Olsztyn</p>
            </div>
          </div>
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <p>Główna siedziba</p>
              <p>ul. Topolowa 75 63-400 Ostrów Wlkp.</p>
              <p>NIP: 739 35 30 312, REGON: 280091860</p>
              <p>KRS: 0000251074</p>
            </div>
            <div>
              <p>Polityka prywatności</p>
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-1">
              <li className="text-lg font-semibold uppercase">Menu </li>
              <li>Produkty</li>
              <li>Usługi</li>
              <li>O firmie</li>
              <li>Do pobrania</li>
              <li>Kontakt</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-16">
          <img src="/fsc-logo.png" alt="fsc logo" />
          <img src="/gazele-logo.png" alt="gazele biznesu logo" />
        </div>
      </div>
    </section>
  );
}
