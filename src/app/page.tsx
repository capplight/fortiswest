import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/motion/FadeIn";
import {
  company,
  stats,
  services,
  productCategories,
} from "@/lib/data";
import {
  FiMail,
  FiMapPin,
  FiArrowRight,
  FiPhone,
  FiTool,
  FiPackage,
  FiUsers,
  FiSettings,
} from "react-icons/fi";

const B = "var(--font-barlow)";

const serviceIcons: Record<string, React.ReactNode> = {
  FiTool: <FiTool size={32} />,
  FiPackage: <FiPackage size={32} />,
  FiUsers: <FiUsers size={32} />,
  FiSettings: <FiSettings size={32} />,
};

const serviceNums = ["01", "02", "03", "04"];

export default function HomePage() {
  const topCategories = productCategories.slice(0, 6);

  return (
    <div className="bg-[#0A0A0A] text-white font-sans min-h-screen">
      <Header />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero.jpg" alt="Oil refinery" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />
        </div>

        <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-transparent via-[#F5A623] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 w-full">
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10 bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-medium">Kazakhstan Region</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="uppercase leading-[0.9] mb-8 max-w-5xl"
              style={{ fontFamily: B, fontWeight: 800, fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
              Oil Field<br />
              <span className="text-[#F5A623]">Equipment</span><br />
              &amp; Services
            </h1>
          </FadeIn>

          <FadeIn delay={0.32}>
            <p className="text-white/55 text-lg max-w-lg mb-10 leading-relaxed">
              Trusted supplier of industrial equipment and services for the oil &amp; gas industry —
              sourcing from the USA, Europe, and Asia to power Kazakhstan&apos;s energy sector.
            </p>
          </FadeIn>

          <FadeIn delay={0.42}>
            <div className="flex flex-wrap gap-4">
              <Link href="/products"
                className="flex items-center gap-2 bg-[#F5A623] text-black font-bold px-8 py-4 rounded-full hover:bg-[#FFD57E] transition-colors text-sm tracking-wide uppercase">
                View Products <FiArrowRight />
              </Link>
              <Link href="/contact"
                className="flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full hover:border-[#F5A623]/50 hover:text-[#F5A623] transition-all text-sm tracking-wide uppercase">
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-[#F5A623]/50" />
          <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/5 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 py-0 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="text-center py-12 px-6">
                <div className="text-[#F5A623] mb-2" style={{ fontFamily: B, fontWeight: 800, fontSize: "clamp(2.5rem,5vw,3.5rem)" }}>
                  {s.value}
                </div>
                <div className="text-white/35 text-xs uppercase tracking-[0.2em]">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 border-t-2 border-l-2 border-[#F5A623]/50 z-10" />
              <div className="absolute -bottom-5 -right-5 w-12 h-12 border-b-2 border-r-2 border-[#F5A623]/50 z-10" />
              <Image src="/who-we-are.jpg" alt="Fortis West operations" width={620} height={430}
                className="object-cover w-full" style={{ filter: "brightness(0.9)" }} />
              <div className="absolute bottom-8 -right-8 bg-[#F5A623] text-black p-5 shadow-2xl">
                <div className="text-3xl font-bold leading-none" style={{ fontFamily: B }}>10+</div>
                <div className="text-xs font-semibold uppercase tracking-wider mt-1">Years Active</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#F5A623]" />
                <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase">Who We Are</span>
              </div>
              <h2 className="uppercase leading-tight mb-7"
                style={{ fontFamily: B, fontWeight: 700, fontSize: "clamp(2.2rem,4vw,3.2rem)" }}>
                Your Reliable<br /><span className="text-[#F5A623]">Partner</span> in the Field
              </h2>
              <p className="text-white/55 leading-relaxed mb-5 text-[15px]">{company.description}</p>
              <p className="text-white/55 leading-relaxed mb-10 text-[15px]">
                We handle the full cycle — design, procurement, construction, commissioning,
                and project handover — delivering to the highest international standards.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {["API & ASME Standards", "USA, Europe & Asia Sourcing", "Full Project Lifecycle", "Kazakhstan Region Expert"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-white/55">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
              <Link href="/about"
                className="inline-flex items-center gap-3 text-[#F5A623] text-sm uppercase tracking-[0.2em] hover:gap-5 transition-all font-medium">
                Learn More <FiArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#0E0E0E] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase">What We Do</span>
            </div>
            <h2 className="uppercase mb-16" style={{ fontFamily: B, fontWeight: 700, fontSize: "clamp(2.2rem,4vw,3rem)" }}>
              Our Core <span className="text-[#F5A623]">Services</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {services.map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.1}>
                <Link href={`/services/${s.slug}`}
                  className="group bg-[#0E0E0E] hover:bg-[#141414] p-8 flex flex-col h-full transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5A623] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="flex items-start justify-between mb-8">
                    <div className="text-[#F5A623]">{serviceIcons[s.icon]}</div>
                    <span className="text-white/10 group-hover:text-[#F5A623]/20 transition-colors text-4xl font-bold" style={{ fontFamily: B }}>
                      {serviceNums[i]}
                    </span>
                  </div>
                  <h3 className="uppercase mb-4 text-base tracking-wider" style={{ fontFamily: B, fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed flex-1">{s.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#F5A623]/50 group-hover:text-[#F5A623] text-xs uppercase tracking-widest transition-colors">
                    Learn more <FiArrowRight size={12} />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <FadeIn>
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-[#F5A623]" />
                <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase">Catalog</span>
              </div>
              <h2 className="uppercase" style={{ fontFamily: B, fontWeight: 700, fontSize: "clamp(2.2rem,4vw,3rem)" }}>
                Our <span className="text-[#F5A623]">Products</span>
              </h2>
            </div>
            <Link href="/products"
              className="hidden md:flex items-center gap-2 border border-[#F5A623]/30 text-[#F5A623] px-6 py-3 hover:bg-[#F5A623]/10 transition-colors text-xs uppercase tracking-widest">
              Full Catalog <FiArrowRight size={13} />
            </Link>
          </div>
        </FadeIn>

        {/* Row 1: two cards, identical height */}
        <div className="grid grid-cols-12 gap-3" style={{ height: "clamp(200px, 28vw, 360px)" }}>
          {topCategories.slice(0, 2).map((cat, i) => (
            <FadeIn key={cat.id} delay={i * 0.07}
              className={`${i === 0 ? "col-span-7" : "col-span-5"} h-full`}>
              <Link href={`/products#${cat.id}`} className="block h-full">
                <div className="group relative w-full h-full overflow-hidden cursor-pointer bg-[#111]">
                  {cat.image && (
                    <Image src={cat.image} alt={cat.name} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
                  <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-sm border border-white/8 px-2.5 py-1 text-[9px] uppercase tracking-widest text-white/45">
                    {cat.products.length} items
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="uppercase group-hover:text-[#F5A623] transition-colors duration-300 leading-none"
                      style={{ fontFamily: B, fontWeight: 700, fontSize: i === 0 ? "clamp(1.3rem,2vw,1.75rem)" : "1.2rem" }}>
                      {cat.name}
                    </h3>
                    {i === 0 && (
                      <p className="text-white/40 text-xs mt-1.5 line-clamp-1 max-w-sm">{cat.description}</p>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#F5A623] text-black p-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <FiArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Row 2: four equal square cards */}
        <div className="grid grid-cols-4 gap-3 mt-3">
          {topCategories.slice(2).map((cat, i) => (
            <FadeIn key={cat.id} delay={(i + 2) * 0.07}>
              <Link href={`/products#${cat.id}`}>
                <div className="group relative overflow-hidden cursor-pointer bg-[#111] aspect-square">
                  {cat.image && (
                    <Image src={cat.image} alt={cat.name} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-sm border border-white/8 px-2 py-0.5 text-[9px] uppercase tracking-widest text-white/45">
                    {cat.products.length} items
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3.5">
                    <h3 className="uppercase group-hover:text-[#F5A623] transition-colors duration-300 leading-none"
                      style={{ fontFamily: B, fontWeight: 700, fontSize: "0.9rem" }}>
                      {cat.name}
                    </h3>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#F5A623] text-black p-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <FiArrowRight size={11} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <FadeIn>
          <div className="relative overflow-hidden border border-white/8">
            <div className="absolute inset-0 bg-[#0E0E0E]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F5A623]/4 rounded-full -translate-y-1/2 translate-x-1/3 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5A623]/3 rounded-full translate-y-1/2 -translate-x-1/3 blur-[80px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#F5A623]/40" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#F5A623]/40" />

            <div className="relative grid md:grid-cols-2 gap-0">
              <div className="p-12 md:p-16 border-r border-white/5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-[#F5A623]" />
                  <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase">Get In Touch</span>
                </div>
                <h2 className="uppercase mb-5"
                  style={{ fontFamily: B, fontWeight: 700, fontSize: "clamp(2rem,3.5vw,2.8rem)", lineHeight: 1.05 }}>
                  Ready to <span className="text-[#F5A623]">Work</span><br />Together?
                </h2>
                <p className="text-white/45 leading-relaxed text-[15px] mb-8 max-w-sm">
                  Contact our team in Atyrau to discuss your equipment requirements and project needs.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold px-8 py-4 hover:bg-[#FFD57E] transition-colors text-sm tracking-wide uppercase">
                  Send a Message <FiArrowRight />
                </Link>
              </div>

              <div className="p-12 md:p-16 flex flex-col justify-center">
                <div className="space-y-7">
                  {[
                    { icon: <FiMapPin size={16} />, label: "Address", text: company.address },
                    { icon: <FiPhone size={16} />, label: "Phone", text: company.phone },
                    { icon: <FiMail size={16} />, label: "Email", text: company.email },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-4">
                      <div className="w-9 h-9 border border-[#F5A623]/20 flex items-center justify-center text-[#F5A623] flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-white/30 text-[10px] uppercase tracking-widest mb-1">{item.label}</div>
                        <div className="text-white/70 text-sm">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
