import { CONTENT } from '@/content'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section id="problemas" className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-100 to-transparent p-px dark:from-zinc-700">
                            <Image src="/software/qrcodes.png" className="hidden rounded-[15px] dark:block" alt="Sistema de QR Codes" width={1207} height={929} />
                            <Image src="/software/qrcodes.png" className="rounded-[15px] shadow dark:hidden" alt="Sistema de QR Codes" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <h2 className="relative z-10 max-w-xl text-4xl font-semibold lg:text-5xl">{CONTENT.problem.title}</h2>

                        <p className="text-muted-foreground">
                            {CONTENT.problem.description}
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}
