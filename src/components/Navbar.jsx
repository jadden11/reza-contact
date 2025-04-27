"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-between items-center gap-7">
            <img
              src="/icon.jpg"
              alt="logo"
              className="w-[50px] h-[50px] rounded-full"
            />
            <h3 className="font-semibold text-2xl">Reza</h3>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-10 font-semibold text-sm">
            <li>
              <Link href={"#home"}>Home</Link>
            </li>
            <li>
              <Link href={"#about"}>About</Link>
            </li>
            <li>
              <Link href={"#contact"}>Contact</Link>
            </li>
            <li>
              <Link href={"#proyek"}>Proyek</Link>
            </li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden block" onClick={handleClick}>
            <i className="ri-menu-3-line ri-2x font-bold"></i>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={handleClick}>
            <i className="ri-close-line ri-2x"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-6 font-semibold text-sm p-6">
          <li onClick={handleClick}>
            <Link href={"#home"}>Home</Link>
          </li>
          <li onClick={handleClick}>
            <Link href={"#about"}>About</Link>
          </li>
          <li onClick={handleClick}>
            <Link href={"#contact"}>Contact</Link>
          </li>
          <li onClick={handleClick}>
            <Link href={"#proyek"}>Proyek</Link>
          </li>
        </ul>
      </div>

      {/* Overlay Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={handleClick}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
