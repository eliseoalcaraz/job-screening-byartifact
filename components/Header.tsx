"use client";

import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[#0c1527] text-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Wright Windows" width={150} height={40} />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/">Home</Link>
        <Link href="/windows">Windows</Link>
        <Link href="/doors">Doors</Link>
        <Link href="/showroom">Showroom</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      {/* Search + Quote Button */}
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 cursor-pointer" />
        <Link
          href="/quote"
          className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#0c1527] transition"
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
