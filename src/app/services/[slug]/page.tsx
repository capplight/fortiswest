import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/motion/FadeIn";
import { services, company } from "@/lib/data";
import {
  FiTool, FiPackage, FiUsers, FiSettings,
  FiArrowRight, FiChevronRight, FiCheck,
} from "react-icons/fi";

const B = "var(--font-barlow)";

const iconMap: Record<string, React.ReactNode> = {
  FiTool: <FiTool size={34} />,
  FiPackage: <FiPackage size={34} />,
  FiUsers: <FiUsers size={34} />,
  FiSettings: <FiSettings size={34} />,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service — Fortis West" };
  return {
    title: `${service.title} — Fortis West`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();

  const service = services[index];
  const others = services.filter((s) => s.slug !== slug);
  const num = `0${index + 1}`;

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />

      {/* Hero header */}
      <div className="pt-20 bg-[#0C0C0C] border-b border-white/6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/4 rounded-full -translate-y-1/3 translate-x-1/4 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 relative">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/25 mb-6">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <FiChevronRight size={9} />
            <Link href="/services" className="hover:text-[#F5A623] transition-colors">Services</Link>
            <FiChevronRight size={9} />
            <span className="text-white/50">{service.shortTitle}</span>
          </div>

          <div className="flex items-start gap-5 mb-6">
            <div className="text-[#F5A623] mt-1 flex-shrink-0">{iconMap[service.icon]}</div>
            <div>
              <span className="text-[#F5A623]/50 text-sm tracking-[0.3em] uppercase">{num}</span>
              <h1 className="uppercase leading-none mt-2"
                style={{ fontFamily: B, fontWeight: 800, fontSize: "clamp(2.2rem,5vw,4rem)" }}>
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-[#F5A623] text-base md:text-lg max-w-2xl"
            style={{ fontFamily: B, fontWeight: 500 }}>
            {service.tagline}
          </p>
        </div>
      </div>

      {/* Intro + sections */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Intro */}
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#F5A623]" />
                <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase">Overview</span>
              </div>
              <p className="text-white/65 text-[15px] leading-relaxed">
                {service.intro}
              </p>

              <div className="mt-10 border border-white/6 bg-[#0E0E0E] p-6">
                <p className="text-[10px] uppercase tracking-widest text-white/25 mb-2">
                  Discuss your project
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  Tell us your scope and timeline — our team in Atyrau will respond quickly.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-[#F5A623] text-sm uppercase tracking-wider hover:gap-3 transition-all">
                  Get in touch <FiArrowRight size={13} />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Sections */}
          <div className="space-y-10">
            {service.sections.map((section, i) => (
              <FadeIn key={section.heading} delay={i * 0.1}>
                <div>
                  <h2 className="uppercase mb-6 flex items-baseline gap-3"
                    style={{ fontFamily: B, fontWeight: 700, fontSize: "clamp(1.3rem,2.2vw,1.7rem)" }}>
                    <span className="text-[#F5A623]/40 text-base">0{i + 1}</span>
                    {section.heading}
                  </h2>
                  <ul className="grid sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
                    {section.points.map((point) => (
                      <li key={point}
                        className="flex items-start gap-3 text-white/55 text-sm leading-relaxed bg-[#0E0E0E] hover:bg-[#141414] transition-colors p-5">
                        <FiCheck size={15} className="text-[#F5A623] flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Other services */}
      <section className="bg-[#0E0E0E] border-t border-white/6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] uppercase tracking-widest text-white/25 mb-6">
            Other Services
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((s) => (
              <Link key={s.id} href={`/services/${s.slug}`}
                className="group border border-white/8 bg-[#0A0A0A] hover:border-[#F5A623]/30 hover:bg-[#111] transition-all p-7 flex flex-col">
                <div className="text-[#F5A623] mb-5">{iconMap[s.icon]}</div>
                <h3 className="uppercase text-sm tracking-wider mb-2 group-hover:text-[#F5A623] transition-colors"
                  style={{ fontFamily: B, fontWeight: 700 }}>
                  {s.title}
                </h3>
                <p className="text-white/35 text-xs leading-relaxed flex-1">{s.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[#F5A623]/50 group-hover:text-[#F5A623] text-[10px] uppercase tracking-widest transition-colors">
                  Learn more <FiArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <FadeIn>
          <div className="border border-white/6 bg-[#0E0E0E] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-[#F5A623]/30" />
            <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-[#F5A623]/30" />
            <div className="relative">
              <p className="text-[#F5A623] text-xs tracking-[0.35em] uppercase mb-4">Start a Project</p>
              <h2 className="uppercase mb-5"
                style={{ fontFamily: B, fontWeight: 700, fontSize: "clamp(1.8rem,4vw,3rem)" }}>
                Ready to <span className="text-[#F5A623]">Get Started?</span>
              </h2>
              <p className="text-white/40 text-sm max-w-md mx-auto mb-8">
                Contact our team to discuss your {service.shortTitle.toLowerCase()} requirements.
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
