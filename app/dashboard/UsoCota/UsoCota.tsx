"use client";

import {
  Zap,
  QrCode,
  ShoppingCart,
  Users,
  CreditCard,
  AlertCircle,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const usageData = [
  { date: "01 Jan", pedidos: 245, qrcodes: 12, usuarios: 8 },
  { date: "08 Jan", pedidos: 380, qrcodes: 15, usuarios: 10 },
  { date: "15 Jan", pedidos: 520, qrcodes: 18, usuarios: 12 },
  { date: "22 Jan", pedidos: 650, qrcodes: 20, usuarios: 14 },
  { date: "29 Jan", pedidos: 780, qrcodes: 22, usuarios: 15 },
  { date: "05 Fev", pedidos: 920, qrcodes: 25, usuarios: 16 },
  { date: "12 Fev", pedidos: 1050, qrcodes: 25, usuarios: 18 },
];

const invoiceHistory = [
  {
    id: "INV-2024-02",
    month: "Fevereiro 2024",
    amount: 247.50,
    status: "pago",
    dueDate: "2024-03-05",
    pedidos: 1050,
    qrcodes: 25,
  },
  {
    id: "INV-2024-01",
    month: "Janeiro 2024",
    amount: 195.00,
    status: "pago",
    dueDate: "2024-02-05",
    pedidos: 780,
    qrcodes: 22,
  },
  {
    id: "INV-2023-12",
    month: "Dezembro 2023",
    amount: 162.50,
    status: "pago",
    dueDate: "2024-01-05",
    pedidos: 650,
    qrcodes: 20,
  },
];

const planos = [
  {
    name: "Básico",
    price: 99,
    pedidos: 500,
    qrcodes: 10,
    usuarios: 5,
    features: [
      "Até 500 pedidos/mês",
      "10 QR Codes ativos",
      "5 usuários",
      "Suporte por email",
      "Dashboard básico",
    ],
  },
  {
    name: "Profissional",
    price: 249,
    pedidos: 2000,
    qrcodes: 30,
    usuarios: 15,
    features: [
      "Até 2.000 pedidos/mês",
      "30 QR Codes ativos",
      "15 usuários",
      "Suporte prioritário",
      "Dashboard avançado",
      "Relatórios personalizados",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: 499,
    pedidos: 10000,
    qrcodes: 100,
    usuarios: 50,
    features: [
      "Até 10.000 pedidos/mês",
      "100 QR Codes ativos",
      "50 usuários",
      "Suporte 24/7",
      "Dashboard completo",
      "API dedicada",
      "Gerente de conta",
    ],
  },
];

export function UsoCota() {
  const currentUsage = {
    pedidos: { current: 1050, limit: 2000, price: 0.15 },
    qrcodes: { current: 25, limit: 30, price: 5.0 },
    usuarios: { current: 18, limit: 15, price: 10.0 },
  };

  const currentPlan = planos[1]; // Profissional

  const calculatePercentage = (current: number, limit: number) => {
    return Math.min((current / limit) * 100, 100);
  };

  const estimatedCost = () => {
    let baseCost = currentPlan.price;

    // Adicional de usuários
    if (currentUsage.usuarios.current > currentPlan.usuarios) {
      const extraUsers = currentUsage.usuarios.current - currentPlan.usuarios;
      baseCost += extraUsers * currentUsage.usuarios.price;
    }

    return baseCost;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="p-8 space-y-6 bg-gradient-to-b from-secondary/30 to-background min-h-screen">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl mb-2">Uso e Faturamento</h1>
          <p className="text-muted-foreground">
            Acompanhe seu consumo e gerencie seus planos
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <CreditCard className="w-4 h-4" />
            Formas de Pagamento
          </Button>
          <Button className="gap-2 shadow-lg">
            <ArrowUpRight className="w-4 h-4" />
            Fazer Upgrade
          </Button>
        </div>
      </div>

      {/* Current Plan Card */}
      <Card className="p-8 bg-gradient-to-br from-primary/5 via-white to-[#74C3BF]/5 border-2 border-primary/20">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl">Plano {currentPlan.name}</h2>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                Plano Atual
              </span>
            </div>
            <p className="text-muted-foreground">
              Renovação automática em 5 de Março de 2024
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Fatura Estimada</p>
            <p className="text-4xl text-primary">{formatCurrency(estimatedCost())}</p>
            <p className="text-sm text-muted-foreground mt-1">por mês</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pedidos */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-border/50">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pedidos</p>
                  <p className="text-xl">
                    {currentUsage.pedidos.current.toLocaleString()} / {currentUsage.pedidos.limit.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${calculatePercentage(currentUsage.pedidos.current, currentUsage.pedidos.limit)}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {calculatePercentage(currentUsage.pedidos.current, currentUsage.pedidos.limit).toFixed(1)}% utilizado
            </p>
          </div>

          {/* QR Codes */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-border/50">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">QR Codes</p>
                  <p className="text-xl">
                    {currentUsage.qrcodes.current} / {currentUsage.qrcodes.limit}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${calculatePercentage(currentUsage.qrcodes.current, currentUsage.qrcodes.limit)}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {calculatePercentage(currentUsage.qrcodes.current, currentUsage.qrcodes.limit).toFixed(1)}% utilizado
            </p>
          </div>

          {/* Usuários */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-border/50">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Usuários</p>
                  <p className="text-xl">
                    {currentUsage.usuarios.current} / {currentUsage.usuarios.limit}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
                style={{ width: `${calculatePercentage(currentUsage.usuarios.current, currentUsage.usuarios.limit)}%` }}
              />
            </div>
            {currentUsage.usuarios.current > currentUsage.usuarios.limit ? (
              <p className="text-xs text-orange-600 mt-2 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {currentUsage.usuarios.current - currentUsage.usuarios.limit} usuários extras (+{formatCurrency((currentUsage.usuarios.current - currentUsage.usuarios.limit) * currentUsage.usuarios.price)}/mês)
              </p>
            ) : (
              <p className="text-xs text-muted-foreground mt-2">
                {calculatePercentage(currentUsage.usuarios.current, currentUsage.usuarios.limit).toFixed(1)}% utilizado
              </p>
            )}
          </div>
        </div>
      </Card>

      {/* Usage Chart */}
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-xl mb-1">Histórico de Uso</h3>
          <p className="text-sm text-muted-foreground">Últimos 60 dias</p>
        </div>

        <ChartContainer
          config={{
            pedidos: {
              label: "Pedidos",
              color: "#50c9c3",
            },
          }}
          className="h-[300px]"
        >
          <AreaChart data={usageData}>
            <defs>
              <linearGradient id="colorPedidos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#50c9c3" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#50c9c3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              className="text-xs"
              tickLine={false}
              axisLine={false}
            />
            <YAxis className="text-xs" tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="pedidos"
              stroke="#50c9c3"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorPedidos)"
            />
          </AreaChart>
        </ChartContainer>
      </Card>

      {/* Plans Comparison */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl mb-2">Planos Disponíveis</h2>
          <p className="text-muted-foreground">
            Escolha o plano ideal para o seu restaurante
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planos.map((plano) => (
            <Card
              key={plano.name}
              className={`p-6 relative overflow-hidden transition-all duration-300 hover:shadow-xl ${plano.recommended
                ? "border-2 border-primary shadow-lg shadow-primary/20 scale-105"
                : "hover:scale-105"
                }`}
            >
              {plano.recommended && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-[#74C3BF] text-white px-4 py-1 text-xs rounded-bl-lg">
                  Recomendado
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl mb-2">{plano.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-primary">{formatCurrency(plano.price)}</span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Pedidos</span>
                  <span>{plano.pedidos.toLocaleString()}/mês</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">QR Codes</span>
                  <span>{plano.qrcodes} ativos</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Usuários</span>
                  <span>{plano.usuarios} inclusos</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <ul className="space-y-2">
                  {plano.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full"
                variant={plano.name === currentPlan.name ? "outline" : "default"}
                disabled={plano.name === currentPlan.name}
              >
                {plano.name === currentPlan.name ? "Plano Atual" : "Escolher Plano"}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Invoice History */}
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-xl mb-1">Histórico de Faturas</h3>
          <p className="text-sm text-muted-foreground">
            Suas faturas dos últimos 3 meses
          </p>
        </div>

        <div className="space-y-3">
          {invoiceHistory.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#74C3BF] rounded-xl flex items-center justify-center text-white">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">{invoice.month}</p>
                  <p className="text-sm text-muted-foreground">
                    {invoice.pedidos} pedidos • {invoice.qrcodes} QR codes
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-lg">{formatCurrency(invoice.amount)}</p>
                  <p className="text-xs text-muted-foreground">
                    Venc: {formatDate(invoice.dueDate)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Pago
                  </span>
                  <Button variant="outline" size="sm" className="gap-2">
                    PDF
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Pay as You Go Info */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg mb-2">Modelo Pay as You Go</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Nosso modelo de cobrança é baseado no uso real. Você paga apenas pelo que utiliza,
              sem surpresas. Caso exceda os limites do seu plano, cobramos apenas pelo uso adicional:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/70 rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-muted-foreground mb-1">Pedido adicional</p>
                <p className="text-lg text-blue-600">{formatCurrency(currentUsage.pedidos.price)}</p>
              </div>
              <div className="bg-white/70 rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-muted-foreground mb-1">QR Code adicional</p>
                <p className="text-lg text-blue-600">{formatCurrency(currentUsage.qrcodes.price)}/mês</p>
              </div>
              <div className="bg-white/70 rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-muted-foreground mb-1">Usuário adicional</p>
                <p className="text-lg text-blue-600">{formatCurrency(currentUsage.usuarios.price)}/mês</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
