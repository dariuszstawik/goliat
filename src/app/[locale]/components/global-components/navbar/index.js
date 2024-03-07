"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavbarAsset from "../navbar-asset";
import Hamburger from "../hamburger";
import Logo from "../logo";

const Navbar = ({
  isActive,
  locale,
  start,
  about,
  projects,
  getInspired,
  news,
  contact,
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
    <div className="fixed top-0 left-0 w-screen h-32 flex justify-between items-center px-10 lg:px-16 py-4 z-50 bg-white shadow-lg ">
      <Logo closeMobileMenu={closeMobileMenu} onClick={handleRefresh} />
      <NavbarAsset />
      <div className="flex justify-end items-center h-full">
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
              href="/"
              // className={`${isActive && "text-primaryBlue"}`}
              classNaem="cursor-pointer hover:text-slate-500"
              onClick={handleRefresh}
            >
              {/* {start} */}
              produkty
            </Link>
            {isHovered === "produkty" && (
              <div
                className={`

              } absolute w-60 bg-white top-full -left-10 z-200 flex flex-col`}
              >
                <ul className="flex flex-col gap-4 p-4">
                  <Link href="/produkty/plyty-meblowe">
                    <li className="flex gap-4 items-center">
                      <span>
                        <img src="/icon-plyty-meblowe.svg" className="w-5" />
                      </span>
                      płyty meblowe
                    </li>
                  </Link>

                  <li className="flex gap-4 items-center">
                    <span>
                      <img src="/icon-plyty-budowlane.svg" className="w-5" />
                    </span>
                    płyty budowlane
                  </li>

                  <li className="flex gap-4 items-center">
                    <span>
                      <img
                        src="/icon-plyty-specjalistyczne.svg"
                        className="w-5"
                      />
                    </span>
                    płyty specjalistyczne
                  </li>

                  <li className="flex gap-4 items-center">
                    <span>
                      <img src="/icon-sklejki.svg" className="w-5" />
                    </span>
                    sklejki
                  </li>

                  <li className="flex gap-4 items-center">
                    <span>
                      <img src="/icon-plyty-opakowaniowe.svg" className="w-5" />
                    </span>
                    płyty opakowaniowe
                  </li>

                  <li className="flex gap-4 items-center">
                    <span>
                      <img src="/icon-plyty-pilsniowe.svg" className="w-5" />
                    </span>
                    płyty pilśniowe
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li
            onClick={closeMobileMenu}
            className="hover:text-slate-500 cursor-pointer"
          >
            <Link
              href="/"
              // className={`${isActive && "text-primaryBlue"}`}
              onClick={handleRefresh}
            >
              {/* {start} */}
              usługi
            </Link>
          </li>
          <li
            onClick={closeMobileMenu}
            className="hover:text-slate-500 cursor-pointer"
          >
            <Link
              href="/"
              // className={`${isActive && "text-primaryBlue"}`}
              onClick={handleRefresh}
            >
              {/* {start} */}O firmie
            </Link>
          </li>
          <li
            onClick={closeMobileMenu}
            className="hover:text-slate-500 cursor-pointer"
          >
            <Link
              href="/"
              // className={`${isActive && "text-primaryBlue"}`}
              onClick={handleRefresh}
            >
              {/* {start} */}
              Do pobrania
            </Link>
          </li>
          <li
            onClick={closeMobileMenu}
            className="hover:text-slate-500 cursor-pointer"
          >
            <Link
              href="/"
              // className={`${isActive && "text-primaryBlue"}`}
              onClick={handleRefresh}
            >
              {/* {start} */}
              Kontakt
            </Link>
          </li>
        </ul>
        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
