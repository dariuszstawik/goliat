import Link from "next/link";
import Logo from "../logo";
import Image from "next/image";

export default function Footer({ locale }) {
  return (
    <section className="text-base w-full px-10 md:px-20 lg:px-32 py-10 flex flex-col gap-10">
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-32">
        <Logo hasNoMargin />
        <div className="flex gap-4 shrink-0 items-center">
          <a href="https://www.facebook.com/GoliatPolska/">
            <Image src="/fb-icon.svg" width={42} height={42} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/company/goliat-polska/">
            <Image
              src="/linkedin-icon.svg"
              width={42}
              height={42}
              alt="linkedin"
            />
          </a>
          <a href="https://www.instagram.com/goliat.polska/">
            <Image
              src="/insta-icon.svg"
              width={42}
              height={42}
              alt="instagram"
            />
          </a>
        </div>
        <div className="flex shrink-0 items-center">
          <img
            src="/rzetelna-firma.svg"
            width={142}
            height={61}
            alt="rzetelna firma"
            className="items-center shrink-0"
          />
        </div>
        <div className="flex shrink-0 items-center">
          <img
            src="/gazele-biznesu.svg"
            alt="gazele biznesu logo"
            width={156}
            height={45}
          />
        </div>
      </div>
      <div className="w-full min-h-44 flex flex-wrap gap-10 lg:gap-32">
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
              <li>
                <Link href={`/${locale}/produkty`}>Produkty</Link>
              </li>
              <li>
                <Link href={`/${locale}/uslugi`}>Usługi</Link>
              </li>
              <li>
                <Link href={`/${locale}/o-firmie`}>O firmie</Link>
              </li>
              {/* <li><Link  href={`/${locale}/do-pobrania`}>Do pobrania </Link></li> */}
              <li>
                <Link href={`/${locale}/kontakt`}>Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="flex items-start gap-16">
          <img src="/fsc.svg" alt="fsc logo" width={65} height={84} />
          <img
            src="/gazele-biznesu.svg"
            alt="gazele biznesu logo"
            width={156}
            height={45}
          />
        </div> */}
      </div>
    </section>
  );
}
