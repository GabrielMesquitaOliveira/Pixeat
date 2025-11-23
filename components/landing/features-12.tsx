'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '../ui/border-beam'
import { CONTENT } from '@/content'

export default function Features() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

    const images = {
        'item-1': {
            image: '/image3.webp',
            alt: 'Database visualization',
        },
        'item-2': {
            image: '/image3.webp',
            alt: 'Security authentication',
        },
        'item-3': {
            image: '/image3.webp',
            alt: 'Identity management',
        },
        'item-4': {
            image: '/image3.webp',
            alt: 'Analytics dashboard',
        },
    }

    return (
        <section id="recursos" className="py-12 md:py-20 lg:py-32">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-6xl">{CONTENT.features.title}</h2>
                    <p>{CONTENT.features.description}</p>
                </div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={activeItem}
                        onValueChange={(value) => setActiveItem(value as ImageKey)}
                        className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Database className="size-4" />
                                    {CONTENT.features.list[0].title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {CONTENT.features.list[0].description}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Fingerprint className="size-4" />
                                    {CONTENT.features.list[1].title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {CONTENT.features.list[1].description}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <IdCard className="size-4" />
                                    {CONTENT.features.list[2].title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {CONTENT.features.list[2].description}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <ChartBarIncreasingIcon className="size-4" />
                                    {CONTENT.features.list[3].title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {CONTENT.features.list[3].description}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
                        <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-top-left dark:mix-blend-lighten"
                                        alt={images[activeItem].alt}
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
                    </div>
                </div>
            </div>
        </section>
    )
}
