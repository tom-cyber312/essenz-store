import FadeIn from "./FadeIn";

const floatingImages = [
  "https://d22fxaf9t8d39k.cloudfront.net/afa84c852ba8850058b2d108df1cfd491e7524a66f5515f3653505f514ba43af441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/98afc612352161e48fdd4f9b36d82da07c0f5340ff393a322d646dba8a7832d5441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/38c34600839659155ee2fda6185a31be0a875fba4914477a7d84fc960ce04eca441455.png",
];

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Floating background images */}
      {floatingImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="absolute opacity-10 object-cover rounded-full pointer-events-none"
          style={{
            width: `${200 + i * 80}px`,
            height: `${200 + i * 80}px`,
            top: `${10 + i * 25}%`,
            left: `${i % 2 === 0 ? 5 : 75}%`,
            transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
            filter: "blur(4px)",
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <FadeIn delay={0} y={40}>
          <img
            src="/logo.png"
            alt="Essenz"
            className="h-36 md:h-52 w-auto mb-6"
          />
        </FadeIn>

        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={60}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              Essenz
            </h1>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} y={30}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-[0.3em] text-sm md:text-base">
            Tu tienda de confianza
          </p>
        </FadeIn>

        <FadeIn delay={0.45} y={20}>
          <p className="text-[#D7E2EA]/60 font-light uppercase tracking-wider text-xs md:text-sm mt-4">
            Perfumes árabes · Camisetas · Electrónica · Zapatillas
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
