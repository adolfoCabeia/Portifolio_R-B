"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Facebook, Youtube, Instagram, Mouse } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";

import { assets } from "@/public/assets";

const Hero = () => {
  const heroRef = useRef(null);

  const imageRef = useRef(null);
  const circleRef = useRef(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIconRef = useRef(null);
  const socialsRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: { ease: "power4.out", duration: 1 },
    });

    tl.from(circleRef.current, { scale: 0.5, opacity: 0, filter: "blur(20px)" })
      .from(imageRef.current, { y: 120, opacity: 0, filter: "blur(15px)" }, "-=0.6")
      .from(titleRef.current, { y: 80, opacity: 0 }, "-=0.5")
      .from(ctaRef.current, { y: 40, opacity: 0 }, "-=0.6");

    if (socialsRef.current) {
      tl.from(socialsRef.current.children, { x: -30, opacity: 0, stagger: 0.15 }, "-=0.5");
    }

    tl.from(scrollIconRef.current, { opacity: 0, y: -10 }, "-=0.3");

    gsap.to(scrollIconRef.current, { y: 10, repeat: -1, yoyo: true, duration: 1.2, ease: "power1.inOut" });
  }, heroRef);

  return () => ctx.revert();
}, []);


  return (
    <section ref={heroRef} className="container hero">
      <div className="text-cta">
        <div className="text" ref={titleRef}>
          <h1>
            A nova voz do <br /> R&B Angolano
          </h1>
        </div>

        <div className="cta" ref={ctaRef}>
          <button>
            Ouvir agora <ArrowUpRight />
          </button>
        </div>
      </div>

      <div className="link-social" ref={socialsRef}>
        <Facebook size={32} />
        <Youtube size={32} />
        <Instagram size={32} />
      </div>

      <div className="icone-scrool" ref={scrollIconRef}>
        <Mouse size={32} />
      </div>

      <div className="circulo" ref={circleRef}>
        <h2>Justify</h2>
      </div>

      <div className="name-artist">
        <h2>JUÉRIO</h2>
      </div>

      <div className="img-artist" ref={imageRef}>
        <Image
          src={assets.ImgArtist}
          height={595}
          alt="Imagem do artista"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;


