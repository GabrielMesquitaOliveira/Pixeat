"use client";

import Image from "next/image";
import { Home, ShoppingBag, ClipboardList, QrCode, Settings, Users, HelpCircle, CreditCard, UserCog, Shield } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { ClerkOrganizationSwitcher } from "./clerk/ClerkWidgets";

interface SidebarProps {
  readonly currentPage: string;
  readonly onPageChange: (page: string) => void;
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {

  const { user } = useUser();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "pedidos", label: "Pedidos", icon: ClipboardList },
    { id: "cardapio", label: "Cardápio", icon: ShoppingBag },
    { id: "qrcodes", label: "QR Codes", icon: QrCode },
    { id: "mesas", label: "Mesas", icon: Users },
    { id: "membros", label: "Membros", icon: UserCog },
    { id: "uso-cota", label: "Uso & Faturamento", icon: CreditCard },
    { id: "logs-auditoria", label: "Logs de Auditoria", icon: Shield },
  ];

  const bottomItems = [
    { id: "configuracoes", label: "Configurações", icon: Settings },
    { id: "ajuda", label: "Obtenha ajuda", icon: HelpCircle },
  ];

  return (
    <div className="w-64 bg-white border-r border-border h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Image src="/logo.png" alt="Pixeat" width={100} height={80} priority />
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Items */}
      <div className="p-4 space-y-1 border-t border-border">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* User Profile */}

        <ClerkOrganizationSwitcher />

        <div className="mt-4 flex items-center gap-3 px-4 py-3">
          <UserButton />
          <div className="flex-1 min-w-0">
            <p className="text-sm truncate">{user?.fullName ?? "Convidado"}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.primaryEmailAddress?.emailAddress ?? ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}