export default function HeroIconsBar({ hasRedBg, icon1, icon2, icon3, icon4 }) {
  return (
    <div
      className={`text-sm md:text-base w-full min-h-40 lg:h-40 py-6 ${
        hasRedBg ? "bg-primaryRed text-white" : "bg-primaryYellow"
      } flax justify-center items-center shrink-0 shadow-lg`}
    >
      <ul className="w-full h-full px-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:flex lg:gap-16 justify-center items-center">
        <li className="flex justify-center items-center gap-4">
          <img
            src="/icon-terminy1.svg"
            alt="icon-terminy"
            className="w-[50px]"
          />
          <span className="w-48 text-sm lg:text-base">
            {/* Krótkie terminy realizacji */}
            {icon1}
          </span>
        </li>
        <li className="flex justify-center items-center gap-4">
          <img
            src="/icon-doradztwo1.svg"
            alt="icon-terminy"
            className="w-[50px]"
          />
          <span className="w-48 text-sm lg:text-base">
            {/* Doradztwo, które pomoże Ci oszczędzić */}
            {icon2}
          </span>
        </li>
        <li className="flex justify-center items-center gap-4">
          <img
            src="/icon-asortyment1.svg"
            alt="icon-terminy"
            className="w-[50px]"
          />
          <span className="w-48 text-sm lg:text-base">
            {/* Szeroki asortyment produktów i usług */}
            {icon3}
          </span>
        </li>
        <li className="flex justify-center items-center gap-4">
          <img
            src="/icon-jakosc1.svg"
            alt="icon-terminy"
            className="w-[50px]"
          />
          <span className="w-48 text-sm lg:text-base">
            {/* Najwyższa jakość produktów */}
            {icon4}
          </span>
        </li>
      </ul>
    </div>
  );
}
