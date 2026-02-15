'use client'

import { CONTENT } from '@/content'
import { Pricing as PricingSection } from '@/components/ui/pricing'

const parseCurrencyValue = (value: string): number => {
    const normalized = value.replace(/[^\d,.-]/g, '').replace(',', '.')
    const parsed = Number(normalized)
    return Number.isFinite(parsed) ? parsed : 0
}

export default function Pricing() {
    const { pricing } = CONTENT

    const plans = pricing.plans.map((plan) => {
        const monthlyPrice = parseCurrencyValue(plan.price)
        const yearlyPrice = parseCurrencyValue(plan.yearlyPrice)
        const normalizedPeriod = plan.period.replace(/^\//, '')

        return {
            name: plan.name,
            price: String(monthlyPrice),
            yearlyPrice: String(yearlyPrice),
            period: normalizedPeriod,
            features: plan.features,
            description: plan.description,
            buttonText: plan.cta,
            isPopular: !!plan.highlighted,
        }
    })

    return (
        <section id="precos" className="py-16 md:py-24">
            <PricingSection
                plans={plans}
                title={pricing.title}
                description={pricing.description}
                labels={{
                    annualBilling: pricing.labels.annualBilling,
                    annualSavings: pricing.labels.annualSavings,
                    billedMonthly: pricing.labels.billedMonthly,
                    billedYearly: pricing.labels.billedYearly,
                    popularBadge: pricing.labels.popularBadge,
                    currencySymbol: pricing.labels.currencySymbol,
                }}
            />
        </section>
    )
}
