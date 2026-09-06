import Link from "next/link";
import { instagramUrl, whatsappUrl } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="#topo" className="marca">
          <span className="marca-sigla">MH</span>
          <span className="marca-tag">Higienização de estofados</span>
        </Link>
        <nav className="nav">
          <Link href="#servicos">Serviços</Link>
          <Link href="#antesdepois">Antes &amp; Depois</Link>
          <Link href="#depoimentos">Depoimentos</Link>
          <Link href="#processo">Como funciona</Link>
          <div className="social-header">
            <a href={whatsappUrl} target="_blank" rel="noopener" aria-label="WhatsApp" className="icone-redondo">
              <WhatsAppIcon color="#8CCBF2" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener" aria-label="Instagram" className="icone-redondo">
              <InstagramIcon color="#8CCBF2" />
            </a>
          </div>
          <Link href="#orcamento" className="btn btn-primario btn-sm">Pedir orçamento</Link>
        </nav>
      </div>
    </header>
  );
}
