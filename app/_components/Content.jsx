import Image from "next/image";
import React from "react";

function Content() {
  return (
    <section id="content">
      <div className="bg-white py-14">
        <div className="text-center text-black">
          <h1 className="text-2xl">
            Mari Berburu Fashion Di <span className="text-prim">Izanagi </span>
            Store
          </h1>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-14 flex flex-wrap justify-center gap-4">
          <ProductCard image="/thumbnails/3.avif" name="Kemeja Kasual" />
          <ProductCard image="/thumbnails/1.avif" name="Kaos Jamet" />
          <ProductCard image="/thumbnails/2.avif" name="Lengan Panjang" />
          <ProductCard image="/thumbnails/1.avif" name="Kaos Jamet" />
          <ProductCard image="/thumbnails/3.avif" name="Kemeja Kasual" />
          <ProductCard image="/thumbnails/2.avif" name="Lengan Panjang" />
          <ProductCard image="/thumbnails/3.avif" name="Kaos Jamet" />
          <ProductCard image="/thumbnails/2.avif" name="Kemeja Kasual" />
          <ProductCard image="/thumbnails/1.avif" name="Lengan Panjang" />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ image, name }) {
  return (
    <a href="#" className="group relative block overflow-hidden shadow-lg">
      <div className="relative">
        <button className="absolute top-4 end-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <Image
          src={image}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 bg-primary"
          width={100}
          height={100}
        />
      </div>
      <div className="relative border border-gray-100 bg-white p-6 mt-4">
        <span className="whitespace-nowrap bg-primary px-3 py-1.5 text-xs font-medium">
          New
        </span>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
        <p className="mt-1.5 text-sm text-gray-700">Rp.149.999</p>
        <form className="mt-4">
          <button className="block w-full rounded bg-primary p-4 text-sm font-medium transition hover:scale-105">
            Add to Cart
          </button>
        </form>
      </div>
    </a>
  );
}

export default Content;
