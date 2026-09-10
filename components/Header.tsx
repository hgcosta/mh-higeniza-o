"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { instagramUrl, navLinks, whatsappUrl } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  return (
    <>
      <header className="header">
      <div className="header-inner">
        <Link href="#topo" className="marca" onClick={fechar}>
          <span className="marca-sigla">MH</span>
          <span className="marca-tag">Higienização de estofados</span>
        </Link>

        <button
          type="button"
          className={`nav-toggle${aberto ? " aberto" : ""}`}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="menu-principal" className={`nav${aberto ? " nav-aberto" : ""}`}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={fechar}>
              {l.rotulo}
            </Link>
          ))}
          <div className="social-header">
            <a href={whatsappUrl} target="_blank" rel="noopener" aria-label="WhatsApp" className="icone-redondo">
              <WhatsAppIcon color="#8CCBF2" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener" aria-label="Instagram" className="icone-redondo">
              <InstagramIcon color="#8CCBF2" />
            </a>
          </div>
          <Link href="#orcamento" className="btn btn-primario btn-sm" onClick={fechar}>
            Pedir orçamento
          </Link>
        </nav>
      </div>
      </header>

      {aberto && <button type="button" className="nav-overlay" aria-label="Fechar menu" onClick={fechar} />}
    </>
  );
}
