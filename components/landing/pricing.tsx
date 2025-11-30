import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { CONTENT } from '@/content'

export default function Pricing() {
    const { pricing } = CONTENT

    return (
        <section id="precos" className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-center text-4xl font-semibold lg:text-5xl">{pricing.title}</h2>
                    <p className="text-lg text-muted-foreground">{pricing.description}</p>
                    {pricing.badge ? (
                        <div className="mt-2 text-sm font-medium text-emerald-600">{pricing.badge}</div>
                    ) : null}
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    {pricing.plans.map((plan) => {
                        const isHighlighted = !!plan.highlighted
                        return (
                            <Card
                                key={plan.name}
                                className={`flex flex-col ${isHighlighted ? 'relative ring-2 ring-teal-300/30' : ''}`}>
                                {isHighlighted && plan.badge ? (
                                    <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-teal-400 to-cyan-300 px-3 py-1 text-xs font-medium text-cyan-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">{plan.badge}</span>
                                ) : null}

                                <CardHeader>
                                    <CardTitle>{plan.name}</CardTitle>
                                    <span className="my-3 block text-2xl font-semibold">{plan.price} <span className="text-base font-normal">{plan.period}</span></span>
                                    <CardDescription className="text-sm">{plan.description}</CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <hr className="border-dashed" />

                                    <ul className="list-outside space-y-3 text-sm">
                                        {plan.features.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <Check className="size-3" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="mt-auto">
                                    <Button asChild className="w-full" variant={isHighlighted ? undefined : 'outline'}>
                                        <Link href="#">{plan.cta}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
