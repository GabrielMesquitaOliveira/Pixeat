import { Cpu, Lock, Zap } from 'lucide-react'
import { CONTENT } from '@/content'
import { HeroVideoDialog } from '../ui/hero-video-dialog'

export default function FeaturesSection() {
    return (
        <section id="solucoes" className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">{CONTENT.howItWorks.title}</h2>
                    <p className="max-w-sm sm:ml-auto">{CONTENT.howItWorks.description}</p>
                </div>
                <div className="px-3 pt-3 md:-mx-8">
                    <div className="aspect-88/36 relative">
                        <HeroVideoDialog
                            className="block"
                            animationStyle="from-center"
                            videoSrc="https://www.youtube.com/watch?time_continue=1&v=zYR53vO42W4&embeds_referring_euri=https%3A%2F%2Fwww.menutiger.com%2F&source_ve_path=MjM4NTE"
                            thumbnailSrc="/dash.webp"
                        />
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">{CONTENT.howItWorks.steps[0].title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{CONTENT.howItWorks.steps[0].description}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">{CONTENT.howItWorks.steps[1].title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{CONTENT.howItWorks.steps[1].description}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">{CONTENT.howItWorks.steps[2].title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{CONTENT.howItWorks.steps[2].description}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
