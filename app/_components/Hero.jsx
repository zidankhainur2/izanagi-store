import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50 hero-section">
      <div className="mx-auto max-w-screen-xl px-4 py-14 lg:flex lg:mx-4 content">
        <div className="mx-auto max-w-xl text-center lg:text-start z-20">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white lg:text-6xl">
            <span className="text-primary bg-white">Izanagi</span> Fashion
            Store.
            <strong className="font-extrabold text-white sm:block">
              {" "}
              Diskon Spesial Menanti Anda.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-white">
            Temukan gaya Anda dengan koleksi fashion eksklusif kami. Mulai dari
            pakaian sehari-hari hingga gaya formal, Izanagi hadir untuk memenuhi
            kebutuhan Anda.
          </p>
          <a
            href="#content"
            className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition duration-300"
          >
            Jelajahi Koleksi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
