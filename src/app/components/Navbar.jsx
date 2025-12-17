"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-semibold text-white">
          <Image
            src="/images/logo-white.png"
            width={120}
            height={40}
            alt="Essentia"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 text-sm font-medium text-white relative">
          <Link href="/about" className="menu-hover p-1">
            About Us
          </Link>
          <Link href="/interior-and-design" className="menu-hover p-1">
            Interior Design
          </Link>
          <Link href="/elevation-design" className="menu-hover p-1">
            Elevation Design
          </Link>
          <Link href="/landscape-designing" className="menu-hover p-1">
            Landscape Designing
          </Link>

          {/* Bespoke Furniture Dropdown */}
          <div className="relative group">
            <button className="menu-hover p-1">Bespoke Furniture</button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-black text-white p-4 rounded shadow-xl w-56 z-10">
              <Link
                href="/furniture/indoor"
                className="block p-2 hover:bg-white hover:text-black transition"
              >
                Indoor
              </Link>
              <Link
                href="/furniture/outdoor"
                className="block p-2 hover:bg-white hover:text-black transition"
              >
                Outdoor
              </Link>
            </div>
          </div>

          {/* Projects Dropdown */}
          <div className="relative group">
            <button className="menu-hover p-1">Projects</button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-black text-white p-4 rounded shadow-xl w-56 z-10">
              <Link
                href="/projects/residential"
                className="block p-2 hover:bg-white hover:text-black transition"
              >
                Residential
              </Link>
              <Link
                href="/projects/commercial"
                className="block p-2 hover:bg-white hover:text-black transition"
              >
                Commercial
              </Link>
            </div>
          </div>

          <Link href="/turnkey-execution" className="menu-hover p-1">
            Turnkey Execution
          </Link>
          <Link href="/services" className="menu-hover p-1">
            Services
          </Link>
          <Link href="/contact-us" className="menu-hover p-1">
            Contact
          </Link>

          {/* Theme Toggle */}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Icon */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 py-4 space-y-3 text-white flex flex-col w-[90%] mx-auto rounded">
          <MobileLink href="/about" onClick={toggleMenu}>
            About Us
          </MobileLink>
          <MobileLink href="/interior-design" onClick={toggleMenu}>
            Interior Design
          </MobileLink>
          <MobileLink href="/elevation-design" onClick={toggleMenu}>
            Elevation Design
          </MobileLink>
          <MobileLink href="/landscape-designing" onClick={toggleMenu}>
            Landscape Designing
          </MobileLink>

          <MobileDropdown
            title="Bespoke Furniture"
            links={[
              { href: "/furniture/indoor", label: "Indoor" },
              { href: "/furniture/outdoor", label: "Outdoor" },
            ]}
            toggleParent={toggleMenu}
          />

          <MobileDropdown
            title="Projects"
            links={[
              { href: "/projects/residential", label: "Residential" },
              { href: "/projects/commercial", label: "Commercial" },
            ]}
            toggleParent={toggleMenu}
          />

          <MobileLink href="/turnkey-execution" onClick={toggleMenu}>
            Turnkey Execution
          </MobileLink>
          <MobileLink href="/services" onClick={toggleMenu}>
            Services
          </MobileLink>
          <MobileLink href="/contact" onClick={toggleMenu}>
            Contact
          </MobileLink>

          {/* Theme Toggle in mobile */}
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-white border border-white/20 rounded px-2 py-1 text-sm hover:text-amber-300 transition"
    >
      {theme === "dark" ? "☀" : "🌙"}
    </button>
  );
}

// Reusable Mobile Link
function MobileLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="menu-hover block border-b border-white pb-2"
    >
      {children}
    </Link>
  );
}

// Mobile Dropdown Component
function MobileDropdown({ title, links, toggleParent }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white pb-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full font-semibold"
      >
        {title}
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {open && (
        <div className="flex flex-col mt-2 ml-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleParent}
              className="block text-sm menu-hover"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
