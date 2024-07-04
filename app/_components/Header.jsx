"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [kategoriOpen, setKategoriOpen] = useState(false); // State baru untuk dropdown kategori

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleKategori = () => {
    setKategoriOpen(!kategoriOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.svg" alt="logo" width={80} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-auto">
            <div className="relative">
              <button
                className="text-gray-500 hover:text-gray-900 transition duration-150"
                onClick={toggleKategori} // Menggunakan onClick untuk toggle dropdown
              >
                Kategori
              </button>
              {/* Dropdown Menu for Categories */}
              <div
                className={`absolute mt-2 bg-white shadow-lg rounded-md w-48 ${
                  kategoriOpen ? "block" : "hidden"
                }`}
              >
                <ul className="py-1">
                  <li>
                    <Link
                      href="/categories/men"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Pakaian Pria
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories/women"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Pakaian Wanita
                    </Link>
                  </li>
                  {/* Add more categories as needed */}
                </ul>
              </div>
            </div>
            <Link
              href="/about"
              className="text-gray-500 hover:text-gray-900 transition duration-150"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 hover:text-gray-900 transition duration-150"
            >
              Contact Us
            </Link>
            <Link
              href="/sign-in"
              className="text-gray-500 hover:text-gray-900 transition duration-150"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="text-gray-500 hover:text-gray-900 transition duration-150"
            >
              Register
            </Link>
            <Link
              href="/profile"
              className="text-gray-500 hover:text-gray-900 transition duration-150"
            >
              Profile
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="relative ml-auto mt-2 mr-2">
            <button
              className="text-gray-500 hover:text-gray-900 transition duration-150 focus:outline-none"
              onClick={toggleSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 101 101"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z" />
              </svg>
            </button>

            {searchOpen && (
              <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md">
                <input
                  type="text"
                  className="border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:border-primary transition"
                  placeholder="Search..."
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.4197 14.1197C12.7351 13.8043 12.7351 13.2753 12.4197 12.9599L10.7071 11.2473C10.3917 10.9319 9.86278 10.9319 9.54736 11.2473C9.23194 11.5627 9.23194 12.0916 9.54736 12.407L11.2599 14.1197C11.5753 14.4351 12.1043 14.4351 12.4197 14.1197ZM8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3C11.5376 3 14 5.46243 14 8.5C14 11.5376 11.5376 14 8.5 14Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <ul className="flex flex-col items-center gap-4 text-sm p-4">
            <li>
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-900 transition duration-150"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                className="text-gray-500 hover:text-gray-900 transition duration-150"
                onClick={toggleKategori} // Menggunakan onClick untuk toggle dropdown
              >
                Kategori
              </button>
              {/* Dropdown Menu for Categories */}
              <div
                className={`absolute mt-2 bg-white shadow-lg rounded-md w-48 ${
                  kategoriOpen ? "block" : "hidden"
                }`}
              >
                <ul className="py-1">
                  <li>
                    <Link
                      href="/categories/men"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Pakaian Pria
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories/women"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Pakaian Wanita
                    </Link>
                  </li>
                  {/* Add more categories as needed */}
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-500 hover:text-gray-900 transition duration-150"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-gray-900 transition duration-150"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="text-gray-500 hover:text-gray-900 transition duration-150"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="text-gray-500 hover:text-gray-900 transition duration-150"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="text-gray-500 hover:text-gray-900 transition duration-150"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
