import { OdItem } from "../types/Ods";

export const mockOds: OdItem[] = [
  {
    id: "q1",
    title: "Erradicação da Pobreza",
    subtitleOd:
      "Acabar com a Pobreza em todas as suas formas, em todos os lugares.",
    coverImage: "/ods/ods1.svg",
    descriptionOd:
      "Este ODS é a prioridade zero da Agenda 2030, focando em acabar com a pobreza extrema (pessoas vivendo abaixo de uma linha de renda mínima internacional) e reduzir todas as formas de pobreza multidimensional (privação de direitos como saúde, educação e acesso a serviços). A meta é garantir um piso de proteção social para todos, aumentar a resiliência dos mais vulneráveis a choques e promover o acesso equitativo a recursos produtivos (terra, crédito e tecnologia).",
    resume:
      "O Brasil historicamente ataca este ODS através de programas de transferência de renda e assistência social.",
    responsesOds: [
      "Transferência de Renda: Programas como o Bolsa Família (e suas sucessivas reformulações) são o principal motor. Além de aliviar a pobreza pela renda, impõem condicionalidades (frequência escolar e acompanhamento de saúde) que combatem a pobreza nas dimensões de educação e saúde.",
      "Piso de Proteção Social: O Benefício de Prestação Continuada (BPC) garante um salário mínimo mensal para idosos e pessoas com deficiência de baixa renda, atuando como um pilar de proteção social.",
      "Inclusão Produtiva: Embora existam desafios, o país busca associar as políticas de transferência de renda a programas de qualificação profissional e microcrédito, promovendo o acesso a ativos e recursos (Meta 1.4).",
    ],
  },
  {
    id: "q2",
    title: "Fome Zero e Agricultura Sustentavel",
    subtitleOd:
      "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável.",
    coverImage: "/ods/ods2.svg",
    descriptionOd:
      "O ODS 2 visa acabar com a fome, garantindo segurança alimentar (acesso físico e econômico a alimentos) e melhorando a nutrição, que engloba a luta contra a subnutrição, o nanismo infantil e a má nutrição em geral. O segundo pilar é promover a agricultura sustentável, aumentando a produtividade e a renda dos pequenos produtores de forma resiliente ao clima.",
    resume:
      "O Brasil enfrentou um retrocesso recente no combate à fome, mas possui mecanismos institucionais robustos para este ODS.",
    responsesOds: [
      "Programas de Combate à Fome: A retomada e o fortalecimento de programas de distribuição de renda com foco em alimentação e o incentivo a redes de apoio alimentar.",
      "Programa de Aquisição de Alimentos (PAA): O PAA é um modelo que atende duas metas simultaneamente: compra alimentos diretamente da agricultura familiar (aumentando a renda do pequeno produtor – ODS 2.3) e os destina à formação de estoques públicos ou à distribuição para pessoas em situação de insegurança alimentar (ODS 2.1).",
      "Política de Biodiversidade: Esforços para preservar a diversidade genética (Meta 2.5) e promover práticas de baixo carbono na agricultura, como o Programa ABC (Agricultura de Baixo Carbono).",
    ],
  },
  {
    id: "q3",
    title: "Saúde e bem-estar",
    subtitleOd:
      "Assegurar uma vida saúdavel e promover o bem-estar para todos, em todas as idades.",
    coverImage: "/ods/ods3.svg",
    descriptionOd:
      "O ODS 3 busca garantir uma vida saudável e promover o bem-estar para todos em todas as idades, implicando a redução da mortalidade materno-infantil, o combate a grandes epidemias (AIDS, Tuberculose, Malária), o controle de Doenças Não Transmissíveis (DNTs) e o alcance da Cobertura Universal de Saúde (CUS).",
    resume:
      "O pilar do Brasil neste ODS é o seu sistema público de saúde, o SUS, que garante acesso universal e gratuito.",
    responsesOds: [
      "Sistema Único de Saúde (SUS): É a maior materialização da Cobertura Universal de Saúde (CUS) no Brasil, garantindo acesso integral e gratuito à saúde (ODS 3.8).",
      "Programas de Vacinação: O PNI combate epidemias e doenças transmissíveis (ODS 3.3).",
      "Saúde Materno-Infantil: Acompanhamento pré-natal, atenção à criança e redução das taxas de mortalidade materno-infantil (ODS 3.1 e 3.2).",
      "Combate à Poluição: Esforços regulatórios e de fiscalização buscam reduzir as doenças causadas pela poluição do ar e da água (ODS 3.9).",
    ],
  },
  {
    id: "q4",
    title: "Educação de Qualidade",
    subtitleOd:
      "Assegurar a educação inclusiva e equitativa de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos.",
    coverImage: "/ods/ods4.svg",
    descriptionOd:
      "O ODS 4 visa assegurar a educação inclusiva, equitativa e de qualidade e promover oportunidades de aprendizagem ao longo da vida para todos. As metas incluem garantir a conclusão gratuita do ensino primário e secundário, o acesso igualitário ao ensino superior e técnico, e a capacitação em habilidades relevantes para o mercado de trabalho. Um foco especial é a Educação para o Desenvolvimento Sustentável (EDS), que promove cidadania global e sustentabilidade.",
    resume:
      "O arcabouço legal e financeiro brasileiro direciona a maior parte dos esforços para este ODS, com destaque para o Fundeb e o PNE.",
    responsesOds: [
      "Financiamento: O Fundo de Manutenção e Desenvolvimento da Educação Básica (FUNDEB) garante o financiamento da educação básica (do infantil ao ensino médio), sendo vital para a equidade e qualidade (ODS 4.1).",
      "Plano Nacional de Educação (PNE): Com vigência decenal, possui metas de expansão do acesso (creches, ensino superior) e melhoria da qualidade do ensino (ODS 4.1).",
      "Combate ao Analfabetismo: Programas federais e estaduais buscam reduzir o analfabetismo funcional e total de jovens e adultos (ODS 4.6).",
      "Inclusão: O país possui políticas para incluir alunos com deficiência na rede regular de ensino e busca reduzir as disparidades educacionais de gênero e étnico-raciais (ODS 4.5).",
    ],
  },
  {
    id: "q5",
    title: "Igualdade de Gênero",
    subtitleOd:
      "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.",
    coverImage: "/ods/ods5.svg",
    descriptionOd:
      "O objetivo é alcançar a igualdade de gênero e empoderar todas as mulheres e meninas. Isso envolve eliminar todas as formas de discriminação e violência (física, sexual, psicológica), acabar com práticas nocivas (como o casamento infantil) e garantir a participação plena e efetiva das mulheres em posições de liderança e decisão. É crucial, também, o reconhecimento e a valorização do trabalho de cuidado não remunerado.",
    resume:
      "A resposta brasileira se concentra na proteção legal e no incentivo à participação feminina.",
    responsesOds: [
      "Proteção Legal: A Lei Maria da Penha é a principal ferramenta de combate à violência doméstica e familiar contra mulheres, alinhada à Meta 5.2.",
      "Garantia de Direitos: Tipificação do crime de feminicídio e estabelecimento de redes de atendimento (Delegacias da Mulher, Centros de Referência) são cruciais para a proteção.",
      "Participação Política: Embora o país ainda tenha baixa representação feminina em cargos eletivos, há esforços e debates sobre cotas e incentivos para a participação de mulheres na política (ODS 5.5).",
      "Reforma de Direitos: Embora desafiador, há um movimento para reformar leis que garantam a igualdade de direitos econômicos (propriedade, herança) para as mulheres rurais e urbanas.",
    ],
  },
  {
    id: "q6",
    title: "Água Potável e Saneamento",
    subtitleOd:
      "Assegurar a disponibilidade e a gestão sustentável da água e saneamento para todos.",
    coverImage: "/ods/ods6.svg",
    descriptionOd:
      "Este ODS exige que a disponibilidade e a gestão da água e do saneamento sejam sustentáveis e universais. As metas centrais são garantir o acesso seguro à água potável e o saneamento e higiene adequados para todos. Isso passa por melhorar a qualidade da água (reduzindo a poluição e o despejo de esgoto não tratado), aumentar a eficiência hídrica em todos os setores e proteger os ecossistemas relacionados à água (rios, aquíferos).",
    resume: "O foco principal é o Novo Marco Legal do Saneamento.",
    responsesOds: [
      "Novo Marco Legal do Saneamento Básico (Lei 14.026/2020): Estabelece a meta de universalizar os serviços de água potável e de coleta e tratamento de esgoto (ODS 6.1 e 6.2) até 2033, incentivando a atração de investimentos privados.",
      "Proteção de Bacias Hidrográficas: Políticas federais e estaduais buscam a gestão integrada de recursos hídricos e a revitalização de bacias, essencial para proteger os mananciais (ODS 6.5 e 6.6).",
      "Desafio Regional: O maior obstáculo é a profunda desigualdade regional no acesso ao saneamento, com as regiões Norte e Nordeste apresentando os déficits mais críticos.",
    ],
  },
  {
    id: "q7",
    title: "Energia Acessível e Limpa",
    subtitleOd:
      "Assegurar o acesso confiável, sustentável, moderno e a preço acessível à energia para todos.",
    coverImage: "/ods/ods7.svg",
    descriptionOd:
      "O ODS 7 busca assegurar o acesso a energia acessível, confiável, sustentável e moderna para todos. Isso se traduz em três metas principais: garantir o acesso universal à eletricidade moderna, aumentar substancialmente a participação de energias renováveis na matriz global e dobrar a taxa de melhoria da eficiência energética.",
    resume:
      "O Brasil já possui uma matriz relativamente limpa em comparação com a média mundial.",
    responsesOds: [
      "Matriz Limpa: Devido à forte presença da energia hídrica, o Brasil tem uma matriz elétrica com alta participação de renováveis (Meta 7.2).",
      "Expansão Solar e Eólica: O país tem experimentado um crescimento acelerado na geração de energia solar e eólica, inclusive a distribuída, contribuindo para diversificar a matriz e aumentar a sustentabilidade.",
      "Etanol e Biocombustíveis: O programa de biocombustíveis (como o etanol) é um destaque, promovendo o uso de fontes renováveis no setor de transportes.",
      "Eficiência Energética: O Programa Nacional de Conservação de Energia Elétrica (PROCEL) e a rotulagem de eficiência para eletrodomésticos buscam melhorar a eficiência (Meta 7.3).",
    ],
  },
  {
    id: "q8",
    title: "Trabalho Decente e Crescimento Econômico",
    subtitleOd:
      "Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todos.",
    coverImage: "/ods/ods8.svg",
    descriptionOd:
      "O ODS 8 promove o crescimento econômico sustentado, inclusivo e sustentável, mas seu foco principal é o trabalho decente para todos. Isso inclui garantir o emprego pleno e produtivo, a igualdade de remuneração por trabalho de igual valor, a proteção dos direitos trabalhistas e, fundamentalmente, a erradicação do trabalho forçado e do trabalho infantil.",
    resume:
      "O Brasil tem forte atuação no combate à exploração e na regulação trabalhista.",
    responsesOds: [
      "Combate ao Trabalho Escravo: O Brasil é um dos líderes no combate ao trabalho análogo à escravidão, utilizando o sistema de fiscalização móvel e a chamada 'Lista Suja' (ODS 8.7).",
      "Legislação Trabalhista: A Consolidação das Leis do Trabalho (CLT) estabelece a proteção dos direitos e a segurança no ambiente de trabalho (ODS 8.8).",
      "Formalização: Esforços para simplificar e incentivar a formalização de micro e pequenas empresas e de Microempreendedores Individuais (MEIs), promovendo o trabalho decente (ODS 8.3).",
      "Emprego Jovem e Capacitação: Programas de primeiro emprego e de qualificação profissional, como o Sistema S (SENAI, SENAC, etc.), buscam aumentar a empregabilidade dos jovens (Meta 8.6).",
    ],
  },
  {
    id: "q9",
    title: "Indústria, Inovação e Infraestrutura",
    subtitleOd:
      "Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.",
    coverImage: "/ods/ods9.svg",
    descriptionOd:
      "O ODS 9 busca construir infraestruturas de qualidade, confiáveis e resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação. Isso envolve modernizar a indústria, aumentar o investimento em Pesquisa & Desenvolvimento (P&D) e garantir o acesso universal a Tecnologias de Informação e Comunicação (TICs).",
    resume:
      "O país investe em infraestrutura e em fomento à pesquisa, mas enfrenta desafios de financiamento.",
    responsesOds: [
      "Infraestrutura: O país utiliza o Plano Plurianual (PPA) e o regime de Concessões e Parcerias Público-Privadas (PPPs) para atrair investimentos em rodovias, ferrovias e portos, buscando resiliência e conectividade (ODS 9.1).",
      "Inovação: O Sistema Nacional de Ciência, Tecnologia e Inovação, com a atuação de agências de fomento como o CNPq e a FINEP, busca aumentar o investimento em P&D e desenvolver capacidades tecnológicas (ODS 9.5).",
      "TICs: Programas como o Governo Eletrônico (e-Gov) e o incentivo à expansão da banda larga (Meta 9.c) visam à universalização do acesso à internet e o desenvolvimento da indústria de tecnologia nacional.",
      "Industrialização Verde: Há esforços para apoiar a modernização da indústria, promovendo maior eficiência energética e de recursos (ODS 9.4).",
    ],
  },
  {
    id: "q10",
    title: "Redução das Desigualdades",
    subtitleOd: "Reduzir a desigualdade dentro dos países e entre eles.",
    coverImage: "/ods/ods10.svg",
    descriptionOd:
      "Este ODS exige que a redução das desigualdades tanto dentro dos países quanto entre eles. A principal meta de renda é garantir que a renda dos 40% mais pobres cresça mais rápido que a média. Envolve promover a inclusão social, econômica e política de todos (raça, gênero, deficiência, etc.), eliminando leis e práticas discriminatórias, e adotando políticas fiscais progressivas (impostos mais altos para os mais ricos).",
    resume:
      "A desigualdade é um desafio estrutural no Brasil, mas há mecanismos de combate.",
    responsesOds: [
      "Política Fiscal: O principal instrumento é a tributação e a despesa pública. O debate sobre a reforma tributária e a progressividade do imposto de renda são centrais para reduzir a desigualdade de renda (ODS 10.4).",
      "Inclusão Social: As políticas de cotas raciais (em universidades e concursos) e de gênero buscam reverter o histórico de exclusão e promover a inclusão (ODS 10.2).",
      "Salário Mínimo: A política de valorização do salário mínimo impacta diretamente a renda dos mais pobres, impulsionando o crescimento da base da pirâmide (ODS 10.1).",
      "Migração: O Brasil adota uma postura de acolhimento e regularização de migrantes (como os venezuelanos), facilitando a migração ordenada e segura (ODS 10.7).",
    ],
  },
  {
    id: "q11",
    title: "Cidades e Comunidades Sustentáveis",
    subtitleOd:
      "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
    coverImage: "/ods/ods11.svg",
    descriptionOd:
      "O ODS 11 visa tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis. As metas incluem garantir o acesso à habitação segura e a preços acessíveis, melhorar as favelas, fornecer transporte público acessível e seguro, aumentar a resiliência a desastres e proteger o patrimônio cultural e natural. O planejamento urbano deve ser participativo e integrado.",
    resume:
      "A implementação é fortemente descentralizada, dependendo de políticas municipais e estaduais.",
    responsesOds: [
      "Habitação: O programa Minha Casa Minha Vida (e suas variações) é a principal política para reduzir o déficit habitacional e melhorar as condições de moradia (ODS 11.1).",
      "Estatuto da Cidade: Lei federal que exige que os municípios com mais de 20 mil habitantes criem Planos Diretores que considerem o planejamento inclusivo e sustentável (ODS 11.3).",
      "Mobilidade Urbana: A legislação federal exige que os municípios com mais de 20 mil habitantes criem planos de mobilidade urbana para priorizar o transporte público e a mobilidade ativa (ODS 11.2).",
      "Resiliência: Investimento em monitoramento e alerta de desastres (Defesa Civil) e em obras de contenção de encostas e prevenção de enchentes (ODS 11.5).",
    ],
  },
  {
    id: "q12",
    title: "Consumo e Produção Responsáveis",
    subtitleOd: "Assegurar padrões de produção e de consumo sustentáveis.",
    coverImage: "/ods/ods12.svg",
    descriptionOd:
      "Este ODS busca garantir padrões sustentáveis de produção e consumo. O foco é na gestão eficiente de recursos naturais, na adoção de práticas sustentáveis pelas empresas, na redução do desperdício de alimentos pela metade e na gestão ambientalmente correta de resíduos e produtos químicos. A meta final é a transição para uma economia que minimize o uso de recursos e a geração de lixo.",
    resume:
      "O principal instrumento é a política nacional de resíduos e a regulamentação do uso de recursos.",
    responsesOds: [
      "Política Nacional de Resíduos Sólidos (PNRS): Estabelece a responsabilidade compartilhada (governo, fabricantes, consumidores) pelo ciclo de vida dos produtos e busca a eliminação dos lixões, além de incentivar a logística reversa e a reciclagem (ODS 12.5).",
      "Desperdício de Alimentos: Esforços no PAA e em programas de combate ao desperdício (como bancos de alimentos) atuam para reduzir as perdas na cadeia produtiva e no consumo (ODS 12.3).",
      "Compras Públicas Sustentáveis: A legislação brasileira incentiva que a administração pública adote critérios de sustentabilidade em suas licitações e compras, impulsionando o mercado (ODS 12.7).",
      "Subsídios a Fósseis: Embora seja um grande desafio, há debates e pressão internacional para a racionalização dos subsídios a combustíveis fósseis (ODS 12.c).",
    ],
  },
  {
    id: "q13",
    title: "Ação Contra a Mudança Global do Clima",
    subtitleOd:
      "Tomar medidas urgentes para combater a mudança do clima e seus impactos.",
    coverImage: "/ods/ods13.svg",
    descriptionOd:
      "O ODS 13 visa tomar medidas urgentes para combater a mudança do clima e seus impactos. Ele exige o fortalecimento da resiliência e da capacidade de adaptação a riscos climáticos e desastres (enchentes, secas) e a integração das medidas climáticas nas políticas nacionais. É o ODS que incorpora o Acordo de Paris e seus compromissos de mitigação.",
    resume:
      "O Brasil tem legislação e compromissos internacionais formais, mas sua aplicação varia.",
    responsesOds: [
      "Acordo de Paris (INDCI): O Brasil tem uma Contribuição Nacionalmente Determinada (NDC) que estabelece metas de redução de emissões de $\\text{CO}_2 \\text{e}$ e busca a neutralidade de carbono até 2050 (ODS 13.2).",
      "Política Nacional sobre Mudança do Clima (PNMC): Estabelece o compromisso de mitigar as emissões e desenvolver um Plano Nacional de Adaptação.",
      "Combate ao Desmatamento: A principal contribuição brasileira para a mitigação é o controle do desmatamento ilegal (principal fonte de emissões do país). Planos como o PPCDAm (Plano de Ação para Prevenção e Controle do Desmatamento na Amazônia Legal) são ferramentas cruciais.",
      "Alertas e Defesa Civil: Melhoria da capacidade de previsão e alerta de eventos extremos (por exemplo, INPE e Cemaden) para proteger a população (ODS 13.1).",
    ],
  },
  {
    id: "q14",
    title: "Vida na Água",
    subtitleOd:
      "Conservar e usar de forma sustentável os oceanos, os mares e os recursos marinhos para o desenvolvimento sustentável.",
    coverImage: "/ods/ods14.svg",
    descriptionOd:
      "Este ODS é dedicado à conservação e ao uso sustentável dos oceanos, mares e recursos marinhos. As metas incluem a redução da poluição marinha (especialmente plásticos e nutrientes), a proteção de ecossistemas costeiros e marinhos, a minimização da acidificação dos oceanos e o fim da sobrepesca e da pesca ilegal, não reportada e não regulamentada (INN).",
    resume:
      "Com uma vasta costa, o Brasil tem o desafio de proteger sua 'Amazônia Azul'.",
    responsesOds: [
      "Áreas Marinhas Protegidas (AMPs): O Brasil tem expandido o número e a área de suas Unidades de Conservação Marinhas (ODS 14.5), embora o monitoramento e a fiscalização ainda sejam desafios.",
      "Combate à Poluição: Esforços municipais e estaduais no gerenciamento costeiro para reduzir a entrada de lixo marinho (plástico) e esgoto não tratado no oceano (ODS 14.1).",
      "Gestão da Pesca: A regulamentação da atividade pesqueira, incluindo a implementação de cotas de pesca e períodos de defeso, visa a recuperação dos estoques pesqueiros e o combate à pesca ilegal (ODS 14.4).",
      "Pesca Artesanal: Há políticas de apoio e concessão de auxílio-defeso (seguro-desemprego) para pescadores artesanais durante períodos de reprodução das espécies (ODS 14.b).",
    ],
  },
  {
    id: "q15",
    title: "Vida Terrestre",
    subtitleOd:
      "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade.",
    coverImage: "/ods/ods15.svg",
    descriptionOd:
      "O ODS 15 foca na proteção, recuperação e uso sustentável dos ecossistemas terrestres e da biodiversidade. As metas centrais são deter o desmatamento e restaurar florestas, combater a desertificação e alcançar a neutralidade da degradação do solo, deter a perda de biodiversidade e acabar com a caça e o tráfico ilegal de espécies selvagens.",
    resume:
      "O Brasil é um país megadiverso, tornando este ODS crucial e complexo.",
    responsesOds: [
      "Combate ao Desmatamento: O foco principal é a fiscalização do desmatamento na Amazônia e no Cerrado, com o uso de tecnologia de satélite (INPE) e operações de campo do IBAMA e ICMBio (ODS 15.2).",
      "Unidades de Conservação (UCs): O Sistema Nacional de Unidades de Conservação (SNUC) estabelece e protege grandes áreas de conservação (ODS 15.1).",
      "Recuperação de Áreas Degradadas: O país possui programas de incentivo ao reflorestamento e à recuperação de nascentes e matas ciliares, em linha com o Código Florestal.",
      "Tráfico de Fauna: A Polícia Federal e o IBAMA atuam no combate ao tráfico ilegal de espécies (ODS 15.7).",
    ],
  },
  {
    id: "q16",
    title: "Paz, Justiça e Instituições Eficazes",
    subtitleOd:
      "Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.",
    coverImage: "/ods/ods16.svg",
    descriptionOd:
      "O ODS 16 defende a promoção de sociedades pacíficas e inclusivas, o fornecimento de acesso à justiça para todos e a construção de instituições eficazes, responsáveis e transparentes. As metas incluem a redução da violência, o combate ao crime organizado e à corrupção, e a garantia do acesso à informação e do registro de nascimento para todos.",
    resume:
      "O país possui uma estrutura democrática, mas enfrenta desafios persistentes na segurança pública e na corrupção.",
    responsesOds: [
      "Acesso à Justiça: A Defensoria Pública e os programas de conciliação e mediação buscam garantir o acesso à justiça para a população de baixa renda (ODS 16.3).",
      "Identidade Legal: Os mutirões para o registro de nascimento e a emissão de documentos são importantes para garantir a identidade legal a todos os cidadãos (ODS 16.9).",
      "Transparência: A Lei de Acesso à Informação (LAI) garante o direito de acesso a dados públicos, promovendo a transparência e a responsabilização (ODS 16.10).",
      "Combate à Corrupção: Ações de órgãos de controle (Tribunais de Contas, Controladoria-Geral da União) e do Ministério Público atuam para reduzir a corrupção e os fluxos financeiros ilícitos (ODS 16.5).",
    ],
  },
  {
    id: "q17",
    title: "Parcerias e Meios de Implementação",
    subtitleOd:
      "Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.",
    coverImage: "/ods/ods17.svg",
    descriptionOd:
      "Este ODS é a base da sustentabilidade da Agenda 2030, focando em fortalecer os meios de implementação e revitalizar a Parceria Global para o Desenvolvimento Sustentável. As metas englobam mobilizar finanças (internas e internacionais), promover a transferência de tecnologia, fomentar o comércio justo e aumentar a disponibilidade de dados de qualidade e desagregados para monitoramento.",
    resume:
      "O Brasil participa ativamente em fóruns globais, mas precisa aprimorar a integração de dados.",
    responsesOds: [
      "Cooperação Internacional: O Brasil atua em fóruns como o G20 e o BRICS, buscando maior estabilidade macroeconômica e um sistema de comércio mais justo (ODS 17.13 e 17.10).",
      "CNODS: A Comissão Nacional para os ODS garante a parceria multissetorial entre governo, sociedade civil e setor privado para o acompanhamento da Agenda 2030 (ODS 17.17).",
      "Estatísticas e Dados: O IBGE (Instituto Brasileiro de Geografia e Estatística) é o órgão central para a produção e monitoramento dos indicadores dos ODS (ODS 17.18), com esforços para aumentar a desagregação dos dados por raça, gênero e localização.",
      "Capacitação e Tecnologia: A Agência Brasileira de Cooperação (ABC) promove projetos de cooperação Sul-Sul, compartilhando tecnologia e conhecimento com outros países em desenvolvimento (ODS 17.8 e 17.9).",
    ],
  },
];
