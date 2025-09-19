"use client";

import { Search } from "lucide-react";
import { products } from "../data/content";
import { Dropdown } from "./NavDropdown";
import Image from "next/image";
import Link from "next/link";

type NavLink =
  | { label: string; href: string }
  | { label: string; category: "window" | "door" };

export default function Navbar() {
  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Windows", category: "window" },
    { label: "Doors", category: "door" },
    { label: "Showroom", href: "/showroom" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const getDropdownData = (category: "window" | "door") => {
    const items = products.filter((p) => p.category === category);
    return {
      material: items.filter((p) => p.type === "material"),
      style: items.filter((p) => p.type === "style"),
    };
  };

  const windowsData = getDropdownData("window");
  const doorsData = getDropdownData("door");

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black text-white relative shadow-lg">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Wright Windows"
          width={180}
          height={50}
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10 items-center">
        {navLinks.map((item) => {
          if ("category" in item) {
            // Dropdown case
            if (item.category === "window") {
              return (
                <Dropdown
                  key={item.label}
                  title={item.label}
                  data={windowsData}
                />
              );
            }
            if (item.category === "door") {
              return (
                <Dropdown
                  key={item.label}
                  title={item.label}
                  data={doorsData}
                />
              );
            }
          } else {
            // Link case
            return (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {item.label}
              </Link>
            );
          }
        })}
      </div>

      {/* Right side actions */}
      <div className="flex items-center space-x-4">
        <button
          aria-label="Search"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <Search className="w-6 h-6" />
        </button>
        <Link
          href="/quote"
          className="border border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-blue-400 hover:text-black transition-all duration-300 font-semibold"
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
