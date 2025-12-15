import { QuizGameItem, QuizItem } from "../types/Quiz";

export const mockQuiz: QuizItem[] = [
  { id: "1", image: "/ods/ods1.svg", title: "ODS 1 na Prática" },
  {
    id: "2",
    image: "/quiz/quiz2.png",
    title: "Desafio da Pobreza Zero",
  },
  {
    id: "3",
    image: "/quiz/quiz3.png",
    title: "Missão: Proteção Social",
  },
  { id: "4", image: "/quiz/quiz4.jpg", title: "Pobreza: Mitos e Fatos" },
  {
    id: "5",
    image: "",
    title: "Agricultura Sustentável no Brasil",
  },
  {
    id: "6",
    image: "",
    title: "O Brasil e a Saúde Pública",
  },
  {
    id: "7",
    image: "",
    title: "Educação para o Futuro",
  },
  {
    id: "8",
    image: "",
    title: "Voz, Autonomia e Igualdade",
  },
  {
    id: "9",
    image: "",
    title: "Sustentabilidade em Duas Frentes",
  },
];

export const mockQuizGame: QuizGameItem[] = [
  // --- Quiz 1: ODS 1 na Prática ---
  {
    id: "16",
    quizId: "1",
    image: "/ods1_4_13.svg",
    question: "O que o ODS 1 busca atingir?",
    responses: [
      { text: "Energia limpa", correct: false },
      { text: "Fim da pobreza em todas as suas formas", correct: true },
      { text: "Igualdade salarial", correct: false },
      { text: "Melhoria do transporte público", correct: false },
    ],
  },
  {
    id: "17",
    quizId: "1",
    image: "/ods1_4_13.svg",
    question:
      "Qual é um exemplo de política utilizada no Brasil para combater a pobreza?",
    responses: [
      { text: "Bolsa Família", correct: true },
      { text: "EMEM", correct: false },
      { text: "PRONIN", correct: false },
      { text: "IPVA", correct: false },
    ],
  },
  {
    id: "18",
    quizId: "1",
    image: "/ods1_4_13.svg",
    question: "A pobreza multidimensional inclui falta de acesso a:",
    responses: [
      { text: "Compras online", correct: false },
      { text: "Saúde, educação e serviços básicos", correct: true },
      { text: "Cinemas e lazer", correct: false },
      { text: "Internet de alta velocidade", correct: false },
    ],
  },
  {
    id: "19",
    quizId: "1",
    image: "/ods1_4_13.svg",
    question: "O que é o piso de proteção social garantido?",
    responses: [
      { text: "Uma casa própria", correct: false },
      { text: "Um salário mínimo para quem não pode trabalhar", correct: true },
      { text: "Viagens internacionais", correct: false },
      { text: "Bolsas de intercâmbio", correct: false },
    ],
  },
  {
    id: "20",
    quizId: "1",
    image: "/ods1_4_13.svg",
    question: "Um objetivo da inclusão produtiva é:",
    responses: [
      {
        text: "Impulsionar microcrédito e qualificação profissional",
        correct: true,
      },
      { text: "Incentivar esportes profissionais", correct: false },
      { text: "Construir rodovias", correct: false },
      { text: "Criar eventos culturais", correct: false },
    ],
  },

  // --- Quiz 2: Desafio da Pobreza Zero (ODS 1) ---
  {
    id: "1",
    quizId: "2",
    image: "/ods1.svg",
    question: "A prioridade zero da Agenda 2030 é:",
    responses: [
      { text: "Igualdade de gênero", correct: false },
      { text: "Educação inclusiva", correct: false },
      { text: "Erradicação da pobreza", correct: true },
      { text: "Fome zero", correct: false },
    ],
  },
  {
    id: "2",
    quizId: "2",
    image: "/ods1.svg",
    question: "A pobreza extrema é definida como:",
    responses: [
      { text: "Falta de internet", correct: false },
      { text: "Falta de transporte público", correct: false },
      { text: "Renda abaixo da linha internacional mínima", correct: true },
      { text: "Baixo desempenho escolar", correct: false },
    ],
  },
  {
    id: "3",
    quizId: "2",
    image: "/ods1.svg",
    question: "A pobreza multidimensional inclui privações em:",
    responses: [
      { text: "Lazer e viagens", correct: false },
      { text: "Saúde, educação e serviços básicos", correct: true },
      { text: "Eletrônicos e tecnologia", correct: false },
      { text: "Moradia de luxo", correct: false },
    ],
  },
  {
    id: "4",
    quizId: "2",
    image: "/ods1.svg",
    question: "O pilar de proteção social busca:",
    responses: [
      { text: "Incentivar compras no comércio", correct: false },
      { text: "Garantir renda mínima e segurança social", correct: true },
      { text: "Criar novas empresas", correct: false },
      { text: "Facilitar viagens internacionais", correct: false },
    ],
  },
  {
    id: "5",
    quizId: "2",
    image: "/ods1.svg",
    question: "Recursos produtivos ligados ao ODS 1 incluem:",
    responses: [
      { text: "Terra, crédito e tecnologia", correct: true },
      { text: "Automóveis e imóveis", correct: false },
      { text: "Energia solar e eólica", correct: false },
      { text: "Acesso a universidades", correct: false },
    ],
  },
  {
    id: "6",
    quizId: "2",
    image: "/ods1.svg",
    question: "A Meta 1.4 trata de:",
    responses: [
      { text: "Acesso à educação superior", correct: false },
      {
        text: "Acesso a recursos produtivos como terra e crédito",
        correct: true,
      },
      { text: "Redução de emissões", correct: false },
      { text: "Purificações ambientais urbanas", correct: false },
    ],
  },

  // --- Quiz 3: Missão: Proteção Social ---
  {
    id: "7",
    quizId: "3",
    image: "/ods1-prot-social.svg",
    question: "O principal programa brasileiro de combate à pobreza é:",
    responses: [
      { text: "PRONIN", correct: false },
      { text: "Bolsa Família", correct: true },
      { text: "Minha Casa Minha Vida", correct: false },
      { text: "FIES", correct: false },
    ],
  },
  {
    id: "8",
    quizId: "3",
    image: "/ods1-prot-social.svg",
    question: "As condicionalidades do Bolsa Família incluem:",
    responses: [
      { text: "Participar de esportes", correct: false },
      { text: "Estudar inglês", correct: false },
      { text: "Frequência escolar e acompanhamento de saúde", correct: true },
      { text: "Fazer cursos profissionalizantes", correct: false },
    ],
  },
  {
    id: "9",
    quizId: "3",
    image: "/ods1-prot-social.svg",
    question: "O BPC garante:",
    responses: [
      { text: "Bolsa de estudos", correct: false },
      {
        text: "Um salário mínimo para idosos e pessoas com deficiência de baixa renda",
        correct: true,
      },
      { text: "Crédito para empreendedores", correct: false },
      { text: "Moradia gratuita", correct: false },
    ],
  },
  {
    id: "10",
    quizId: "3",
    image: "/ods1-prot-social.svg",
    question: "A inclusão produtiva no ODS 1 envolve:",
    responses: [
      { text: "Doação de computadores", correct: false },
      { text: "Microcrédito e qualificação profissional", correct: true },
      { text: "Construção de hospitais", correct: false },
      { text: "Aulas de programação", correct: false },
    ],
  },

  // --- Quiz 4: Pobreza: Mitos e Fatos ---
  {
    id: "11",
    quizId: "4",
    image: "/ods1-mitos.svg",
    question: "O ODS 1 combate quais tipos de pobreza?",
    responses: [
      { text: "Apenas pobreza financeira", correct: false },
      { text: "Apenas desigualdade urbana", correct: false },
      { text: "Pobreza extrema e multidimensional", correct: true },
      { text: "Exclusivamente desemprego", correct: false },
    ],
  },
  {
    id: "12",
    quizId: "4",
    image: "/ods1-mitos.svg",
    question: "No Bolsa Família, a transferência de renda:",
    responses: [
      { text: "Vem sem nenhum acompanhamento social", correct: false },
      {
        text: "Inclui condicionalidades ligadas à educação e saúde",
        correct: true,
      },
      { text: "É apenas para quem trabalha", correct: false },
      { text: "Exige participação em cursos técnicos", correct: false },
    ],
  },
  {
    id: "13",
    quizId: "4",
    image: "/ods1-mitos.svg",
    question: "O BPC é destinado a:",
    responses: [
      { text: "Jovens universitários", correct: false },
      { text: "Pessoas de alta renda", correct: false },
      {
        text: "Idosos e pessoas com deficiência de baixa renda",
        correct: true,
      },
      { text: "Microempreendedores", correct: false },
    ],
  },
  {
    id: "14",
    quizId: "4",
    image: "/ods1-mitos.svg",
    question: "A inclusão produtiva busca:",
    responses: [
      { text: "Criar vagas em empresas privadas", correct: false },
      {
        text: "Associar renda e microcrédito e qualificação profissional",
        correct: true,
      },
      { text: "Financiar esportes", correct: false },
      { text: "Construir shoppings populares", correct: false },
    ],
  },
  {
    id: "15",
    quizId: "4",
    image: "/ods1-mitos.svg",
    question: "O ODS 1 considera essenciais para redução da pobreza:",
    responses: [
      { text: "Acesso à terra, crédito e tecnologia", correct: true },
      { text: "Acesso a aplicativos e redes sociais", correct: false },
      { text: "Aumento do turismo", correct: false },
      { text: "Construção de parques", correct: false },
    ],
  },

  // --- Quiz 5: Agricultura Sustentável no Brasil (ODS 2) ---
  {
    id: "21",
    quizId: "5",
    image: "/ods2.svg",
    question:
      "O PAA (Programa de Aquisição de Alimentos) compra alimentos diretamente de:",
    responses: [
      { text: "Grandes indústrias", correct: false },
      { text: "Agricultura familiar", correct: true },
      { text: "Mercados internacionais", correct: false },
      { text: "Associações urbanas", correct: false },
    ],
  },
  {
    id: "22",
    quizId: "5",
    image: "/ods2.svg",
    question: "O PAA contribui para duas metas do ODS 2 ao:",
    responses: [
      { text: "Reduzir preços de mercado", correct: false },
      { text: "Proibição de alimentos ultraprocessados", correct: false },
      {
        text: "Aumentar a renda dos pequenos produtores e combater desperdício alimentar",
        correct: true,
      },
      { text: "Construir supermercados públicos", correct: false },
    ],
  },
  {
    id: "23",
    quizId: "5",
    image: "/ods2.svg",
    question: "A Meta 2.5 está relacionada à:",
    responses: [
      { text: "Distribuição de renda", correct: false },
      { text: "Acesso à educação básica", correct: false },
      {
        text: "Preservação da diversidade genética na agricultura",
        correct: true,
      },
      { text: "Expansão de áreas urbanas", correct: false },
    ],
  },
  {
    id: "24",
    quizId: "5",
    image: "/ods2.svg",
    question: "O Programa ABC (Agricultura de Baixo Carbono) promove:",
    responses: [
      { text: "Redução de impostos", correct: false },
      { text: "Práticas de baixo carbono na agricultura", correct: true },
      { text: "Aumento de áreas de mineração", correct: false },
      { text: "Incentivos para agricultura urbana", correct: false },
    ],
  },
  {
    id: "25",
    quizId: "5",
    image: "/ods2.svg",
    question: "Entre os mecanismos brasileiros para o ODS 2 está:",
    responses: [
      {
        text: "Políticas de incentivo à biodiversidade agrícola",
        correct: true,
      },
      { text: "Privatização de terras públicas", correct: false },
      { text: "Redução de estoques de alimentos", correct: false },
      { text: "Fim do apoio à agricultura familiar", correct: false },
    ],
  },

  // --- Quiz 6: O Brasil e a Saúde Pública (ODS 3) ---
  {
    id: "26",
    quizId: "6",
    image: "/ods3.svg",
    question: "O principal instrumento brasileiro para cumprir o ODS 3 é:",
    responses: [
      { text: "Sistema Único de Saúde (SUS)", correct: true },
      { text: "Lei de proteção da mulher", correct: false },
      { text: "PRONIN", correct: false },
      { text: "FGTS", correct: false },
    ],
  },
  {
    id: "27",
    quizId: "6",
    image: "/ods3.svg",
    question: "O SUS garante:",
    responses: [
      { text: "Acesso pago, mas de baixo custo", correct: false },
      { text: "Acesso universal, integral e gratuito", correct: true },
      { text: "Atendimento apenas em emergências", correct: false },
      { text: "Medicamentos exclusivos para idosos", correct: false },
    ],
  },
  {
    id: "28",
    quizId: "6",
    image: "/ods3.svg",
    question:
      "O Programa Nacional de Imunização do Brasil é importante porque:",
    responses: [
      { text: "Reduz custos de transporte", correct: false },
      { text: "Combate epidemias e doenças transmissíveis", correct: true },
      { text: "Distribui suplementos vitamínicos", correct: false },
      { text: "Atua apenas na zona rural", correct: false },
    ],
  },
  {
    id: "29",
    quizId: "6",
    image: "/ods3.svg",
    question: "O combate à mortalidade materno-infantil no SUS envolve:",
    responses: [
      { text: "Redução de impostos", correct: false },
      { text: "Acompanhamento pré-natal e atenção à criança", correct: true },
      { text: "Incentivo a esportes escolares", correct: false },
      { text: "Aplicação de multas", correct: false },
    ],
  },
  {
    id: "30",
    quizId: "6",
    image: "/ods3.svg",
    question:
      "Esforços do Brasil contra a poluição estão relacionados a qual meta do ODS 3?",
    responses: [
      { text: "ODS 3.9", correct: true },
      { text: "ODS 3.5", correct: false },
      { text: "ODS 3.2", correct: false },
      { text: "ODS 3.7", correct: false },
    ],
  },

  // --- Quiz 7: Educação para o Futuro (ODS 4) ---
  {
    id: "31",
    quizId: "7",
    image: "/ods4.svg",
    question: "O ODS 4 busca garantir:",
    responses: [
      { text: "Educação inclusiva, equitativa e de qualidade", correct: true },
      { text: "Energia sustentável para escolas", correct: false },
      { text: "Apenas alfabetização infantil", correct: false },
      { text: "Expansão do ensino militar", correct: false },
    ],
  },
  {
    id: "32",
    quizId: "7",
    image: "/ods4.svg",
    question: "A expressão “aprendizagem ao longo da vida” se refere a:",
    responses: [
      { text: "Estudar somente até o ensino médio", correct: false },
      {
        text: "Continuar aprendendo em diferentes fases da vida",
        correct: true,
      },
      { text: "Participar apenas de cursos técnicos", correct: false },
      { text: "Realizar apenas atividades extracurriculares", correct: false },
    ],
  },
  {
    id: "33",
    quizId: "7",
    image: "/ods4.svg",
    question:
      "Educação para o Desenvolvimento Sustentável (EDS) tem como objetivo:",
    responses: [
      { text: "Treinar alunos para competições esportivas", correct: false },
      {
        text: "Formar cidadãos com consciência global e ambiental",
        correct: true,
      },
      { text: "Focar exclusivamente em tecnologias digitais", correct: false },
      { text: "Reduzir o uso de livros físicos", correct: false },
    ],
  },
  {
    id: "34",
    quizId: "7",
    image: "/ods4.svg",
    question: "Entre as metas do ODS 4 está:",
    responses: [
      { text: "Ensinar somente habilidades artísticas", correct: false },
      {
        text: "Garantir acesso igualitário ao ensino superior e técnico",
        correct: true,
      },
      { text: "Apenas apertar cursos de pós-graduação", correct: false },
      { text: "Financiar exclusivamente escolas particulares", correct: false },
    ],
  },
  {
    id: "35",
    quizId: "7",
    image: "/ods4.svg",
    question: "Habilidades relevantes para o futuro incluem:",
    responses: [
      { text: "Memorização de conteúdo sem aplicação prática", correct: false },
      {
        text: "Competências para o mercado de trabalho e resolução de problemas",
        correct: true,
      },
      { text: "Práticas de decoração e artesanato", correct: false },
      { text: "Apenas habilidades musicais", correct: false },
    ],
  },

  // --- Quiz 8: Voz, Autonomia e Igualdade (ODS 5) ---
  {
    id: "36",
    quizId: "8",
    image: "/ods5.svg",
    question:
      "Quando falamos em igualdade de gênero no contexto do ODS 5, estamos abordando:",
    responses: [
      { text: "Apenas aumento de empregos para mulheres", correct: false },
      {
        text: "Remover barreiras estruturais que limitam escolhas e oportunidades",
        correct: true,
      },
      {
        text: "Focar somente no desempenho escolar de meninas",
        correct: false,
      },
      { text: "Remunerar competições esportivas femininas", correct: false },
    ],
  },
  {
    id: "37",
    quizId: "8",
    image: "/ods5.svg",
    question:
      "Eliminar práticas nocivas, como o casamento infantil, está relacionado a:",
    responses: [
      { text: "A preservação de tradições antigas", correct: false },
      {
        text: "Proteção da autonomia, dignidade e futuro das meninas",
        correct: true,
      },
      { text: "Redução de custos familiares", correct: false },
      { text: "Incentivo ao crescimento populacional", correct: false },
    ],
  },
  {
    id: "38",
    quizId: "8",
    image: "/ods5.svg",
    question: "O empoderamento feminino envolve:",
    responses: [
      { text: "Conceder privilégios especiais por gênero", correct: false },
      {
        text: "Criar ambientes onde mulheres possam decidir sobre suas vidas e participar plenamente",
        correct: true,
      },
      {
        text: "Substituir todos os cargos de liderança por mulheres",
        correct: false,
      },
      { text: "Reduzir o tempo de escolaridade feminina", correct: false },
    ],
  },
  {
    id: "39",
    quizId: "8",
    image: "/ods5.svg",
    question:
      "A participação de mulheres em espaços de decisão é importante porque:",
    responses: [
      { text: "Aumenta a competitividade entre governos", correct: false },
      {
        text: "Enriquece perspectivas e melhora a qualidade das decisões coletivas",
        correct: true,
      },
      { text: "Evita que homens ocupem cargos altos", correct: false },
      { text: "Impede avanços econômicos", correct: false },
    ],
  },
  {
    id: "40",
    quizId: "8",
    image: "/ods5.svg",
    question:
      "Reconhecer o trabalho de cuidado não remunerado significa compreender que:",
    responses: [
      { text: "É uma atividade sem valor social", correct: false },
      { text: "É irrelevante para a economia", correct: false },
      {
        text: "Sustenta famílias, comunidades e o funcionamento da sociedade",
        correct: true,
      },
      { text: "Deve ser realizado apenas em tempo parcial", correct: false },
    ],
  },

  // --- Quiz 9: Sustentabilidade em Duas Frentes (ODS 6 e 7) ---
  {
    id: "41",
    quizId: "9",
    image: "/ods6_7.svg",
    question:
      "Quando falamos em ODS 6 e ODS 7 juntos, qual combinação representa um avanço simultâneo para água limpa e energia sustentável?",
    responses: [
      {
        text: "Estações de tratamento de esgoto movidas por energia renovável",
        correct: true,
      },
      {
        text: "Aumento do consumo de combustíveis fósseis para gerar mais energia elétrica",
        correct: false,
      },
      {
        text: "Construção de hidrelétricas sem estudos ambientais",
        correct: false,
      },
      {
        text: "Uso de lenha como principal fonte de energia nas áreas rurais",
        correct: false,
      },
    ],
  },
  {
    id: "42",
    quizId: "9",
    image: "/ods6_7.svg",
    question:
      "Qual das opções simboliza um dos maiores desafios do Brasil nas dois ODS ao mesmo tempo?",
    responses: [
      {
        text: "Desigualdade regional no acesso ao saneamento e à energia",
        correct: true,
      },
      { text: "Falta de rios suficientes para abastecimento", correct: false },
      { text: "Excesso de energia solar no Nordeste", correct: false },
      { text: "Baixa demanda por esgoto tratado", correct: false },
    ],
  },
  {
    id: "43",
    quizId: "9",
    image: "/ods6_7.svg",
    question:
      "O Novo Marco Legal do Saneamento (ODS 6) tem como um de seus impactos positivos:",
    responses: [
      {
        text: "Altos investimentos que podem priorizar tecnologias energéticas mais eficientes nos sistemas de água",
        correct: true,
      },
      {
        text: "Reduzir o consumo de energia ao proibir o uso de bombas elétricas em estações",
        correct: false,
      },
      {
        text: "Substituir toda a água tratada por água de reuso",
        correct: false,
      },
      {
        text: "Encerrar a coleta de esgoto nas regiões urbanas para focar apenas nas rurais",
        correct: false,
      },
    ],
  },
  {
    id: "44",
    quizId: "9",
    image: "/ods6_7.svg",
    question:
      "A matriz elétrica brasileira, dentro do ODS 7, se destaca porque:",
    responses: [
      {
        text: "Tem alta participação de renováveis, incluindo hidrelétricas, que dependem diretamente de recursos hídricos (ODS 6)",
        correct: true,
      },
      { text: "É quase totalmente baseada em carvão mineral", correct: false },
      { text: "É formada principalmente por usinas nucleares", correct: false },
      { text: "Quase não utiliza energia solar ou eólica", correct: false },
    ],
  },
  {
    id: "45",
    quizId: "9",
    image: "/ods6_7.svg",
    question:
      "Qual situação representa uma solução integrada para metas dos ODS 6 e 7?",
    responses: [
      {
        text: "Utilizar energia solar para bombear água em comunidades isoladas",
        correct: true,
      },
      {
        text: "Ampliar poços artesianos sem nenhum controle de uso",
        correct: false,
      },
      {
        text: "Aumentar o uso de diesel para garantir água em áreas rurais",
        correct: false,
      },
      {
        text: "Descartar resíduos industriais sem tratamento em rios",
        correct: false,
      },
    ],
  },
];
