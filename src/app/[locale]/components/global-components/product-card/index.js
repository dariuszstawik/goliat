export default function ProductCard() {
  return (
    <div className="w-[372px] h-[488px] flex flex-col border-[1px] border-black rounded-xl overflow-hidden shrink-0">
      <div className="h-[312px]">
        <img
          src="/plyta-budowlana-osb.png"
          alt="product-card"
          className="h-full object-cover"
        />
      </div>
      <div className="bg-gray-200 grow">
        <div className="w-20 h-20 bg-yellow-400 flex justify-center items-center border-[1px] border-black rounded-full mx-auto -translate-y-1/2">
          <img
            src="/icon-plyta-budowlana-osb.png"
            alt="product-card"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 grow -translate-y-1/4">
          <h3>Płyta budowlana OSB</h3>
          <p>Zobacz więcej</p>
        </div>
      </div>
    </div>
  );
}
