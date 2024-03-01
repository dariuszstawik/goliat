export default function Button({ children }) {
  return (
    <button
      className={`my-auto text-3xl lg:text-4xl border-2 border-black rounded-full bg-white px-6 py-4 shadow-lg`}
    >
      {children}
    </button>
  );
}
