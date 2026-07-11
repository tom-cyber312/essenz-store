"use client";

import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

interface CartProps {
  open: boolean;
  onClose: () => void;
}

export default function Cart({ open, onClose }: CartProps) {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, checkoutViaWhatsApp } = useCart();

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[60]" onClick={onClose}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-[#0C0C0C] border-l border-[#D7E2EA]/10 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#D7E2EA]/10">
            <div className="flex items-center gap-3">
              <ShoppingBag className="text-[#D7E2EA]" size={20} />
              <h2 className="text-[#D7E2EA] text-xl font-semibold">Carrito</h2>
            </div>
            <button onClick={onClose} className="text-[#D7E2EA] hover:opacity-70">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-[#D7E2EA]/50">
                <ShoppingBag size={48} className="mb-4" />
                <p className="text-lg">Tu carrito está vacío</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-[#1a1a1a] rounded-lg p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#D7E2EA] text-sm font-medium leading-tight truncate">
                        {item.name}
                      </h3>
                      <p className="text-[#B600A8] text-sm font-semibold mt-1">
                        ${item.price.toLocaleString("es-AR")}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-[#D7E2EA] hover:opacity-70 p-1"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-[#D7E2EA] text-sm w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-[#D7E2EA] hover:opacity-70 p-1"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-400 hover:text-red-300 ml-auto p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-[#D7E2EA]/10 p-6 space-y-3">
              <div className="flex justify-between text-[#D7E2EA]">
                <span className="font-medium">Total</span>
                <span className="font-bold text-lg">${totalPrice.toLocaleString("es-AR")}</span>
              </div>
              <button
                onClick={checkoutViaWhatsApp}
                className="w-full py-3 rounded-full font-medium uppercase tracking-wider text-white text-sm"
                style={{
                  background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                  boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                  outline: "2px solid white",
                  outlineOffset: "-3px",
                }}
              >
                Comprar por WhatsApp
              </button>
              <button
                onClick={clearCart}
                className="w-full py-2 text-[#D7E2EA]/60 text-sm hover:text-[#D7E2EA] transition"
              >
                Vaciar carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
