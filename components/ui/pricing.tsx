"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { type ComponentRef, useRef, useState } from "react"
import confetti from "canvas-confetti"
import NumberFlow from "@number-flow/react"
import { SignUpButton } from "@clerk/nextjs"

interface PricingPlan {
    name: string
    price: string
    yearlyPrice: string
    period: string
    features: string[]
    description: string
    buttonText: string
    isPopular: boolean
}

interface PricingLabels {
    annualBilling: string
    annualSavings: string
    billedMonthly: string
    billedYearly: string
    popularBadge: string
    currencySymbol: string
}

interface PricingProps {
    plans: PricingPlan[]
    title: string
    description: string
    labels: PricingLabels
}

export function Pricing({
    plans,
    title,
    description,
    labels,
}: PricingProps) {
    const [isMonthly, setIsMonthly] = useState(true)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const switchRef = useRef<ComponentRef<typeof Switch>>(null)

    const handleToggle = (checked: boolean) => {
        setIsMonthly(!checked)
        if (checked && switchRef.current) {
            const rect = switchRef.current.getBoundingClientRect()
            const x = rect.left + rect.width / 2
            const y = rect.top + rect.height / 2

            confetti({
                particleCount: 50,
                spread: 60,
                origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                },
                colors: [
                    "hsl(var(--primary))",
                    "hsl(var(--accent))",
                    "hsl(var(--secondary))",
                    "hsl(var(--muted))",
                ],
                ticks: 200,
                gravity: 1.2,
                decay: 0.94,
                startVelocity: 30,
                shapes: ["circle"],
            })
        }
    }

    const sectionVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    }

    const cardsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    }

    const cardItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.div
            className="mx-auto max-w-6xl px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <motion.div className="mb-12 space-y-4 text-center" variants={sectionVariants}>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
                <p className="text-lg whitespace-pre-line text-muted-foreground">{description}</p>
            </motion.div>

            <motion.div className="mb-10 flex justify-center" variants={sectionVariants}>
                <label className="relative inline-flex cursor-pointer items-center">
                    <Label>
                        <Switch
                            ref={switchRef}
                            checked={!isMonthly}
                            onCheckedChange={handleToggle}
                            className="relative"
                        />
                    </Label>
                </label>
                <span className="ml-2 font-semibold">
                    {labels.annualBilling} <span className="text-primary">{labels.annualSavings}</span>
                </span>
            </motion.div>

            <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-3" variants={cardsContainerVariants}>
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        variants={cardItemVariants}
                        whileInView={
                            isDesktop
                                ? {
                                    y: plan.isPopular ? -20 : 0,
                                    opacity: 1,
                                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                                    scale: index === 0 || index === 2 ? 0.94 : 1,
                                }
                                : {}
                        }
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                            delay: 1.2,
                            opacity: { duration: 0.5 },
                        }}
                        className={cn(
                            "relative rounded-2xl border bg-background p-6 text-center text-foreground lg:flex lg:flex-col lg:justify-center",
                            plan.isPopular ? "border-2 border-primary" : "border-border",
                            "flex flex-col",
                            !plan.isPopular && "mt-5",
                            index === 0 || index === 2
                                ? "z-0 transform translate-x-0 translate-y-0 -translate-z-12.5 rotate-y-10"
                                : "z-10",
                            index === 0 && "origin-right",
                            index === 2 && "origin-left"
                        )}
                    >
                        {plan.isPopular && (
                            <div className="absolute top-0 right-0 flex items-center rounded-bl-xl rounded-tr-xl bg-primary px-2 py-0.5">
                                <Star className="h-4 w-4 fill-current text-primary-foreground" />
                                <span className="ml-1 font-sans font-semibold text-primary-foreground">{labels.popularBadge}</span>
                            </div>
                        )}
                        <div className="flex flex-1 flex-col">
                            <p className="text-base font-semibold text-muted-foreground">{plan.name}</p>
                            <div className="mt-6 flex items-center justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-foreground">
                                    <span>{labels.currencySymbol}</span>
                                    <NumberFlow
                                        value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                                        format={{
                                            style: "decimal",
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                        }}
                                        transformTiming={{
                                            duration: 500,
                                            easing: "ease-out",
                                        }}
                                        willChange
                                        className="font-variant-numeric: tabular-nums"
                                    />
                                </span>
                                {plan.period ? (
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                                        / {plan.period}
                                    </span>
                                ) : null}
                            </div>

                            <p className="text-xs leading-5 text-muted-foreground">
                                {isMonthly ? labels.billedMonthly : labels.billedYearly}
                            </p>

                            <ul className="mt-5 flex flex-col gap-2">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                        <span className="text-left">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <hr className="my-4 w-full" />

                            <SignUpButton mode="modal">
                                <Button
                                    className="w-full text-lg font-semibold tracking-tighter"
                                    variant={plan.isPopular ? "default" : "outline"}
                                >
                                    {plan.buttonText}
                                </Button>
                            </SignUpButton>
                            <p className="mt-6 text-xs leading-5 text-muted-foreground">{plan.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}
