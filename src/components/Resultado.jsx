const niveis = [
  { minimo: 0, titulo: "Poeira cósmica" },
  { minimo: 3, titulo: "Astronauta em treinamento" },
  { minimo: 6, titulo: "Comandante estelar" },
  { minimo: 9, titulo: "Mestre das galáxias" },
];

export default function Resultado({ pontos, total, aoReiniciar }) {
  let titulo = niveis[0].titulo;
  for (const nivel of niveis) {
    if (pontos >= nivel.minimo) titulo = nivel.titulo;
  }

  return (
    <section className="cartao resultado">
      <h2>{titulo}</h2>
      <p className="nota">{pontos} de {total} respostas certas</p>
      <button className="principal" onClick={aoReiniciar}>Jogar de novo</button>
    </section>
  );
}
