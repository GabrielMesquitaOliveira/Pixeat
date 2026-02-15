'use client'

import { cn } from '@/lib/utils'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { NumberTicker } from '@/components/ui/number-ticker'
import { motion } from 'motion/react'
import {
    AlertTriangle,
    BarChart3,
    Clock3,
    Receipt,
    Users,
} from 'lucide-react'

export default function BentoGridThirdDemo() {
    return (
        <BentoGrid className="mx-auto max-w-6xl md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={cn('[&>p:text-lg]', item.className)}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    )
}

const SkeletonOne = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -1 }}
            transition={{ duration: 0.8 }}
            className="bg-muted/30 flex h-full min-h-24 w-full flex-1 flex-col rounded-lg border p-3"
        >
            <motion.div className="mb-2 flex items-center justify-between" animate={{ opacity: [0.9, 1, 0.9] }} transition={{ duration: 4.6, repeat: Infinity }}>
                <TextEffect per="char" preset="fade" speedSegment={0.7} className="text-xs font-medium">
                    Tempo médio de espera
                </TextEffect>
                <Badge variant="destructive">
                    +<NumberTicker value={32} suffix="%" />
                </Badge>
            </motion.div>
            <motion.div initial={{ scaleX: 0.85, opacity: 0.7 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 1.2 }} className="origin-left">
                <Progress value={78} className="mb-3" />
            </motion.div>
            <AnimatedGroup
                preset="slide"
                variants={{ container: { visible: { transition: { staggerChildren: 0.22 } } } }}
                className="space-y-2 text-xs text-muted-foreground"
            >
                <div className="flex items-center justify-between"><span>Mesa 12</span><span><NumberTicker value={14} suffix=" min" /></span></div>
                <div className="flex items-center justify-between"><span>Mesa 07</span><span><NumberTicker value={11} suffix=" min" delay={0.15} /></span></div>
                <div className="flex items-center justify-between"><span>Balcão</span><span><NumberTicker value={9} suffix=" min" delay={0.3} /></span></div>
            </AnimatedGroup>
        </motion.div>
    )
}

const SkeletonTwo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -1 }}
            transition={{ duration: 0.8 }}
            className="bg-muted/30 flex h-full min-h-24 w-full flex-1 flex-col rounded-lg border p-3"
        >
            <div className="mb-2 flex items-center justify-between">
                <TextEffect per="word" preset="fade-in-blur" speedReveal={0.75} className="text-xs font-medium">
                    Pedidos com correção
                </TextEffect>
                <Badge variant="destructive"><NumberTicker value={18} /> hoje</Badge>
            </div>
            <Separator className="mb-2" />
            <AnimatedGroup
                preset="blur-slide"
                variants={{ container: { visible: { transition: { staggerChildren: 0.22 } } } }}
                className="space-y-2 text-xs text-muted-foreground"
            >
                <div className="rounded-md border bg-background p-2">Sem cebola → com cebola</div>
                <div className="rounded-md border bg-background p-2">Ponto da carne incorreto</div>
                <div className="rounded-md border bg-background p-2">Mesa errada na entrega</div>
            </AnimatedGroup>
        </motion.div>
    )
}

