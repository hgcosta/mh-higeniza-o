import AntesDepois from "@/components/AntesDepois";
import BotaoWhatsApp from "@/components/BotaoWhatsApp";
import CtaOrcamento from "@/components/CtaOrcamento";
import Depoimentos from "@/components/Depoimentos";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Orcamento from "@/components/Orcamento";
import Processo from "@/components/Processo";
import Rodape from "@/components/Rodape";
import Servicos from "@/components/Servicos";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos mostrarPrecos />
        <CtaOrcamento />
        <AntesDepois />
        <Depoimentos />
        <Processo />
        <Orcamento />
      </main>
      <Rodape />
      <BotaoWhatsApp />
    </>
  );
}
