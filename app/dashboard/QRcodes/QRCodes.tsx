"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Download, QrCode as QrCodeIcon, Edit2, Trash2, Eye } from "lucide-react";

const qrCodes = [
  { id: 1, mesa: "Mesa 01", codigo: "QR-001", status: "ativo", scans: 45, ultimoScan: "Há 2 horas" },
  { id: 2, mesa: "Mesa 02", codigo: "QR-002", status: "ativo", scans: 32, ultimoScan: "Há 4 horas" },
  { id: 3, mesa: "Mesa 03", codigo: "QR-003", status: "ativo", scans: 28, ultimoScan: "Há 1 dia" },
  { id: 4, mesa: "Mesa 04", codigo: "QR-004", status: "ativo", scans: 51, ultimoScan: "Há 3 horas" },
  { id: 5, mesa: "Mesa 05", codigo: "QR-005", status: "inativo", scans: 12, ultimoScan: "Há 5 dias" },
  { id: 6, mesa: "Mesa 06", codigo: "QR-006", status: "ativo", scans: 39, ultimoScan: "Há 1 hora" },
  { id: 7, mesa: "Mesa 07", codigo: "QR-007", status: "ativo", scans: 44, ultimoScan: "Há 6 horas" },
  { id: 8, mesa: "Mesa 08", codigo: "QR-008", status: "ativo", scans: 37, ultimoScan: "Há 2 dias" },
];

interface QRCodesProps {
  onNavigate?: (page: string) => void;
}

export function QRCodes({ onNavigate }: QRCodesProps) {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl mb-2">Gerenciar QR Codes</h1>
          <p className="text-muted-foreground">
            Crie e gerencie QR codes para cada mesa do seu restaurante. Os clientes podem escanear o código
            para acessar o cardápio digital e fazer pedidos diretamente do celular, sem precisar de garçom.
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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <QrCodeIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total de QR Codes</p>
              <h3 className="text-2xl">8</h3>
            </div>
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
              <p className="text-sm text-muted-foreground">Ativos</p>
              <h3 className="text-2xl">7</h3>
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
              <p className="text-sm text-muted-foreground">Inativos</p>
              <h3 className="text-2xl">1</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Scans Hoje</p>
              <h3 className="text-2xl">124</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            placeholder="Buscar por mesa ou código..."
            className="bg-input-background border-0"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Baixar Todos
        </Button>
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4" />
          Novo QR Code
        </Button>
      </div>

      {/* QR Codes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {qrCodes.map((qr) => (
          <Card key={qr.id} className="p-6 space-y-4">
            {/* QR Code Visual */}
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center border-2 border-primary/20">
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-sm ${Math.random() > 0.5 ? "bg-primary" : "bg-transparent"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg">{qr.mesa}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${qr.status === "ativo"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-orange-100 text-orange-700"
                    }`}
                >
                  {qr.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Código: {qr.codigo}</p>
              <div className="pt-2 border-t border-border space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total de scans:</span>
                  <span>{qr.scans}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Último scan:</span>
                  <span>{qr.ultimoScan}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <Button size="sm" variant="outline" className="flex-1 gap-2">
                <Download className="w-4 h-4" />
                Baixar
              </Button>
              <Button size="sm" variant="outline">
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                <Trash2 className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}