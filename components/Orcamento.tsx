import Link from "next/link";
import { contato, whatsappOrcamentoUrl } from "@/lib/site";

export default function Orcamento() {
  const linhas = [
    ["Telefone", contato.telefone],
    ["E-mail", contato.email],
    ["Instagram", `@${contato.instagram}`],
    ["Atendimento", contato.horario],
  ];

  return (
    <section id="orcamento" className="orcamento">
      <div className="orcamento-painel">
        <div>
          <h2>
            Peça seu orçamento
            <br />
            sem compromisso
          </h2>
          <p>Atendemos residências, escritórios, clínicas e locações. Agenda aberta de segunda a sábado.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href={whatsappOrcamentoUrl} target="_blank" rel="noopener" className="btn btn-primario">Falar no WhatsApp</a>
            <Link href="#servicos" className="btn btn-fantasma">Ver catálogo</Link>
          </div>
        </div>
        <div className="cartao-contato">
          {linhas.map(([rotulo, valor]) => (
            <div key={rotulo} className="linha-contato">
              <span>{rotulo}</span>
              <span>{valor}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
