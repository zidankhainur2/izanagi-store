import Image from "next/image";
import React from "react";

function Popups() {
  return (
    <section className="overflow-hidden rounded-lg shadow-sm md:grid md:grid-cols-3 py-12 bg-white">
      <Image
        alt=""
        src="/thumbnails/1.avif"
        className="h-16 w-full object-cover md:h-full"
        width={100}
        height={100}
      />

      <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 m-auto text-primary">
        <p className="text-sm font-semibold uppercase tracking-widest">
          Run with the pack
        </p>

        <h2 className="mt-6 font-black uppercase">
          <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
            {" "}
            Get 20% off{" "}
          </span>

          <span className="mt-2 block text-sm">
            On your next order over Rp.49.000
          </span>
        </h2>

        <a
          className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
          href="#"
        >
          Get Discount
        </a>

        <p className="mt-8 text-xs font-medium uppercase text-gray-400">
          Offer valid until 24th March, 2025 *
        </p>
      </div>
    </section>
  );
}

export default Popups;
