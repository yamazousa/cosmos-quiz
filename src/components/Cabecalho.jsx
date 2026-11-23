export default function Cabecalho({ pontos, atual, total }) {
  const progresso = (atual / total) * 100;
  return (
    <header className="cabecalho">
      <h1>Cosmos Quiz</h1>
      <p className="placar">Pontos: {pontos}</p>
      <div className="barra" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={atual}>
        <div className="barra-preenchida" style={{ width: `${progresso}%` }} />
      </div>
    </header>
  );
}
