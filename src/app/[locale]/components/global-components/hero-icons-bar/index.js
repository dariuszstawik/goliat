export default function HeroIconsBar({ hasRedBg }) {
  return (
    <div
      className={`text-base w-full h-40 ${
        hasRedBg ? "bg-primaryRed text-white" : "bg-primaryYellow"
      } flax justify-center items-center shrink-0 shadow-lg`}
    >
      <ul className="w-full h-full flex gap-16 justify-center items-center">
        <li className="flex justify-center items-center gap-4">
          <img src="/icon-terminy.png" alt="icon-terminy" className="" />
          <span className="w-48">Krótkie terminy realizacji</span>
        </li>
        <li className="flex justify-center items-center gap-4">
          <img src="/icon-doradztwo.png" alt="icon-terminy" className="" />
          <span className="w-48">Doradztwo, które pomoże Ci oszczędzić</span>
        </li>
        <li className="flex justify-center items-center gap-4">
          <img src="/icon-asortyment.png" alt="icon-terminy" className="" />
          <span className="w-48">Szeroki asortyment produktów i usług</span>
        </li>
        <li className="flex justify-center items-center gap-4">
          <img src="/icon-jakosc.png" alt="icon-terminy" className="" />
          <span className="w-48">Najwyższa jakość produktów</span>
        </li>
      </ul>
    </div>
  );
}
