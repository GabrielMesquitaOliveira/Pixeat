import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Eye } from "lucide-react";

const orders = [
  {
    id: "#1247",
    cliente: "Roberto Lima",
    mesa: null,
    horario: "18:30",
    status: "pronto",
    statusLabel: "Pronto",
    itens: 3,
    total: 89.90,
  },
  {
    id: "#2324",
    cliente: "Mesa 32",
    mesa: "32",
    horario: "18:30",
    status: "novo",
    statusLabel: "Novo",
    itens: 2,
    total: 54.90,
  },
  {
    id: "#2325",
    cliente: "Mesa 15",
    mesa: "15",
    horario: "18:32",
    status: "preparo",
    statusLabel: "Em preparo",
    itens: 4,
    total: 127.50,
  },
  {
    id: "#2326",
    cliente: "Mesa 8",
    mesa: "8",
    horario: "18:35",
    status: "pronto",
    statusLabel: "Pronto",
    itens: 2,
    total: 68.00,
  },
  {
    id: "#2327",
    cliente: "Mesa 22",
    mesa: "22",
    horario: "18:38",
    status: "entregue",
    statusLabel: "Entregue",
    itens: 5,
    total: 142.80,
  },
  {
    id: "#2328",
    cliente: "Mesa 10",
    mesa: "10",
    horario: "18:40",
    status: "novo",
    statusLabel: "Novo",
    itens: 3,
    total: 95.50,
  },
  {
    id: "#2329",
    cliente: "Mesa 5",
    mesa: "5",
    horario: "18:42",
    status: "preparo",
    statusLabel: "Em preparo",
    itens: 2,
    total: 72.00,
  },
  {
    id: "#2330",
    cliente: "Mesa 18",
    mesa: "18",
    horario: "18:45",
    status: "novo",
    statusLabel: "Novo",
    itens: 1,
    total: 34.99,
  },
];

const statusConfig = {
  novo: { bg: "bg-cyan-500", count: 3 },
  preparo: { bg: "bg-orange-500", count: 2 },
  pronto: { bg: "bg-emerald-500", count: 2 },
  entregue: { bg: "bg-blue-500", count: 1 },
};

export function Orders() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2">Gerenciar orders</h1>
        <p className="text-muted-foreground">
          Acompanhe todos os orders em tempo real. Gerencie o status de cada order, desde o recebimento 
          até a entrega, e mantenha sua cozinha organizada e eficiente.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">orders Hoje</p>
            <h3 className="text-3xl">124</h3>
            <div className="flex items-center gap-1 text-sm text-emerald-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>+12% vs ontem</span>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Tempo Médio</p>
            <h3 className="text-3xl">23min</h3>
            <div className="flex items-center gap-1 text-sm text-emerald-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
              <span>-5min vs ontem</span>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Faturamento Hoje</p>
            <h3 className="text-3xl">R$ 4.2k</h3>
            <div className="flex items-center gap-1 text-sm text-emerald-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>+18% vs ontem</span>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Ticket Médio</p>
            <h3 className="text-3xl">R$ 87</h3>
            <div className="flex items-center gap-1 text-sm text-emerald-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>+5% vs ontem</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar por número do order, mesa ou cliente..."
            className="pl-10 bg-input-background border-0"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filtros
        </Button>
      </div>

      {/* Status Tabs */}
      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-full text-sm bg-primary text-primary-foreground">
          Todos <span className="ml-1 bg-white/20 px-2 rounded-full">18</span>
        </button>
        <button className="px-4 py-2 rounded-full text-sm hover:bg-muted">
          Novo <span className="ml-1 bg-primary/10 text-primary px-2 rounded-full">{statusConfig.novo.count}</span>
        </button>
        <button className="px-4 py-2 rounded-full text-sm hover:bg-muted">
          Em preparo <span className="ml-1 bg-primary/10 text-primary px-2 rounded-full">{statusConfig.preparo.count}</span>
        </button>
        <button className="px-4 py-2 rounded-full text-sm hover:bg-muted">
          Pronto <span className="ml-1 bg-primary/10 text-primary px-2 rounded-full">{statusConfig.pronto.count}</span>
        </button>
        <button className="px-4 py-2 rounded-full text-sm hover:bg-muted">
          Entregue <span className="ml-1 bg-primary/10 text-primary px-2 rounded-full">{statusConfig.entregue.count}</span>
        </button>
      </div>

      {/* order Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left text-sm text-muted-foreground bg-muted/30">
                <th className="p-4 font-medium">Cliente</th>
                <th className="p-4 font-medium">Número do order</th>
                <th className="p-4 font-medium">Horário</th>
                <th className="p-4 font-medium">Itens</th>
                <th className="p-4 font-medium">Total</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {order.mesa ? order.mesa : "👤"}
                      </div>
                      <span>{order.cliente}</span>
                    </div>
                  </td>
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.horario}</td>
                  <td className="p-4">{order.itens} itens</td>
                  <td className="p-4">R$ {order.total.toFixed(2)}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm text-white ${
                        statusConfig[order.status as keyof typeof statusConfig].bg
                      }`}
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      {order.statusLabel}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Eye className="w-4 h-4" />
                        Ver Detalhes
                      </Button>
                      <select className="px-3 py-1.5 text-sm border border-border rounded-lg bg-white hover:bg-muted cursor-pointer">
                        <option value="novo">Novo</option>
                        <option value="preparo">Em preparo</option>
                        <option value="pronto">Pronto</option>
                        <option value="entregue">Entregue</option>
                      </select>
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
