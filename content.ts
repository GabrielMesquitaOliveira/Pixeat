// content.ts - Conteúdo da Landing Page Pixeat

export const CONTENT = {
  // Hero Section
  hero: {
    eyebrow: "AUTOATENDIMENTO INTELIGENTE",
    headline: "Receba pedidos por QR Code, tablet e garçom.",
    subheadline:
      "Cardápio digital interativo na mesa + reservas online automáticas. Reduza tempo de espera, elimine erros nos pedidos e aumente suas vendas em até 40%.",
    cta: {
      primary: "Começar Grátis",
      secondary: "Ver Demonstração",
    },
    trustBadges: [
      "Sem taxa de setup",
      "Configuração em 24h",
      "Suporte em português",
    ],
    socialProof: "Usado por 500+ restaurantes • 50mil+ pedidos realizados",
    badge: "💳 Não precisa de cartão de crédito para começar",
  },

  // Logos de Clientes (opcional)
  clients: {
    title: "Restaurantes que confiam no Pixeat",
    description:
      "De pequenos bistrôs a grandes redes de restaurantes, estabelecimentos de todos os tamanhos já descobriram como o Pixeat transforma a experiência do cliente e otimiza a operação. Junte-se a centenas de negócios que escolheram modernizar seu atendimento e aumentar suas vendas com tecnologia inteligente.",
    logos: [
      // Array de URLs ou nomes dos clientes
    ],
  },

  // Problema/Dor
  problem: {
    title: "Os desafios que todo restaurante enfrenta",
    description:
      "Gerenciar um restaurante não é fácil. Entre filas no caixa, erros nos pedidos, reservas desorganizadas e clientes impacientes, muitas oportunidades de venda são perdidas todos os dias. Sabemos o quanto é difícil manter a qualidade do atendimento enquanto lida com processos manuais, comunicação falha entre equipe e cozinha, e a pressão constante de oferecer uma experiência moderna que seus clientes esperam. É hora de mudar isso.",
    problems: [
      {
        icon: "⏰",
        title: "Filas no caixa",
        description:
          "Clientes esperando muito tempo para fazer pedidos e pagar a conta",
      },
      {
        icon: "❌",
        title: "Erros nos pedidos",
        description:
          "Comunicação falha entre garçom, cozinha e cliente gerando retrabalho",
      },
      {
        icon: "📱",
        title: "Gestão de reservas caótica",
        description: "Ligações, anotações em papel e mesas mal organizadas",
      },
      {
        icon: "📉",
        title: "Perda de vendas",
        description:
          "Clientes desistindo por demora ou má experiência no atendimento",
      },
    ],
  },

  // Solução
  solution: {
    title: "A solução completa para modernizar seu restaurante",
    description:
      "O Pixeat é a plataforma de autoatendimento que seus clientes vão amar e que vai transformar a operação do seu restaurante. Com apenas um QR Code na mesa, seus clientes acessam um cardápio digital completo, fazem pedidos sem precisar chamar o garçom, e você recebe tudo em tempo real na cozinha e no painel administrativo. Além disso, nosso sistema de reservas inteligente organiza sua agenda, envia confirmações automáticas e libera sua equipe para focar no que realmente importa: oferecer um atendimento excepcional. Simples de usar, rápido de implementar, e feito para aumentar suas vendas.",
    benefits: [
      "Reduz tempo de atendimento em até 60%",
      "Elimina erros de comunicação",
      "Aumenta ticket médio em até 40%",
      "Libera sua equipe para focar no atendimento",
    ],
  },

  // Funcionalidades Principais
  features: {
    title: "Tudo que você precisa em uma plataforma",
    description:
      "Desenvolvemos cada funcionalidade pensando nos desafios reais que restaurantes enfrentam no dia a dia. Do momento em que o cliente chega até o fechamento da conta, o Pixeat otimiza cada etapa da jornada, eliminando gargalos, reduzindo erros e proporcionando uma experiência moderna que seus clientes esperam. Descubra como nossa tecnologia pode transformar a forma como você opera seu restaurante.",
    list: [
      {
        icon: "📱",
        title: "Cardápio Digital por QR Code",
        description:
          "Cliente escaneia, vê fotos dos pratos, escolhe e envia o pedido direto para a cozinha. Sem papel, sem erro.",
        benefits: [
          "Atualização instantânea",
          "Fotos em alta qualidade",
          "Categorias organizadas",
        ],
      },
      {
        icon: "🪑",
        title: "Sistema de Reservas Online",
        description:
          "Seus clientes reservam mesa pelo site ou app. Você gerencia tudo em um painel intuitivo com controle de horários e disponibilidade.",
        benefits: [
          "Confirmação automática",
          "Lembretes por WhatsApp",
          "Gestão de capacidade",
        ],
      },
      {
        icon: "🔔",
        title: "Notificações em Tempo Real",
        description:
          "Pedidos chegam instantaneamente na cozinha e no painel do garçom. Acompanhe tudo que está acontecendo no seu restaurante.",
        benefits: ["Alertas sonoros", "Status do pedido", "Histórico completo"],
      },
      {
        icon: "📊",
        title: "Relatórios e Análises",
        description:
          "Descubra quais pratos vendem mais, horários de pico e performance da equipe. Dados para tomar melhores decisões.",
        benefits: [
          "Vendas por período",
          "Pratos mais pedidos",
          "Tempo médio de atendimento",
        ],
      },
    ],
  },

  // Como Funciona
  howItWorks: {
    title: "Como funciona na prática",
    description:
      "Implementar tecnologia no seu restaurante não precisa ser complicado. Com o Pixeat, em apenas 3 passos simples você transforma completamente a experiência dos seus clientes e a eficiência da sua operação.",
    steps: [
      {
        step: "01",
        title: "Cliente escaneia o QR Code",
        description:
          "Na mesa, o cliente aponta a câmera do celular para o QR Code e acessa o cardápio digital instantaneamente.",
        image: "/images/step-1.png",
      },
      {
        step: "02",
        title: "Escolhe e envia o pedido",
        description:
          "Navega pelas categorias, vê fotos, adiciona observações e confirma. O pedido vai direto para a cozinha e o garçom é notificado.",
        image: "/images/step-2.png",
      },
      {
        step: "03",
        title: "Você gerencia tudo em tempo real",
        description:
          "Acompanhe todos os pedidos, reservas e performance no painel administrativo. Simples, organizado e eficiente.",
        image: "/images/step-3.png",
      },
    ],
  },

  // Benefícios/Resultados
  benefits: {
    title: "Resultados que você vai alcançar",
    description:
      "Não acredite apenas no que dizemos - os números falam por si. Restaurantes que implementam o Pixeat veem mudanças significativas já nos primeiros 30 dias de operação. Desde a redução drástica no tempo de atendimento até o aumento expressivo no ticket médio, nossa plataforma entrega resultados mensuráveis que impactam diretamente no seu faturamento. Confira as métricas reais de estabelecimentos que já usam o Pixeat e descubra o potencial de transformação para o seu negócio.",
    stats: [
      {
        value: "60%",
        label: "Redução no tempo de atendimento",
        description: "Clientes pedem mais rápido e sua equipe trabalha melhor",
      },
      {
        value: "40%",
        label: "Aumento no ticket médio",
        description: "Fotos e descrições atraentes estimulam mais pedidos",
      },
      {
        value: "85%",
        label: "Menos erros nos pedidos",
        description:
          "Cliente digita o próprio pedido, zero ruído na comunicação",
      },
      {
        value: "24h",
        label: "Tempo de implementação",
        description: "Em um dia você já está operando com o sistema completo",
      },
    ],
  },

  // Depoimentos
  testimonials: {
    title: "O que nossos clientes dizem",
    description:
      "Não há melhor prova do valor do Pixeat do que os resultados reais alcançados pelos nossos clientes. De pequenos restaurantes familiares a estabelecimentos de grande porte, donos e gerentes compartilham como a plataforma transformou não apenas a operação, mas também a satisfação dos clientes e o faturamento do negócio. Conheça histórias reais de quem implementou o Pixeat e nunca mais olhou para trás.",
    list: [
      {
        quote:
          "Implementamos o Pixeat há 3 meses e foi transformador. Reduzimos o tempo de espera pela metade e os clientes adoram a autonomia de fazer o pedido sozinhos.",
        author: "Marina Silva",
        role: "Proprietária",
        company: "Restaurante Sabor & Arte",
        image: "/images/testimonial-1.jpg",
        rating: 5,
      },
      {
        quote:
          "O sistema de reservas acabou com a bagunça de anotações em papel. Agora tudo é automático, os clientes recebem confirmação e ainda mandamos lembrete no WhatsApp.",
        author: "Carlos Eduardo",
        role: "Gerente",
        company: "Churrascaria Boi na Brasa",
        image: "/images/testimonial-2.jpg",
        rating: 5,
      },
      {
        quote:
          "Minha equipe ficou mais produtiva. Antes ficavam correndo de mesa em mesa anotando pedidos, agora focam em atender bem e os pedidos chegam direto na cozinha.",
        author: "Patricia Mendes",
        role: "Dona",
        company: "Bistrô da Praça",
        image: "/images/testimonial-3.jpg",
        rating: 5,
      },
      {
        quote:
          "Minha equipe ficou mais produtiva. Antes ficavam correndo de mesa em mesa anotando pedidos, agora focam em atender bem e os pedidos chegam direto na cozinha.",
        author: "Patricia Mendes",
        role: "Dona",
        company: "Bistrô da Praça",
        image: "/images/testimonial-3.jpg",
        rating: 5,
      },
    ],
  },

  // Planos e Preços
  pricing: {
    title: "Planos transparentes para cada negócio",

    description:
      "Sabemos que cada restaurante tem suas particularidades e desafios únicos. Por isso, desenvolvemos planos pensados especialmente para acompanhar o crescimento do seu estabelecimento - desde quem está começando a explorar o autoatendimento digital até grandes operações com múltiplas unidades. Não acreditamos em letras miúdas, taxas escondidas ou contratos que prendem você por anos. Nossa proposta é simples: tecnologia de ponta, preço justo e total liberdade para você decidir o que faz sentido para o seu negócio.",

    badge: "🎉 30 dias grátis • Comece agora sem cartão de crédito",

    plans: [
      {
        name: "Starter",
        description:
          "Ideal para quem está começando ou quer validar o autoatendimento no seu restaurante. Perfeito para bistrôs, lanchonetes e estabelecimentos de pequeno porte que querem modernizar o atendimento sem investimento inicial.",
        price: "R$ 0",
        period: "/mês • por tempo limitado",
        features: [
          "Até 200 pedidos/mês",
          "Cardápio digital ilimitado",
          "Sistema de reservas online",
          "Suporte por email",
          "Relatórios básicos de vendas",
          "Personalização com sua marca",
        ],
        cta: "Começar Grátis Agora",
        highlighted: false,
        badge: "OFERTA LIMITADA • 10 vagas",
        highlight: "Grátis para sempre para os primeiros clientes",
      },
      {
        name: "Professional",
        description:
          "Nossa opção mais escolhida. Reúne todos os recursos que restaurantes consolidados precisam para escalar as operações, melhorar a experiência do cliente e aumentar o faturamento mês após mês.",
        price: "R$ 49",
        period: "/mês",
        originalPrice: "R$ 99",
        discount: "50% OFF nos 3 primeiros meses",
        features: [
          "Até 500 pedidos/mês",
          "Tudo do plano Starter +",
          "Notificações automáticas por WhatsApp",
          "Suporte prioritário por chat",
          "Relatórios avançados e analytics",
          "Personalização completa do cardápio",
          "Campanhas e promoções",
          "Integração com sistemas de pagamento",
        ],
        cta: "Começar Teste Grátis",
        highlighted: true,
        badge: "MAIS POPULAR • 80% dos clientes escolhem este",
        highlight: "Melhor custo-benefício para crescer seu negócio",
      },
      {
        name: "Enterprise",
        description:
          "Solução completa para redes de restaurantes, franquias e grandes operações que precisam de volume ilimitado, recursos avançados e suporte dedicado para garantir excelência operacional.",
        price: "R$ 99",
        period: "/mês por unidade",
        features: [
          "Pedidos ilimitados",
          "Tudo do plano Professional +",
          "Gestão de múltiplas unidades",
          "Gerente de conta dedicado",
          "Integrações customizadas via API",
          "Relatórios consolidados por rede",
          "SLA de suporte garantido",
          "Treinamento presencial da equipe",
          "Dashboard executivo em tempo real",
        ],
        cta: "Falar com Especialista",
        highlighted: false,
        badge: "ENTERPRISE",
        highlight: "Para operações de alto volume e múltiplas unidades",
      },
    ],

    guarantee:
      "✓ Cancele quando quiser, sem multas • ✓ Sem contrato de fidelidade • ✓ Upgrade ou downgrade a qualquer momento",
  },

  // FAQ
  faq: {
    title: "Perguntas frequentes",
    description:
      "Sabemos que implementar uma nova tecnologia no seu restaurante gera dúvidas. Reunimos aqui as perguntas mais comuns que recebemos de donos e gerentes como você. Se mesmo assim alguma questão permanecer sem resposta, nossa equipe de suporte está sempre disponível para ajudar você a entender como o Pixeat pode se encaixar perfeitamente na realidade do seu negócio e resolver seus desafios específicos.",
    questions: [
      {
        id: "item-1",
        question: "Como funciona o período de teste gratuito?",
        answer:
          "Você tem 30 dias para testar todas as funcionalidades do Pixeat sem pagar nada. Não pedimos cartão de crédito no cadastro. Após o período, você escolhe o plano que melhor se encaixa.",
      },
      {
        id: "item-2",
        question: "Preciso de equipamentos especiais?",
        answer:
          "Não! Seus clientes usam o próprio celular para escanear o QR Code. Você só precisa de um computador ou tablet para acessar o painel administrativo e gerenciar os pedidos.",
      },
      {
        id: "item-3",
        question: "E se meus clientes não souberem usar?",
        answer:
          "O sistema é extremamente intuitivo - qualquer pessoa que usa WhatsApp consegue fazer um pedido. Além disso, fornecemos materiais educativos para colocar na mesa explicando o passo a passo.",
      },
      {
        id: "item-4",
        question: "Posso cancelar a qualquer momento?",
        answer:
          "Sim! Não temos fidelidade ou multa por cancelamento. Você pode cancelar quando quiser direto no painel, e o sistema continua funcionando até o fim do período pago.",
      },
      {
        id: "item-5",
        question: "Como funciona o suporte?",
        answer:
          "Oferecemos suporte por email, chat e WhatsApp em horário comercial. Planos Professional e Enterprise têm suporte prioritário. Também temos uma base de conhecimento completa com tutoriais em vídeo.",
      },
      {
        id: "item-6",
        question: "Posso personalizar o cardápio com minha marca?",
        answer:
          "Sim! Você pode adicionar seu logo, escolher as cores da sua marca, organizar categorias do jeito que quiser e incluir fotos profissionais dos seus pratos.",
      },
      {
        id: "item-7",
        question: "O sistema funciona sem internet?",
        answer:
          "O Pixeat precisa de conexão com internet para funcionar. Recomendamos ter um Wi-Fi estável no restaurante. Os clientes podem usar dados móveis ou se conectar ao Wi-Fi do estabelecimento.",
      },
      {
        id: "item-8",
        question: "Quanto tempo leva para implementar?",
        answer:
          "Em 24 horas seu restaurante está funcionando! Nós configuramos tudo, geramos os QR Codes, fazemos um treinamento rápido com sua equipe e você já pode começar a usar.",
      },
    ],
    contact: "Não achou o que está procurando?, entre em contato pelo whatsapp",
  },

  // CTA Final
  ctaFinal: {
    title: "Pronto para modernizar seu restaurante?",
    description:
      "Milhares de pedidos já foram realizados através do Pixeat, centenas de restaurantes já transformaram a experiência dos seus clientes, e agora é a sua vez. Não fique para trás enquanto seus concorrentes oferecem uma experiência moderna e eficiente. Comece hoje mesmo, teste gratuitamente por 30 dias e descubra como é fácil aumentar suas vendas, reduzir custos operacionais e encantar seus clientes com tecnologia inteligente. Sem complicação, sem burocracia, sem riscos.",
    cta: {
      primary: "Começar Grátis",
      secondary: "Agendar uma Demonstração",
    },
    features: [
      "✓ Sem cartão de crédito",
      "✓ Implementação em 24h",
      "✓ Suporte em português",
    ],
  },

  // Footer
  footer: {
    tagline: "Modernize seu restaurante com autoatendimento inteligente",
    sections: [
      {
        title: "Produto",
        links: [
          { label: "Funcionalidades", href: "#funcionalidades" },
          { label: "Preços", href: "#precos" },
          { label: "Como Funciona", href: "#como-funciona" },
          { label: "Casos de Sucesso", href: "#casos" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Sobre Nós", href: "/sobre" },
          { label: "Blog", href: "/blog" },
          { label: "Carreiras", href: "/carreiras" },
          { label: "Contato", href: "/contato" },
        ],
      },
      {
        title: "Suporte",
        links: [
          { label: "Central de Ajuda", href: "/ajuda" },
          { label: "FAQ", href: "#faq" },
          { label: "WhatsApp", href: "https://wa.me/5511999999999" },
          { label: "Email", href: "mailto:contato@pixeat.com.br" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Termos de Uso", href: "/termos" },
          { label: "Política de Privacidade", href: "/privacidade" },
          { label: "LGPD", href: "/lgpd" },
        ],
      },
    ],
    social: {
      instagram: "https://instagram.com/pixeat",
      facebook: "https://facebook.com/pixeat",
      linkedin: "https://linkedin.com/company/pixeat",
      youtube: "https://youtube.com/@pixeat",
    },
    contact: {
      email: "contato@pixeat.com.br",
      phone: "+55 11 99999-9999",
      whatsapp: "+55 11 99999-9999",
    },
    copyright: `© ${
      new Date().getFullYear()
    } Pixeat. Todos os direitos reservados.`,
  },
};

// Configurações gerais
export const CONFIG = {
  brandName: "Pixeat",
  tagline: "Autoatendimento Inteligente para Restaurantes",
  domain: "https://pixeat.com.br",
  supportEmail: "contato@pixeat.com.br",
  supportWhatsApp: "+5511999999999",
};
