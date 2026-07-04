"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/motion/FadeIn";
import { company } from "@/lib/data";
import { sendContactEmail, type ContactFormState } from "./actions";
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiChevronRight, FiCheck, FiAlertCircle, FiSend } from "react-icons/fi";

const B = "var(--font-barlow)";

const initialState: ContactFormState = { status: "idle", message: "" };

const subjects = [
  "Product Inquiry",
  "Request a Quote",
  "Oil & Gas Plant Turnaround",
  "Procurement Services",
  "Recruitment",
  "Construction Services",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />

      {/* Page header */}
      <div className="relative pt-20 border-b border-white/6 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/contact-hero.jpg" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 mb-4">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <FiChevronRight size={9} />
            <span className="text-white/60">Contact</span>
          </div>
          <h1 className="uppercase leading-none mb-4"
            style={{ fontFamily: B, fontWeight: 800, fontSize: "clamp(2.8rem,7vw,5rem)" }}>
            Get In <span className="text-[#F5A623]">Touch</span>
          </h1>
          <p className="text-white/55 text-base max-w-xl">
            Contact our team in Atyrau to discuss your equipment requirements, project needs,
            or to request a quote.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Form */}
          <FadeIn>
            <form ref={formRef} action={formAction} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/35 mb-2">
                    Full Name <span className="text-[#F5A623]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#111] border border-white/8 hover:border-white/16 focus:border-[#F5A623]/50 focus:outline-none px-4 py-3.5 text-white text-sm placeholder-white/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/35 mb-2">
                    Email Address <span className="text-[#F5A623]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[#111] border border-white/8 hover:border-white/16 focus:border-[#F5A623]/50 focus:outline-none px-4 py-3.5 text-white text-sm placeholder-white/20 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/35 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+7 ..."
                    className="w-full bg-[#111] border border-white/8 hover:border-white/16 focus:border-[#F5A623]/50 focus:outline-none px-4 py-3.5 text-white text-sm placeholder-white/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/35 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full bg-[#111] border border-white/8 hover:border-white/16 focus:border-[#F5A623]/50 focus:outline-none px-4 py-3.5 text-white text-sm transition-colors appearance-none cursor-pointer"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s} className="bg-[#111]">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-white/35 mb-2">
                  Message <span className="text-[#F5A623]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={7}
                  placeholder="Describe your requirements, project details, or questions..."
                  className="w-full bg-[#111] border border-white/8 hover:border-white/16 focus:border-[#F5A623]/50 focus:outline-none px-4 py-3.5 text-white text-sm placeholder-white/20 transition-colors resize-none"
                />
              </div>

              {/* Status message */}
              {state.status !== "idle" && (
                <div className={`flex items-start gap-3 p-4 border text-sm ${
                  state.status === "success"
                    ? "border-green-500/20 bg-green-500/5 text-green-400"
                    : "border-red-500/20 bg-red-500/5 text-red-400"
                }`}>
                  {state.status === "success"
                    ? <FiCheck size={16} className="flex-shrink-0 mt-0.5" />
                    : <FiAlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  }
                  {state.message}
                </div>
              )}

              <button
                type="submit"
                disabled={pending}
                className="flex items-center gap-2 bg-[#F5A623] text-black font-bold px-8 py-4 hover:bg-[#FFD57E] transition-colors text-sm uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <FiSend size={14} />
                {pending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </FadeIn>

          {/* Info sidebar */}
          <FadeIn delay={0.15}>
            <div className="space-y-3">
              {[
                {
                  icon: <FiPhone size={18} />,
                  label: "Phone",
                  value: company.phone,
                  href: `tel:${company.phone}`,
                },
                {
                  icon: <FiMail size={18} />,
                  label: "Email",
                  value: company.email,
                  href: `mailto:${company.email}`,
                },
                {
                  icon: <FiMapPin size={18} />,
                  label: "Address",
                  value: company.address,
                  href: undefined,
                },
              ].map((item) => (
                <div key={item.label} className="border border-white/6 bg-[#0E0E0E] p-6 flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#F5A623]/20 flex items-center justify-center text-[#F5A623] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/25 mb-1.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white/70 text-sm hover:text-[#F5A623] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/70 text-sm leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="border border-white/6 bg-[#0E0E0E] p-6">
                <p className="text-[10px] uppercase tracking-widest text-white/25 mb-3">Business Hours</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/45">Monday – Friday</span>
                    <span className="text-white/70">09:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/45">Saturday</span>
                    <span className="text-white/70">10:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/45">Sunday</span>
                    <span className="text-white/40">Closed</span>
                  </div>
                </div>
              </div>

              <div className="border border-[#F5A623]/15 bg-[#F5A623]/5 p-6">
                <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-wider mb-2">
                  Looking for a specific product?
                </p>
                <p className="text-white/45 text-xs leading-relaxed mb-4">
                  Browse our full product catalog or contact us directly with your specifications.
                </p>
                <Link href="/products"
                  className="inline-flex items-center gap-1.5 text-[#F5A623] text-xs uppercase tracking-wider hover:gap-3 transition-all">
                  View Catalog <FiArrowRight size={11} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <Footer />
    </div>
  );
}
