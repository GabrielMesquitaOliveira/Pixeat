import Script from 'next/script'

export default function SchemaMarkup() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Pixeat',
        description: 'Sistema de autoatendimento inteligente para restaurantes',
        url: 'https://pixeat.com.br',
        logo: 'https://pixeat.com.br/logo.svg',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+55-11-99999-9999',
            contactType: 'Customer Service',
            availableLanguage: 'Portuguese',
            areaServed: 'BR',
        },
        sameAs: [
            'https://instagram.com/pixeat',
            'https://facebook.com/pixeat',
            'https://linkedin.com/company/pixeat',
            'https://youtube.com/@pixeat',
        ],
    }

    const softwareSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Pixeat',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'BRL',
            priceValidUntil: '2025-12-31',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '500',
        },
        description:
            'Sistema completo de autoatendimento para restaurantes com cardápio digital por QR Code, reservas online e gestão de pedidos em tempo real.',
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Como funciona o período de teste gratuito?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Você tem 30 dias para testar todas as funcionalidades do Pixeat sem pagar nada. Não pedimos cartão de crédito no cadastro. Após o período, você escolhe o plano que melhor se encaixa.',
                },
            },
            {
                '@type': 'Question',
                name: 'Preciso de equipamentos especiais?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Não! Seus clientes usam o próprio celular para escanear o QR Code. Você só precisa de um computador ou tablet para acessar o painel administrativo e gerenciar os pedidos.',
                },
            },
            {
                '@type': 'Question',
                name: 'Quanto tempo leva para implementar?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Em 24 horas seu restaurante está funcionando! Nós configuramos tudo, geramos os QR Codes, fazemos um treinamento rápido com sua equipe e você já pode começar a usar.',
                },
            },
        ],
    }

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Início',
                item: 'https://pixeat.com.br',
            },
        ],
    }

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <Script
                id="software-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(softwareSchema),
                }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </>
    )
}
