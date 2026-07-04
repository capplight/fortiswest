"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, nav } from "@/lib/data";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const B = "var(--font-barlow)";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5" />
        <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Fortis West" width={46} height={46} className="rounded-full" />
            <div>
              <div className="text-[#F5A623] text-xl tracking-widest uppercase"
                style={{ fontFamily: B, fontWeight: 700 }}>
                Fortis West
              </div>
              <div className="text-white/35 text-[9px] tracking-[0.25em] uppercase">
                Limited Liability Partnership
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}
                className={`text-sm tracking-wider uppercase transition-colors ${
                  isActive(item.href)
                    ? "text-[#F5A623]"
                    : "text-white/55 hover:text-[#F5A623]"
                }`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={`tel:${company.phone}`}
              className="hidden md:flex items-center gap-2 bg-[#F5A623]/10 hover:bg-[#F5A623]/20 border border-[#F5A623]/25 text-[#F5A623] px-4 py-2 rounded-full text-sm transition-all">
              <FiPhone size={13} />{company.phone}
            </a>
            <button className="lg:hidden text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileOpen(v => !v)}>
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 pt-20 bg-[#0A0A0A]/97 backdrop-blur-md lg:hidden"
          onClick={() => setMobileOpen(false)}>
          <nav className="flex flex-col px-6 py-8 gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-4 text-lg tracking-widest uppercase border-b border-white/6 transition-colors ${
                  isActive(item.href) ? "text-[#F5A623]" : "text-white/60 hover:text-white"
                }`}
                style={{ fontFamily: B, fontWeight: 600 }}>
                {item.label}
              </Link>
            ))}
            <a href={`tel:${company.phone}`}
              className="mt-6 flex items-center gap-2 text-[#F5A623] text-base">
              <FiPhone size={16} />{company.phone}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
