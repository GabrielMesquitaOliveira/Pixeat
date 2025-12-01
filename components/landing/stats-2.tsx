import { CONTENT } from "@/content";

export default function StatsSection() {
    return (
        <section id="resultados" className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">{CONTENT.benefits.title}</h2>
                    <p className="text-lg text-muted-foreground">{CONTENT.benefits.description}</p>
                </div>

                <div className="grid gap-0.5 *:text-center md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                    <div className="bg-muted rounded-(--radius) space-y-4 py-12">
                        <div className="text-5xl font-bold">{CONTENT.benefits.stats[0].value}</div>
                        <p>{CONTENT.benefits.stats[0].label}</p>
                    </div>
                    <div className="bg-muted rounded-(--radius) space-y-4 py-12">
                        <div className="text-5xl font-bold">{CONTENT.benefits.stats[1].value}</div>
                        <p>{CONTENT.benefits.stats[1].label}</p>
                    </div>
                    <div className="bg-muted rounded-(--radius) space-y-4 py-12">
                        <div className="text-5xl font-bold">{CONTENT.benefits.stats[2].value}</div>
                        <p>{CONTENT.benefits.stats[2].label}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
