"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { pares } from "@/lib/site";

export default function AntesDepois() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const arrastando = useRef(false);
  const [pos, setPos] = useState(52);

  function atualizar(clientX: number) {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100)));
  }

  return (
    <section id="antesdepois" className="antesdepois">
      <div className="wrap">
        <div className="centralizado">
          <span className="eyebrow">Antes &amp; Depois</span>
          <h2 className="titulo-secao" style={{ marginBottom: 12 }}>Arraste e veja a diferença</h2>
          <p className="texto-apoio">Resultados reais de atendimentos. Sem edição, sem filtro.</p>
        </div>

        <div
          ref={wrapRef}
          className="slider"
          onPointerDown={(e) => { arrastando.current = true; atualizar(e.clientX); }}
          onPointerMove={(e) => { if (arrastando.current) atualizar(e.clientX); }}
          onPointerUp={() => { arrastando.current = false; }}
          onPointerLeave={() => { arrastando.current = false; }}
          role="slider"
          aria-label="Comparar antes e depois"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 4));
            if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 4));
          }}
        >
          <div className="slider-camada">
            <Image src="/img/depois-1.png" alt="Depois da higienização" fill priority sizes="1000px" style={{ objectFit: "cover" }} />
          </div>
          <div className="slider-camada" style={{ clipPath: `inset(0 ${(100 - pos).toFixed(2)}% 0 0)` }}>
            <Image src="/img/antes-1.png" alt="Antes da higienização" fill priority sizes="1000px" style={{ objectFit: "cover" }} />
          </div>
          <div className="tag-antes">Antes</div>
          <div className="tag-depois">Depois</div>
          <div className="slider-handle" style={{ left: `${pos.toFixed(2)}%` }}>
            <div className="slider-handle-bolha">‹ ›</div>
          </div>
        </div>

        <div className="grade-pares">
          {pares.map((p) => (
            <figure key={p.antes} className="par">
              <div className="par-imagens">
                <img src={p.antes} alt={`${p.titulo} — antes`} />
                <img src={p.depois} alt={`${p.titulo} — depois`} />
              </div>
              <figcaption>
                <span className="par-titulo">{p.titulo}</span>
                <span className="par-nota">{p.nota}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
