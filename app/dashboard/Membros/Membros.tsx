"use client";

import { useState } from "react";
import { Plus, Search, MoreVertical, Mail, Shield, Calendar, X, Trash2, Edit } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Member {
  id: string;
  name: string;
  email: string;
  role: "admin" | "garcom" | "cozinha" | "caixa";
  status: "ativo" | "inativo";
  joinedAt: string;
  avatar?: string;
}

const mockMembers: Member[] = [
  {
    id: "1",
    name: "Ana Silva",
    email: "ana.silva@pixeat.com",
    role: "admin",
    status: "ativo",
    joinedAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Carlos Santos",
    email: "carlos.santos@pixeat.com",
    role: "garcom",
    status: "ativo",
    joinedAt: "2024-02-20",
  },
  {
    id: "3",
    name: "Maria Oliveira",
    email: "maria.oliveira@pixeat.com",
    role: "cozinha",
    status: "ativo",
    joinedAt: "2024-01-10",
  },
  {
    id: "4",
    name: "Pedro Lima",
    email: "pedro.lima@pixeat.com",
    role: "garcom",
    status: "ativo",
    joinedAt: "2024-03-05",
  },
  {
    id: "5",
    name: "Julia Costa",
    email: "julia.costa@pixeat.com",
    role: "caixa",
    status: "ativo",
    joinedAt: "2024-02-01",
  },
  {
    id: "6",
    name: "Roberto Ferreira",
    email: "roberto.ferreira@pixeat.com",
    role: "garcom",
    status: "inativo",
    joinedAt: "2023-12-10",
  },
];

const roleLabels = {
  admin: "Administrador",
  garcom: "Garçom",
  cozinha: "Cozinha",
  caixa: "Caixa",
};

const roleColors = {
  admin: "bg-purple-100 text-purple-700 border-purple-200",
  garcom: "bg-blue-100 text-blue-700 border-blue-200",
  cozinha: "bg-orange-100 text-orange-700 border-orange-200",
  caixa: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

export function Membros() {
  const [members, setMembers] = useState<Member[]>(mockMembers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [filterRole, setFilterRole] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "garcom" as Member["role"],
  });

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || member.role === filterRole;
    const matchesStatus = filterStatus === "all" || member.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const activeMembers = members.filter((m) => m.status === "ativo").length;

  const handleAddMember = () => {
    const newMember: Member = {
      id: String(members.length + 1),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      status: "ativo",
      joinedAt: new Date().toISOString().split("T")[0],
    };
    setMembers([...members, newMember]);
    setIsAddModalOpen(false);
    setFormData({ name: "", email: "", role: "garcom" });
  };

  const handleToggleStatus = (memberId: string) => {
    setMembers(
      members.map((m) =>
        m.id === memberId
          ? { ...m, status: m.status === "ativo" ? "inativo" : "ativo" }
          : m
      )
    );
  };

  const handleDeleteMember = (memberId: string) => {
    if (confirm("Tem certeza que deseja remover este membro?")) {
      setMembers(members.filter((m) => m.id !== memberId));
      setSelectedMember(null);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
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
          <h1 className="text-3xl mb-2">Gerenciar Membros</h1>
          <p className="text-muted-foreground">
            Adicione e gerencie os funcionários do seu restaurante
          </p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="gap-2 shadow-lg">
          <Plus className="w-5 h-5" />
          Adicionar Membro
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total de Membros</p>
              <p className="text-2xl">{members.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Membros Ativos</p>
              <p className="text-2xl text-emerald-600">{activeMembers}</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Administradores</p>
              <p className="text-2xl">{members.filter((m) => m.role === "admin").length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Garçons</p>
              <p className="text-2xl">{members.filter((m) => m.role === "garcom").length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nome ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-input-background border-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-4 py-3 rounded-lg bg-input-background border-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="all">Todos os Cargos</option>
            <option value="admin">Administrador</option>
            <option value="garcom">Garçom</option>
            <option value="cozinha">Cozinha</option>
            <option value="caixa">Caixa</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 rounded-lg bg-input-background border-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="all">Todos os Status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>
      </Card>

      {/* Members List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMembers.map((member) => (
          <Card
            key={member.id}
            className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-[#74C3BF] flex items-center justify-center text-white text-lg shadow-lg flex-shrink-0">
                {getInitials(member.name)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg mb-1">{member.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(member);
                    }}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs border ${roleColors[member.role]
                      }`}
                  >
                    {roleLabels[member.role]}
                  </span>
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs border ${member.status === "ativo"
                      ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                      : "bg-gray-100 text-gray-600 border-gray-200"
                      }`}
                  >
                    {member.status === "ativo" ? "Ativo" : "Inativo"}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Desde {formatDate(member.joinedAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <Card className="p-12">
          <div className="text-center text-muted-foreground">
            <Shield className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <p className="text-lg mb-2">Nenhum membro encontrado</p>
            <p className="text-sm">Tente ajustar os filtros de busca</p>
          </div>
        </Card>
      )}

      {/* Add Member Modal */}
      {isAddModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-md p-8 animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl">Adicionar Novo Membro</h2>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Nome Completo</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Digite o nome completo"
                  className="w-full px-4 py-3 rounded-lg bg-input-background border-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@exemplo.com"
                  className="w-full px-4 py-3 rounded-lg bg-input-background border-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Cargo</label>
                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value as Member["role"] })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-input-background border-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="garcom">Garçom</option>
                  <option value="cozinha">Cozinha</option>
                  <option value="caixa">Caixa</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setIsAddModalOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                className="flex-1"
                onClick={handleAddMember}
                disabled={!formData.name || !formData.email}
              >
                Adicionar Membro
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Member Detail Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-md p-8 animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl">Detalhes do Membro</h2>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-[#74C3BF] flex items-center justify-center text-white text-3xl shadow-xl mx-auto mb-4">
                {getInitials(selectedMember.name)}
              </div>
              <h3 className="text-xl mb-1">{selectedMember.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{selectedMember.email}</p>
              <div className="flex items-center justify-center gap-3">
                <span
                  className={`px-4 py-2 rounded-full text-sm border ${roleColors[selectedMember.role]
                    }`}
                >
                  {roleLabels[selectedMember.role]}
                </span>
                <span
                  className={`px-4 py-2 rounded-full text-sm border ${selectedMember.status === "ativo"
                    ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                    : "bg-gray-100 text-gray-600 border-gray-200"
                    }`}
                >
                  {selectedMember.status === "ativo" ? "Ativo" : "Inativo"}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-6 p-4 bg-secondary/30 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Data de Admissão</span>
                <span className="text-sm">{formatDate(selectedMember.joinedAt)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <button
                  onClick={() => handleToggleStatus(selectedMember.id)}
                  className={`px-3 py-1 rounded-full text-xs ${selectedMember.status === "ativo"
                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    } transition-colors`}
                >
                  {selectedMember.status === "ativo" ? "Desativar" : "Ativar"}
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 gap-2 text-destructive hover:bg-destructive/10"
                onClick={() => handleDeleteMember(selectedMember.id)}
              >
                <Trash2 className="w-4 h-4" />
                Remover
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Edit className="w-4 h-4" />
                Editar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
