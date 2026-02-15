'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { menuItems } from './menu'
import { ShimmerButton } from '@/components/ui/shimmer-button'

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    const smoothScrollTo = (targetY: number) => {
        const startY = window.scrollY
        const distance = targetY - startY
        const duration = 1100
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (prefersReducedMotion) {
            window.scrollTo(0, targetY)
            return
        }

        const easeInOutCubic = (progress: number) => {
            return progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2
        }

        let animationStart: number | null = null

        const step = (currentTime: number) => {
            if (animationStart === null) {
                animationStart = currentTime
            }

            const elapsed = currentTime - animationStart
            const progress = Math.min(elapsed / duration, 1)
            const eased = easeInOutCubic(progress)

            window.scrollTo(0, startY + distance * eased)

            if (progress < 1) {
                requestAnimationFrame(step)
            }
        }

        requestAnimationFrame(step)
    }

    const handleAnchorClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (!href.startsWith('#')) {
            return
        }

        const targetElement = document.querySelector(href)
        if (!targetElement) {
            return
        }

        event.preventDefault()

        const headerOffsetRaw = getComputedStyle(document.documentElement).getPropertyValue('--header-offset')
        const headerOffset = Number.parseInt(headerOffsetRaw, 10) || 80
        const targetY = Math.max(0, targetElement.getBoundingClientRect().top + window.scrollY - headerOffset)

        smoothScrollTo(targetY)
        window.history.replaceState(null, '', href)
        setMenuState(false)
    }

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const { isSignedIn } = useUser()
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-50 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-7xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-6xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Image src="/logo.svg" alt="Logo" width={120} height={80} />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-md font-semibold">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            onClick={handleAnchorClick(item.href)}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                onClick={handleAnchorClick(item.href)}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                {isSignedIn ? (
                                    <>
                                        <Button asChild size="sm">
                                            <Link href="/dashboard">Dashboard</Link>
                                        </Button>
                                        <div>
                                            <UserButton afterSignOutUrl="/" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <SignInButton mode="modal">
                                            <Button
                                                variant="outline"
                                                size="sm">
                                                <span>Entrar</span>
                                            </Button>
                                        </SignInButton>
                                        <SignUpButton mode="modal">
                                            <ShimmerButton
                                                background="var(--primary)"
                                                className="h-9 rounded-md px-4 text-sm"
                                            >
                                                <span>Cadastrar</span>
                                            </ShimmerButton>
                                        </SignUpButton>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
