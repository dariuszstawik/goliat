export default function HeroIconsBar({ hasRedBg }) {
  return (
    <div
      className={`text-sm md:text-base w-full h-40 ${
        hasRedBg ? "bg-primaryRed text-white" : "bg-primaryYellow"
      } flax justify-center items-center shrink-0 shadow-lg`}
    >
      <ul className="w-full h-full px-6 grid grid-cols-2 lg:flex gap-2 lg:gap-16 justify-center items-center">
        <li className="flex justify-center items-center gap-4">
          <img src="/icon-terminy.png" alt="icon-terminy" className="" />
          <span className="w-48 text-sm lg:text-base">
            Krótkie terminy realizacji
          </span>
        </li>
        <li className="flex justify-center items-center gap-4">
          <img src="/icon-doradztwo.png" alt="icon-terminy" className="" />
          <span className="w-48 text-sm lg:text-base">
            Doradztwo, które pomoże Ci oszczędzić
          </span>
        </li>
        <li className="flex justify-center items-center gap-4">
          <img src="/icon-asortyment.png" alt="icon-terminy" className="" />
          <span className="w-48 text-sm lg:text-base">
            Szeroki asortyment produktów i usług
          </span>
        </li>
        <li className="flex justify-center items-center gap-4">
          <img src="/icon-jakosc.png" alt="icon-terminy" className="" />
          <span className="w-48 text-sm lg:text-base">
            Najwyższa jakość produktów
          </span>
        </li>
      </ul>
    </div>
  );
}
