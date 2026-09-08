export interface Course {
  id: string;
  name: string;
  category: 'saude' | 'juridico' | 'negocios_tech';
  degree: 'Bacharelado' | 'Licenciatura' | 'Tecnólogo';
  duration: string;
  period: string;
  mecRating: number;
  highlight: string;
  campuses: string[];
  description: string;
  curriculumHighlights: string[];
  jobMarket: string;
  badge?: string;
  tagColor?: string;
}

export interface Campus {
  id: string;
  city: string;
  name: string;
  address: string;
  cep: string;
  phone: string;
  email: string;
  image: string;
  description: string;
  features: string[];
  featuredCourses: string[];
  mapQuery: string;
}

export interface AdmissionMethod {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  campus: string;
  period: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const ADMISSION_METHODS: AdmissionMethod[] = [
  {
    id: 'vestibular-online',
    title: 'Vestibular Online',
    subtitle: '100% digital, gratuito e com resultado ágil',
    badge: 'Inscrições Abertas',
    benefits: [
      'Faça sua prova de onde estiver, sem taxa de inscrição',
      'Resultado em até 24 horas úteis',
      'Descontos especiais na 1ª matrícula para os mais bem classificados'
    ],
    ctaText: 'Fazer Prova Online',
    ctaLink: '#simulador-bolsa',
    isPopular: true
  },
  {
    id: 'enem',
    title: 'Nota do ENEM',
    subtitle: 'Sua pontuação vale até 100% de bolsa de estudos',
    badge: 'Até 100% de Bolsa',
    benefits: [
      'Aceitamos edições do ENEM a partir de 2015',
      'Sem necessidade de realizar nova prova de vestibular',
      'Matrícula com isenção de taxa e análise imediata da nota'
    ],
    ctaText: 'Consultar Minha Nota',
    ctaLink: '#simulador-bolsa'
  },
  {
    id: 'transferencia',
    title: 'Transferência Externa',
    subtitle: 'Traga seu futuro para a Unex com condições exclusivas',
    badge: 'Até 50% de Desconto',
    benefits: [
      'Aproveitamento inteligente de disciplinas já cursadas',
      'Bolsa válida para todo o restante da sua graduação',
      'Processo simplificado e orientação acadêmica personalizada'
    ],
    ctaText: 'Solicitar Transferência',
    ctaLink: '#simulador-bolsa'
  },
  {
    id: 'segunda-graduacao',
    title: '2ª Graduação',
    subtitle: 'Expanda suas competências com nova titulação de excelência',
    badge: 'Diplomados',
    benefits: [
      'Dispensa de vestibular para portadores de diploma superior',
      'Conclusão acelerada com equivalência de grade',
      'Condições especiais para profissionais que buscam transição'
    ],
    ctaText: 'Ingressar como Diplomado',
    ctaLink: '#simulador-bolsa'
  },
  {
    id: 'fies-prouni',
    title: 'FIES & Prouni',
    subtitle: 'Apoio governamental para viabilizar sua trajetória acadêmica',
    badge: 'Financiamento',
    benefits: [
      'Atendimento dedicado para auxílio e validação de documentos',
      'Bolsas de 50% e 100% pelo ProUni',
      'Financiamento facilitado com juros subsidiados pelo FIES'
    ],
    ctaText: 'Entenda os Requisitos',
    ctaLink: '#faq'
  },
  {
    id: 'vestibular-medicina',
    title: 'Medicina UnexMED',
    subtitle: 'A formação médica mais inovadora da Bahia',
    badge: 'Nota Máxima MEC',
    benefits: [
      'Metodologia ativa PBL com centros de simulação realística',
      'Internato estruturado nos principais complexos hospitalares',
      'Acompanhamento docente com médicos especialistas e mestres'
    ],
    ctaText: 'Vestibular UnexMED',
    ctaLink: '#simulador-bolsa',
    isPopular: true
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'medicina',
    name: 'Medicina',
    category: 'saude',
    degree: 'Bacharelado',
    duration: '6 anos (12 semestres)',
    period: 'Integral',
    mecRating: 5,
    highlight: 'Referência Médica Estadual com Metodologia PBL',
    campuses: ['Feira de Santana', 'Vitória da Conquista', 'Itabuna', 'Jequié'],
    description: 'A formação médica na Unex é fundamentada em metodologias ativas, simulação realística e inserção precoce nas redes públicas e privadas de saúde desde os primeiros ciclos formativos.',
    curriculumHighlights: [
      'Laboratórios de Habilidades Médicas e Anatomia Digital 3D',
      'Problem-Based Learning (PBL) integrado à clínica médica',
      'Centro de Simulação Realística com manequins robotizados de alta fidelidade',
      'Internato de 2 anos em rede hospitalar conveniada'
    ],
    jobMarket: 'Demanda contínua em hospitais gerais, clínicas privadas, unidades de emergência, atenção primária (SUS) e residências médicas em centros de excelência.',
    badge: 'Curso Nota 5 MEC'
  },
  {
    id: 'direito',
    name: 'Direito',
    category: 'juridico',
    degree: 'Bacharelado',
    duration: '5 anos (10 semestres)',
    period: 'Matutino / Noturno',
    mecRating: 5,
    highlight: 'Líder em Aprovação na OAB no Interior Baiano',
    campuses: ['Feira de Santana', 'Vitória da Conquista', 'Itabuna'],
    description: 'Curso estruturado para o desenvolvimento do raciocínio crítico, da oratória e da resolução ética de conflitos, com prática jurídica real e júris simulados.',
    curriculumHighlights: [
      'Núcleo de Prática Jurídica (NPJ) com atendimentos reais à comunidade',
      'Tribunal do Júri simulado e clínica de mediação/arbitragem',
      'Módulos preparatórios contínuos para o Exame de Ordem (OAB)',
      'Direito Digital, Compliance e Proteção de Dados (LGPD)'
    ],
    jobMarket: 'Advocacia corporativa e contenciosa, carreiras públicas (magistratura, defensoria, ministério público, delegacias) e consultoria jurídica empresarial.',
    badge: 'Líder OAB'
  },
  {
    id: 'odontologia',
    name: 'Odontologia',
    category: 'saude',
    degree: 'Bacharelado',
    duration: '5 anos (10 semestres)',
    period: 'Integral',
    mecRating: 5,
    highlight: 'Mais de 60 Consultórios Modernos em Clínicas-Escola',
    campuses: ['Feira de Santana', 'Vitória da Conquista', 'Itabuna', 'Jequié'],
    description: 'Formação com alta carga horária prática em cirurgia bucomaxilofacial, prótese, periodontia, ortodontia e odontopediatria em clínicas equipadas com tecnologia digital.',
    curriculumHighlights: [
      'Clínicas Odontológicas integradas com atendimento comunitário',
      'Laboratórios de prótese, materiais dentários e radiologia digital',
      'Treinamento em escaneamento intraoral e odontologia estética',
      'Estágios supervisionados em saúde coletiva e ambiente hospitalar'
    ],
    jobMarket: 'Clínica geral, consultórios especializados, equipes de saúde da família e odontologia hospitalar/forense.',
    badge: 'Clínicas Próprias'
  },
  {
    id: 'medicina-veterinaria',
    name: 'Medicina Veterinária',
    category: 'saude',
    degree: 'Bacharelado',
    duration: '5 anos (10 semestres)',
    period: 'Matutino / Noturno',
    mecRating: 4,
    highlight: 'Hospital Veterinário Escola Próprio e Fazenda Experimental',
    campuses: ['Feira de Santana'],
    description: 'Capacitação completa em clínica e cirurgia de pequenos e grandes animais, reprodução animal, inspeção de alimentos e saúde pública.',
    curriculumHighlights: [
      'Hospital Veterinário com centro cirúrgico e internação 24h',
      'Laboratórios de patologia clínica, microbiologia e parasitologia',
      'Atividades em fazendas experimentais com foco no agronegócio',
      'Inspeção sanitária e controle de zoonoses'
    ],
    jobMarket: 'Hospitais veterinários, clínicas de pets, fazendas agropecuárias, indústrias de produtos de origem animal e vigilância sanitária.',
    badge: 'Hospital Veterinário'
  },
  {
    id: 'enfermagem',
    name: 'Enfermagem',
    category: 'saude',
    degree: 'Bacharelado',
    duration: '5 anos (10 semestres)',
    period: 'Matutino / Noturno',
    mecRating: 5,
    highlight: 'Formação Humanizada e Prática Hospitalar Extensiva',
    campuses: ['Feira de Santana', 'Vitória da Conquista', 'Itabuna'],
    description: 'Desenvolvimento de competências em gestão do cuidado, urgência e emergência, terapia intensiva e promoção da saúde preventiva em comunidades.',
    curriculumHighlights: [
      'Laboratórios de semiologia e semiotécnica equipados',
      'Estágios em Unidades de Terapia Intensiva (UTI) e centros cirúrgicos',
      'Projetos de extensão comunitária e campanhas vacinais',
      'Gestão em saúde e auditoria hospitalar'
    ],
    jobMarket: 'Hospitais, prontos-socorros, Home Care, programas de saúde da família, clínicas de vacinação e gestão assistencial.',
    badge: 'Prática Hospitalar'
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia',
    category: 'saude',
    degree: 'Bacharelado',
    duration: '5 anos (10 semestres)',
    period: 'Matutino / Noturno',
    mecRating: 5,
    highlight: 'Centro de Reabilitação Física e Hidroterapia',
    campuses: ['Feira de Santana', 'Jequié'],
    description: 'Formação com ênfase em reabilitação traumato-ortopédica, fisioterapia respiratória, neurofuncional e esportiva, com atendimento gratuito à população.',
    curriculumHighlights: [
      'Clínica-escola com piscinas térmicas terapêuticas',
      'Ginásio de cinesioterapia com equipamentos de biofeedback',
      'Atuação em reabilitação pós-operatória e esportiva',
      'Prática intensiva em hospitais parceiros'
    ],
    jobMarket: 'Clínicas de reabilitação, clubes esportivos, hospitais, ergonomia empresarial e consultórios particulares.',
    badge: 'Clínica-Escola'
  },
  {
    id: 'psicologia',
    name: 'Psicologia',
    category: 'saude',
    degree: 'Bacharelado',
    duration: '5 anos (10 semestres)',
    period: 'Matutino / Noturno',
    mecRating: 5,
    highlight: 'Clínica de Atendimento Psicológico e Laboratório de Observação',
    campuses: ['Feira de Santana', 'Vitória da Conquista', 'Itabuna'],
    description: 'Compreensão aprofundada dos processos psíquicos humanos, comportamento individual e coletivo, articulando teorias analíticas, comportamentais e cognitivas.',
    curriculumHighlights: [
      'Serviço de Psicologia Aplicada com salas de atendimento espelhadas',
      'Laboratório de processos psicológicos básicos e psicometria',
      'Estágios em psicologia clínica, organizacional e escolar',
      'Projetos de acolhimento psicossocial e saúde mental'
    ],
    jobMarket: 'Consultórios clínicos, recursos humanos e gestão de pessoas, hospitais, escolas e órgãos de assistência social (CRAS/CREAS).',
    badge: 'Clínica Psicológica'
  },
  {
    id: 'biomedicina',
    name: 'Biomedicina',
    category: 'saude',
    degree: 'Bacharelado',
    duration: '4 anos (8 semestres)',
    period: 'Matutino / Noturno',
    mecRating: 4,
    highlight: 'Laboratórios de Genética, Imunologia e Biomedicina Estética',
    campuses: ['Feira de Santana', 'Vitória da Conquista', 'Itabuna'],
    description: 'Capacitação analítica para atuar em diagnósticos laboratoriais, pesquisas genéticas, biologia molecular e procedimentos estéticos avançados.',
    curriculumHighlights: [
      'Laboratórios completos de hematologia, bioquímica e biologia molecular',
      'Habilitação em análises clínicas e estética avançada',
      'Projetos de iniciação científica e biotecnologia',
      'Parcerias com laboratórios de diagnóstico de renome estadual'
    ],
    jobMarket: 'Laboratórios de análises clínicas, clínicas de estética, bancos de sangue, centros de diagnóstico por imagem e institutos de pesquisa biotecnológica.',
    badge: 'Biotecnologia & Estética'
  },
  {
    id: 'administracao',
    name: 'Administração',
    category: 'negocios_tech',
    degree: 'Bacharelado',
    duration: '4 anos (8 semestres)',
    period: 'Noturno / Híbrido',
    mecRating: 4,
    highlight: 'Empresa Júnior, Inovação e Gestão Estratégica',
    campuses: ['Feira de Santana', 'Vitória da Conquista', 'Itabuna', 'Jequié'],
    description: 'Curso voltado à formação de líderes e gestores capazes de empreender e tomar decisões analíticas em finanças, marketing, operações e governança corporativa.',
    curriculumHighlights: [
      'Incubadora de empresas e mentoria com empreendedores regionais',
      'Simuladores de gestão de negócios e finanças empresariais',
      'Módulos de Transformação Digital, Big Data e Inovação',
      'Consultoria júnior para pequenas e médias empresas locais'
    ],
    jobMarket: 'Gestão executiva em empresas privadas e públicas, consultoria estratégica, fintechs, startups e empreendedorismo próprio.',
    badge: 'Foco em Liderança'
  },
  {
    id: 'engenharia-software',
    name: 'Engenharia de Software',
    category: 'negocios_tech',
    degree: 'Bacharelado',
    duration: '4 anos (8 semestres)',
    period: 'Noturno / Híbrido',
    mecRating: 5,
    highlight: 'Tech Hub, Inteligência Artificial e Desenvolvimento Full Stack',
    campuses: ['Feira de Santana', 'Vitória da Conquista'],
    description: 'Construção de sistemas modernos, arquitetura de software escalável, inteligência artificial aplicada e metodologias ágeis em parceria com empresas de tecnologia.',
    curriculumHighlights: [
      'Laboratórios com computadores de alto desempenho e cloud computing',
      'Projetos práticos reais desenvolvidos para empresas locais',
      'Trilhas em Inteligência Artificial, Engenharia de Dados e DevOps',
      'Hackathons universitários e incentivo a patentes de software'
    ],
    jobMarket: 'Desenvolvimento web e mobile full stack, arquitetura de cloud, engenharia de dados, segurança cibernética e vagas remotas no Brasil e exterior.',
    badge: 'Nova Formação Tech'
  }
];

export const CAMPUSES_DATA: Campus[] = [
  {
    id: 'feira-de-santana',
    city: 'Feira de Santana',
    name: 'Campus Feira de Santana (Sede)',
    address: 'Rua Artêmia Pires Freitas, s/n - Bairro SIM',
    cep: '44085-370',
    phone: '0800 710 0070',
    email: 'atendimento.fsa@unex.edu.br',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    description: 'Localizada no principal polo universitário do interior da Bahia, a unidade conta com megaestrutura com Hospital Veterinário, Clínicas Odontológicas, Centro Médico Integrado e mais de 40 laboratórios específicos.',
    features: [
      'Hospital Veterinário Escola 24h',
      'Clínicas Odontológicas com 60+ consultórios',
      'Centro de Habilidades Médicas UnexMED',
      'Biblioteca física e digital com mais de 50 mil títulos',
      'Complexo poliesportivo e auditório com 600 lugares'
    ],
    featuredCourses: ['Medicina', 'Direito', 'Odontologia', 'Medicina Veterinária', 'Psicologia', 'Enfermagem'],
    mapQuery: 'Unex Feira de Santana'
  },
  {
    id: 'vitoria-da-conquista',
    city: 'Vitória da Conquista',
    name: 'Campus Vitória da Conquista',
    address: 'Rua Ubaldino Figueira, 200 - Bairro Exposição',
    cep: '45020-510',
    phone: '0800 710 0070',
    email: 'atendimento.vdc@unex.edu.br',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: 'Referência no Sudoeste baiano, o campus Vitória da Conquista destaca-se pelo projeto arquitetônico moderno, laboratórios de ponta em saúde e o renomado curso de Medicina UnexMED com nota máxima no MEC.',
    features: [
      'Centro Médico de Especialidades UnexMED',
      'Laboratórios de Anatomia Virtual 3D e Robótica Médica',
      'Núcleo de Prática Jurídica premiado na região',
      'Área de convivência arborizada e espaço maker'
    ],
    featuredCourses: ['Medicina', 'Biomedicina', 'Direito', 'Farmácia', 'Odontologia', 'Engenharia de Software'],
    mapQuery: 'Unex Vitoria da Conquista'
  },
  {
    id: 'itabuna',
    city: 'Itabuna',
    name: 'Campus Itabuna',
    address: 'Av. José Soares Pinheiro, 1191 - Lomanto Júnior',
    cep: '45600-297',
    phone: '0800 710 0070',
    email: 'atendimento.itabuna@unex.edu.br',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    description: 'Polo de excelência educacional no Sul da Bahia, conectando tradição e inovação com forte atuação comunitária através de suas clínicas-escola de Odontologia, Fisioterapia e Medicina.',
    features: [
      'Centro de Reabilitação Integrada',
      'Clínicas odontológicas de alta tecnologia',
      'Laboratórios de microscopia e análises clínicas',
      'Estacionamento amplo e localização central estratégica'
    ],
    featuredCourses: ['Medicina', 'Odontologia', 'Direito', 'Enfermagem', 'Administração', 'Biomedicina'],
    mapQuery: 'Unex Itabuna'
  },
  {
    id: 'jequie',
    city: 'Jequié',
    name: 'Campus Jequié',
    address: 'Av. Antônia Garcia Ribeiro, 2888 - São Judas Tadeu',
    cep: '45204-068',
    phone: '0800 710 0070',
    email: 'atendimento.jequie@unex.edu.br',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
    description: 'Unidade pioneira no Médio Rio de Contas a disponibilizar o curso de Medicina com infraestrutura de última geração, aproximando o ensino superior de alto padrão da comunidade regional.',
    features: [
      'Ambulatório de especialidades médicas e atendimento ao SUS',
      'Laboratórios de habilidades clínicas e semiologia',
      'Salas tutoriais modernas preparadas para metodologia PBL',
      'Rede parceira com os principais hospitais da microrregião'
    ],
    featuredCourses: ['Medicina', 'Odontologia', 'Fisioterapia', 'Farmácia', 'Administração'],
    mapQuery: 'Unex Jequie'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'eric',
    name: 'Eric Bortoncello',
    course: 'Medicina',
    campus: 'Feira de Santana',
    period: '6º Semestre',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quote: 'A entrada na faculdade é um desafio transformador. O que me fez escolher a Unex com absoluta certeza foram a tecnologia implantada, a simulação realística e o modelo pedagógico que me faz sentir um médico na prática desde as primeiras semanas.',
    rating: 5
  },
  {
    id: 'maria-eduarda',
    name: 'Maria Eduarda Xavier',
    course: 'Medicina',
    campus: 'Jequié',
    period: '5º Semestre',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    quote: 'Fazer Medicina sempre foi o grande sonho da minha vida. A Unex me surpreendeu pela metodologia ativa PBL, professores que são referências clínicas na Bahia e laboratórios de ponta que não perdem em nada para os maiores centros do país.',
    rating: 5
  },
  {
    id: 'gabriel',
    name: 'Gabriel Santana',
    course: 'Direito',
    campus: 'Vitória da Conquista',
    period: '8º Semestre',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'A vivência prática no Núcleo de Prática Jurídica da Unex me preparou para o mercado de verdade. Ter contato com casos reais de mediação e julgamento simulado foi o diferencial para eu ser aprovado na 1ª fase da OAB com antecedência.',
    rating: 5
  },
  {
    id: 'larissa',
    name: 'Larissa Andrade',
    course: 'Odontologia',
    campus: 'Itabuna',
    period: '7º Semestre',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    quote: 'As clínicas da Unex em Itabuna são impecáveis. A gente aprende com equipamentos digitais modernos e, o mais gratificante de tudo, devolvendo a autoestima e a saúde bucal para centenas de pessoas da comunidade.',
    rating: 5
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'oab-lideranca',
    title: 'Unex lidera taxa de aprovação no Exame de Ordem (OAB) nas regiões de Feira e Sudoeste',
    category: 'Acadêmico & Carreira',
    date: '15 Ago 2026',
    readTime: '3 min de leitura',
    summary: 'Desempenho histórico consolida a qualidade do corpo docente, do Núcleo de Prática Jurídica e do projeto pedagógico orientado à excelência profissional.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mutirao-saude',
    title: 'Estudantes e professores de Medicina realizam mutirão com mais de 1.500 consultas gratuitas',
    category: 'Extensão & Sociedade',
    date: '02 Set 2026',
    readTime: '4 min de leitura',
    summary: 'Ação comunitária mobilizou alunos de Medicina, Enfermagem e Fisioterapia para exames preventivos, triagens cardiológicas e orientação pediátrica.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'apple-education',
    title: 'UnexMED consolida programa de tecnologia e formação digital integrada para docentes',
    category: 'Inovação & Ensino',
    date: '28 Ago 2026',
    readTime: '2 min de leitura',
    summary: 'Investimentos em ferramentas interativas de anatomia 3D e plataformas digitais aprimoram a dinâmica em sala e o aprendizado prático nos laboratórios.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'empregabilidade-carreiras',
    title: 'Centro de Carreiras Unex divulga índice de 87% de inserção profissional entre formandos',
    category: 'Mercado de Trabalho',
    date: '10 Ago 2026',
    readTime: '3 min de leitura',
    summary: 'Parcerias corporativas, estágios supervisionados e convênios com empresas do estado aceleram a contratação antes mesmo da colação de grau.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'Vestibular & Inscrição',
    question: 'Como funciona o Vestibular Online da Unex?',
    answer: 'O vestibular online é 100% gratuito e digital. Após preencher seus dados, você tem acesso imediato à plataforma de prova, que consiste em uma redação temática. Você pode realizá-la no horário que for mais conveniente, em computador ou smartphone com acesso à internet, e o resultado sai em até 24 horas.'
  },
  {
    category: 'Bolsas & ENEM',
    question: 'Qual a pontuação mínima do ENEM necessária para conseguir bolsa de estudos?',
    answer: 'Você pode utilizar notas do ENEM obtidas a partir de 2015. Quanto maior a sua média nas provas objetivas e na redação, maior o percentual de desconto concedido na mensalidade, podendo chegar a até 100% de bolsa integral (exceto Medicina, que conta com edital próprio e critérios específicos de financiamento).'
  },
  {
    category: 'Transferência',
    question: 'Como funciona a transferência de outra faculdade para a Unex?',
    answer: 'A transferência é simples e não exige novo vestibular. Basta enviar seu histórico escolar e planos de ensino para a análise de equivalência de disciplinas. Candidatos transferidos contam com bolsas especiais de até 50% válidas para todo o curso e aproveitamento acelerado das matérias já cursadas.'
  },
  {
    category: 'Medicina UnexMED',
    question: 'Como ingressar no curso de Medicina da Unex?',
    answer: 'O ingresso em Medicina ocorre por vestibular próprio da UnexMED (com provas presenciais e online supervisionadas) e também por aproveitamento de nota do ENEM através de edital semestral publicado especificamente para as unidades de Feira de Santana, Vitória da Conquista, Itabuna e Jequié.'
  },
  {
    category: 'Matrícula & Documentação',
    question: 'Quais documentos são exigidos para efetivar minha matrícula?',
    answer: 'Para concluir a matrícula digital, você precisará anexar: documento de identidade oficial (RG/CNH), CPF, certidão de nascimento ou casamento, histórico escolar e certificado de conclusão do Ensino Médio, comprovante de residência atualizado e foto 3x4 digital.'
  },
  {
    category: 'Financiamentos',
    question: 'A Unex aceita programas de financiamento como FIES e Prouni?',
    answer: 'Sim! Todas as unidades da Unex são devidamente credenciadas pelo Ministério da Educação para oferta de bolsas integrais e parciais pelo ProUni e contratação de financiamento estudantil através do FIES, com equipe de suporte dedicada para sanar dúvidas durante todo o período de inscrição.'
  }
];
