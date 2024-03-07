import Logo from "../logo";

export default function Footer() {
  return (
    <section className="w-full px-32 py-10 flex flex-col bg-gray-300">
      <div className="w-full flex flex-col lg:flex-row gap-16">
        <Logo />
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
      <div className="w-full flex flex-wrap gap-24">
        <div className="flex gap-24">
          <div>
            <div>
              <p>Goliat Sp. z o.o. </p>
              <p>
                <span>e-mail:</span> goliat@goliat.pl
              </p>
              <p>
                <span>tel.:</span> +48 62 737 64 80
              </p>
            </div>
            <div>
              <p>dział detaliczny</p>
              <p>Goliat Olsztyn</p>
            </div>
          </div>
          <div>
            <div>
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
            <ul>
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
