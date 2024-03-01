export default function ButtonWithArrows({ isRed, children }) {
  return (
    <div className="w-full flex justify-center gap-7">
      {isRed ? (
        <img src="/red-right-arrow.png" alt="icon" className="" />
      ) : (
        <img src="/yellow-right-arrow.png" alt="icon" className="" />
      )}
      <button
        className={`my-auto text-3xl lg:text-4xl border-2 border-black rounded-full ${
          isRed ? "bg-primaryRed" : "bg-primaryYellow"
        } px-6 py-4 shadow-lg`}
      >
        {children}
      </button>
      {isRed ? (
        <img src="/red-left-arrow.png" alt="icon" className="" />
      ) : (
        <img src="/yellow-left-arrow.png" alt="icon" className="" />
      )}
    </div>
  );
}
