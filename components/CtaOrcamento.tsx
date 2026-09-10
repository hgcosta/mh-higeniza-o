import { whatsappOrcamentoUrl } from "@/lib/site";

export default function CtaOrcamento() {
  return (
    <div className="faixa-cta">
      <a href={whatsappOrcamentoUrl} target="_blank" rel="noopener" className="btn btn-primario">
        Solicitar orçamento
      </a>
    </div>
  );
}
