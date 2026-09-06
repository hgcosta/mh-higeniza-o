import Image from "next/image";
import Link from "next/link";
import { servicos } from "@/lib/site";

export default function Servicos({ mostrarPrecos = true }: { mostrarPrecos?: boolean }) {
  return (
    <section id="servicos" className="servicos">
      <div className="cabecalho-linha">
        <div>
          <span className="eyebrow">Catálogo de serviços</span>
          <h2 className="titulo-secao">
            Cada peça tem o
            <br />
            tratamento que pede
          </h2>
        </div>
        <p className="texto-apoio" style={{ maxWidth: 400 }}>
          Processo em cinco etapas, ajustado ao tecido: aspiração, pré-tratamento de manchas, extração, higienização e
          impermeabilização opcional.
        </p>
      </div>

      <div className="grade-servicos">
        {servicos.map((s) => (
          <article key={s.id} className="card-servico">
            <div className="card-servico-img">
              <Image src={s.img} alt={s.titulo} fill sizes="(max-width: 1000px) 100vw, 400px" style={{ objectFit: "cover" }} />
            </div>
            <div className="card-servico-corpo">
              <h3>{s.titulo}</h3>
              <p>{s.descricao}</p>
              <div className="card-servico-rodape">
                <span className="medida">{s.medida}</span>
                {mostrarPrecos && <span className="preco">{s.preco}</span>}
              </div>
            </div>
          </article>
        ))}

        <article className="card-destaque">
          <div>
            <span className="eyebrow eyebrow-claro">Adicional</span>
            <h3 lang="pt-BR">Impermeabilização protetora</h3>
            <p>
              Película invisível que repele líquidos e facilita a limpeza do dia a dia. Proteção de até 3 anos.
            </p>
          </div>
          <Link href="#orcamento" className="btn btn-primario btn-sm">Consultar valor</Link>
        </article>
      </div>
    </section>
  );
}
