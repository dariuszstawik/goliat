export default function ButtonSm({ children, isYellow, hasSmallerText }) {
  return (
    <button
      className={`my-auto text-base ${
        hasSmallerText ? "lg:text-xl" : "lg:text-2xl"
      } border-2 border-black rounded-full ${
        isYellow ? "bg-primaryYellow" : "bg-white"
      }  px-8 py-2 hover:bg-primaryYellow`}
    >
      {children}
    </button>
  );
}
