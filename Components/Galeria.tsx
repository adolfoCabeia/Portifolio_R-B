'use client'

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { galeria } from "@/public/assets";

type ActiveImage = {
  id: number;
  src: string | StaticImageData;
  alt?: string;
}

export default function Galeria({ images }: { images: ActiveImage[] }) {
  const [active, setActive] = useState<ActiveImage | null>(null)

  return (
    <section className="galeriaSection container">
      <h2 className="title">Visual</h2>
      <p className="subtitle">Algumas imagens dizem mais que palavras.</p>

      <div className="grid">
        {galeria.map((item) => (
          <button
            key={item.id}
            className="imageWrapper"
            onClick={() => setActive(item)}
            aria-label="Abrir imagem"
          >
            <Image
              src={item.src}
              alt={item.alt || "Imagem da galeria"}
              fill
              className="image"
            />
          </button>
        ))}
      </div>

      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <div
            className="modalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt || "Imagem ampliada"}
              fill
              className="modalImage"
            />
          </div>
        </div>
      )}
    </section>
  );
}
