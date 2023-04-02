"use client";

import HeroContent from "./Contents/HeroContent";

export default function Hero() {
  const handleLihatProduk = () => {
    window.open("https://tokopedia.link/DtLN8CokFyb", "_blank");
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row h-full">
          <div className="w-5/12">
            <HeroContent />
            <button
              className="btn btn-success normal-case text-white"
              onClick={() => handleLihatProduk}
            >
              Lihat Produk
            </button>
          </div>
          <div className="max-w-sm rounded-lg shadow-2xl">
            <img src="/dalam.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}
