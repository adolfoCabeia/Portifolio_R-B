"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SobreMim = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 🔒 garante que só roda no browser
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".reveal");

      // TÍTULO
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // TEXT REVEAL — SCROLL DRIVEN
      lines.forEach((line) => {
        gsap.fromTo(
          line,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              end: "top 65%",
              scrub: true,
            },
          }
        );
      });

      // CTA FINAL
      gsap.fromTo(
        ctaRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      // 🔥 MUITO IMPORTANTE
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="container about">
      <h2 ref={titleRef}>Isto vem de mim</h2>

      <div className="text-apresent">
        <p className="reveal">Não faço música para impressionar.</p>
        <p className="reveal">Faço para dizer o que muitas vezes não consigo falar.</p>
        <p className="reveal">
          Canto sobre amor, ausência e tudo o que fica quando o silêncio chega.
        </p>
        <p className="reveal">
          Se alguma música tocar em ti, então já nos entendemos.
        </p>

        <div className="cta" ref={ctaRef}>
          <button>
            Ouvir agora <ArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
