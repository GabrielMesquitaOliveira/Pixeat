import { Button } from '@/components/ui/button'
import { CONTENT } from '@/content'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section id="cta" className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{CONTENT.ctaFinal.title}</h2>
                    <p className="mt-6 text-lg text-muted-foreground">{CONTENT.ctaFinal.description}</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/">
                                <span>{CONTENT.ctaFinal.cta.primary}</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/">
                                <span>{CONTENT.ctaFinal.cta.secondary}</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
