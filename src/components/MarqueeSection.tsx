import { useEffect, useRef, useState } from "react";

const productImages = [
  "https://d22fxaf9t8d39k.cloudfront.net/7e991328d85fca96e1cc838b4ca2a32b48ebc2b905fa64d00d43659846343ab6441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/a145b02f4b336d1252003cd8379b61f9d56c2ff794f87635de667602aa7bafc7441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/8c4a619de82213f5b31a3d347f96eb2ee581baa382403438f5f3bfe309783060441455.png",
  "https://d22fxaf9t8d39k.cloudfront.net/50c47155f43a813801388279ec00a47bc5d93af727d8548aaaf437d699253719441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/ab6589b04f7f6c18f441237baae2c854f8d3290c2c4087cbb58631f339b47cd2441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/ed31a99355243cb3729e71ab2eca9569ab2fab5a3c299b652efec729b916a37d441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/57fe982b9916d8def22f0ce15e7c72867008f8e4ccd2b90dea74913e7009bd0e441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/904af9653ebf5abafda227b0227c4e4bb8998543868e18e74ed929fdad171911441455.png",
  "https://d22fxaf9t8d39k.cloudfront.net/c987e08a81fd7a8e4b2121a616cb425bab4501c77de9c32bd7b7273a3c871fd1441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/08dec041afb7c6faba0d4e850d983ef887e6c2adbbe7abe11ecee061920ad3a8441455.png",
  "https://d22fxaf9t8d39k.cloudfront.net/a66bd3cbf0d4f4c0f7bbb118f2ce3fa575f83a3256a6262e2821b7cd13b790aa441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/41facea326631cc7f5dd7fe821c0cec0a181232c742335769e34eb162a2d12cb441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/afa84c852ba8850058b2d108df1cfd491e7524a66f5515f3653505f514ba43af441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/f4c5e0346fd310ab79bb70ed417ab56dcc0c0e0d136afbd4ff1280cf00a754a9441455.png",
  "https://d22fxaf9t8d39k.cloudfront.net/4537d4ee8216fd3e7926bdedf6430f657b9f34c4be356124952629000bc0f48e441455.png",
  "https://d22fxaf9t8d39k.cloudfront.net/e9480787dcf40d096bf99161f3af9aca7e656c38031d13f23a9d173d3bcbddde441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/5e9684278f5849b8ac91c767881f8b29eefef63cdb4a0f5909103a561c8d0452441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/a5edcb8e4b46dbf3388394fc8213b32ba505a33f5738e569b45ccc1e8e49bc07441455.png",
  "https://d22fxaf9t8d39k.cloudfront.net/98491abcfe071f73718938604171380a271c8a3d16fdd1a87066bce0938ccb6f441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/f171b3d81f90d437222857214873006f69b775f572f88ee664dcd2acb00cb006441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/503442e18246383c268c937ca4c0ab47105f7698a7c3deeeeae601340c0220e9441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/9ecfde2d14ad013d5ccca75dc6abb67ed047fa183dd6cff9d5f63508c9db0040441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/f6e842a4dbbf081ab634397e47b2b0230fc0e37e1b1635ee35a829beae766969441455.jpg",
  "https://d22fxaf9t8d39k.cloudfront.net/182b86a75466f18a301f83d899746a83c938aa4269e40b0c402209ad41a612d3441455.jpg",
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (sectionRef.current) {
        setSectionTop(sectionRef.current.offsetTop);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1 = productImages.slice(0, 12);
  const row2 = productImages.slice(12);
  const quintupledRow1 = [...row1, ...row1, ...row1, ...row1, ...row1];
  const quintupledRow2 = [...row2, ...row2, ...row2, ...row2, ...row2];

  const offset = scrollY - sectionTop + window.innerHeight;

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="overflow-hidden mb-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-offset * 0.2 - 200}px)`,
            willChange: "transform",
          }}
        >
          {quintupledRow1.map((url, i) => (
            <img
              key={i}
              src={url}
              alt=""
              loading="lazy"
              className="h-[270px] w-auto rounded-2xl bg-[#111] shrink-0"
            />
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset * 0.1 - 200}px)`,
            willChange: "transform",
          }}
        >
          {quintupledRow2.map((url, i) => (
            <img
              key={i}
              src={url}
              alt=""
              loading="lazy"
              className="h-[270px] w-auto rounded-2xl bg-[#111] shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
