export default function Pergunta({ pergunta, numero, total, escolhida, aoEscolher, aoAvancar }) {
  const respondeu = escolhida !== null;

  // Condicional: define a classe visual de cada alternativa
  function classeDa(posicao) {
    if (!respondeu) return "opcao";
    if (posicao === pergunta.correta) return "opcao certa";
    if (posicao === escolhida) return "opcao errada";
    return "opcao";
  }

  return (
    <section className="cartao">
      <p className="contador">Pergunta {numero} de {total}</p>
      <h2>{pergunta.enunciado}</h2>

      {/* Repetição: percorre as alternativas e cria um botão para cada */}
      <div className="opcoes">
        {pergunta.opcoes.map((texto, posicao) => (
          <button
            key={texto}
            className={classeDa(posicao)}
            disabled={respondeu}
            onClick={() => aoEscolher(posicao)}
          >
            {texto}
          </button>
        ))}
      </div>

      {respondeu && (
        <div className="feedback">
          <p>
            <strong>{escolhida === pergunta.correta ? "Acertou!" : "Não foi dessa vez."}</strong>{" "}
            {pergunta.explicacao}
          </p>
          <button className="principal" onClick={aoAvancar}>
            {numero === total ? "Ver resultado" : "Próxima pergunta"}
          </button>
        </div>
      )}
    </section>
  );
}
