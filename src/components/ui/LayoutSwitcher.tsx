"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const layouts = [
  { label: "A — Dark Brand", href: "/layout-a" },
  { label: "B — Corporate", href: "/layout-b" },
  { label: "C — Modern", href: "/layout-c" },
];

export default function LayoutSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-black/80 backdrop-blur border border-white/10 rounded-full px-4 py-2 shadow-2xl">
      <span className="text-white/40 text-xs self-center pr-2 font-sans">
        Layout:
      </span>
      {layouts.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={clsx(
            "text-xs px-3 py-1.5 rounded-full transition-all duration-200 font-sans",
            pathname === l.href
              ? "bg-[#F5A623] text-black font-semibold"
              : "text-white/70 hover:text-white hover:bg-white/10"
          )}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
