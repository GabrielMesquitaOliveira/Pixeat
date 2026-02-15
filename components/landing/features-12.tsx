'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BarChart3, BellRing, CalendarDays, QrCode } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '../ui/border-beam'
import { CONTENT } from '@/content'
import { Highlighter } from '@/components/ui/highlighter'

export default function Features() {
    const featureItems = CONTENT.features.list.map((feature, index) => ({
        key: `item-${index + 1}`,
        feature,
    }))
    const [activeItem, setActiveItem] = useState(featureItems[0]?.key ?? '')

    const sectionTransition = {
        duration: 0.5,
        ease: 'easeOut' as const,
    }

    const images = [
        {
            image: '/software/cardapio.png',
            alt: 'Cardápio Digital por QR Code',
        },
        {
            image: '/software/mesas.png',
            alt: 'Sistema de Reservas e Gestão de Mesas',
        },
        {
            image: '/software/pedidos.png',
            alt: 'Notificações e Gestão de Pedidos em Tempo Real',
        },
        {
            image: '/software/dashboard.png',
            alt: 'Relatórios e Dashboard Analítico',
        },
    ] as const

    const icons = [QrCode, CalendarDays, BellRing, BarChart3] as const
    const activeIndex = featureItems.findIndex((item) => item.key === activeItem)
    const selectedImage = images[activeIndex] ?? images[0]
    const selectedAlt = selectedImage?.alt ?? 'Preview do recurso'

    return (
        <motion.section
            id="recursos"
            className="py-16 md:py-24"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={sectionTransition}>
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <motion.div
                    className="relative z-10 mx-auto space-y-6 text-center"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ ...sectionTransition, delay: 0.1 }}>
                    <motion.h2
                        className="text-balance text-4xl font-semibold lg:text-5xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ ...sectionTransition, delay: 0.15 }}>
                        Tudo que você precisa em uma{' '}
                        <Highlighter action="underline" color="#FF9800" isView>
                            plataforma
                        </Highlighter>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ ...sectionTransition, delay: 0.2 }}>
                        {CONTENT.features.description}
                    </motion.p>
                </motion.div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={{
                            hidden: { opacity: 0, y: 12 },
                            show: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.45,
                                    staggerChildren: 0.08,
                                    ease: 'easeOut',
                                },
                            },
                        }}>
                        <Accordion
                            type="single"
                            value={activeItem}
                            onValueChange={(value) => setActiveItem(value || featureItems[0]?.key || '')}
                            className="w-full">
                            {featureItems.map(({ key, feature }, index) => {
                                const Icon = icons[index] ?? QrCode

                                return (
                                    <motion.div key={key} variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}>
                                        <AccordionItem value={key}>
                                            <AccordionTrigger>
                                                <div className="flex items-center gap-2 text-base">
                                                    <Icon className="size-4" />
                                                    {feature.title}
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>{feature.description}</AccordionContent>
                                        </AccordionItem>
                                    </motion.div>
                                )
                            })}
                        </Accordion>
                    </motion.div>

                    <motion.div
                        className="bg-background relative flex overflow-hidden rounded-3xl border p-2 w-full"
                        initial={{ opacity: 0, x: 16, scale: 0.98 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}>
                        <div className="w-11 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="bg-background relative w-[calc(100%-2.75rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border shadow-md">
                                    <Image
                                        src={selectedImage?.image ?? '/software/cardapio.png'}
                                        className="size-full object-cover object-top-left dark:mix-blend-lighten"
                                        alt={selectedAlt}
                                        width={1207}
                                        height={929}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={400}
                            className="from-transparent via-red-500 to-transparent"
                        />
                        <BorderBeam
                            duration={6}
                            delay={3}
                            size={400}
                            borderWidth={2}
                            className="from-transparent via-blue-500 to-transparent"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
