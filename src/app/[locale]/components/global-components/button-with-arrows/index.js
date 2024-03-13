export default function ButtonWithArrows({ isRed, children, href }) {
  return (
    <div className="w-full flex justify-center gap-7 py-8">
      {isRed ? (
        <img
          src="/red-right-arrow.png"
          alt="icon"
          className="hidden lg:block"
        />
      ) : (
        <img
          src="/yellow-right-arrow.png"
          alt="icon"
          className="hidden lg:block"
        />
      )}
      <button
        className={`my-auto text-xl lg:text-3xl font-semibold border-2 border-black rounded-full ${
          isRed ? "bg-primaryRed" : "bg-primaryYellow"
        } px-6 py-4 shadow-lg`}
      >
        {children}
      </button>
      {isRed ? (
        <img src="/red-left-arrow.png" alt="icon" className="hidden lg:block" />
      ) : (
        <img
          src="/yellow-left-arrow.png"
          alt="icon"
          className="hidden lg:block"
        />
      )}
    </div>
  );
}
