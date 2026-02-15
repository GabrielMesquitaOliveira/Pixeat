"use client"

import { LayoutDashboard, QrCode, ShoppingCart } from 'lucide-react'
import { CONTENT } from '@/content'
import { HeroVideoDialog } from '../ui/hero-video-dialog'
import { motion } from 'motion/react'
import { Highlighter } from '@/components/ui/highlighter'

export default function FeaturesSection() {
    return (
        <motion.section
            id="solucoes"
            className="py-16 md:py-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="mx-auto max-w-6xl space-y-12 px-6">
                <motion.div
                    className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12"
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
                        className="text-4xl font-semibold"
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}>
                        Como funciona na{' '}
                        <Highlighter action="underline" color="#FF9800" isView>
                            prática
                        </Highlighter>
                    </motion.h2>
                    <motion.p
                        className="max-w-sm text-muted-foreground sm:ml-auto"
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}>
                        {CONTENT.howItWorks.description}
                    </motion.p>
                </motion.div>
                <motion.div
                    className="px-3 pt-3 md:-mx-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}>
                    <div className="aspect-88/36 relative">
                        <HeroVideoDialog
                            className="block"
                            animationStyle="from-center"
                            videoSrc="https://www.youtube.com/watch?time_continue=1&v=zYR53vO42W4&embeds_referring_euri=https%3A%2F%2Fwww.menutiger.com%2F&source_ve_path=MjM4NTE"
                            thumbnailSrc="/software/dashboard.png"
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.12,
                                delayChildren: 0.1,
                            },
                        },
                    }}>
                    <motion.div
                        className="space-y-3"
                        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}>
                        <div className="flex items-center gap-2">
                            <QrCode className="size-4" />
                            <h3 className="text-base font-medium">{CONTENT.howItWorks.steps[0].title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{CONTENT.howItWorks.steps[0].description}</p>
                    </motion.div>
                    <motion.div
                        className="space-y-3"
                        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}>
                        <div className="flex items-center gap-2">
                            <ShoppingCart className="size-4" />
                            <h3 className="text-base font-medium">{CONTENT.howItWorks.steps[1].title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{CONTENT.howItWorks.steps[1].description}</p>
                    </motion.div>
                    <motion.div
                        className="space-y-3"
                        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}>
                        <div className="flex items-center gap-2">
                            <LayoutDashboard className="size-4" />
                            <h3 className="text-base font-medium">{CONTENT.howItWorks.steps[2].title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{CONTENT.howItWorks.steps[2].description}</p>
                    </motion.div>

                </motion.div>
            </div>
        </motion.section>
    )
}
