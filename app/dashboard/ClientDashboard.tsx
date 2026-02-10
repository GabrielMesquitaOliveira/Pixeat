"use client";

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { Cardapio } from "./Cardapio/Cardapio";
import { CardapioDigital } from "./CardapioDigital/CardapioDigital";
import { LogsAuditoria } from "./LogsAuditoria/LogsAuditoria";
import { Membros } from "./Membros/Membros";
import { Mesas } from "./Mesas/Mesas";
import { Pedidos } from "./Pedidos/Pedidos";
import { QRCodes } from "./QRcodes/QRCodes";
import { UsoCota } from "./UsoCota/UsoCota";
import OrganizationSettingsPage from "./Settings/page";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [viewMode, setViewMode] = useState<"admin" | "customer">("admin");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard onNavigate={setCurrentPage} />;
      case "cardapio":
        return <Cardapio />;
      case "pedidos":
        return <Pedidos />;
      case "qrcodes":
        return <QRCodes onNavigate={setCurrentPage} />;
      case "mesas":
        return <Mesas />;
      case "cardapio-digital":
        return <CardapioDigital onNavigate={setCurrentPage} />;
      case "membros":
        return <Membros />;
      case "uso-cota":
        return <UsoCota />;
      case "logs-auditoria":
        return <LogsAuditoria />;
      case "configuracoes":
        return <OrganizationSettingsPage />;
      case "ajuda":
        return (
          <div className="p-8">
            <h1 className="text-3xl mb-2">Central de Ajuda</h1>
            <p className="text-muted-foreground">
              Página em desenvolvimento...
            </p>
          </div>
        );
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {currentPage !== "cardapio-digital" && (
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      )}
      <main className="flex-1 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}