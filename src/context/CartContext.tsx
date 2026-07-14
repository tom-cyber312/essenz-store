import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  checkoutViaWhatsApp: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

type Action =
  | { type: "ADD"; product: Omit<CartItem, "quantity"> }
  | { type: "REMOVE"; id: number }
  | { type: "UPDATE_QTY"; id: number; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; items: CartItem[] };

function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "ADD": {
      const existing = state.find((i) => i.id === action.product.id);
      if (existing) {
        return state.map((i) =>
          i.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...state, { ...action.product, quantity: 1 }];
    }
    case "REMOVE":
      return state.filter((i) => i.id !== action.id);
    case "UPDATE_QTY":
      if (action.quantity <= 0) {
        return state.filter((i) => i.id !== action.id);
      }
      return state.map((i) =>
        i.id === action.id ? { ...i, quantity: action.quantity } : i
      );
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, null, () => {
    try {
      const saved = localStorage.getItem("essenz-cart");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("essenz-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product: Omit<CartItem, "quantity">) => dispatch({ type: "ADD", product });
  const removeItem = (id: number) => dispatch({ type: "REMOVE", id });
  const updateQuantity = (id: number, quantity: number) => dispatch({ type: "UPDATE_QTY", id, quantity });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const checkoutViaWhatsApp = () => {
    if (items.length === 0) return;
    const phoneNumber = "543496510669";
    let message = "¡Hola! Quiero hacer el siguiente pedido:\n\n";
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x ${item.quantity} = $${(item.price * item.quantity).toLocaleString("es-AR")}\n`;
    });
    message += `\nTotal: $${totalPrice.toLocaleString("es-AR")}\n\n`;
    message += "Mis datos:\n- Nombre:\n- Dirección:\n- Localidad:\n- Código Postal:";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const value: CartContextType = {
    items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, checkoutViaWhatsApp
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
