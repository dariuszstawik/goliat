"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavbarAsset from "../navbar-asset";
import Hamburger from "../hamburger";
import Logo from "../logo";
import LocaleSwitcher from "../locale-switcher";

const Navbar = ({
  locale,
  products,
  services,
  about,
  contact,
  furnitureBoards,
  constructionBoards,
  specialisticBoards,
  plywood,
  packagingBoards,
  fiberboards,
}) => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleHover = (item) => {
    setIsHovered(item);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  const handleRefresh = () => {
    router.reload();
  };

  return (
    <div className="text-base fixed top-0 left-0 w-screen h-32 flex justify-between items-center px-10 lg:pl-16 lg:pr-24 py-4 z-50 bg-white shadow-lg ">
      <Link href="/">
        <Logo onClick={closeMobileMenu} locale={locale} />
      </Link>
      <div className="hidden xl:block">
        <NavbarAsset />
      </div>
      <div className="flex justify-end items-center h-full gap-6">
        <ul
          className={
            isMobileMenuActive
              ? " list-none absolute z-40 w-screen top-full left-0 bg-white py-4 flex flex-col justify-center items-center gap-10 lg:static lg:flex-row lg:h-full"
              : " list-none flex-col justify-center align-center items-center gap-16 lg:flex-row my-4 hidden lg:flex lg:justify-end lg:h-full"
          }
        >
          <li
            onClick={closeMobileMenu}
            onMouseEnter={() => handleHover("produkty")}
            onMouseLeave={() => handleHover("")}
            className="relative h-full flex justify-center items-center"
          >
            <Link
              href={`/${locale}/produkty`}
              // className={`${isActive && "text-primaryBlue"}`}

              className="cursor-pointer hover:text-slate-500"
              onClick={handleRefresh}
            >
              {products}
            </Link>
            {isHovered === "produkty" && (
              <div
                className={`

              } absolute w-64 bg-white -left-10 top-full flex flex-col shadow-lg rounded`}
              >
                <ul className="flex flex-col gap-4 p-6">
                  <Link href={`/${locale}/produkty/plyty-meblowe`}>
                    <li className="flex gap-4 items-center">
                      <span>
                        <img src="/icon-plyty-meblowe.svg" className="w-5" />
                      </span>
                      {furnitureBoards}
                    </li>
                  </Link>
                  <Link href={`/${locale}/produkty/plyty-budowlane`}>
                    <li className="flex gap-4 items-center">
                      <span>
                        <img src="/icon-plyty-budowlane.svg" className="w-5" />
                      </span>
                      {constructionBoards}
                    </li>
                  </Link>

                  <Link href={`/${locale}/produkty/plyty-specjalistyczne`}>
                    <li className="flex gap-4 items-center">
                      <span>
                        <img
                          src="/icon-plyty-specjalistyczne.svg"
                          className="w-5"
                        />
                      </span>
                      {specialisticBoards}
                    </li>
                  </Link>

                  <Link href={`/${locale}/produkty/sklejki`}>
                    <li className="flex gap-4 items-center">
                      <span>
                        <img src="/icon-sklejki.svg" className="w-5" />
                      </span>
                      {plywood}
                    </li>
                  </Link>

                  <Link href={`/${locale}/produkty/plyty-opakowaniowe`}>
                    <li className="flex gap-4 items-center">
                      <span>
                        <img
                          src="/icon-plyty-opakowaniowe.svg"
                          className="w-5"
                        />
                      </span>
                      {packagingBoards}
                    </li>
                  </Link>

                  <Link href={`/${locale}/produkty/plyty-pilsniowe`}>
                    <li className="flex gap-4 items-center">
                      <span>
                        <img src="/icon-plyty-pilsniowe.svg" className="w-5" />
                      </span>
                      {fiberboards}
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </li>

          <li
            onClick={closeMobileMenu}
            className="hover:text-slate-500 cursor-pointer"
          >
            <Link
              href={`/${locale}/uslugi`}
              // className={`${isActive && "text-primaryBlue"}`}
              onClick={handleRefresh}
            >
              {services}
            </Link>
          </li>
          <li
            onClick={closeMobileMenu}
            className="hover:text-slate-500 cursor-pointer"
          >
            <Link
              href={`/${locale}/o-firmie`}
              // className={`${isActive && "text-primaryBlue"}`}
              onClick={handleRefresh}
            >
              {about}
            </Link>
          </li>
          <li
            onClick={closeMobileMenu}
            className="hover:text-slate-500 cursor-pointer hidden"
          >
            <Link
              href="/"
              // className={`${isActive && "text-primaryBlue"}`}
              onClick={handleRefresh}
            >
              {/* {start} */}
              do pobrania
            </Link>
          </li>
          <li
            onClick={closeMobileMenu}
            className="hover:text-slate-500 cursor-pointer"
          >
            <Link
              href={`/${locale}/kontakt`}
              // className={`${isActive && "text-primaryBlue"}`}
              onClick={handleRefresh}
            >
              {contact}
            </Link>
          </li>
        </ul>

        <LocaleSwitcher />

        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
