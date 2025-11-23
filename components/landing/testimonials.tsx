import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CONTENT } from '@/content'
// Image import removed (not used)

type Testimonial = (typeof CONTENT)['testimonials']['list'][number]

export default function Testimonials() {
    return (
        <section id="depoimentos" className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl mb-6">{CONTENT.testimonials.title}</h2>
                    <p>{CONTENT.testimonials.description}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    {/* Primeiro card grande (como antes) */}
                    {(() => {
                        const t: Testimonial | undefined = CONTENT.testimonials.list[0]
                        const initials = (t?.author || '')
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')
                            .toUpperCase()

                        return (
                            <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                                <CardContent>
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p className="text-xl font-medium">{t?.quote}</p>

                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                            <Avatar className="size-12">
                                                <AvatarImage
                                                    src={t?.image ?? '/images/testimonial-1.jpg'}
                                                    alt={t?.author}
                                                    height={400}
                                                    width={400}
                                                    loading="lazy"
                                                />
                                                <AvatarFallback>{initials || 'U'}</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <cite className="text-sm font-medium">{t?.author}</cite>
                                                <span className="text-muted-foreground block text-sm">{t?.role}</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                        )
                    })()}

                    {/* Segundo card (col-span) */}
                    {(() => {
                        const t: Testimonial | undefined = CONTENT.testimonials.list[1]
                        const initials = (t?.author || '')
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')
                            .toUpperCase()

                        return (
                            <Card className="md:col-span-2">
                                <CardContent className="h-full pt-6">
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p className="text-xl font-medium">{t?.quote}</p>

                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                            <Avatar className="size-12">
                                                <AvatarImage
                                                    src={t?.image ?? '/images/testimonial-2.jpg'}
                                                    alt={t?.author}
                                                    height={400}
                                                    width={400}
                                                    loading="lazy"
                                                />
                                                <AvatarFallback>{initials || 'U'}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <cite className="text-sm font-medium">{t?.author}</cite>
                                                <span className="text-muted-foreground block text-sm">{t?.role}</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                        )
                    })()}

                    {/* Terceiro card */}
                    {(() => {
                        const t: Testimonial | undefined = CONTENT.testimonials.list[2]
                        const initials = (t?.author || '')
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')
                            .toUpperCase()

                        return (
                            <Card>
                                <CardContent className="h-full pt-6">
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p className="text-xl font-medium">{t?.quote}</p>

                                        <div className="grid items-center gap-3 grid-cols-[auto_1fr]">
                                            <Avatar className="size-12">
                                                <AvatarImage
                                                    src={t?.image ?? '/images/testimonial-3.jpg'}
                                                    alt={t?.author}
                                                    height={400}
                                                    width={400}
                                                    loading="lazy"
                                                />
                                                <AvatarFallback>{initials || 'U'}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <cite className="text-sm font-medium">{t?.author}</cite>
                                                <span className="text-muted-foreground block text-sm">{t?.role}</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                        )
                    })()}

                    {/* Quarto card com variante */}
                    {(() => {
                        const t: Testimonial | undefined = CONTENT.testimonials.list[3]
                        const initials = (t?.author || '')
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')
                            .toUpperCase()

                        return (
                            <Card className="card variant-mixed">
                                <CardContent className="h-full pt-6">
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p className="text-xl font-medium">{t?.quote}</p>

                                        <div className="grid grid-cols-[auto_1fr] gap-3">
                                            <Avatar className="size-12">
                                                <AvatarImage
                                                    src={t?.image ?? '/images/testimonial-4.jpg'}
                                                    alt={t?.author}
                                                    height={400}
                                                    width={400}
                                                    loading="lazy"
                                                />
                                                <AvatarFallback>{initials || 'U'}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium">{t?.author}</p>
                                                <span className="text-muted-foreground block text-sm">{t?.role}</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                        )
                    })()}
                </div>
            </div>
        </section>
    )
}
