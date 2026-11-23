import { useEffect, useState } from "react";
import perguntas from "./dados/perguntas";
import Cabecalho from "./components/Cabecalho";
import Pergunta from "./components/Pergunta";
import Resultado from "./components/Resultado";
import Curiosidades from "./components/Curiosidades";

const CHAVE = "cosmos-quiz-progresso";

function lerProgresso() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE)) ?? {};
  } catch {
    return {};
  }
}

export default function App() {
  const [inicial] = useState(lerProgresso);
  const [indice, setIndice] = useState(inicial.indice ?? 0);
  const [pontos, setPontos] = useState(inicial.pontos ?? 0);
  const [finalizado, setFinalizado] = useState(inicial.finalizado ?? false);
  const [escolhida, setEscolhida] = useState(null);


  useEffect(() => {
    localStorage.setItem(CHAVE, JSON.stringify({ indice, pontos, finalizado }));
  }, [indice, pontos, finalizado]);

  function escolher(posicao) {
    setEscolhida(posicao);
    if (posicao === perguntas[indice].correta) {
      setPontos(pontos + 1);
    }
  }

  function avancar() {
    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1);
      setEscolhida(null);
    } else {
      setFinalizado(true);
    }
  }

  function reiniciar() {
    setIndice(0);
    setPontos(0);
    setEscolhida(null);
    setFinalizado(false);
  }

  return (
    <main className="app">
      <Cabecalho
        pontos={pontos}
        atual={finalizado ? perguntas.length : indice}
        total={perguntas.length}
      />
      {finalizado ? (
        <Resultado pontos={pontos} total={perguntas.length} aoReiniciar={reiniciar} />
      ) : (
        <Pergunta
          pergunta={perguntas[indice]}
          numero={indice + 1}
          total={perguntas.length}
          escolhida={escolhida}
          aoEscolher={escolher}
          aoAvancar={avancar}
        />
      )}
      <Curiosidades />
    </main>
  );
}
