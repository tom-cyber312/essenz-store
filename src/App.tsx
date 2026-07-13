import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit">
      <Header onCartClick={() => setCartOpen(true)} />
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ProductsSection onAddToCart={() => setCartOpen(true)} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
