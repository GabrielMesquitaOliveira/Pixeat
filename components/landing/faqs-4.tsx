'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CONTENT } from '@/content'
import { Highlighter } from '@/components/ui/highlighter'
import { motion } from 'motion/react'
// Link not used in this component

export default function FAQsFour() {
    return (
        <motion.section
            id="faq"
            className="py-16 md:py-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <motion.div
                    className="mx-auto text-center"
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
                        className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl"
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}>
                        Perguntas{' '}
                        <Highlighter action="underline" color="#87CEFA" isView>
                            frequentes
                        </Highlighter>
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground mt-4 text-balance"
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}>
                        {CONTENT.faq.description}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="mx-auto mt-12 max-w-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.08,
                                delayChildren: 0.1,
                            },
                        },
                    }}>
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {CONTENT.faq.questions.map((item) => (
                            <motion.div
                                className="group"
                                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </motion.div>
                        ))}
                    </Accordion>

                    <motion.p
                        className="text-muted-foreground mt-6 px-8"
                        variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}>
                        {CONTENT.faq.contact}
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    )
}
