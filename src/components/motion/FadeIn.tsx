"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  offset?: number;
  once?: boolean;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  offset = 24,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={clsx(visible ? "animate-fade-in-up" : "opacity-0", className)}
      style={
        {
          "--delay": `${delay}s`,
          "--duration": `${duration}s`,
          "--offset": `${offset}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
