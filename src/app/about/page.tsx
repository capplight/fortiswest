import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/motion/FadeIn";
import { company, stats } from "@/lib/data";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";

const B = "var(--font-barlow)";

const capabilities = [
  { title: "API & ASME Standards", desc: "All equipment sourced to API, ASME, and international engineering standards." },
  { title: "Global Sourcing", desc: "Direct partnerships with manufacturers across the USA, Europe, and Asia." },
  { title: "Full Project Lifecycle", desc: "From initial procurement to commissioning and project handover." },
  { title: "Kazakhstan Expertise", desc: "Deep local knowledge of regulatory requirements and field conditions." },
  { title: "Customs & Logistics", desc: "End-to-end logistics including customs clearance and documentation." },
  { title: "Technical Support", desc: "Engineering and technical support throughout the procurement process." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/about.jpg" alt="Fortis West operations" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pb-16 w-full">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30 mb-4">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <FiChevronRight size={9} />
            <span className="text-white/60">About</span>
          </div>
          <h1 className="uppercase leading-none" style={{ fontFamily: B, fontWeight: 800, fontSize: "clamp(2.8rem,7vw,5.5rem)" }}>
            About <span className="text-[#F5A623]">Fortis West</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#F5A623]" />
                <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase">Our Story</span>
              </div>
              <h2 className="uppercase leading-tight mb-8"
                style={{ fontFamily: B, fontWeight: 700, fontSize: "clamp(2rem,4vw,3rem)" }}>
                Over a Decade of <span className="text-[#F5A623]">Trusted</span> Service
              </h2>
              <div className="space-y-5 text-white/55 leading-relaxed text-[15px]">
                <p>
                  Fortis West LLP is a Kazakhstan-based engineering and supply company
                  located in Atyrau, one of the country&apos;s key industrial and energy
                  hubs. The company specializes in the supply of industrial equipment and
                  the development of practical technical solutions for mechanical, process,
                  and automation systems.
                </p>
                <p>
                  Our team works closely with international manufacturers and trusted
                  partners to deliver reliable equipment, engineering support, and tailored
                  solutions that meet the specific requirements of industrial projects. We
                  focus on helping clients improve operational efficiency, reliability, and
                  safety across their facilities.
                </p>
                <p>
                  Fortis West LLP supports customers throughout the entire project cycle —
                  from technical consultation and equipment selection to procurement
                  coordination and documentation support. By combining industry knowledge
                  with a strong supplier network, we ensure that every solution is both
                  technically sound and commercially effective.
                </p>
                <p>
                  Our experience includes working with equipment for process industries such
                  as oil &amp; gas, energy, manufacturing, water treatment, and infrastructure
                  projects. We are committed to building long-term partnerships by providing
                  responsive service, transparent communication, and dependable results.
                </p>
                <p className="border-l-2 border-[#F5A623]/50 pl-4 text-white/75 italic">
                  At Fortis West LLP, we believe that strong engineering solutions and
                  reliable supply chains are the foundation of successful industrial
                  operations.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-[#F5A623]/40" />
                <Image src="/about-1.jpg" alt="Fortis West team" width={600} height={400}
                  className="object-cover w-full" style={{ filter: "brightness(0.88)" }} />
                <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-[#F5A623]/40" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                {stats.map((s) => (
                  <div key={s.label} className="border border-white/6 bg-[#111] p-5">
                    <div className="text-[#F5A623] leading-none mb-1"
                      style={{ fontFamily: B, fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
                      {s.value}
                    </div>
                    <div className="text-white/35 text-xs uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#0E0E0E] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase">What Sets Us Apart</span>
            </div>
            <h2 className="uppercase mb-14"
              style={{ fontFamily: B, fontWeight: 700, fontSize: "clamp(2rem,4vw,3rem)" }}>
              Our <span className="text-[#F5A623]">Capabilities</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.07}>
                <div className="bg-[#0E0E0E] hover:bg-[#141414] p-8 transition-colors group">
                  <div className="w-8 h-[2px] bg-[#F5A623]/40 group-hover:bg-[#F5A623] transition-colors mb-6" />
                  <h3 className="uppercase text-sm tracking-wider mb-3 text-white"
                    style={{ fontFamily: B, fontWeight: 700 }}>
                    {cap.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center border border-white/6 p-10 md:p-16 bg-[#0C0C0C]">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#F5A623]" />
                <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase">Our Location</span>
              </div>
              <h2 className="uppercase mb-5"
                style={{ fontFamily: B, fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
                Based in <span className="text-[#F5A623]">Atyrau</span>
              </h2>
              <p className="text-white/45 text-sm leading-relaxed mb-6">
                Our office is located in Atyrau — Kazakhstan&apos;s oil capital — placing us at the
                center of the region&apos;s energy industry and giving us direct access to major
                operators and project sites.
              </p>
              <p className="text-white/35 text-sm mb-8">{company.address}</p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold px-6 py-3 hover:bg-[#FFD57E] transition-colors text-xs uppercase tracking-wider">
                Get in Touch <FiArrowRight size={13} />
              </Link>
            </div>
            <div className="border border-white/6 overflow-hidden h-64">
              <iframe
                title="Fortis West Location"
                src="https://maps.google.com/maps?q=Atyrau,Kazakhstan&output=embed&z=11"
                className="w-full h-full grayscale opacity-70"
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
