"use client"

import BentoGridThirdDemo from '@/components/ui/bento-grid-demo-3'
import { motion } from 'motion/react'

export default function ContentSection() {
    return (
        <motion.section
            id="problemas"
            className="py-16 md:py-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-10">
                <motion.div
                    className="space-y-4 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
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
                        className="text-3xl font-semibold md:text-4xl lg:text-5xl"
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}>
                        Seu restaurante perde vendas por fricção no atendimento.
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground mx-auto max-w-3xl"
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}>
                        Filas, demora para fechar pedidos e erros de comunicação impactam a experiência do cliente e reduzem faturamento.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}>
                    <BentoGridThirdDemo />
                </motion.div>
            </div>
        </motion.section>
    )
}
