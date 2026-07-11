export default function Footer() {
  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com/Essenz.Ar", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { name: "Instagram", url: "https://instagram.com/Essenzz.ar", icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 010 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" },
    { name: "TikTok", url: "https://tiktok.com/@Essenz.ar", icon: "M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.448 0-2.513-.305-3.636-.819A7.753 7.753 0 0010 4.255V12a5 5 0 11-2-4V0z" },
  ];

  return (
    <footer id="contacto" className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Payment & Shipping */}
          <div>
            <h5 className="text-[#D7E2EA] text-lg font-semibold mb-4">Medios de pago</h5>
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
              <img src="https://dk0k1i3js6c49.cloudfront.net/applications/logos/payment-icons/2.png" alt="" className="h-8" />
              <img src="https://dk0k1i3js6c49.cloudfront.net/applications/logos/payment-icons/3.png" alt="" className="h-8" />
              <img src="https://dk0k1i3js6c49.cloudfront.net/applications/logos/payment-icons/5.png" alt="" className="h-8" />
            </div>
            <h5 className="text-[#D7E2EA] text-lg font-semibold mt-6 mb-3">Medios de envío</h5>
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
              <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/correo-argentino.png" alt="Correo Argentino" className="h-8" />
              <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/acordar.png" alt="Acordar" className="h-8" />
            </div>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-[#D7E2EA] text-lg font-semibold mb-4">Redes sociales</h5>
            <div className="flex flex-col items-center md:items-start gap-3">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:opacity-70 transition flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.icon} />
                  </svg>
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[#D7E2EA] text-lg font-semibold mb-4">Contacto</h5>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="mailto:essenzz.ar@gmail.com" className="text-[#D7E2EA] hover:opacity-70 transition">
                essenzz.ar@gmail.com
              </a>
              <a href="tel:3496653146" className="text-[#D7E2EA] hover:opacity-70 transition">
                3496653146
              </a>
              <a href="#regret-modal" className="text-[#D7E2EA] underline hover:no-underline text-sm mt-2">
                Botón de arrepentimiento
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#D7E2EA]/10 text-center">
          <p className="text-[#D7E2EA]/40 text-sm">
            &copy; {new Date().getFullYear()} Essenz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
