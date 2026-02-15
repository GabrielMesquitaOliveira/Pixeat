"use client";

import { CONTENT } from "@/content";
import { Highlighter } from "@/components/ui/highlighter";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "motion/react";

function parseTickerValue(rawValue: string) {
    const trimmed = rawValue.trim();
    const match = trimmed.match(/^([^\d-]*)(-?\d+(?:[.,]\d+)?)(.*)$/);

    if (!match) {
        return null;
    }

    const prefix = match[1] ?? "";
    const numberPart = match[2];
    const suffix = match[3] ?? "";

    const normalized = numberPart.replace(",", ".");
    const numericValue = Number(normalized);

    if (Number.isNaN(numericValue)) {
        return null;
    }

    const decimalPlaces = normalized.includes(".") ? normalized.split(".")[1].length : 0;

    return {
        numericValue,
        prefix: prefix.trimEnd(),
        suffix: suffix.trimStart(),
        decimalPlaces,
    };
}

export default function StatsSection() {
    return (
        <motion.section
            id="resultados"
            className="py-16 md:py-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <motion.div
                    className="relative z-10 mx-auto space-y-6 text-center"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}>
                    <h2 className="text-4xl font-semibold lg:text-5xl">
                        <Highlighter action="underline" color="#87CEFA" isView>
                            Resultados
                        </Highlighter>{" "}
                        que você vai alcançar
                    </h2>
                    <p className="text-lg text-muted-foreground">{CONTENT.benefits.description}</p>
                </motion.div>

                <motion.div
                    className="grid gap-0.5 *:text-center md:grid-cols-2 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}>
                    {CONTENT.benefits.stats.map((stat) => {
                        const ticker = parseTickerValue(stat.value);

                        return (
                            <motion.div
                                key={stat.label}
                                className="bg-muted rounded-(--radius) space-y-4 py-12"
                                variants={{
                                    hidden: { opacity: 0, y: 18 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.45, ease: "easeOut" }}>
                                <div className="text-5xl font-bold">
                                    {ticker ? (
                                        <NumberTicker
                                            value={ticker.numericValue}
                                            prefix={ticker.prefix}
                                            suffix={ticker.suffix}
                                            decimalPlaces={ticker.decimalPlaces}
                                        />
                                    ) : (
                                        stat.value
                                    )}
                                </div>
                                <p>{stat.label}</p>
                                <p className="mx-auto max-w-xs text-sm text-muted-foreground">{stat.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.section>
    )
}
