export default function ServicesBar({
  services,
  services1,
  services2,
  services3,
}) {
  return (
    <>
      <div className="text-sm md:text-base w-full h-40 px-10 hidden lg:flex bg-primaryYellow justify-center items-center gap-32 shadow-lg">
        <h2>{services}</h2>
        <ul className="h-full flex gap-16 justify-center items-center">
          <li className="flex justify-center items-center gap-4">
            <img src="/icon-ciecie-proste.svg" alt="icon" className="w-10" />
            <span className="w-48 font-semibold">{services1}</span>
          </li>

          <li className="flex justify-center items-center gap-4">
            <img
              src="/icon-ciecie-na-okraglo.svg"
              alt="icon"
              className="w-10"
            />
            <span className="w-48 font-semibold">{services2}</span>
          </li>

          <li className="flex justify-center items-center gap-4">
            <img
              src="/icon-wycinanie-ksztaltow.svg"
              alt="icon"
              className="w-10"
            />
            <span className="w-48 font-semibold">{services3}</span>
          </li>
        </ul>
      </div>
      <div
        className={`lg:hidden text-base w-full min-h-48 bg-primaryYellow
        flax justify-center items-center shrink-0 shadow-lg`}
      >
        <ul className="w-full h-full p-6 grid grid-cols-1 md:grid-cols-2 lg:flex gap-6 lg:gap-16 justify-center items-center">
          <li className="flex justify-center items-center gap-4">
            <h2>{services}</h2>
          </li>
          <li className="flex justify-center items-center gap-4">
            <img src="/icon-ciecie-proste.svg" alt="icon" className="w-10" />
            <span className="w-48 font-semibold">{services1}</span>
          </li>
          <li className="flex justify-center items-center gap-4">
            <img
              src="/icon-ciecie-na-okraglo.svg"
              alt="icon"
              className="w-10"
            />
            <span className="w-48 font-semibold">{services2}</span>
          </li>
          <li className="flex justify-center items-center gap-4">
            <img
              src="/icon-wycinanie-ksztaltow.svg"
              alt="icon"
              className="w-10"
            />
            <span className="w-48 font-semibold">{services3}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
