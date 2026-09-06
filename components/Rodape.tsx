import { contato, instagramUrl, whatsappUrl } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-inner">
        <span className="rodape-sigla">MH</span>
        <div className="rodape-links">
          <a href={whatsappUrl} target="_blank" rel="noopener" className="chip-social" aria-label="WhatsApp">
            <WhatsAppIcon size={16} />
            {contato.telefone}
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener" className="chip-social" aria-label="Instagram">
            <InstagramIcon size={16} />@{contato.instagram}
          </a>
        </div>
        <span>© {new Date().getFullYear()} MH Higienização e Limpeza de Estofados. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
