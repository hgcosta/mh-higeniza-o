import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function BotaoWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener"
      className="fab"
      aria-label="Falar no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <WhatsAppIcon size={24} color="#06331A" />
    </a>
  );
}
