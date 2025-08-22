"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/essentiaenvironment/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/essentiaenvironments?igsh=andybGV5ZGRiMjhy",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/essentia-environments/",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/Essenti15770486",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/+919810088877",
    },
    {
      name: "Pinterest",
      icon: FaPinterest,
      url: "https://in.pinterest.com/chawla0673/",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "http://www.youtube.com/@essentiaenvironments",
    },
  ];
  return (
    <footer className="border-1">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="">
            <Image
              src={
                resolvedTheme === "dark"
                  ? "/images/logo-white.png"
                  : "/images/logo-black.webp"
              }
              alt="Logo"
              width={160}
              height={40}
              className="-ml-4"
            />
          </Link>
          <p className="mt-4 text-md text-gray-400">
            Transforming Spaces, Elevating Lives
          </p>
          <div className="flex mt-4 space-x-4 flex-wrap gap-2">
            {socialLinks.map((Icon) => (
              <div
                key={Icon.name}
                className="p-2 rounded-full border-2 mt-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_12px_#f59e0b]"
              >
                <Link
                  href={Icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <Icon.icon className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className=" text-xl font-semibold mb-4 uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
            <li>
              <Link href="/interior-and-design">Interior Design</Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-xl font-semibold mb-4 uppercase tracking-widest">
            Policies
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/returns">Return Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 uppercase tracking-widest">
            Contact Us
          </h4>
          <p className="text-sm leading-6">
            Building 6, Hero Honda Chowk, Block B, Sector 34,
            <br />
            Gurugram, Haryana 122001
            <br />
            <Link
              href="tel:+919810088877"
              className="hover:text-black hober:bold"
            >
              +91-9810088877
            </Link>
            <br />
            <Link
              href="mailto:info@essentiaenvironments.com"
              className="hover:text-black hober:bold "
            >
              info@essentiaenvironments.com
            </Link>
          </p>
        </div>
      </div>

      <div className="text-center py-4 bg-[#0b0b0b] text-sm border-t-1 text-gray-500 hover:text-gray-200 transition">
        © {new Date().getFullYear()} Essentia Environments. All rights reserved.
      </div>
    </footer>
  );
}
