export default function ButtonSm({ children, isYellow }) {
  return (
    <button
      className={`my-auto text-2xl lg:text-3xl border-2 border-black rounded-full ${
        isYellow ? "bg-primaryYellow" : "bg-white"
      }  px-4 py-2`}
    >
      {children}
    </button>
  );
}
