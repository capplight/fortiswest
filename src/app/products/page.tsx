"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import { productCategories, company, type Product, type ProductCategory } from "@/lib/data";
import { FiArrowUpRight, FiX, FiMail, FiChevronRight, FiMapPin, FiBox } from "react-icons/fi";

const B = "var(--font-barlow)";

/** Product image zone with a graceful placeholder for items without a photo. */
function ProductImage({
  product,
  sizes,
  priority = false,
}: {
  product: Product;
  sizes: string;
  priority?: boolean;
}) {
  if (!product.image) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#181818] to-[#0E0E0E]">
        <FiBox size={34} className="text-white/10" />
        <span className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/20">
          {product.subcategory ?? "Fortis West"}
        </span>
      </div>
    );
  }
  return (
    <Image
      src={product.image}
      alt={product.name}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
    />
  );
}

function getSubcategories(products: Product[]): Map<string, Product[]> {
  const map = new Map<string, Product[]>();
  for (const p of products) {
    const key = p.subcategory ?? "";
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(p);
  }
  return map;
}

function ProductModal({
  product,
  category,
  onClose,
}: {
  product: Product;
  category: ProductCategory;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#111] border border-white/8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/6">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30">
            <Link href="/products" className="hover:text-[#F5A623] transition-colors">Products</Link>
            <FiChevronRight size={10} />
            <span>{category.name}</span>
            {product.subcategory && (
              <>
                <FiChevronRight size={10} />
                <span>{product.subcategory}</span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white/30 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Image banner */}
        <div className="relative aspect-[16/9] bg-[#f4f4f5] overflow-hidden">
          <ProductImage product={product} sizes="(max-width: 768px) 100vw, 36rem" priority />
        </div>

        {/* Body */}
        <div className="px-6 py-8">
          {product.subcategory && (
            <span className="inline-block text-[9px] uppercase tracking-widest text-[#F5A623] border border-[#F5A623]/30 px-2.5 py-1 mb-4">
              {product.subcategory}
            </span>
          )}
          <h2
            className="text-white text-xl md:text-2xl leading-snug mb-3"
            style={{ fontFamily: B, fontWeight: 700 }}
          >
            {product.name}
          </h2>
          {product.manufacturer && (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-5 text-xs">
              <span className="text-white/30 uppercase tracking-wider text-[10px]">
                Manufacturer
              </span>
              <span className="text-[#F5A623] font-medium">{product.manufacturer}</span>
              {product.origin && (
                <span className="text-white/30">· {product.origin}</span>
              )}
            </div>
          )}
          <p className="text-white/55 text-sm leading-relaxed">{product.description}</p>
        </div>

        {/* Footer CTA */}
        <div className="px-6 pb-6 flex items-center gap-4">
          <a
            href={`mailto:${company.email}?subject=Quote Request: ${encodeURIComponent(product.name)}`}
            className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#FFD57E] transition-colors"
          >
            <FiMail size={13} />
            Request a Quote
          </a>
          <Link
            href="/contact"
            className="text-xs uppercase tracking-wider text-white/35 hover:text-white transition-colors"
          >
            Contact us →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative text-left w-full h-full flex flex-col bg-[#111] border border-white/6 hover:border-[#F5A623]/30 transition-all duration-200 hover:bg-[#141414] overflow-hidden"
    >
      {/* Image header */}
      <div className="relative w-full aspect-[4/3] shrink-0 bg-[#f4f4f5] overflow-hidden">
        <div className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-500">
          <ProductImage product={product} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
        </div>
        {/* subcategory chip */}
        {product.subcategory && (
          <span className="absolute top-2.5 left-2.5 z-10 bg-black/70 backdrop-blur-sm text-[9px] uppercase tracking-widest text-[#FFD57E] px-2 py-1">
            {product.subcategory}
          </span>
        )}
        {/* corner arrow */}
        <span className="absolute top-2.5 right-2.5 z-10 bg-[#F5A623] text-black p-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <FiArrowUpRight size={13} />
        </span>
      </div>

      {/* Hover accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5A623] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-white/95 text-[15px] leading-snug mb-2"
          style={{ fontWeight: 600 }}
        >
          {product.name}
        </h3>

        <p className="text-white/35 text-xs leading-relaxed line-clamp-2 flex-1">
          {product.description}
        </p>
      </div>

      {/* Footer meta */}
      <div className="px-5 py-3.5 border-t border-white/6 flex items-center justify-between gap-2">
        {product.manufacturer ? (
          <span className="flex items-center gap-1.5 min-w-0">
            <span className="w-1.5 h-1.5 bg-[#F5A623] flex-shrink-0" />
            <span className="text-[#F5A623]/80 text-[11px] font-medium truncate">
              {product.manufacturer}
            </span>
          </span>
        ) : (
          <span className="text-white/25 text-[10px] uppercase tracking-widest group-hover:text-[#F5A623]/60 transition-colors">
            View details
          </span>
        )}
        {product.origin && (
          <span className="flex items-center gap-1 text-white/30 text-[10px] flex-shrink-0">
            <FiMapPin size={10} />
            {product.origin}
          </span>
        )}
      </div>
    </button>
  );
}

export default function ProductsPage() {
  const [activeCatId, setActiveCatId] = useState(productCategories[0].id);
  const [activeSub, setActiveSub] = useState<string>("all");
  const [modal, setModal] = useState<Product | null>(null);

  // Sync with URL hash on mount and browser navigation
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1);
      const match = productCategories.find((c) => c.id === hash);
      if (match) {
        setActiveCatId(match.id);
        setActiveSub("all");
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const selectCategory = (id: string) => {
    setActiveCatId(id);
    setActiveSub("all");
    window.history.replaceState(null, "", `#${id}`);
  };

  const category = productCategories.find((c) => c.id === activeCatId)!;
  const groups = getSubcategories(category.products);
  const subcatKeys = [...groups.keys()].filter((k) => k !== "");
  const hasSubs = subcatKeys.length > 0;

  const displayed =
    activeSub === "all" || !hasSubs
      ? category.products
      : (groups.get(activeSub) ?? []);

  const totalProducts = productCategories.reduce((s, c) => s + c.products.length, 0);

  return (
    <>
      <Header />

      {modal && (
        <ProductModal
          product={modal}
          category={category}
          onClose={() => setModal(null)}
        />
      )}

      <div className="bg-[#0A0A0A] text-white min-h-screen">
        {/* Page header */}
        <div className="relative pt-20 border-b border-white/6 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/products-hero.jpg" alt="" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-14">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 mb-4">
              <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
              <FiChevronRight size={9} />
              <span className="text-white/60">Products</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1
                  className="text-4xl md:text-5xl uppercase text-white leading-none"
                  style={{ fontFamily: B, fontWeight: 700 }}
                >
                  Product{" "}
                  <span className="text-[#F5A623]">Catalog</span>
                </h1>
                <p className="text-white/55 text-sm mt-3">
                  {totalProducts}+ products across {productCategories.length} categories — sourced from the USA, Europe, and Asia.
                </p>
              </div>
              <a
                href={`mailto:${company.email}?subject=Product Inquiry`}
                className="flex-shrink-0 inline-flex items-center gap-2 border border-[#F5A623]/30 text-[#F5A623] px-5 py-2.5 text-xs uppercase tracking-wider hover:bg-[#F5A623]/8 transition-colors"
              >
                <FiMail size={13} />
                Request a Quote
              </a>
            </div>
          </div>
        </div>

        {/* Mobile category strip */}
        <div className="lg:hidden overflow-x-auto border-b border-white/6 bg-[#0C0C0C]">
          <div className="flex min-w-max px-4 py-0">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => selectCategory(cat.id)}
                className={`px-4 py-4 text-[11px] uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${
                  activeCatId === cat.id
                    ? "border-[#F5A623] text-[#F5A623]"
                    : "border-transparent text-white/40 hover:text-white"
                }`}
              >
                {cat.name}
                <span className="ml-1.5 text-[9px] opacity-50">
                  {cat.products.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 flex gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mb-3 px-3">
                Categories
              </p>
              <nav className="flex flex-col">
                {productCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => selectCategory(cat.id)}
                    className={`group flex items-center justify-between w-full text-left px-3 py-2.5 text-sm transition-all duration-150 border-l-2 ${
                      activeCatId === cat.id
                        ? "border-[#F5A623] bg-[#F5A623]/8 text-white"
                        : "border-transparent text-white/40 hover:text-white/70 hover:bg-white/3"
                    }`}
                  >
                    <span className={activeCatId === cat.id ? "text-white" : ""}>
                      {cat.name}
                    </span>
                    <span
                      className={`text-[10px] tabular-nums ${
                        activeCatId === cat.id ? "text-[#F5A623]" : "text-white/18"
                      }`}
                    >
                      {cat.products.length}
                    </span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 mx-3 border border-white/6 p-4">
                <p className="text-[10px] uppercase tracking-widest text-white/25 mb-2">
                  Need help?
                </p>
                <p className="text-white/40 text-xs leading-relaxed mb-3">
                  Can&apos;t find what you&apos;re looking for? Contact us directly.
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-[#F5A623] text-xs hover:underline"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 min-w-0">
            {/* Category heading */}
            <div className="mb-6 pb-6 border-b border-white/6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2
                    className="text-2xl md:text-3xl uppercase text-white leading-none"
                    style={{ fontFamily: B, fontWeight: 700 }}
                  >
                    {category.name}
                  </h2>
                  <p className="text-white/35 text-sm mt-2 max-w-xl">
                    {category.description}
                  </p>
                </div>
                <span className="flex-shrink-0 text-[10px] uppercase tracking-widest text-white/25 border border-white/8 px-3 py-1.5 mt-1">
                  {category.products.length} products
                </span>
              </div>

              {/* Subcategory tabs — only shown for categories that have them (Valves) */}
              {hasSubs && (
                <div className="flex flex-wrap gap-2 mt-5">
                  <button
                    onClick={() => setActiveSub("all")}
                    className={`px-4 py-1.5 text-[11px] uppercase tracking-wider transition-colors ${
                      activeSub === "all"
                        ? "bg-[#F5A623] text-black font-bold"
                        : "border border-white/10 text-white/40 hover:text-white hover:border-white/25"
                    }`}
                  >
                    All ({category.products.length})
                  </button>
                  {subcatKeys.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setActiveSub(sub)}
                      className={`px-4 py-1.5 text-[11px] uppercase tracking-wider transition-colors ${
                        activeSub === sub
                          ? "bg-[#F5A623] text-black font-bold"
                          : "border border-white/10 text-white/40 hover:text-white hover:border-white/25"
                      }`}
                    >
                      {sub} ({groups.get(sub)?.length ?? 0})
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {displayed.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setModal(product)}
                />
              ))}
            </div>

            {/* Browse other categories */}
            <div className="mt-14 pt-10 border-t border-white/6">
              <p className="text-[10px] uppercase tracking-widest text-white/25 mb-5">
                Browse other categories
              </p>
              <div className="flex flex-wrap gap-2">
                {productCategories
                  .filter((c) => c.id !== activeCatId)
                  .map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => selectCategory(cat.id)}
                      className="flex items-center gap-2 px-4 py-2 border border-white/8 text-white/40 text-xs uppercase tracking-wider hover:border-[#F5A623]/30 hover:text-[#F5A623] transition-all"
                    >
                      {cat.name}
                      <span className="text-white/20 text-[9px]">{cat.products.length}</span>
                    </button>
                  ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
