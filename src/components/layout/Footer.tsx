import Image from "next/image";
import Link from "next/link";
import { company, nav } from "@/lib/data";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const B = "var(--font-barlow)";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-5">
            <Image src="/logo.png" alt="Fortis West" width={40} height={40} className="rounded-full opacity-90" />
            <div>
              <div className="text-[#F5A623] text-lg tracking-widest uppercase" style={{ fontFamily: B, fontWeight: 700 }}>
                Fortis West
              </div>
              <div className="text-white/30 text-[9px] tracking-[0.2em] uppercase">Limited Liability Partnership</div>
            </div>
          </Link>
          <p className="text-white/35 text-sm leading-relaxed max-w-xs">
            Trusted supplier of oil field equipment and services for the energy sector in Kazakhstan.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-5">Navigation</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}
                className="text-white/40 hover:text-[#F5A623] text-sm transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-5">Contact</p>
          <div className="space-y-4">
            <a href={`tel:${company.phone}`}
              className="flex items-start gap-3 text-white/40 hover:text-white transition-colors text-sm group">
              <FiPhone size={14} className="mt-0.5 flex-shrink-0 text-[#F5A623]/60 group-hover:text-[#F5A623]" />
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`}
              className="flex items-start gap-3 text-white/40 hover:text-white transition-colors text-sm group">
              <FiMail size={14} className="mt-0.5 flex-shrink-0 text-[#F5A623]/60 group-hover:text-[#F5A623]" />
              {company.email}
            </a>
            <div className="flex items-start gap-3 text-white/40 text-sm">
              <FiMapPin size={14} className="mt-0.5 flex-shrink-0 text-[#F5A623]/60" />
              <span>{company.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-white/15 text-xs">© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <span className="text-white/10 text-xs">Atyrau, Kazakhstan</span>
        </div>
      </div>
    </footer>
  );
}
