import Image from "next/image";
import NavbarAsset from "../../global-components/navbar-asset";
import Button from "../../global-components/button";
import ButtonSm from "../../global-components/button-sm";
import Logo from "../../global-components/logo";

export default function WelcomeSection({
  title,
  subtitle,
  products,
  services,
  contact,
  locale,
}) {
  return (
    <>
      <div className="w-full mx-0 relative mb-6 hidden lg:block">
        <Image
          src="/welcome-left-asset.png"
          alt="Welcome to our website"
          width={225}
          height={258}
          className="absolute top-0 left-0 hidden xl:block"
        />
        <Image
          src="/welcome-right-asset.png"
          alt="Welcome to our website"
          width={312}
          height={329}
          className="absolute bottom-4 -right-24 hidden lg:block"
        />
        <div className="flex justify-end items-center gap-20 pr-20 pt-20">
          <div className="flex flex-col items-end gap-4">
            <h1 className="">
              {/* Witamy w grupie Goliat */}
              {title}
            </h1>
            <p className="">
              {/* U nas dostaniesz sprawdzone produkty drewnopochodne! */}
              {subtitle}
            </p>
          </div>
          <NavbarAsset />
        </div>
        <div className="w-[75%] mx-auto flex items-center gap-20 mt-8">
          <div>
            <Image
              src="/ziomeczek.png"
              alt="Welcome to our website"
              width={377}
              height={494}
              className="-translate-y-16 w-[90%]"
            />
            <Logo v2 locale={locale} />
          </div>
          <div className="flex flex-col gap-16">
            <Image
              src={
                locale === "en"
                  ? "/welcome-content-en.svg"
                  : "/welcome-content.svg"
              }
              alt="Nieustannie odpowiadamy na potrzeby rynku płyt drewnopodobnych"
              width={658}
              height={121}
              className=""
            />
            <div className="flex flex-col gap-12 pr-32">
              <div className="flex gap-8">
                <ButtonSm>
                  <a href={`/${locale}/produkty`}>{products}</a>
                </ButtonSm>
                <ButtonSm>
                  <a href={`/${locale}/uslugi`}>{services}</a>
                </ButtonSm>
                <ButtonSm>
                  <a href={`/${locale}/kontakt`}>{contact}</a>
                </ButtonSm>
              </div>
              <div>
                <Image
                  src="/vertical-arrow.png"
                  alt="arrow"
                  width={116}
                  height={214}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-0 mb-6 pt-10 flex flex-col gap-8 pl-10 lg:hidden">
        <div className="flex flex-col gap-4">
          <h1 className="">{title}</h1>
          <p className="">{subtitle}</p>
        </div>
        <Image
          src="/welcome-content-mobile.png"
          alt="Nieustannie odpowiadamy na potrzeby rynku płyt drewnopochodnych"
          width={375}
          height={121}
          className=""
        />
        <div className="w-[80%] flex flex-col gap-8">
          <ButtonSm>
            <a href={`/${locale}/produkty`}>{products}</a>
          </ButtonSm>
          <ButtonSm>
            <a href={`/${locale}/uslugi`}>{services}</a>
          </ButtonSm>
          <ButtonSm>
            <a href={`/${locale}/kontakt`}>{contact}</a>
          </ButtonSm>
        </div>
        <Image
          src="/vertical-arrow.png"
          alt="arrow"
          width={116}
          height={214}
          className="ml-32"
        />
      </div>
    </>
  );
}
