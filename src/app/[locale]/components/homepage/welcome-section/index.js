import Image from "next/image";
import NavbarAsset from "../../global-components/navbar-asset";
import Button from "../../global-components/button";
import ButtonSm from "../../global-components/button-sm";
import Logo from "../../global-components/logo";

export default function WelcomeSection() {
  return (
    <div className="w-full h-screen mx-0 my-20 relative">
      <Image
        src="/welcome-left-asset.png"
        alt="Welcome to our website"
        width={225}
        height={258}
        className="absolute top-0 left-0"
      />
      <Image
        src="/welcome-right-asset.png"
        alt="Welcome to our website"
        width={312}
        height={329}
        className="absolute bottom-0 -right-24"
      />
      <div className="flex justify-end gap-20 pr-20">
        <div>
          <h1 className="">Welcome to our website</h1>
          <p className="pl-20">
            U nas dostaniesz sprawdzone produkty drewnopochodne!
          </p>
        </div>
        <NavbarAsset />
      </div>
      <div className="w-[75%] mx-auto flex items-end gap-20">
        <div>
          <Image
            src="/hood-worker.png"
            alt="Welcome to our website"
            width={377}
            height={494}
            className=""
          />
          <Logo />
        </div>
        <div className="flex flex-col gap-16">
          <Image
            src="/welcome-content.png"
            alt="Nieustannie odpowiadamy na potrzeby rynku płyt drewnopodobnych"
            width={658}
            height={121}
            className=""
          />
          <div className="flex gap-8">
            <ButtonSm isYellow>Produkty</ButtonSm>
            <ButtonSm>Usługi</ButtonSm>
            <ButtonSm>Kontakt</ButtonSm>
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
  );
}
