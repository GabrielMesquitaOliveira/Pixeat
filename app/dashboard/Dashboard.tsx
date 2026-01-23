import { TrendingUp, TrendingDown, ArrowUpRight, Eye } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const salesData = [
  { date: "2 abr", value: 890, range1: 750, range2: 950 },
  { date: "8 abr", value: 920, range1: 780, range2: 1020 },
  { date: "14 abr", value: 1100, range1: 950, range2: 1200 },
  { date: "21 abr", value: 1450, range1: 1200, range2: 1550 },
  { date: "28 abr", value: 1280, range1: 1050, range2: 1400 },
  { date: "5 mai", value: 1350, range1: 1100, range2: 1450 },
  { date: "12 mai", value: 1520, range1: 1300, range2: 1650 },
  { date: "19 mai", value: 1680, range1: 1450, range2: 1800 },
  { date: "25 mai", value: 1590, range1: 1350, range2: 1750 },
  { date: "2 jun", value: 1720, range1: 1500, range2: 1850 },
  { date: "8 jun", value: 1880, range1: 1600, range2: 2000 },
  { date: "15 jun", value: 1950, range1: 1700, range2: 2100 },
  { date: "22 jun", value: 2050, range1: 1800, range2: 2200 },
  { date: "30 jun", value: 1920, range1: 1650, range2: 2100 },
];

const orders = [
  {
    id: "#1247",
    author: "Roberto Lima",
    table: null,
    time: "18:30",
    status: "Pronto",
    statusColor: "bg-emerald-500",
  },
  {
    id: "#2324",
    author: "Mesa 32",
    table: "32",
    time: "18:30",
    status: "Novo",
    statusColor: "bg-cyan-500",
  },
  {
    id: "#2325",
    author: "Mesa 15",
    table: "15",
    time: "18:32",
    status: "Em preparo",
    statusColor: "bg-orange-500",
  },
  {
    id: "#2326",
    author: "Mesa 8",
    table: "8",
    time: "18:35",
    status: "Pronto",
    statusColor: "bg-emerald-500",
  },
  {
    id: "#2327",
    author: "Mesa 22",
    table: "22",
    time: "18:38",
    status: "Entregue",
    statusColor: "bg-blue-500",
  },
];

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: number;
  subtitle?: string;
  color?: string;
}

function StatCard({ title, value, trend, subtitle, color = "text-foreground" }: StatCardProps) {
  const isPositive = trend && trend > 0;
  const isNegative = trend && trend < 0;

  return (
    <Card className="p-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-end justify-between">
          <h3 className={`text-3xl ${color}`}>{value}</h3>
          {trend !== undefined && (
            <div className={`flex items-center gap-1 ${isPositive ? "text-emerald-600" : "text-red-600"}`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="text-sm">{isPositive ? "+" : ""}{trend}%</span>
            </div>
          )}
        </div>
        {subtitle && (
          <div className="flex items-center gap-1 text-sm text-primary cursor-pointer hover:underline">
            <span>{subtitle}</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </Card>
  );
}

interface DashboardProps {
  onNavigate?: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="p-8 space-y-6 bg-slate-50">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <h1 className="text-3xl mb-2">Bem-vinda de volta, Ana</h1>
          <p className="text-muted-foreground">
            Estamos felizes em tê-la novamente. Aqui estão as atualizações mais recentes do sistema e os atalhos para começar:
            acompanhe seus pedidos, gerencie clientes e monitore os resultados em tempo real. 🚀
          </p>
        </div>
        {onNavigate && (
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => onNavigate("cardapio-digital")}
          >
            <Eye className="w-4 h-4" />
            Preview Cardápio
          </Button>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Faturamento Dia"
          value="R$ 1.250,00"
          trend={13.5}
          subtitle="Tendências deste mês"
        />
        <StatCard
          title="Pedidos"
          value="1.234"
          trend={-20}
          subtitle="Queda de 20% neste período"
        />
        <StatCard
          title="Crescimento"
          value="14,5%"
          trend={14.8}
          subtitle="Aumento constante de desempenho"
        />
      </div>

      {/* Sales Chart */}
      <Card className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl mb-1">Desempenho de Vendas</h3>
            <p className="text-sm text-muted-foreground">Total dos últimos 3 meses</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm rounded-lg hover:bg-muted">Últimos 3 meses</button>
            <button className="px-4 py-2 text-sm rounded-lg hover:bg-muted">Últimos 30 dias</button>
            <button className="px-4 py-2 text-sm rounded-lg hover:bg-muted">Últimos 7 dias</button>
          </div>
        </div>

        <ChartContainer
          config={{
            value: {
              label: "Vendas",
              color: "hsl(var(--chart-1))",
            },
            range1: {
              label: "Range 1",
              color: "hsl(var(--chart-2))",
            },
            range2: {
              label: "Range 2",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorRange2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#50c9c3" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#50c9c3" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorRange1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#74C3BF" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#74C3BF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00A19B" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00A19B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                tick={{ fill: "#999" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis tick={{ fill: "#999" }} tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="range2"
                stroke="#50c9c3"
                strokeWidth={0}
                fill="url(#colorRange2)"
              />
              <Area
                type="monotone"
                dataKey="range1"
                stroke="#74C3BF"
                strokeWidth={0}
                fill="url(#colorRange1)"
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00A19B"
                strokeWidth={2}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>

      {/* Orders Table */}
      <Card className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl">Pedidos Recentes</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm rounded-full bg-primary text-primary-foreground">
              Todos <span className="ml-1 bg-white/20 px-2 rounded-full">18</span>
            </button>
            <button className="px-3 py-1.5 text-sm rounded-full hover:bg-muted">
              Novo <span className="ml-1 bg-primary/10 text-primary px-2 rounded-full">5</span>
            </button>
            <button className="px-3 py-1.5 text-sm rounded-full hover:bg-muted">
              Em preparo <span className="ml-1 bg-primary/10 text-primary px-2 rounded-full">3</span>
            </button>
            <button className="px-3 py-1.5 text-sm rounded-full hover:bg-muted">
              Pronto <span className="ml-1 bg-primary/10 text-primary px-2 rounded-full">4</span>
            </button>
            <button className="px-3 py-1.5 text-sm rounded-full hover:bg-muted">
              Entregue <span className="ml-1 bg-primary/10 text-primary px-2 rounded-full">1</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left text-sm text-muted-foreground">
                <th className="pb-3 font-medium">Autor</th>
                <th className="pb-3 font-medium">Número do Pedido</th>
                <th className="pb-3 font-medium">Horário</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-border last:border-0">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        {order.table ? order.table : "👤"}
                      </div>
                      <span>{order.author}</span>
                    </div>
                  </td>
                  <td className="py-4">{order.id}</td>
                  <td className="py-4">{order.time}</td>
                  <td className="py-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm text-white ${order.statusColor}`}>
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-primary/10 rounded-lg text-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-destructive/10 rounded-lg text-destructive">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}