export const contato = {
  telefone: "(81) 98628-6675",
  whatsapp: "5581986286675",
  email: "contato@mhestofados.com.br",
  instagram: "mhestofados",
  horario: "Seg a sáb, 8h–18h",
};

export const whatsappUrl = `https://wa.me/${contato.whatsapp}`;
export const instagramUrl = `https://instagram.com/${contato.instagram}`;

export type Servico = {
  id: string;
  titulo: string;
  descricao: string;
  medida: string;
  preco: string;
  img: string;
};

export const servicos: Servico[] = [
  { id: "sofa", titulo: "Sofás e retráteis", descricao: "Remoção de manchas, odores e oleosidade em tecidos suede, linho, veludo e couro sintético.", medida: "2 a 4 lugares", preco: "a partir de R$ 180", img: "/img/sofa.png" },
  { id: "colchao", titulo: "Colchões", descricao: "Higienização antiácaro e antifungos, indicada para quem tem rinite, asma ou alergia respiratória.", medida: "Solteiro a king", preco: "a partir de R$ 150", img: "/img/colchao.png" },
  { id: "poltrona", titulo: "Poltronas e cadeiras", descricao: "Peças delicadas, papai, giratórias e cadeiras de jantar — com secagem controlada.", medida: "Unitário / jogo", preco: "a partir de R$ 60", img: "/img/poltrona.png" },
  { id: "tapete", titulo: "Tapetes e carpetes", descricao: "Lavagem por metro quadrado, com escovação de fibras e neutralização de odor de urina.", medida: "Por m²", preco: "a partir de R$ 35", img: "/img/tapete.png" },
  { id: "auto", titulo: "Bancos automotivos", descricao: "Bancos, forro de teto, carpete e porta-malas. Ideal para motoristas de aplicativo.", medida: "Hatch a SUV", preco: "a partir de R$ 220", img: "/img/auto.png" },
];

export type Par = { antes: string; depois: string; titulo: string; nota: string };

export const pares: Par[] = [
  { antes: "/img/par-1a.png", depois: "/img/par-1b.png", titulo: "Sofá retrátil suede", nota: "Encardido de uso" },
  { antes: "/img/par-3a.png", depois: "/img/par-3b.png", titulo: "Colchão casal", nota: "Manchas e ácaros" },
  { antes: "/img/par-2a.png", depois: "/img/par-2b.png", titulo: "Cadeira suede amarela", nota: "Manchas no assento" },
  { antes: "/img/par-4a.png", depois: "/img/par-4b.png", titulo: "Colchão de casal", nota: "Encardido por anos de uso" },
  { antes: "/img/par-5a.png", depois: "/img/par-5b.png", titulo: "Sofá Retrátil", nota: "Manchas de umidade" },
  { antes: "/img/par-6a.png", depois: "/img/par-6b.png", titulo: "Poltrona de papai", nota: "Suede vermelho desbotado" },
  { antes: "/img/par-7a.png", depois: "/img/par-7b.png", titulo: "Colchão de solteiro", nota: "Manchas de urina e suor" },
  { antes: "/img/par-8a.png", depois: "/img/par-8b.png", titulo: "Banco de Carro", nota: "Tecido oleoso e desbotado" },
];

export type Depoimento = { texto: string; nome: string; detalhe: string; avatar: string };

export const depoimentos: Depoimento[] = [
  { texto: "Achei que teria que trocar o sofá. Voltou com a cor original e sem aquele cheiro de cachorro molhado. Vale cada centavo.", nome: "Camila Ribeiro", detalhe: "Sofá retrátil · Jardim Europa", avatar: "/img/avatar-1.png" },
  { texto: "Meu filho tem rinite e as crises diminuíram depois da higienização dos colchões. Equipe pontual e muito cuidadosa.", nome: "Rodrigo Salles", detalhe: "2 colchões · Centro", avatar: "/img/avatar-2.png" },
  { texto: "Rodo por app o dia todo e os bancos ficaram impecáveis. Fechei plano trimestral no mesmo dia.", nome: "Alan Ferraz", detalhe: "Interior automotivo · Vila Nova", avatar: "/img/avatar-3.png" },
];

export const etapas = [
  { n: "01", titulo: "Orçamento no WhatsApp", texto: "Você envia fotos da peça e recebe o valor fechado em minutos." },
  { n: "02", titulo: "Visita agendada", texto: "Levamos todo o equipamento. Você não precisa mover nada pesado." },
  { n: "03", titulo: "Higienização", texto: "Aspiração, pré-tratamento, extração quente e neutralização de odores." },
  { n: "04", titulo: "Entrega e garantia", texto: "Conferência junto com você e 7 dias de garantia sobre o resultado." },
];
