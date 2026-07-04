import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/motion/FadeIn";
import { services, company } from "@/lib/data";
import {
  FiTool, FiPackage, FiUsers, FiSettings,
  FiArrowRight, FiArrowUpRight, FiChevronRight,
} from "react-icons/fi";

const B = "var(--font-barlow)";

const iconMap: Record<string, React.ReactNode> = {
  FiTool: <FiTool size={30} />,
  FiPackage: <FiPackage size={30} />,
  FiUsers: <FiUsers size={30} />,
  FiSettings: <FiSettings size={30} />,
};

export const metadata = {
  title: "Services — Fortis West",
  description:
    "Plant turnaround, procurement, recruitment, and construction services for the oil & gas industry in Kazakhstan.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />

      {/* Page header */}
      <div className="relative pt-20 border-b border-white/6 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/services-hero.jpg" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 mb-4">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <FiChevronRight size={9} />
            <span className="text-white/60">Services</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#F5A623]" />
            <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase">What We Do</span>
          </div>
          <h1 className="uppercase leading-none mb-5"
            style={{ fontFamily: B, fontWeight: 800, fontSize: "clamp(2.8rem,7vw,5rem)" }}>
            Our <span className="text-[#F5A623]">Services</span>
          </h1>
          <p className="text-white/55 text-base max-w-2xl leading-relaxed">
            Beyond equipment supply, Fortis West delivers end-to-end project support for the
            oil and gas sector — from fully managed plant turnarounds and global procurement
            to specialist recruitment and industrial construction.
          </p>
        </div>
      </div>

      {/* Service cards */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08}>
              <Link href={`/services/${service.slug}`}
                className="group relative flex flex-col h-full border border-white/8 bg-[#0E0E0E] hover:bg-[#121212] hover:border-[#F5A623]/30 transition-all duration-300 p-8 md:p-10 overflow-hidden">
                {/* top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5A623] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-start justify-between mb-8">
                  <div className="text-[#F5A623]">{iconMap[service.icon]}</div>
                  <span className="text-white/8 group-hover:text-[#F5A623]/15 transition-colors text-5xl font-bold leading-none"
                    style={{ fontFamily: B }}>
                    0{i + 1}
                  </span>
                </div>

                <h2 className="uppercase leading-tight mb-3"
                  style={{ fontFamily: B, fontWeight: 700, fontSize: "clamp(1.3rem,2.2vw,1.7rem)" }}>
                  {service.title}
                </h2>
                <p className="text-white/45 text-sm leading-relaxed flex-1 mb-8">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[#F5A623]/60 group-hover:text-[#F5A623] text-xs uppercase tracking-widest transition-colors">
                    Explore service <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <FiArrowUpRight
                    size={18}
                    className="text-white/15 group-hover:text-[#F5A623] transition-colors"
                  />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <FadeIn>
          <div className="border border-white/6 bg-[#0E0E0E] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-[#F5A623]/30" />
            <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-[#F5A623]/30" />
            <div className="relative">
              <p className="text-[#F5A623] text-xs tracking-[0.35em] uppercase mb-4">Start a Project</p>
              <h2 className="uppercase mb-5"
                style={{ fontFamily: B, fontWeight: 700, fontSize: "clamp(1.8rem,4vw,3rem)" }}>
                Need Our <span className="text-[#F5A623]">Expertise?</span>
              </h2>
              <p className="text-white/40 text-sm max-w-md mx-auto mb-8">
                Contact our team in Atyrau to discuss your project requirements and how we can help.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold px-8 py-3.5 hover:bg-[#FFD57E] transition-colors text-sm uppercase tracking-wide">
                  Contact Us <FiArrowRight />
                </Link>
                <a href={`tel:${company.phone}`}
                  className="inline-flex items-center gap-2 border border-white/15 text-white/60 px-8 py-3.5 hover:border-white/30 hover:text-white transition-all text-sm uppercase tracking-wide">
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
