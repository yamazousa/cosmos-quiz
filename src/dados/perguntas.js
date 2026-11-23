const perguntas = [
  {
    enunciado: "O limite de Chandrasekhar define a massa máxima de qual tipo de objeto estável?",
    opcoes: ["Anã branca", "Estrela de nêutrons", "Anã marrom", "Gigante vermelha"],
    correta: 0,
    explicacao: "Acima de cerca de 1,4 massa solar, a pressão dos elétrons degenerados não segura mais a gravidade.",
  },
  {
    enunciado: "O que sustenta uma estrela de nêutrons contra o colapso gravitacional?",
    opcoes: [
      "Pressão de radiação",
      "Pressão de degenerescência dos nêutrons",
      "Fusão do hélio no núcleo",
      "Seu campo magnético",
    ],
    correta: 1,
    explicacao: "Pelo princípio de exclusão de Pauli, os nêutrons não podem ser comprimidos além de certo ponto.",
  },
  {
    enunciado: "O que o raio de Schwarzschild define?",
    opcoes: [
      "A órbita estável mais próxima de um planeta",
      "A distância entre duas estrelas binárias",
      "O raio de uma estrela de nêutrons",
      "O horizonte de eventos de um buraco negro sem rotação",
    ],
    correta: 3,
    explicacao: "É o raio abaixo do qual a velocidade de escape supera a da luz.",
  },
  {
    enunciado: "Segundo a lei de Hubble-Lemaître, a velocidade de afastamento de uma galáxia distante é:",
    opcoes: [
      "Proporcional à distância dela até nós",
      "Inversamente proporcional à distância",
      "Igual para todas as galáxias",
      "Proporcional à massa da galáxia",
    ],
    correta: 0,
    explicacao: "A relação v = H₀ · d indica que o universo está em expansão.",
  },
  {
    enunciado: "Por que a luz de galáxias distantes sofre redshift cosmológico?",
    opcoes: [
      "A poeira interestelar avermelha a luz",
      "As galáxias distantes são mais frias e emitem só vermelho",
      "A luz perde energia ao atravessar gás",
      "A expansão do espaço estica o comprimento de onda da luz",
    ],
    correta: 3,
    explicacao: "Enquanto a luz viaja, o espaço se expande e o comprimento de onda aumenta.",
  },
  {
    enunciado: "Quais grandezas formam os eixos do diagrama de Hertzsprung-Russell?",
    opcoes: [
      "Massa e raio",
      "Distância e velocidade",
      "Luminosidade e temperatura (ou tipo espectral)",
      "Idade e composição química",
    ],
    correta: 2,
    explicacao: "O diagrama H-R agrupa as estrelas por fase da vida: sequência principal, gigantes, anãs brancas.",
  },
  {
    enunciado: "Qual é a temperatura aproximada da radiação cósmica de fundo em micro-ondas hoje?",
    opcoes: ["2,7 K", "270 K", "27 K", "0 K"],
    correta: 0,
    explicacao: "É o brilho residual do universo jovem, esfriado pela expansão desde cerca de 3.000 K.",
  },
  {
    enunciado: "Por que a fusão nuclear deixa de gerar energia quando o núcleo de uma estrela massiva vira ferro?",
    opcoes: [
      "Porque faltam prótons para fundir",
      "Porque fundir ferro consome energia em vez de liberar",
      "Porque o ferro é radioativo demais",
      "Porque a temperatura do núcleo cai de repente",
    ],
    correta: 1,
    explicacao: "Sem energia para sustentar o núcleo, ele colapsa e a estrela pode explodir como supernova.",
  },
  {
    enunciado: "Qual observação foi uma das primeiras evidências da matéria escura?",
    opcoes: [
      "A cor avermelhada das galáxias distantes",
      "O brilho constante das estrelas variáveis",
      "A órbita de Mercúrio",
      "As estrelas nas bordas das galáxias girando mais rápido que o esperado",
    ],
    correta: 3,
    explicacao: "As curvas de rotação, estudadas por Vera Rubin, indicam massa invisível extra nas galáxias.",
  },
  {
    enunciado: "A primeira onda gravitacional detectada diretamente pelo LIGO, em 2015, veio de:",
    opcoes: [
      "Uma supernova na Via Láctea",
      "Um pulsar isolado",
      "A fusão de dois buracos negros",
      "O Big Bang",
    ],
    correta: 2,
    explicacao: "O sinal GW150914 mostrou dois buracos negros espiralando e se fundindo a cerca de 1,3 bilhão de anos-luz.",
  },
];

export default perguntas;