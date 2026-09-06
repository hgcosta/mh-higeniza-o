import { etapas } from "@/lib/site";

export default function Processo() {
  return (
    <section id="processo" className="processo">
      <span className="eyebrow">Como funciona</span>
      <h2 className="titulo-secao" style={{ marginBottom: 44 }}>Quatro passos, um dia</h2>
      <div className="grade-processo">
        {etapas.map((e) => (
          <div key={e.n} className="passo">
            <div className="passo-numero">{e.n}</div>
            <h3>{e.titulo}</h3>
            <p>{e.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
