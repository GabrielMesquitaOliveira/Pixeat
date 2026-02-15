import BentoGridThirdDemo from '@/components/ui/bento-grid-demo-3'

export default function ContentSection() {
    return (
        <section id="problemas" className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-10">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
                        Seu restaurante perde vendas por fricção no atendimento.
                    </h2>
                    <p className="text-muted-foreground mx-auto max-w-3xl">
                        Filas, demora para fechar pedidos e erros de comunicação impactam a experiência do cliente e reduzem faturamento.
                    </p>
                </div>

                <BentoGridThirdDemo />
            </div>
        </section>
    )
}
