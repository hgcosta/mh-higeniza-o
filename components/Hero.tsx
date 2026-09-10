"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { whatsappOrcamentoUrl } from "@/lib/site";

const metricas = [
  { valor: "+1.200", rotulo: "Estofados limpos" },
  { valor: "4 a 6h", rotulo: "Secagem média" },
  { valor: "4,9", rotulo: "Nota dos clientes" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [tocando, setTocando] = useState(false);

  function play() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    void v.play();
  }

  return (
    <section id="topo" className="hero">
      <div className="hero-grid">
        <div className="hero-texto">
          <span className="pill-borda">Atendimento a domicílio</span>
          <h1>
            Seu estofado como
            <br />
            <span>no primeiro dia</span>
          </h1>
          <p className="hero-sub">
            Higienização profunda com extratora, produtos biodegradáveis e secagem rápida. Sofás, colchões, poltronas,
            tapetes e bancos automotivos.
          </p>
          <div className="hero-acoes">
            <a href={whatsappOrcamentoUrl} target="_blank" rel="noopener" className="btn btn-primario">
              Solicitar orçamento
            </a>
            <Link href="#antesdepois" className="btn btn-fantasma">Ver resultados</Link>
          </div>
          <div className="metricas">
            {metricas.map((m) => (
              <div key={m.rotulo}>
                <div className="metrica-valor">{m.valor}</div>
                <div className="metrica-rotulo">{m.rotulo}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-video-col">
          <div className="hero-video-box">
            <video
              ref={videoRef}
              src="/video/hero.mp4"
              poster="/img/video-poster.png"
              loop
              playsInline
              controls={tocando}
              onPlay={() => setTocando(true)}
              onPause={() => setTocando(false)}
            />
            {!tocando && (
              <button type="button" className="video-overlay" onClick={play} aria-label="Assistir a higienização">
                <span className="video-overlay-inner">
                  <span className="play-circulo">
                    <span className="play-triangulo" />
                  </span>
                  <span className="play-rotulo">Assistir a higienização</span>
                </span>
              </button>
            )}
          </div>
          <div className="selo-flutuante">
            <div className="selo-sigla">MH</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>Produtos biodegradáveis</div>
              <div style={{ fontSize: 13, color: "var(--tinta-suave)" }}>Seguros para crianças e pets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
