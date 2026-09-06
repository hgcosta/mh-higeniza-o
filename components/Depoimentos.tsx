import Image from "next/image";
import { depoimentos } from "@/lib/site";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos">
      <div className="wrap">
        <div className="cabecalho-linha">
          <div>
            <span className="eyebrow eyebrow-claro">Depoimentos</span>
            <h2 className="titulo-secao claro">
              Quem já sentou
              <br />
              no sofá limpo
            </h2>
          </div>
          <div className="nota-media">
            <div className="nota-media-valor">4,9</div>
            <div className="nota-media-texto">
              Média de 213 avaliações
              <br />
              no Google e WhatsApp
            </div>
          </div>
        </div>

        <div className="grade-depoimentos">
          {depoimentos.map((d) => (
            <blockquote key={d.nome} className="depoimento">
              <div className="estrelas">★★★★★</div>
              <p>&ldquo;{d.texto}&rdquo;</p>
              <footer>
                <div className="avatar">
                  <Image src={d.avatar} alt={d.nome} width={44} height={44} />
                </div>
                <div>
                  <div className="depoimento-nome">{d.nome}</div>
                  <div className="depoimento-detalhe">{d.detalhe}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
