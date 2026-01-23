"use client"
import { useState } from 'react'
import { Menu } from './Menu/Menu'
import { QRCodes } from './Qrcodes/QRCodes'
import { Orders } from './Orders/Orders'
import { Dashboard } from './Dashboard'
import { Sidebar } from '../../components/Sidebar'
import { Tables } from './Tables/Tables'

export default function ClientDashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "menu":
        return <Menu />;
      case "orders":
        return <Orders />;
      case "qrcodes":
        return <QRCodes />;
      case "mesas":
        return <Tables />;
      case "configuracoes":
        return (
          <div className="p-8">
            <h1 className="text-3xl mb-2">Configurações</h1>
            <p className="text-muted-foreground">
              Página em desenvolvimento...
            </p>
          </div>
        );
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
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}
