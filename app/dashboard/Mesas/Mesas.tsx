"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

const mesas = [
  { id: 1, numero: "01", capacidade: 4, status: "disponivel", qrCode: "QR-001" },
  { id: 2, numero: "02", capacidade: 2, status: "ocupada", qrCode: "QR-002" },
  { id: 3, numero: "03", capacidade: 6, status: "disponivel", qrCode: "QR-003" },
  { id: 4, numero: "04", capacidade: 4, status: "ocupada", qrCode: "QR-004" },
  { id: 5, numero: "05", capacidade: 2, status: "reservada", qrCode: "QR-005" },
  { id: 6, numero: "06", capacidade: 4, status: "disponivel", qrCode: "QR-006" },
  { id: 7, numero: "07", capacidade: 8, status: "ocupada", qrCode: "QR-007" },
  { id: 8, numero: "08", capacidade: 4, status: "disponivel", qrCode: "QR-008" },
  { id: 9, numero: "09", capacidade: 2, status: "disponivel", qrCode: "QR-009" },
  { id: 10, numero: "10", capacidade: 4, status: "ocupada", qrCode: "QR-010" },
  { id: 11, numero: "11", capacidade: 6, status: "disponivel", qrCode: "QR-011" },
  { id: 12, numero: "12", capacidade: 4, status: "disponivel", qrCode: "QR-012" },
];

const statusConfig = {
  disponivel: { label: "Disponível", bg: "bg-emerald-500", count: 6 },
  ocupada: { label: "Ocupada", bg: "bg-red-500", count: 4 },
  reservada: { label: "Reservada", bg: "bg-orange-500", count: 2 },
};

export function Mesas() {
  return (
    <div className="p-8 space-y-6 bg-slate-50">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2">Gerenciar Mesas</h1>
        <p className="text-muted-foreground">
          Organize e acompanhe o status de todas as mesas do seu restaurante. Visualize quais estão
          disponíveis, ocupadas ou reservadas em tempo real.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total de Mesas</p>
            <h3 className="text-3xl">12</h3>
            <p className="text-sm text-muted-foreground">Capacidade: 52 pessoas</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-500/10 rounded-lg">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Disponíveis</p>
              <h3 className="text-2xl">{statusConfig.disponivel.count}</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-500/10 rounded-lg">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ocupadas</p>
              <h3 className="text-2xl">{statusConfig.ocupada.count}</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-500/10 rounded-lg">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Reservadas</p>
              <h3 className="text-2xl">{statusConfig.reservada.count}</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar mesa..."
            className="pl-10 bg-input-background border-0"
          />
        </div>
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4" />
          Nova Mesa
        </Button>
      </div>

      {/* Status Filters */}
      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-full text-sm bg-primary text-primary-foreground">
          Todas <span className="ml-1 bg-white/20 px-2 rounded-full">12</span>
        </button>
        <button className="px-4 py-2 rounded-full text-sm hover:bg-muted">
          Disponíveis <span className="ml-1 bg-primary/10 text-primary px-2 rounded-full">{statusConfig.disponivel.count}</span>
        </button>
        <button className="px-4 py-2 rounded-full text-sm hover:bg-muted">
          Ocupadas <span className="ml-1 bg-primary/10 text-primary px-2 rounded-full">{statusConfig.ocupada.count}</span>
        </button>
        <button className="px-4 py-2 rounded-full text-sm hover:bg-muted">
          Reservadas <span className="ml-1 bg-primary/10 text-primary px-2 rounded-full">{statusConfig.reservada.count}</span>
        </button>
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {mesas.map((mesa) => {
          const config = statusConfig[mesa.status as keyof typeof statusConfig];
          return (
            <Card
              key={mesa.id}
              className={`p-6 cursor-pointer transition-all hover:shadow-lg ${mesa.status === "ocupada" ? "ring-2 ring-red-500/20" : ""
                }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl">Mesa</h3>
                  <span
                    className={`w-3 h-3 rounded-full ${config.bg}`}
                  ></span>
                </div>
                <div className="text-4xl">{mesa.numero}</div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>Capacidade: {mesa.capacidade}</div>
                  <div className={config.bg.replace("bg-", "text-")}>
                    {config.label}
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                  >
                    {mesa.status === "disponivel"
                      ? "Marcar Ocupada"
                      : mesa.status === "ocupada"
                        ? "Liberar Mesa"
                        : "Ver Reserva"}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
