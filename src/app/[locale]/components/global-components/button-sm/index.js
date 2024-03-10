export default function ButtonSm({ children, isYellow }) {
  return (
    <button
      className={`my-auto text-xl lg:text-xl border-2 border-black rounded-full ${
        isYellow ? "bg-primaryYellow" : "bg-white"
      }  px-4 py-2`}
    >
      {children}
    </button>
  );
}
