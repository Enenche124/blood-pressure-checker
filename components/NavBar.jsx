import React from "react";
import Link from "next/link";


const NavBar = () => {

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex items-center gap-3">
            <img src="/mylogos.png" alt="APST J.A Logo" className="h-10" />
            <span className="text-xl font-bold text-gray-700">APST J.A</span>
            </div>
    
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                Get Started
            </button>
            </nav>
        </div>
        </header>
    );
    }
export default NavBar;

