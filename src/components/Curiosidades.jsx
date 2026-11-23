import { useState } from "react";
import curiosidades from "../dados/curiosidades";

export default function Curiosidades() {
  const [posicao, setPosicao] = useState(0);
  const atual = curiosidades[posicao];

  function proxima() {
    setPosicao((posicao + 1) % curiosidades.length);
  }

  return (
    <section className="cartao curiosidade">
      <h2>{atual.titulo}</h2>
      <p>{atual.texto}</p>
      <button className="secundario" onClick={proxima}>Outra curiosidade</button>
    </section>
  );
}