"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false); // close menu when user clicks a link
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="./" onClick={handleNavClick} className="flex items-center">
        <div className="flex items-center gap-3 cursor-pointer">
          
          <img src="/mylogos.png" alt="APST J.A Logo" className="h-10" />
            
          <span className="text-xl font-bold text-gray-700">APST J.A</span>
        </div>
    
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-3xl text-gray-700 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="cursor-pointer">Home</Link>
          <Link href="/about" className="cursor-pointer">About Us</Link>
          <Link href="/contact" className="cursor-pointer">Contact Us</Link>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition cursor-pointer">
            Get Started
          </button>
        </nav>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 pb-4 text-gray-700 font-medium">
          <Link href="/" onClick={handleNavClick} className="cursor-pointer">
            Home
          </Link>
          <Link href="/about" onClick={handleNavClick} className="cursor-pointer">
            About Us
          </Link>
          <Link href="/contact" onClick={handleNavClick} className="cursor-pointer">
            Contact Us
          </Link>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition cursor-pointer"
            onClick={handleNavClick}
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