const SkeletonThree = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -1 }}
            transition={{ duration: 0.8 }}
            className="bg-muted/30 flex h-full min-h-24 w-full flex-1 flex-col rounded-lg border p-3"
        >
            <TextEffect per="word" preset="slide" speedReveal={0.75} className="mb-2 text-xs font-medium">
                Capacidade no horário de pico
            </TextEffect>
            <div className="space-y-3 text-xs text-muted-foreground">
                <div>
                    <div className="mb-1 flex justify-between"><span>Equipe ocupada</span><span><NumberTicker value={92} suffix="%" /></span></div>
                    <motion.div initial={{ scaleX: 0.7, opacity: 0.7 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="origin-left">
                        <Progress value={92} />
                    </motion.div>
                </div>
                <div>
                    <div className="mb-1 flex justify-between"><span>Fila na cozinha</span><span><NumberTicker value={67} suffix="%" delay={0.2} /></span></div>
                    <motion.div initial={{ scaleX: 0.7, opacity: 0.7 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.12 }} className="origin-left">
                        <Progress value={67} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

const SkeletonFour = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -1 }}
            transition={{ duration: 0.8 }}
            className="bg-muted/30 flex h-full min-h-24 w-full flex-1 flex-col rounded-lg border p-3"
        >
            <AnimatedGroup
                preset="zoom"
                variants={{ container: { visible: { transition: { staggerChildren: 0.22 } } } }}
                className="grid h-full grid-cols-2 gap-2 text-xs"
                as="div"
                asChild="div"
            >
                <motion.div className="rounded-md border bg-background p-3" initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <p className="text-muted-foreground">Tempo médio na mesa</p>
                    <p className="mt-1 text-lg font-semibold"><NumberTicker value={102} suffix=" min" /></p>
                    <Badge variant="outline" className="mt-2">Meta: 1h10</Badge>
                </motion.div>
                <motion.div className="rounded-md border bg-background p-3" initial={{ opacity: 0, x: 6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
                    <p className="text-muted-foreground">Giro por mesa</p>
                    <p className="mt-1 text-lg font-semibold"><NumberTicker value={2.1} decimalPlaces={1} suffix="x" delay={0.15} /></p>
                    <Badge variant="destructive" className="mt-2">Abaixo do ideal</Badge>
                </motion.div>
                <motion.div className="col-span-2 rounded-md border bg-background p-3 text-muted-foreground" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
                    Turno de jantar com menor rotatividade e fila na entrada.
                </motion.div>
            </AnimatedGroup>
        </motion.div>
    )
}

const SkeletonFive = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -1 }}
            transition={{ duration: 0.8 }}
            className="bg-muted/30 flex h-full min-h-24 w-full flex-1 flex-col rounded-lg border p-3"
        >
            <motion.div className="mb-2 flex items-center justify-between" animate={{ opacity: [0.9, 1, 0.9] }} transition={{ duration: 4.8, repeat: Infinity }}>
                <TextEffect per="char" preset="fade" speedSegment={0.7} className="text-xs font-medium">
                    Visibilidade operacional
                </TextEffect>
                <Badge variant="outline">Sem tempo real</Badge>
            </motion.div>
            <Separator className="mb-3" />
            <AnimatedGroup
                preset="slide"
                variants={{ container: { visible: { transition: { staggerChildren: 0.22 } } } }}
                className="space-y-2 text-xs text-muted-foreground"
            >
                <div className="flex items-center justify-between"><span>Pedidos atrasados</span><span>--</span></div>
                <div className="flex items-center justify-between"><span>Taxa de erro por turno</span><span>--</span></div>
                <div className="flex items-center justify-between"><span>Tempo por mesa</span><span>--</span></div>
            </AnimatedGroup>
        </motion.div>
    )
}

const items = [
    {
        title: 'Filas e espera no salão',
        description: (
            <span className="text-sm">
                Clientes aguardam atendimento e desistem antes de concluir o pedido.
            </span>
        ),
        header: <SkeletonOne />,
        className: 'md:col-span-1',
        icon: <Clock3 className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Erros no lançamento de pedidos',
        description: (
            <span className="text-sm">
                Pedidos anotados manualmente geram trocas, retrabalho e desperdício.
            </span>
        ),
        header: <SkeletonTwo />,
        className: 'md:col-span-1',
        icon: <Receipt className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Equipe sobrecarregada nos picos',
        description: (
            <span className="text-sm">
                Horários de maior movimento reduzem agilidade e qualidade do serviço.
            </span>
        ),
        header: <SkeletonThree />,
        className: 'md:col-span-1',
        icon: <Users className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Baixa conversão de mesa',
        description: (
            <span className="text-sm">
                Sem fluxo eficiente, o tempo de permanência aumenta e o giro cai.
            </span>
        ),
        header: <SkeletonFour />,
        className: 'md:col-span-2',
        icon: <AlertTriangle className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Falta de dados para decidir',
        description: (
            <span className="text-sm">
                Sem visibilidade em tempo real, fica difícil otimizar operação e vendas.
            </span>
        ),
        header: <SkeletonFive />,
        className: 'md:col-span-1',
        icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
    },
]