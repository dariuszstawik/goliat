import HeroIconsBar from "../hero-icons-bar";

export default function HeroSection() {
  return (
    <section className="pt-32 w-screen h-full flex flex-col bg-green-400 overflow-hidden">
      <div
        className="w-full bg-blue-300 flex justify-center items-center shrink"
        style={{ backgroundImage: "url('/hero-main.png')" }}
      >
        <img src="/hero-circle.png" alt="hero-circle" className="" />
      </div>

      {/* <div className="w-full h-40 bg-yellow-400"></div> */}
      <HeroIconsBar />
    </section>
  );
}
