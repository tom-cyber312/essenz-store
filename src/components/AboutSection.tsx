import FadeIn from "./FadeIn";

const decorativeImages = [
  "https://d22fxaf9t8d39k.cloudfront.net/7e991328d85fca96e1cc838b4ca2a32b48ebc2b905fa64d00d43659846343ab6441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/a145b02f4b336d1252003cd8379b61f9d56c2ff794f87635de667602aa7bafc7441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/8c4a619de82213f5b31a3d347f96eb2ee581baa382403438f5f3bfe309783060441455.png",
  "https://d22fxaf9t8d39k.cloudfront.net/50c47155f43a813801388279ec00a47bc5d93af727d8548aaaf437d699253719441455.jpg",
];

export default function AboutSection() {
  return (
    <section className="relative min-h-screen bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute left-[1%] top-[4%] sm:left-[2%] md:left-[4%] z-0">
        <img
          src={decorativeImages[0]}
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px] rounded-2xl object-cover opacity-60"
        />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img
          src={decorativeImages[1]}
          alt=""
          className="w-[100px] sm:w-[140px] md:w-[180px] rounded-2xl object-cover opacity-60"
        />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute right-[1%] top-[4%] sm:right-[2%] md:right-[4%] z-0">
        <img
          src={decorativeImages[2]}
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px] rounded-2xl object-cover opacity-60"
        />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img
          src={decorativeImages[3]}
          alt=""
          className="w-[130px] sm:w-[170px] md:w-[220px] rounded-2xl object-cover opacity-60"
        />
      </FadeIn>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Sobre Nosotros
          </h2>
        </FadeIn>
        <div className="h-10 sm:h-14 md:h-16" />
        <FadeIn delay={0.2} y={30}>
          <p className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]" style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}>
            En Essenz, somos apasionados por ofrecer productos de calidad que marcan la diferencia. Desde perfumes árabes exóticos hasta las últimas tendencias en indumentaria deportiva, electrónica y zapatillas, trabajamos para traerte lo mejor del mercado con la confianza que te mereces.
          </p>
        </FadeIn>
        <div className="h-16 sm:h-20 md:h-24" />
        <FadeIn delay={0.35} y={20}>
          <a
            href="#contacto"
            className="inline-block px-10 py-4 rounded-full font-medium uppercase tracking-wider text-white text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              outline: "2px solid white",
              outlineOffset: "-3px",
            }}
          >
            Contacto
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
