export default function HeroSection() {
  return (
    <section className="pt-40 w-screen h-[90vh] flex flex-col bg-green-400">
      <div
        className="w-full bg-blue-300 grow flex justify-center items-center"
        style={{ backgroundImage: "url('/hero-main.png')" }}
      >
        <img src="/hero-circle.png" alt="hero-circle" className="" />
      </div>

      <div className="w-full h-40 bg-yellow-400"></div>
    </section>
  );
}
