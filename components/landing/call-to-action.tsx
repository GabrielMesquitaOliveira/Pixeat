'use client'
import { Button } from '@/components/ui/button'
import { CONTENT } from '@/content'
import Link from 'next/link'
import { SignUpButton } from '@clerk/nextjs'
import { Highlighter } from '@/components/ui/highlighter'
import { motion } from 'motion/react'

export default function CallToAction() {
    return (
        <motion.section
            id="cta"
            className="py-16 md:py-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.12,
                            },
                        },
                    }}>
                    <motion.h2
                        className="text-balance text-4xl font-semibold lg:text-5xl"
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}>
                        Pronto para{' '}
                        <Highlighter action="underline" color="#FF9800" isView>
                            modernizar
                        </Highlighter>{' '}
                        seu restaurante?
                    </motion.h2>
                    <motion.p
                        className="mt-6 text-lg text-muted-foreground"
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}>
                        {CONTENT.ctaFinal.description}
                    </motion.p>

                    <motion.div
                        className="mt-12 flex flex-wrap justify-center gap-4"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.1,
                                },
                            },
                        }}>
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}>
                            <SignUpButton mode="modal">
                                <Button size="lg">
                                    <span>{CONTENT.ctaFinal.cta.primary}</span>
                                </Button>
                            </SignUpButton>
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}>
                            <Button
                                asChild
                                size="lg"
                                variant="outline">
                                <Link href="/">
                                    <span>{CONTENT.ctaFinal.cta.secondary}</span>
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}
