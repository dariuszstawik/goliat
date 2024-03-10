export default function ServicesBar() {
  return (
    <div className="text-base w-full h-32 flex bg-primaryYellow justify-center items-center gap-32">
      <h2>Nasze usługi</h2>
      <ul className="h-full flex gap-16 justify-center items-center">
        <li className="flex justify-center items-center gap-4">
          <img src="/icon-ciecie-proste.svg" alt="icon" className="w-10" />
          <span className="w-48 font-semibold">
            Cięcie proste + oklejanie krawędzi
          </span>
        </li>

        <li className="flex justify-center items-center gap-4">
          <img src="/icon-ciecie-na-okraglo.svg" alt="icon" className="w-10" />
          <span className="w-48 font-semibold">
            Cięcie na okrągło + oklejanie krawędzi
          </span>
        </li>

        <li className="flex justify-center items-center gap-4">
          <img
            src="/icon-wycinanie-ksztaltow.svg"
            alt="icon"
            className="w-10"
          />
          <span className="w-48 font-semibold">
            Wycinanie kształtów na maszynie CNC
          </span>
        </li>
      </ul>
    </div>
  );
}
