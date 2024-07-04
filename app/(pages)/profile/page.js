"use client";
// pages/profile.js
import React from "react";
import Image from "next/image";
import { useClerk } from "@clerk/clerk-react";

function Profile() {
  const { user, isLoading, isError } = useClerk();

  // Memeriksa jika data sedang dimuat atau terjadi error
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching user profile.</p>;

  // Memeriksa jika user tidak ada atau data kosong
  if (!user) return <p>User data not found.</p>;

  // Mengambil data dari objek user
  const { username, email } = user;

  return (
    <section id="profile" className="py-12">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center text-black">
          <h1 className="text-2xl mb-4">
            Selamat Datang di <span className="text-primary">Izanagi</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Profile picture and details */}
          <div className="flex flex-col items-center md:items-start">
            <div className="group relative block overflow-hidden shadow-lg rounded-full w-40 h-40">
              <div className="relative">
                {/* Ganti dengan gambar profil pengguna */}
                <Image
                  src="/thumbnails/2.avif"
                  alt="Profile Picture"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 bg-primary"
                  width={160}
                  height={160}
                />
              </div>
            </div>
            <div className="relative border border-gray-100 bg-white p-6 mt-6 text-center md:text-left w-full">
              <h3 className="text-lg font-medium text-gray-900">{username}</h3>
              <p className="mt-1.5 text-sm text-gray-700">{email}</p>
              <div className="mt-4">
                <button className="block w-full rounded bg-primary p-4 text-sm font-medium transition hover:scale-105">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Sales information */}
          <div className="grid grid-cols-1 gap-8">
            <article className="rounded-lg border border-gray-100 bg-white p-6">
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-2xl font-medium text-gray-900">$240.94</p>
                  <p className="text-sm text-gray-500">Total Sales</p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-gray-100 bg-white p-6">
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-blue-100 p-3 text-blue-600 sm:order-last">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-2xl font-medium text-gray-900">$240.94</p>
                  <p className="text-sm text-gray-500">Total Sales</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
