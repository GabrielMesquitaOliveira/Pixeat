'use client'
import { Button } from '@/components/ui/button'
import { CONTENT } from '@/content'
import Link from 'next/link'
import { SignUpButton } from '@clerk/nextjs'
import { Highlighter } from '@/components/ui/highlighter'

export default function CallToAction() {
    return (
        <section id="cta" className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Pronto para{' '}
                        <Highlighter action="underline" color="#FF9800" isView>
                            modernizar
                        </Highlighter>{' '}
                        seu restaurante?
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">{CONTENT.ctaFinal.description}</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <SignUpButton mode="modal">
                            <Button size="lg">
                                <span>{CONTENT.ctaFinal.cta.primary}</span>
                            </Button>
                        </SignUpButton>

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
