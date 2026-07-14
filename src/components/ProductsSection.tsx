"use client";

import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import FadeIn from "./FadeIn";
import { ShoppingCart } from "lucide-react";

const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];

interface Props {
  onAddToCart?: () => void;
}

export default function ProductsSection({ onAddToCart }: Props) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const { addItem } = useCart();

  const filtered = activeCategory === "Todos"
    ? [...products].sort((a, b) => a.category.localeCompare(b.category))
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="productos" className="bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-4"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Productos
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p className="text-[#D7E2EA]/60 text-center font-light mb-12 text-sm md:text-base">
          {products.length} productos disponibles
        </p>
      </FadeIn>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#D7E2EA] text-[#0C0C0C]"
                : "bg-transparent text-[#D7E2EA] border border-[#D7E2EA]/30 hover:border-[#D7E2EA]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product, index) => (
          <FadeIn key={product.id} delay={index * 0.05} y={30}>
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden group hover:bg-[#222] transition-colors duration-300">
              <div className="relative overflow-hidden bg-[#111] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-[#D7E2EA] font-medium text-sm leading-tight line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[#D7E2EA]/50 text-xs line-through">
                    ${product.price.toLocaleString("es-AR")}
                  </span>
                  <span className="text-[#B600A8] font-bold text-lg">
                    ${product.discountPrice.toLocaleString("es-AR")}
                  </span>
                </div>
                <p className="text-[#D7E2EA]/40 text-xs">Transferencia / Efectivo</p>
                <button
                  onClick={() => { addItem({ id: product.id, name: product.name, price: product.discountPrice, image: product.image }); onAddToCart?.(); }}
                  className="w-full mt-2 py-2.5 rounded-full font-medium uppercase tracking-wider text-white text-xs flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                    boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                    outline: "2px solid white",
                    outlineOffset: "-3px",
                  }}
                >
                  <ShoppingCart size={14} />
                  Agregar
                </button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
