"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

interface HeaderProps {
  onCartClick: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C0C0C]/90 backdrop-blur-sm border-b border-[#D7E2EA]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex-shrink-0 bg-[#0C0C0C] rounded-lg p-1">
            <img
              src="/logo.png"
              alt="Essenz"
              className="h-8 md:h-12 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Inicio", "Productos", "Contacto"].map((link) => (
              <a
                key={link}
                href={link === "Inicio" ? "#" : link === "Productos" ? "#productos" : "#contacto"}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-base hover:opacity-70 transition duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative text-[#D7E2EA] hover:opacity-70 transition"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#B600A8] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[#D7E2EA]"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-[#D7E2EA]/10 pt-4">
            {["Inicio", "Productos", "Contacto"].map((link) => (
              <a
                key={link}
                href={link === "Inicio" ? "#" : link === "Productos" ? "#productos" : "#contacto"}
                className="block py-3 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
